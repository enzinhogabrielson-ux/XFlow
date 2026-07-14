import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";

const ITEMS = [
  {
    n: "01",
    title: "Preço acessível",
    text: "Uma plataforma completa por um valor que cabe na rotina de pequenas e médias empresas.",
  },
  {
    n: "02",
    title: "Acessos múltiplos",
    text: "Ideal para equipes comerciais, administrativas, financeiras e operacionais.",
  },
  {
    n: "03",
    title: "Sistema multilíngue",
    text: "Português, inglês e espanhol para atender empresas, equipes e clientes em diferentes países.",
  },
  {
    n: "04",
    title: "Ecossistema XLENT",
    text: "O XFlow faz parte de uma visão maior de tecnologia, gestão, automação e crescimento.",
  },
  {
    n: "05",
    title: "Controle real da operação",
    text: "Você acompanha comercial, financeiro, tarefas e comunicação em uma única plataforma.",
  },
  {
    n: "06",
    title: "Simples de apresentar e vender",
    text: "Oferta clara, preço baixo e valor percebido alto.",
  },
];

export default function Differentials() {
  const revealRef = useReveal();

  return (
    <section style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2"
          style={sx(
            "margin:0 auto;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center;max-width:560px;text-wrap:balance"
          )}
        >
          Por que o XFlow é diferente?
        </h2>
        <div className="xf-grid-3" style={sx("display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:56px")}>
          {ITEMS.map((item) => (
            <div
              key={item.n}
              style={sx("background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:16px;padding:28px 26px")}
            >
              <div
                style={sx(
                  "font-family:'Geist Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#009CBB;margin-bottom:12px"
                )}
              >
                {item.n}
              </div>
              <h3 style={sx("margin:0;font-size:17px;font-weight:650;color:#06222D")}>{item.title}</h3>
              <p style={sx("margin:10px 0 0;font-size:14px;line-height:1.6;color:#46626C")}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
