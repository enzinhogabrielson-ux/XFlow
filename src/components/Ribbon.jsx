import { useEffect, useRef } from "react";

// React port of project/assets/xf-ribbon.js — same shader and animation
// logic, wired to React's lifecycle instead of a custom element.
const VERT = "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}";

const FRAG = [
  "precision highp float;",
  "uniform float u_time;",
  "uniform vec2 u_res;",
  "float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453123);}",
  "float noise(vec2 p){vec2 i=floor(p);vec2 f=fract(p);vec2 u=f*f*(3.0-2.0*f);",
  " return mix(mix(hash(i),hash(i+vec2(1.,0.)),u.x),mix(hash(i+vec2(0.,1.)),hash(i+vec2(1.,1.)),u.x),u.y);}",
  "float fbm(vec2 p){float v=0.0;float a=0.5;",
  " for(int i=0;i<4;i++){v+=a*noise(p);p*=2.03;a*=0.5;}return v;}",
  "void main(){",
  " vec2 uv=gl_FragCoord.xy/u_res;",
  " uv.y=1.0-uv.y;",
  " float aspect=u_res.x/u_res.y;",
  " vec2 p=vec2(uv.x*aspect,uv.y);",
  " float t=u_time*0.05;",
  " vec2 q=vec2(fbm(p*1.3+vec2(0.0,t)),fbm(p*1.3+vec2(5.2,-t*0.7)));",
  " vec2 r=vec2(fbm(p*1.0+2.4*q+vec2(1.7+t*0.35,9.2)),fbm(p*1.0+2.4*q+vec2(8.3,2.8-t*0.4)));",
  " float f=fbm(p*1.15+2.2*r);",
  " float cx=0.74+(uv.y-0.5)*0.34+(q.x-0.5)*0.50;",
  " float hw=0.38+0.18*r.y;",
  " float band=1.0-smoothstep(0.0,hw,abs(uv.x-cx));",
  " band=pow(band,0.65);",
  " vec3 bg=vec3(0.000,0.153,0.200);",
  " vec3 dim=vec3(0.000,0.290,0.380);",
  " vec3 cyan=vec3(0.000,0.612,0.733);",
  " vec3 deep=vec3(0.000,0.220,0.300);",
  " vec3 gold=vec3(1.000,0.773,0.000);",
  " vec3 amber=vec3(0.980,0.620,0.050);",
  " vec3 col=mix(dim,cyan,smoothstep(0.22,0.62,f));",
  " col=mix(col,deep,smoothstep(0.55,0.92,r.x)*0.55);",
  " float gmask=smoothstep(0.52,0.82,fbm(p*1.5+3.0*q+vec2(4.0,t*0.8)));",
  " col=mix(col,gold,gmask);",
  " col=mix(col,amber,smoothstep(0.68,0.95,q.y)*gmask*0.7);",
  " col+=vec3(0.06)*smoothstep(0.62,0.95,q.y);",
  " col=mix(vec3(dot(col,vec3(0.3333))),col,1.28);",
  " vec3 final=mix(bg,col,band);",
  " final=mix(final,bg,(1.0-smoothstep(0.02,0.40,uv.x))*0.86);",
  " gl_FragColor=vec4(final,1.0);",
  "}",
].join("\n");

function compile(gl, type, src) {
  const sh = gl.createShader(type);
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    console.error("xf-ribbon shader error: " + gl.getShaderInfoLog(sh));
  }
  return sh;
}

export default function Ribbon({ style }) {
  const hostRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas) return undefined;

    const gl = canvas.getContext("webgl", {
      antialias: false,
      alpha: false,
      powerPreference: "low-power",
    });
    if (!gl) {
      host.style.background =
        "linear-gradient(112deg,#002733 30%,#00465C 62%,#009CBB 82%,#FFC500 100%)";
      return undefined;
    }

    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl, gl.VERTEX_SHADER, VERT));
    gl.attachShader(prog, compile(gl, gl.FRAGMENT_SHADER, FRAG));
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error("xf-ribbon link error: " + gl.getProgramInfoLog(prog));
    }
    gl.useProgram(prog);
    gl.clearColor(0.0, 0.153, 0.2, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );
    const loc = gl.getAttribLocation(prog, "a");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uT = gl.getUniformLocation(prog, "u_time");
    const uR = gl.getUniformLocation(prog, "u_res");
    const RES_SCALE = 0.55;

    function resize() {
      const w = host.clientWidth || 2;
      const h = host.clientHeight || 2;
      const s = Math.min(window.devicePixelRatio || 1, 1.5) * RES_SCALE;
      canvas.width = Math.max(2, Math.round(w * s));
      canvas.height = Math.max(2, Math.round(h * s));
      gl.viewport(0, 0, canvas.width, canvas.height);
    }
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let visible = true;
    const io = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
    });
    io.observe(host);

    const reduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let raf;

    function draw() {
      gl.uniform1f(uT, (performance.now() - t0) / 1000 + 60.0);
      gl.uniform2f(uR, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function frame() {
      raf = requestAnimationFrame(frame);
      if (!visible) return;
      draw();
    }
    if (reduced) {
      draw();
    } else {
      frame();
    }

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return (
    <div ref={hostRef} style={{ display: "block", ...style }}>
      <canvas ref={canvasRef} style={{ width: "100%", height: "100%", display: "block" }} />
    </div>
  );
}
