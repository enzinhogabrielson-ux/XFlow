import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function Differentials() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const items = t.differentials.items.map((item, i) => ({
    ...item,
    n: String(i + 1).padStart(2, "0"),
  }));

  return (
    <section style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2"
          style={sx(
            "margin:0 auto;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center;max-width:560px;text-wrap:balance"
          )}
        >
          {t.differentials.title}
        </h2>
        <div className="xf-grid-3" style={sx("display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:56px")}>
          {items.map((item) => (
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
