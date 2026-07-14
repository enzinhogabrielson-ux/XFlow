import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

const ICONS = [
  null,
  null,
  null,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: "middle" }}>
    <rect x="2" y="5" width="10" height="12" rx="2" stroke="#7FD4E4" strokeWidth="1.5" />
    <rect x="8" y="2" width="10" height="12" rx="2" stroke="#7FD4E4" strokeWidth="1.5" fill="#003141" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: "middle" }}>
    <circle cx="7" cy="7" r="3" stroke="#7FD4E4" strokeWidth="1.5" />
    <circle cx="14" cy="9" r="2.4" stroke="#7FD4E4" strokeWidth="1.5" />
    <path
      d="M2 17c0-2.8 2.2-4.5 5-4.5s5 1.7 5 4.5M13 13.2c2.3.2 4 1.7 4 3.8"
      stroke="#7FD4E4"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ verticalAlign: "middle" }}>
    <circle cx="10" cy="10" r="7.5" stroke="#7FD4E4" strokeWidth="1.5" />
    <path
      d="M2.5 10h15M10 2.5c2.2 2 3.4 4.6 3.4 7.5S12.2 15.5 10 17.5M10 2.5c-2.2 2-3.4 4.6-3.4 7.5s1.2 5.5 3.4 7.5"
      stroke="#7FD4E4"
      strokeWidth="1.5"
    />
  </svg>,
];

export default function International() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const cards = t.international.cards.map((card, i) => ({ ...card, icon: ICONS[i] }));

  return (
    <section style={sx("position:relative;background:#003141;overflow:hidden")}>
      <div
        style={sx(
          "position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px);background-size:24px 24px;pointer-events:none"
        )}
      />
      <div
        ref={revealRef}
        className="xf-section-pad xf-2col-grid"
        style={sx(
          "position:relative;max-width:1200px;margin:0 auto;padding:96px 40px;display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center"
        )}
      >
        <div>
          <div
            style={sx(
              "display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.06);border-radius:999px;padding:6px 14px;font-family:'Geist Mono',monospace;font-size:11.5px;font-weight:500;letter-spacing:0.06em;color:#7FD4E4;margin-bottom:22px"
            )}
          >
            <span
              style={sx(
                "width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#FFC500,#009CBB)"
              )}
            />
            {t.international.badge}
          </div>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#FFFFFF;text-wrap:balance"
            )}
          >
            {t.international.title}
          </h2>
          <p style={sx("margin:20px 0 0;font-size:16.5px;line-height:1.65;color:#B9CFD6;text-wrap:pretty")}>
            {t.international.paragraph1}
          </p>
          <p style={sx("margin:14px 0 0;font-size:16.5px;line-height:1.65;color:#B9CFD6;text-wrap:pretty")}>
            {t.international.paragraph2}
          </p>
        </div>
        <div className="xf-grid-3" style={sx("display:grid;grid-template-columns:1fr 1fr 1fr;gap:14px")}>
          {cards.map((card) => (
            <div
              key={card.label}
              style={sx(
                "background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.12);border-radius:14px;padding:22px 18px;text-align:center"
              )}
            >
              {card.value ? (
                <div style={sx("font-family:'Geist Mono',monospace;font-size:20px;font-weight:700;color:#FFC500")}>
                  {card.value}
                </div>
              ) : (
                <div style={sx("font-size:20px;color:#7FD4E4")}>{card.icon}</div>
              )}
              <div style={sx("margin-top:8px;font-size:13.5px;font-weight:500;color:#FFFFFF")}>
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
