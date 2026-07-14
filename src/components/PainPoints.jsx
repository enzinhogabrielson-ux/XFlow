import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="6" cy="6" r="3.2" stroke="#003141" strokeWidth="1.4" />
    <path
      d="M11 14c0-2.5-2.2-4-5-4s-5 1.5-5 4"
      stroke="#003141"
      strokeWidth="1.4"
      strokeLinecap="round"
      transform="translate(2.5 0)"
    />
  </svg>,
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <rect x="1.5" y="1.5" width="14" height="14" rx="3" stroke="#003141" strokeWidth="1.4" />
    <path d="M5 8.5h7M5 11.5h4" stroke="#003141" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="M2 14.5h13M4 14.5V9M8.5 14.5V5M13 14.5v-3.5"
      stroke="#003141"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>,
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <path
      d="M15 8.5c0 3.3-3 6-6.5 6-1 0-2-.2-2.8-.6L2 15l1.2-3.2c-.5-.9-.7-1.9-.7-3C2.5 5.2 5.5 2.5 9 2.5s6 2.7 6 6z"
      stroke="#003141"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
  </svg>,
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
    <circle cx="8.5" cy="8.5" r="6.5" stroke="#003141" strokeWidth="1.4" />
    <path d="M8.5 5v3.5l2.5 2" stroke="#003141" strokeWidth="1.4" strokeLinecap="round" />
  </svg>,
];

export default function PainPoints() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const items = t.painPoints.items.map((item, i) => ({ ...item, icon: ICONS[i] }));

  return (
    <section style={sx("background:#FFFFFF")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <div style={sx("max-width:680px;margin:0 auto;text-align:center")}>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
            )}
          >
            {t.painPoints.title}
          </h2>
          <p
            style={sx(
              "margin:20px 0 0;font-size:16.5px;line-height:1.65;color:#46626C;text-wrap:pretty"
            )}
          >
            {t.painPoints.subtitle}
          </p>
        </div>
        <div className="xf-grid-5" style={sx("display:grid;grid-template-columns:repeat(5,1fr);gap:16px;margin-top:56px")}>
          {items.map((item) => (
            <div
              key={item.title}
              style={sx(
                "background:#F8FAFB;border:1px solid rgba(0,49,65,0.08);border-radius:16px;padding:26px 22px"
              )}
            >
              <div
                style={sx(
                  "width:38px;height:38px;border-radius:11px;border:1.5px solid rgba(0,49,65,0.18);display:flex;align-items:center;justify-content:center;margin-bottom:16px"
                )}
              >
                {item.icon}
              </div>
              <h3 style={sx("margin:0;font-size:15.5px;font-weight:650;color:#06222D")}>
                {item.title}
              </h3>
              <p style={sx("margin:9px 0 0;font-size:13px;line-height:1.55;color:#46626C")}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
