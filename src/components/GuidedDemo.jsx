import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";

const STEPS = [
  {
    n: "01",
    title: "Entendimento da sua operação",
    text: "Nossa equipe entende como sua empresa trabalha hoje.",
  },
  {
    n: "02",
    title: "Apresentação da plataforma",
    text: "Mostramos os módulos principais do XFlow e como eles se conectam.",
  },
  {
    n: "03",
    title: "Configuração ideal",
    text: "Indicamos como organizar usuários, setores, tarefas, contatos e financeiro.",
  },
  {
    n: "04",
    title: "Ativação da conta",
    text: "Você recebe o caminho para começar a usar a plataforma.",
  },
];

export default function GuidedDemo() {
  const revealRef = useReveal();

  return (
    <section style={sx("background:#F6F9FA")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2"
          style={sx(
            "margin:0 auto;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center;max-width:680px;text-wrap:balance"
          )}
        >
          Na apresentação, você verá na prática como o XFlow funciona
        </h2>
        <div style={sx("position:relative;margin-top:64px")}>
          <svg
            viewBox="0 0 1120 8"
            className="xf-decor"
            style={sx("position:absolute;left:0;right:0;top:19px;width:100%;height:8px;pointer-events:none")}
            preserveAspectRatio="none"
          >
            <path d="M60 4 L1060 4" fill="none" stroke="rgba(0,49,65,0.14)" style={{ strokeWidth: 1.5 }} />
          </svg>
          <div className="xf-decor" style={sx("position:absolute;left:0;top:19px;width:100%;height:8px;pointer-events:none")}>
            <div
              style={sx(
                "position:absolute;left:0;top:0;width:9px;height:9px;margin-top:-1px;border-radius:50%;background:#FFC500;box-shadow:0 0 12px rgba(255,197,0,0.9);offset-path:path('M60 4 L1060 4');offset-rotate:0deg;animation:xf-travel 5s linear infinite"
              )}
            />
            <div
              style={sx(
                "position:absolute;left:0;top:0;width:8px;height:8px;margin-top:-0.5px;border-radius:50%;background:#009CBB;box-shadow:0 0 10px rgba(0,156,187,0.9);offset-path:path('M60 4 L1060 4');offset-rotate:0deg;animation:xf-travel 5s linear infinite;animation-delay:2.5s"
              )}
            />
          </div>
          <div className="xf-grid-4" style={sx("position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:20px")}>
            {STEPS.map((step) => (
              <div key={step.n} style={sx("display:flex;flex-direction:column;align-items:center;text-align:center")}>
                <div
                  style={sx(
                    "width:46px;height:46px;border-radius:50%;background:#003141;color:#FFC500;display:flex;align-items:center;justify-content:center;font-family:'Geist Mono',monospace;font-size:14px;font-weight:700;box-shadow:0 0 0 8px #F6F9FA"
                  )}
                >
                  {step.n}
                </div>
                <h3 style={sx("margin:18px 0 0;font-size:16px;font-weight:650;color:#06222D")}>{step.title}</h3>
                <p style={sx("margin:8px 0 0;font-size:13.5px;line-height:1.55;color:#46626C;max-width:230px")}>
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
