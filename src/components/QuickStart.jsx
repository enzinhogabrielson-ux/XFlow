import { useState } from "react";
import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

const fieldStyle = sx(
  "border:1px solid rgba(255,255,255,0.2);border-radius:10px;padding:12px 14px;font-size:14px;color:#FFFFFF;background:rgba(255,255,255,0.07)"
);
const selectStyle = sx(
  "border:1px solid rgba(255,255,255,0.2);border-radius:10px;padding:12px;font-size:14px;color:#FFFFFF;background:rgba(255,255,255,0.07)"
);
const optionStyle = { color: "#06222D" };

export default function QuickStart() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const q = t.quickStart;
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="ativar" style={sx("background:#FFFFFF;padding-bottom:104px")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:0 40px")}>
        <div
          className="xf-quickstart-box"
          style={sx(
            "position:relative;background:#003141;border-radius:22px;padding:48px 52px;overflow:hidden"
          )}
        >
          <div
            style={sx(
              "position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,0.06) 1px,transparent 1px);background-size:22px 22px;pointer-events:none"
            )}
          />
          <div
            style={sx(
              "position:absolute;right:-60px;top:-60px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle,rgba(0,156,187,0.35),transparent 70%);pointer-events:none"
            )}
          />
          <div
            className="xf-2col-grid-alt"
            style={sx(
              "position:relative;display:grid;grid-template-columns:0.9fr 1.1fr;gap:52px;align-items:center"
            )}
          >
            <div>
              <h2
                className="xf-h2"
                style={sx(
                  "margin:0;font-size:32px;line-height:1.15;font-weight:650;letter-spacing:-0.025em;color:#FFFFFF;text-wrap:balance"
                )}
              >
                {q.titlePrefix}{" "}
                <span style={sx("color:#FFC500;white-space:nowrap")}>{q.price}</span> {q.titleSuffix}
              </h2>
              <p style={sx("margin:16px 0 0;font-size:15.5px;line-height:1.65;color:#B9CFD6;text-wrap:pretty")}>
                {q.subtitle}
              </p>
            </div>
            <div>
              {!sent ? (
                <form onSubmit={handleSubmit} className="xf-form-grid" style={sx("display:grid;grid-template-columns:1fr 1fr;gap:12px")}>
                  <input type="text" name="nome" required placeholder={q.fields.nomePlaceholder} style={fieldStyle} />
                  <input type="email" name="email" required placeholder={q.fields.emailPlaceholder} style={fieldStyle} />
                  <input type="tel" name="whatsapp" required placeholder={q.fields.whatsappPlaceholder} style={fieldStyle} />
                  <input type="text" name="empresa" required placeholder={q.fields.empresaPlaceholder} style={fieldStyle} />
                  <select name="acessos" style={selectStyle}>
                    {q.fields.acessosOptions.map((opt) => (
                      <option key={opt} style={optionStyle}>{opt}</option>
                    ))}
                  </select>
                  <select name="pais" style={selectStyle}>
                    {q.fields.paisOptions.map((opt) => (
                      <option key={opt} style={optionStyle}>{opt}</option>
                    ))}
                  </select>
                  <select name="idioma" style={selectStyle}>
                    {q.fields.idiomaOptions.map((opt) => (
                      <option key={opt} style={optionStyle}>{opt}</option>
                    ))}
                  </select>
                  <select name="pagamento" style={selectStyle}>
                    {q.fields.pagamentoOptions.map((opt) => (
                      <option key={opt} style={optionStyle}>{opt}</option>
                    ))}
                  </select>
                  <button
                    type="submit"
                    className="hv-yellow-btn"
                    style={sx(
                      "grid-column:1 / -1;display:inline-flex;align-items:center;justify-content:center;gap:9px;background:#FFC500;color:#003141;font-size:15.5px;font-weight:700;padding:15px 26px;border-radius:999px;border:none;cursor:pointer;box-shadow:0 8px 24px rgba(255,197,0,0.3);transition:background 0.2s,transform 0.2s;font-family:'Geist',system-ui,sans-serif"
                    )}
                  >
                    {q.submit}
                  </button>
                </form>
              ) : (
                <div style={sx("text-align:center;padding:36px 24px;animation:xf-fadeup 0.5s ease both")}>
                  <div
                    style={sx(
                      "width:54px;height:54px;border-radius:50%;background:rgba(255,197,0,0.15);color:#FFC500;display:inline-flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;margin-bottom:16px"
                    )}
                  >
                    ✓
                  </div>
                  <h3 style={sx("margin:0;font-size:20px;font-weight:650;color:#FFFFFF")}>
                    {q.successTitle}
                  </h3>
                  <p style={sx("margin:10px auto 0;font-size:14.5px;line-height:1.6;color:#B9CFD6;max-width:360px")}>
                    {q.successText}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
