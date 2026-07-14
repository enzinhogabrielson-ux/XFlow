import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import xflowWhite from "../assets/xflow-white.png";

const INCLUDES = [
  "CRM completo",
  "Acessos múltiplos",
  "Comercial integrado",
  "Financeiro integrado",
  "Gestão de tarefas e projetos",
  "Agenda e calendário",
  "Comunicação externa",
  "Automações",
  "Administração de usuários",
  "Sistema em português, inglês e espanhol",
  "Acesso para empresas em diversos países",
  "Suporte de implantação inicial",
];

export default function Pricing() {
  const revealRef = useReveal();

  return (
    <section id="preco" style={sx("background:#FFFFFF")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <div style={sx("max-width:640px;margin:0 auto 52px;text-align:center")}>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
            )}
          >
            Tudo isso por apenas <span style={sx("white-space:nowrap")}>R$ 39,90</span> por mês
          </h2>
          <p
            style={sx(
              "margin:18px 0 0;font-size:16.5px;line-height:1.65;color:#46626C;text-wrap:pretty"
            )}
          >
            Um CRM completo, com acessos múltiplos e preparado para empresas que querem crescer com
            controle.
          </p>
        </div>
        <div
          className="xf-pricing-grid"
          style={sx(
            "max-width:960px;margin:0 auto;display:grid;grid-template-columns:340px 1fr;border-radius:20px;overflow:hidden;border:1px solid rgba(0,49,65,0.1);box-shadow:0 24px 64px rgba(0,20,27,0.12)"
          )}
        >
          <div
            style={sx(
              "position:relative;background:#003141;padding:40px 34px;display:flex;flex-direction:column;justify-content:center;overflow:hidden"
            )}
          >
            <div
              style={sx(
                "position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.07) 1px,transparent 1px);background-size:20px 20px;pointer-events:none"
              )}
            />
            <img
              src={xflowWhite}
              alt="XFlow XLENT"
              style={sx("height:36px;width:auto;align-self:flex-start;position:relative")}
            />
            <div
              style={sx(
                "position:relative;margin-top:28px;font-family:'Geist Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#7FD4E4"
              )}
            >
              XFLOW XLENT
            </div>
            <div
              style={sx(
                "position:relative;display:flex;align-items:baseline;gap:8px;margin-top:8px"
              )}
            >
              <span
                style={sx(
                  "font-size:52px;font-weight:700;letter-spacing:-0.03em;color:#FFFFFF;white-space:nowrap"
                )}
              >
                R$ 39,90
              </span>
              <span style={sx("font-size:15px;color:#7E9BA5")}>/mês</span>
            </div>
            <a
              href="#ativar"
              className="hv-yellow-btn"
              style={sx(
                "position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;background:#FFC500;color:#003141;font-size:15px;font-weight:700;padding:14px 24px;border-radius:999px;text-decoration:none;margin-top:30px;box-shadow:0 8px 24px rgba(255,197,0,0.3);transition:transform 0.2s,background 0.2s"
              )}
            >
              <span style={sx("white-space:nowrap")}>Assine agora →</span>
            </a>
            <a
              href="#agendar"
              className="hv-outline-d"
              style={sx(
                "position:relative;display:inline-flex;align-items:center;justify-content:center;gap:8px;background:transparent;border:1px solid rgba(255,255,255,0.3);color:#FFFFFF;font-size:15px;font-weight:600;padding:13px 24px;border-radius:999px;text-decoration:none;margin-top:12px;transition:background 0.2s,border-color 0.2s"
              )}
            >
              <span style={sx("white-space:nowrap")}>Agendar apresentação</span>
            </a>
            <div
              style={sx("position:relative;margin-top:14px;font-size:12.5px;color:#7E9BA5;text-align:center")}
            >
              Conheça a plataforma antes de contratar.
            </div>
          </div>
          <div style={sx("background:#FFFFFF;padding:40px 38px")}>
            <div
              style={sx(
                "font-family:'Geist Mono',monospace;font-size:11px;letter-spacing:0.08em;color:#6B8089;margin-bottom:20px"
              )}
            >
              INCLUI
            </div>
            <div className="xf-includes-grid" style={sx("display:grid;grid-template-columns:1fr 1fr;gap:13px 28px")}>
              {INCLUDES.map((label) => (
                <span
                  key={label}
                  style={sx("display:flex;align-items:center;gap:10px;font-size:14.5px;color:#06222D")}
                >
                  <span style={sx("color:#009CBB;font-weight:700")}>✓</span> {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
