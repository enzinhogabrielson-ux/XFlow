import { sx } from "../utils/sx";
import Ribbon from "./Ribbon";
import xflowWhite from "../assets/xflow-white.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="hero" style={sx("position:relative;background:#002733")}>
      <div style={sx("position:absolute;inset:0;overflow:hidden;pointer-events:none")}>
        <Ribbon style={sx("position:absolute;inset:0;width:100%;height:100%")} />
        <div
          style={sx(
            "position:absolute;inset:0;background:linear-gradient(96deg,rgba(0,39,51,0.92) 0%,rgba(0,39,51,0.45) 34%,rgba(0,39,51,0) 60%)"
          )}
        />
        <div
          style={sx(
            "position:absolute;left:0;right:0;bottom:0;height:120px;background:linear-gradient(180deg,rgba(0,39,51,0),#002733)"
          )}
        />
      </div>
      <div
        className="xf-section-pad-hero xf-hero-grid"
        style={sx(
          "position:relative;max-width:1200px;margin:0 auto;padding:84px 40px 100px;display:grid;grid-template-columns:1.05fr 1fr;gap:52px;align-items:center"
        )}
      >
        <div>
          <div
            style={sx(
              "display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(255,255,255,0.18);background:rgba(255,255,255,0.06);border-radius:999px;padding:6px 14px;font-family:'Geist Mono',monospace;font-size:11.5px;font-weight:500;letter-spacing:0.06em;color:#7FD4E4;margin-bottom:26px"
            )}
          >
            <span
              style={sx(
                "width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#FFC500,#009CBB)"
              )}
            />
            {h.badge}
          </div>
          <h1
            className="xf-h1"
            style={sx(
              "margin:0;font-size:58px;line-height:1.06;font-weight:650;letter-spacing:-0.035em;color:#FFFFFF;max-width:560px;text-wrap:balance"
            )}
          >
            {h.titlePrefix}{" "}
            <span
              style={sx(
                "background:linear-gradient(95deg,#2FC6E4,#FFC500);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;white-space:nowrap"
              )}
            >
              {h.price}
            </span>
          </h1>
          <p
            style={sx(
              "margin:22px 0 0;font-size:18px;line-height:1.6;color:#B9CFD6;max-width:500px;text-wrap:pretty"
            )}
          >
            {h.paragraph1}
          </p>
          <p
            style={sx(
              "margin:14px 0 0;font-size:14.5px;line-height:1.65;color:#7E9BA5;max-width:500px;text-wrap:pretty"
            )}
          >
            {h.paragraph2}
          </p>
          <div className="xf-hero-ctas" style={sx("display:flex;align-items:center;gap:14px;margin-top:34px")}>
            <a
              href="#ativar"
              className="hv-yellow-btn"
              style={sx(
                "white-space:nowrap;display:inline-flex;align-items:center;gap:9px;background:#FFC500;color:#003141;font-size:15px;font-weight:700;padding:14px 26px;border-radius:999px;text-decoration:none;box-shadow:0 8px 24px rgba(255,197,0,0.4);transition:transform 0.2s,background 0.2s"
              )}
            >
              {h.ctaSubscribe} <span style={sx("line-height:1")}>→</span>
            </a>
            <a
              href="#agendar"
              className="hv-outline-a"
              style={sx(
                "white-space:nowrap;display:inline-flex;align-items:center;gap:8px;color:#FFFFFF;font-size:15px;font-weight:600;padding:14px 22px;border-radius:999px;text-decoration:none;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.05);transition:border-color 0.2s,background 0.2s"
              )}
            >
              {h.ctaSchedule}
            </a>
          </div>
          <div style={sx("margin-top:16px;margin-left:4px")}>
            <a
              href="https://crm.xlentbrasil.com/wl-signup"
              target="_blank"
              rel="noopener noreferrer"
              style={sx(
                "color:#FFC500;font-size:13.5px;font-weight:600;text-decoration:none;display:inline-flex;align-items:center;gap:8px;transition:opacity 0.2s"
              )}
              className="hv-white"
            >
              <span style={sx("display:inline-block;width:6px;height:6px;border-radius:50%;background:#FFC500;animation:xf-blink 1.5s infinite")} />
              {h.freeTrialLink}
            </a>
          </div>
          <div
            style={sx(
              "display:flex;flex-wrap:wrap;gap:9px;margin-top:32px;max-width:520px"
            )}
          >
            {h.badges.map((label) => (
              <span
                key={label}
                style={sx(
                  "display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,255,255,0.16);border-radius:999px;padding:6px 13px;font-family:'Geist Mono',monospace;font-size:11px;color:#A9C4CC"
                )}
              >
                <span style={sx("color:#FFC500;font-weight:700")}>✓</span> {label}
              </span>
            ))}
            <span
              style={sx(
                "display:inline-flex;align-items:center;gap:7px;border:1px solid rgba(255,197,0,0.4);background:rgba(255,197,0,0.08);border-radius:999px;padding:6px 13px;font-family:'Geist Mono',monospace;font-size:11px;color:#FFC500;font-weight:600"
              )}
            >
              {h.badgePrice}
            </span>
          </div>
        </div>

        <div className="xf-hero-mock" style={sx("justify-self:end;position:relative")}>
          <div style={sx("position:relative;width:520px;max-width:100%")}>
            <div
              style={sx(
                "position:relative;background:#FFFFFF;border-radius:16px;overflow:hidden;box-shadow:0 32px 80px rgba(0,10,14,0.5),0 4px 16px rgba(0,10,14,0.3);border:1px solid rgba(255,255,255,0.12)"
              )}
            >
              <div
                style={sx(
                  "display:flex;align-items:center;gap:6px;padding:10px 14px;background:#F1F5F6;border-bottom:1px solid rgba(0,49,65,0.08)"
                )}
              >
                <span style={sx("width:9px;height:9px;border-radius:50%;background:#E4EAEC")} />
                <span style={sx("width:9px;height:9px;border-radius:50%;background:#E4EAEC")} />
                <span style={sx("width:9px;height:9px;border-radius:50%;background:#E4EAEC")} />
                <span
                  style={sx(
                    "margin-left:10px;flex:1;background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:6px;padding:3px 10px;font-family:'Geist Mono',monospace;font-size:9px;color:#6B8089"
                  )}
                >
                  {h.mock.urlBar}
                </span>
              </div>
              <div style={sx("display:grid;grid-template-columns:138px 1fr")}>
                <div
                  style={sx(
                    "background:#003141;padding:12px 10px;display:flex;flex-direction:column;gap:10px"
                  )}
                >
                  <img
                    src={xflowWhite}
                    alt="XFlow"
                    style={sx("height:16px;width:auto;align-self:flex-start;margin:2px 0 4px 4px")}
                    width="57"
                    height="16"
                    loading="lazy"
                  />
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      {h.mock.sidebar.comercial}
                    </span>
                    <span
                      style={sx(
                        "font-size:9.5px;color:#FFFFFF;background:rgba(0,156,187,0.35);border-radius:5px;padding:4px 8px;font-weight:500"
                      )}
                    >
                      {h.mock.sidebar.pipeline}
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>{h.mock.sidebar.contatos}</span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>{h.mock.sidebar.agenda}</span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      {h.mock.sidebar.financeiro}
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>
                      {h.mock.sidebar.contasPagar}
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>
                      {h.mock.sidebar.fluxoCaixa}
                    </span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      {h.mock.sidebar.gestao}
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>{h.mock.sidebar.tarefas}</span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>{h.mock.sidebar.projetos}</span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      {h.mock.sidebar.comunicacao}
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>{h.mock.sidebar.conversas}</span>
                  </div>
                </div>
                <div style={sx("background:#F8FAFB;padding:14px")}>
                  <div
                    style={sx(
                      "display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"
                    )}
                  >
                    <span style={sx("font-size:12px;font-weight:600;color:#06222D")}>
                      {h.mock.overview}
                    </span>
                    <span style={sx("display:flex;align-items:center;gap:6px")}>
                      <span
                        style={sx(
                          "font-family:'Geist Mono',monospace;font-size:8.5px;color:#009CBB;border:1px solid rgba(0,156,187,0.3);border-radius:999px;padding:2px 8px"
                        )}
                      >
                        {h.mock.langBadge}
                      </span>
                      <span
                        style={sx(
                          "width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg,#FFC500,#009CBB)"
                        )}
                      />
                    </span>
                  </div>
                  <div
                    style={sx(
                      "display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:12px"
                    )}
                  >
                    {h.mock.stats.map((stat) => (
                      <div
                        key={stat.label}
                        style={sx(
                          "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:9px 10px"
                        )}
                      >
                        <div
                          style={sx(
                            "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.06em;color:#6B8089"
                          )}
                        >
                          {stat.label}
                        </div>
                        <div style={sx("font-size:16px;font-weight:650;color:#06222D;margin-top:3px")}>
                          {stat.value}
                        </div>
                        <div style={sx("font-size:8.5px;color:#1E9E6A;margin-top:2px")}>
                          {stat.growth}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={sx("display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px")}>
                    {h.mock.columns.map((col) => (
                      <div
                        key={col.title}
                        style={sx(
                          "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:8px"
                        )}
                      >
                        <div style={sx("font-size:8.5px;font-weight:600;color:#46626C;margin-bottom:6px")}>
                          {col.title}
                        </div>
                        {col.rows.map((row, i) => (
                          <div
                            key={row.name}
                            style={sx(
                              `background:#F1F6F7;border-radius:6px;padding:6px;${i === 0 ? "margin-bottom:5px" : ""}`
                            )}
                          >
                            <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>{row.name}</div>
                            <div style={sx("font-size:7.5px;color:#6B8089")}>{row.value}</div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="xf-hero-chip"
              style={sx(
                "position:absolute;left:-38px;top:52px;display:inline-flex;align-items:center;gap:8px;background:#FFFFFF;border:1px solid rgba(0,49,65,0.1);border-radius:999px;padding:7px 13px;font-family:'Geist Mono',monospace;font-size:11px;color:#0A7A5C;box-shadow:0 8px 24px rgba(0,10,14,0.35);animation:xf-float 7s ease-in-out infinite"
              )}
            >
              <span
                style={sx(
                  "width:6px;height:6px;border-radius:50%;background:#FFC500;animation:xf-blink 1.6s ease infinite"
                )}
              />
              {h.mock.chip1}
            </div>
            <div
              className="xf-hero-chip"
              style={sx(
                "position:absolute;right:-26px;bottom:64px;display:inline-flex;align-items:center;gap:8px;background:#003141;border:1px solid rgba(255,255,255,0.14);border-radius:999px;padding:7px 13px;font-family:'Geist Mono',monospace;font-size:11px;color:#7FD4E4;box-shadow:0 8px 24px rgba(0,10,14,0.4);animation:xf-float 9s ease-in-out infinite reverse"
              )}
            >
              <span
                style={sx(
                  "width:6px;height:6px;border-radius:50%;background:#009CBB;animation:xf-blink 2.1s ease infinite"
                )}
              />
              {h.mock.chip2}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
