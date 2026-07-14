import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

export default function ForWhom() {
  const revealRef = useReveal();
  const { t } = useLanguage();

  return (
    <section id="para-quem" style={sx("background:#FFFFFF")}>
      <div
        ref={revealRef}
        className="xf-section-pad"
        style={sx("max-width:1200px;margin:0 auto;padding:104px 40px;text-align:center")}
      >
        <h2
          className="xf-h2"
          style={sx(
            "margin:0 auto;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;max-width:720px;text-wrap:balance"
          )}
        >
          {t.forWhom.title}
        </h2>
        <div
          style={sx(
            "display:flex;flex-wrap:wrap;justify-content:center;gap:11px;margin:44px auto 0;max-width:860px"
          )}
        >
          {t.forWhom.tags.map((tag) => (
            <span
              key={tag}
              style={sx(
                "border:1px solid rgba(0,49,65,0.14);background:#F8FAFB;border-radius:999px;padding:10px 20px;font-size:14.5px;font-weight:500;color:#06222D"
              )}
            >
              {tag}
            </span>
          ))}
          <span
            style={sx(
              "border:1px solid rgba(255,197,0,0.5);background:rgba(255,197,0,0.1);border-radius:999px;padding:10px 20px;font-size:14.5px;font-weight:600;color:#8A6D00"
            )}
          >
            {t.forWhom.highlightTag}
          </span>
        </div>
        <a
          href="#agendar"
          className="hv-cyan-btn xf-long-cta"
          style={sx(
            "display:inline-flex;align-items:center;gap:9px;background:#009CBB;color:#FFFFFF;font-size:15px;font-weight:600;padding:14px 26px;border-radius:999px;text-decoration:none;margin-top:44px;box-shadow:0 8px 24px rgba(0,156,187,0.3);transition:transform 0.2s,background 0.2s"
          )}
        >
          <span className="xf-long-cta-label" style={sx("white-space:nowrap")}>
            {t.forWhom.cta}
          </span>
        </a>
      </div>
    </section>
  );
}
