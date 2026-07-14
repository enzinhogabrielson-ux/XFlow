import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import xflowIcon from "../assets/xflow-icon.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Comparison() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const c = t.comparison;

  return (
    <section style={sx("background:#F6F9FA;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:104px 40px")}>
        <h2
          className="xf-h2"
          style={sx(
            "margin:0 auto;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-align:center;max-width:620px;text-wrap:balance"
          )}
        >
          {c.title}
        </h2>
        <div className="xf-2col-grid" style={sx("max-width:920px;margin:56px auto 0;display:grid;grid-template-columns:1fr 1fr;gap:18px")}>
          <div style={sx("background:#FFFFFF;border:1px solid rgba(0,49,65,0.1);border-radius:18px;padding:34px 32px")}>
            <div
              style={sx(
                "font-family:'Geist Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#6B8089;margin-bottom:22px"
              )}
            >
              {c.withoutLabel}
            </div>
            <div style={sx("display:flex;flex-direction:column;gap:15px")}>
              {c.without.map((label) => (
                <span key={label} style={sx("display:flex;align-items:center;gap:12px;font-size:15px;color:#46626C")}>
                  <span
                    style={sx(
                      "width:22px;height:22px;border-radius:50%;background:rgba(0,49,65,0.06);color:#6B8089;display:inline-flex;align-items:center;justify-content:center;font-size:11px;flex:none"
                    )}
                  >
                    ✕
                  </span>{" "}
                  {label}
                </span>
              ))}
            </div>
          </div>
          <div style={sx("background:#003141;border-radius:18px;padding:34px 32px;box-shadow:0 20px 56px rgba(0,20,27,0.25)")}>
            <div style={sx("display:flex;align-items:center;justify-content:space-between;margin-bottom:22px")}>
              <span style={sx("font-family:'Geist Mono',monospace;font-size:11.5px;letter-spacing:0.08em;color:#7FD4E4")}>
                {c.withLabel}
              </span>
              <img src={xflowIcon} alt="" style={sx("height:22px;width:auto")} />
            </div>
            <div style={sx("display:flex;flex-direction:column;gap:15px")}>
              {c.withItems.map((label) => (
                <span
                  key={label}
                  style={sx("display:flex;align-items:center;gap:12px;font-size:15px;font-weight:500;color:#FFFFFF")}
                >
                  <span
                    style={sx(
                      "width:22px;height:22px;border-radius:50%;background:rgba(0,156,187,0.25);color:#7FD4E4;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex:none"
                    )}
                  >
                    ✓
                  </span>{" "}
                  {label}
                </span>
              ))}
              <span style={sx("display:flex;align-items:center;gap:12px;font-size:15px;font-weight:600;color:#FFC500")}>
                <span
                  style={sx(
                    "width:22px;height:22px;border-radius:50%;background:rgba(255,197,0,0.2);color:#FFC500;display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;flex:none"
                  )}
                >
                  ✓
                </span>{" "}
                {c.highlight}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
