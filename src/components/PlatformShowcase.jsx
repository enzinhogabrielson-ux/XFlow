import { Fragment } from "react";
import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

const ROW_META = [
  { stageColor: "#46626C", tagBg: "rgba(0,156,187,0.1)", tagColor: "#007D96" },
  { stageColor: "#46626C", tagBg: "rgba(255,197,0,0.15)", tagColor: "#8A6D00" },
  { stageColor: "#46626C", tagBg: "rgba(0,156,187,0.1)", tagColor: "#007D96" },
  { stageColor: "#1E9E6A", stageWeight: 600, tagBg: "rgba(30,158,106,0.12)", tagColor: "#1E9E6A" },
];

export default function PlatformShowcase() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const ps = t.platformShowcase;
  const rows = ps.rows.map((row, i) => ({ ...row, ...ROW_META[i] }));

  return (
    <section
      id="plataforma"
      style={sx("background:#F6F9FA;border-bottom:1px solid rgba(0,49,65,0.06)")}
    >
      <div
        ref={revealRef}
        className="xf-section-pad xf-2col-grid"
        style={sx(
          "max-width:1200px;margin:0 auto;padding:104px 40px;display:grid;grid-template-columns:1fr 1.1fr;gap:64px;align-items:center"
        )}
      >
        <div>
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
            {ps.badge}
          </div>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
            )}
          >
            {ps.title}
          </h2>
          <p
            style={sx(
              "margin:20px 0 0;font-size:16.5px;line-height:1.65;color:#46626C;text-wrap:pretty"
            )}
          >
            {ps.paragraph1}
          </p>
          <p
            style={sx(
              "margin:14px 0 0;font-size:16.5px;line-height:1.65;color:#46626C;text-wrap:pretty"
            )}
          >
            {ps.paragraph2}
          </p>
          <div style={sx("display:flex;flex-direction:column;gap:11px;margin-top:28px")}>
            {ps.checkItems.map((label) => (
              <span
                key={label}
                style={sx(
                  "display:flex;align-items:center;gap:10px;font-size:15px;font-weight:500;color:#06222D"
                )}
              >
                <span
                  style={sx(
                    "width:22px;height:22px;border-radius:7px;background:rgba(0,156,187,0.12);color:#007D96;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700"
                  )}
                >
                  ✓
                </span>{" "}
                {label}
              </span>
            ))}
          </div>
        </div>

        <div style={sx("position:relative")}>
          <div
            className="xf-decor"
            style={sx(
              "position:absolute;inset:-40px;background-image:radial-gradient(rgba(0,49,65,0.09) 1px,transparent 1px);background-size:22px 22px;pointer-events:none"
            )}
          />
          <svg
            viewBox="0 0 640 480"
            className="xf-decor"
            style={sx(
              "position:absolute;inset:-40px;width:calc(100% + 80px);height:calc(100% + 80px);pointer-events:none"
            )}
          >
            <path d="M40 240 L110 240" fill="none" stroke="rgba(0,49,65,0.18)" style={{ strokeWidth: 1.5 }} />
            <path d="M530 140 L600 140" fill="none" stroke="rgba(0,49,65,0.18)" style={{ strokeWidth: 1.5 }} />
            <path d="M530 340 L600 340" fill="none" stroke="rgba(0,49,65,0.18)" style={{ strokeWidth: 1.5 }} />
          </svg>
          <div
            className="xf-decor"
            style={sx(
              "position:absolute;left:-40px;top:-40px;width:9px;height:9px;border-radius:50%;background:#FFC500;box-shadow:0 0 12px rgba(255,197,0,0.9);offset-path:path('M40 240 L110 240');offset-rotate:0deg;animation:xf-travel 2.6s linear infinite;pointer-events:none"
            )}
          />
          <div
            className="xf-decor"
            style={sx(
              "position:absolute;left:-40px;top:-40px;width:8px;height:8px;border-radius:50%;background:#009CBB;box-shadow:0 0 10px rgba(0,156,187,0.9);offset-path:path('M530 140 L600 140');offset-rotate:0deg;animation:xf-travel 3.2s linear infinite;animation-delay:0.6s;pointer-events:none"
            )}
          />
          <div
            className="xf-decor"
            style={sx(
              "position:absolute;left:-40px;top:-40px;width:8px;height:8px;border-radius:50%;background:#009CBB;box-shadow:0 0 10px rgba(0,156,187,0.9);offset-path:path('M530 340 L600 340');offset-rotate:0deg;animation:xf-travel 3.4s linear infinite;animation-delay:1.4s;pointer-events:none"
            )}
          />
          <div
            style={sx(
              "position:relative;background:#FFFFFF;border:1px solid rgba(0,49,65,0.1);border-radius:16px;overflow:hidden;box-shadow:0 24px 64px rgba(0,20,27,0.14)"
            )}
          >
            <div
              className="xf-tabs-scroll"
              style={sx(
                "display:flex;gap:4px;padding:12px 14px;background:#F8FAFB;border-bottom:1px solid rgba(0,49,65,0.08)"
              )}
            >
              {ps.tabs.map((tab, i) => (
                <span
                  key={tab}
                  style={sx(
                    (i === 0
                      ? "font-size:11.5px;font-weight:600;color:#FFFFFF;background:#003141;border-radius:7px;padding:6px 12px"
                      : "font-size:11.5px;font-weight:500;color:#46626C;border-radius:7px;padding:6px 12px") +
                      ";white-space:nowrap;flex-shrink:0"
                  )}
                >
                  {tab}
                </span>
              ))}
            </div>
            <div style={sx("padding:16px")}>
              <div
                style={sx(
                  "display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"
                )}
              >
                <span style={sx("font-size:13px;font-weight:600;color:#06222D")}>
                  {ps.tableTitle}
                </span>
                <span
                  style={sx(
                    "font-family:'Geist Mono',monospace;font-size:9.5px;color:#009CBB;border:1px solid rgba(0,156,187,0.3);border-radius:999px;padding:3px 9px"
                  )}
                >
                  {ps.activeBadge}
                </span>
              </div>
              <div style={sx("overflow-x:auto;margin:0 -16px;padding:0 16px;-webkit-overflow-scrolling:touch")}>
                <div
                  style={sx(
                    "display:grid;grid-template-columns:2fr 1.2fr 1fr 1fr;gap:0;border:1px solid rgba(0,49,65,0.08);border-radius:10px;overflow:hidden;font-size:10.5px;min-width:540px"
                  )}
                >
                  <div
                    style={sx(
                      "background:#F8FAFB;padding:8px 12px;font-family:'Geist Mono',monospace;font-size:8.5px;letter-spacing:0.06em;color:#6B8089"
                    )}
                  >
                    {ps.columns.contact}
                  </div>
                  <div
                    style={sx(
                      "background:#F8FAFB;padding:8px 12px;font-family:'Geist Mono',monospace;font-size:8.5px;letter-spacing:0.06em;color:#6B8089"
                    )}
                  >
                    {ps.columns.stage}
                  </div>
                  <div
                    style={sx(
                      "background:#F8FAFB;padding:8px 12px;font-family:'Geist Mono',monospace;font-size:8.5px;letter-spacing:0.06em;color:#6B8089"
                    )}
                  >
                    {ps.columns.value}
                  </div>
                  <div
                    style={sx(
                      "background:#F8FAFB;padding:8px 12px;font-family:'Geist Mono',monospace;font-size:8.5px;letter-spacing:0.06em;color:#6B8089"
                    )}
                  >
                    {ps.columns.tag}
                  </div>
                  {rows.map((row) => (
                    <Fragment key={row.contact}>
                      <div
                        style={sx(
                          "padding:9px 12px;border-top:1px solid rgba(0,49,65,0.06);color:#06222D;font-weight:500"
                        )}
                      >
                        {row.contact}
                      </div>
                      <div
                        style={{
                          ...sx("padding:9px 12px;border-top:1px solid rgba(0,49,65,0.06)"),
                          color: row.stageColor,
                          fontWeight: row.stageWeight || 400,
                        }}
                      >
                        {row.stage}
                      </div>
                      <div
                        style={sx("padding:9px 12px;border-top:1px solid rgba(0,49,65,0.06);color:#06222D")}
                      >
                        {row.value}
                      </div>
                      <div
                        style={sx("padding:9px 12px;border-top:1px solid rgba(0,49,65,0.06)")}
                      >
                        <span
                          style={{
                            background: row.tagBg,
                            color: row.tagColor,
                            borderRadius: 999,
                            padding: "2px 8px",
                            fontSize: 9,
                            fontWeight: 600,
                          }}
                        >
                          {row.tag}
                        </span>
                      </div>
                    </Fragment>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
