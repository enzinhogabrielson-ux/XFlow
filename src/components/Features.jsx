import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";

const CARDS = [
  {
    title: "Comercial",
    iconBg: "rgba(0,156,187,0.1)",
    dotColor: "#009CBB",
    text: "Controle leads, contatos, tags, pipeline, agenda, serviços e performance comercial.",
    items: ["Contatos", "Tags", "Serviços", "Pipeline", "Agenda", "VoIP", "Performance"],
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M1.5 13.5l4-4 3 2.5 5-6"
          stroke="#009CBB"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="13.5" cy="6" r="1.5" fill="#009CBB" />
      </svg>
    ),
  },
  {
    title: "Financeiro",
    iconBg: "rgba(255,197,0,0.14)",
    dotColor: "#FFC500",
    text: "Tenha mais controle sobre entradas, saídas, fluxo e indicadores financeiros.",
    items: [
      "Funcionários",
      "Fornecedores",
      "Contas a pagar",
      "Contas a receber",
      "Fluxo de caixa",
      "DRE",
      "XlentFinanceIA",
    ],
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6" stroke="#B8860B" strokeWidth="1.5" />
        <path
          d="M7.5 4.5v6M9.3 5.8c-.4-.5-1-.8-1.8-.8-1 0-1.8.6-1.8 1.4 0 2 3.6.9 3.6 2.8 0 .8-.8 1.4-1.8 1.4-.8 0-1.4-.3-1.8-.8"
          stroke="#B8860B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Gestão Organizacional",
    iconBg: "rgba(0,156,187,0.1)",
    dotColor: "#009CBB",
    text: "Organize tarefas, projetos, ordens de serviço e calendário interno.",
    items: ["Gestão de tarefas e projetos", "Tarefas", "Projetos", "Ordens de serviço", "Calendário"],
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect x="1.5" y="1.5" width="5" height="5" rx="1.5" stroke="#009CBB" strokeWidth="1.4" />
        <rect x="8.5" y="1.5" width="5" height="5" rx="1.5" stroke="#009CBB" strokeWidth="1.4" />
        <rect x="1.5" y="8.5" width="5" height="5" rx="1.5" stroke="#009CBB" strokeWidth="1.4" />
        <rect x="8.5" y="8.5" width="5" height="5" rx="1.5" stroke="#009CBB" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: "Comunicação Externa",
    iconBg: "rgba(0,156,187,0.1)",
    dotColor: "#009CBB",
    text: "Centralize conversas, conexões, templates e automações.",
    items: ["Conversas", "Conexões", "Templates", "Automações"],
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <path
          d="M13.5 7c0 2.8-2.7 5-6 5-.9 0-1.8-.2-2.5-.5L1.5 12.5l1-2.7c-.6-.8-1-1.8-1-2.8 0-2.8 2.7-5 6-5s6 2.2 6 5z"
          stroke="#009CBB"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path d="M5 7h5" stroke="#009CBB" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Administração",
    iconBg: "rgba(0,156,187,0.1)",
    dotColor: "#009CBB",
    text: "Gerencie usuários, setores, cargos, documentos, permissões e controle de jornada.",
    items: ["Usuários", "Setores", "Cargos", "Customização", "Controle de jornada", "Documentos", "Perfil"],
    icon: (
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <circle cx="7.5" cy="7.5" r="6" stroke="#009CBB" strokeWidth="1.4" />
        <circle cx="7.5" cy="7.5" r="2.2" stroke="#009CBB" strokeWidth="1.4" />
        <path
          d="M7.5 1.5v2M7.5 11.5v2M1.5 7.5h2M11.5 7.5h2"
          stroke="#009CBB"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  const revealRef = useReveal();

  return (
    <section
      id="funcionalidades"
      style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}
    >
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <div style={sx("max-width:640px;margin:0 auto;text-align:center")}>
          <div
            style={sx(
              "display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,49,65,0.12);background:#FFFFFF;border-radius:999px;padding:6px 14px;font-family:'Geist Mono',monospace;font-size:11.5px;font-weight:500;letter-spacing:0.06em;color:#007D96;margin-bottom:22px"
            )}
          >
            <span
              style={sx(
                "width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#FFC500,#009CBB)"
              )}
            />
            FUNCIONALIDADES
          </div>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
            )}
          >
            O XFlow XLENT centraliza sua operação
          </h2>
          <p style={sx("margin:18px 0 0;font-size:16.5px;line-height:1.65;color:#46626C")}>
            Uma plataforma completa para transformar organização em crescimento.
          </p>
        </div>
        <div className="xf-grid-5" style={sx("display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:56px")}>
          {CARDS.map((card) => (
            <div
              key={card.title}
              style={sx(
                "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:16px;padding:24px 20px;box-shadow:0 1px 3px rgba(0,20,27,0.04)"
              )}
            >
              <div style={sx("display:flex;align-items:center;gap:10px;margin-bottom:12px")}>
                <span
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: card.iconBg,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {card.icon}
                </span>
                <h3 style={sx("margin:0;font-size:16px;font-weight:650;color:#06222D")}>
                  {card.title}
                </h3>
              </div>
              <p style={sx("margin:0 0 14px;font-size:12.5px;line-height:1.55;color:#46626C")}>
                {card.text}
              </p>
              <div
                style={sx(
                  "display:flex;flex-direction:column;gap:7px;border-top:1px solid rgba(0,49,65,0.07);padding-top:14px"
                )}
              >
                {card.items.map((item) => (
                  <span
                    key={item}
                    style={sx("display:flex;align-items:center;gap:8px;font-size:12.5px;color:#334E58")}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: card.dotColor,
                      }}
                    />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
