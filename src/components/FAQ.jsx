import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";

const QUESTIONS = [
  {
    q: "O que é o XFlow XLENT?",
    a: "É uma plataforma de CRM e gestão empresarial que centraliza comercial, financeiro, tarefas, projetos, agenda, comunicação e administração.",
  },
  {
    q: "O valor é realmente R$ 39,90?",
    a: "Sim. A oferta principal do XFlow é de apenas R$ 39,90 por mês.",
  },
  {
    q: "O plano permite múltiplos acessos?",
    a: "Sim. O XFlow foi pensado para equipes e permite acessos múltiplos conforme a configuração da empresa.",
  },
  {
    q: "O sistema está disponível em quais idiomas?",
    a: "Português, inglês e espanhol.",
  },
  {
    q: "Posso usar em outro país?",
    a: "Sim. A plataforma pode atender empresas em diversos países, com suporte para diferentes idiomas.",
  },
  {
    q: "Preciso instalar alguma coisa?",
    a: "Não. O XFlow é uma plataforma online, acessada pelo navegador.",
  },
  {
    q: "Posso agendar uma demonstração antes de contratar?",
    a: "Sim. Basta preencher o formulário de agendamento e nossa equipe fará a apresentação.",
  },
  {
    q: "O XFlow serve para pequenas empresas?",
    a: "Sim. A proposta é justamente entregar uma plataforma completa, simples e acessível para empresas que precisam de organização.",
  },
];

export default function FAQ() {
  const revealRef = useReveal();

  return (
    <section style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:760px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2-sm"
          style={sx(
            "margin:0;font-size:36px;line-height:1.15;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center"
          )}
        >
          Perguntas frequentes
        </h2>
        <div style={sx("display:flex;flex-direction:column;gap:10px;margin-top:44px")}>
          {QUESTIONS.map(({ q, a }) => (
            <details
              key={q}
              style={sx("background:#FFFFFF;border:1px solid rgba(0,49,65,0.1);border-radius:14px;padding:0 24px")}
            >
              <summary
                style={sx(
                  "cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:19px 0;font-size:15.5px;font-weight:600;color:#06222D"
                )}
              >
                {q} <span style={sx("color:#009CBB;font-size:18px;flex:none")}>+</span>
              </summary>
              <p style={sx("margin:0;padding:0 0 20px;font-size:14.5px;line-height:1.65;color:#46626C")}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
