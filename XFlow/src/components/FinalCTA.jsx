import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import Ribbon from "./Ribbon";

export default function FinalCTA() {
  const revealRef = useReveal();

  return (
    <section style={sx("position:relative;background:#002733;overflow:hidden")}>
      <div style={sx("position:absolute;inset:0;overflow:hidden;pointer-events:none")}>
        <Ribbon style={sx("position:absolute;inset:0;width:100%;height:100%")} />
        <div
          style={sx(
            "position:absolute;inset:0;background:radial-gradient(ellipse at 50% 50%,rgba(0,39,51,0.82) 30%,rgba(0,39,51,0.45) 70%,rgba(0,39,51,0.3) 100%)"
          )}
        />
      </div>
      <div ref={revealRef} className="xf-section-pad-lg" style={sx("position:relative;max-width:760px;margin:0 auto;padding:120px 40px;text-align:center")}>
        <div
          style={sx(
            "display:inline-flex;align-items:center;gap:10px;border:1px solid rgba(255,197,0,0.4);background:rgba(0,39,51,0.6);backdrop-filter:blur(6px);border-radius:999px;padding:8px 18px;font-family:'Geist Mono',monospace;font-size:12px;font-weight:600;letter-spacing:0.06em;color:#FFC500;margin-bottom:28px"
          )}
        >
          XFLOW XLENT · R$ 39,90/MÊS
        </div>
        <h2
          className="xf-h1-sm"
          style={sx(
            "margin:0;font-size:48px;line-height:1.08;font-weight:650;letter-spacing:-0.035em;color:#FFFFFF;text-wrap:balance"
          )}
        >
          Sua empresa pode ter um CRM completo ainda hoje
        </h2>
        <p style={sx("margin:22px auto 0;font-size:17px;line-height:1.65;color:#C9DBE1;max-width:560px;text-wrap:pretty")}>
          Organize contatos, vendas, financeiro, tarefas, agenda, equipe e comunicação em uma única
          plataforma.
        </p>
        <div className="xf-final-ctas" style={sx("display:flex;align-items:center;justify-content:center;gap:14px;margin-top:40px")}>
          <a
            href="#ativar"
            className="hv-yellow-btn"
            style={sx(
              "white-space:nowrap;display:inline-flex;align-items:center;gap:9px;background:#FFC500;color:#003141;font-size:15.5px;font-weight:700;padding:15px 28px;border-radius:999px;text-decoration:none;box-shadow:0 8px 28px rgba(255,197,0,0.4);transition:transform 0.2s,background 0.2s"
            )}
          >
            Assine agora →
          </a>
          <a
            href="#agendar"
            className="hv-outline-c"
            style={sx(
              "white-space:nowrap;display:inline-flex;align-items:center;gap:8px;color:#FFFFFF;font-size:15.5px;font-weight:600;padding:15px 26px;border-radius:999px;text-decoration:none;border:1px solid rgba(255,255,255,0.35);background:rgba(0,39,51,0.4);backdrop-filter:blur(6px);transition:border-color 0.2s,background 0.2s"
            )}
          >
            Agendar apresentação
          </a>
        </div>
      </div>
    </section>
  );
}
