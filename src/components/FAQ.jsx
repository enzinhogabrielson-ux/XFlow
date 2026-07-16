import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function FAQ() {
  const revealRef = useReveal();
  const { t } = useLanguage();

  return (
    <section style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:760px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2-sm"
          style={sx(
            "margin:0;font-size:36px;line-height:1.15;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center"
          )}
        >
          {t.faq.title}
        </h2>
        <div style={sx("display:flex;flex-direction:column;gap:10px;margin-top:44px")}>
          {t.faq.questions.map(({ q, a }) => (
            <details
              key={q}
              style={sx("background:#FFFFFF;border:1px solid rgba(0,49,65,0.1);border-radius:14px;padding:0 24px")}
            >
              <summary
                style={sx(
                  "cursor:pointer;list-style:none;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:19px 0;font-size:15.5px;font-weight:600;color:#06222D"
                )}
              >
                {q} <span style={sx("color:#009CBB;font-size:18px;flex:none;transition:transform 0.25s ease,color 0.25s ease;display:inline-block")}>+</span>
              </summary>
              <p style={sx("margin:0;padding:0 0 20px;font-size:14.5px;line-height:1.65;color:#46626C")}>{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
