import { useState } from "react";
import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import { useLanguage } from "../i18n/LanguageContext";

const fieldLabel = sx("display:flex;flex-direction:column;gap:6px;font-size:12.5px;font-weight:600;color:#334E58");
const fieldInput = sx(
  "border:1px solid rgba(0,49,65,0.16);border-radius:10px;padding:11px 14px;font-size:14px;color:#06222D;background:#FFFFFF;transition:border-color 0.2s"
);
const fieldSelect = sx(
  "border:1px solid rgba(0,49,65,0.16);border-radius:10px;padding:11px 12px;font-size:14px;color:#06222D;background:#FFFFFF"
);

export default function ScheduleForm() {
  const revealRef = useReveal();
  const { t } = useLanguage();
  const s = t.scheduleForm;
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section id="agendar" style={sx("background:#FFFFFF;border-top:1px solid rgba(0,49,65,0.06)")}>
      <div
        ref={revealRef}
        className="xf-section-pad xf-2col-grid-alt"
        style={sx(
          "max-width:1200px;margin:0 auto;padding:104px 40px;display:grid;grid-template-columns:0.9fr 1.1fr;gap:64px;align-items:start"
        )}
      >
        <div className="xf-sticky-col" style={sx("position:sticky;top:100px")}>
          <div
            style={sx(
              "display:inline-flex;align-items:center;gap:8px;border:1px solid rgba(0,49,65,0.12);background:#F8FAFB;border-radius:999px;padding:6px 14px;font-family:'Geist Mono',monospace;font-size:11.5px;font-weight:500;letter-spacing:0.06em;color:#007D96;margin-bottom:22px"
            )}
          >
            <span
              style={sx(
                "width:7px;height:7px;border-radius:50%;background:linear-gradient(135deg,#FFC500,#009CBB)"
              )}
            />
            {s.badge}
          </div>
          <h2
            className="xf-h2"
            style={sx(
              "margin:0;font-size:40px;line-height:1.12;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
            )}
          >
            {s.title}
          </h2>
          <p style={sx("margin:20px 0 0;font-size:16.5px;line-height:1.65;color:#46626C;text-wrap:pretty")}>
            {s.subtitle}
          </p>
          <div style={sx("display:flex;flex-direction:column;gap:12px;margin-top:30px")}>
            {s.bullets.map((label) => (
              <span key={label} style={sx("display:flex;align-items:center;gap:10px;font-size:14.5px;color:#334E58")}>
                <span style={sx("color:#009CBB;font-weight:700")}>✓</span> {label}
              </span>
            ))}
          </div>
        </div>

        <div
          style={sx(
            "background:#F8FAFB;border:1px solid rgba(0,49,65,0.1);border-radius:20px;padding:36px;box-shadow:0 12px 40px rgba(0,20,27,0.08)"
          )}
        >
          {!sent ? (
            <form onSubmit={handleSubmit} className="xf-form-grid" style={sx("display:grid;grid-template-columns:1fr 1fr;gap:16px")}>
              <label style={fieldLabel}>
                {s.fields.nome}
                <input type="text" name="nome" required placeholder={s.fields.nomePlaceholder} style={fieldInput} />
              </label>
              <label style={fieldLabel}>
                {s.fields.email}
                <input type="email" name="email" required placeholder={s.fields.emailPlaceholder} style={fieldInput} />
              </label>
              <label style={fieldLabel}>
                {s.fields.whatsapp}
                <input type="tel" name="whatsapp" required placeholder={s.fields.whatsappPlaceholder} style={fieldInput} />
              </label>
              <label style={fieldLabel}>
                {s.fields.empresa}
                <input type="text" name="empresa" required placeholder={s.fields.empresaPlaceholder} style={fieldInput} />
              </label>
              <label style={fieldLabel}>
                {s.fields.pais}
                <select name="pais" style={fieldSelect}>
                  {s.fields.paisOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={fieldLabel}>
                {s.fields.idioma}
                <select name="idioma" style={fieldSelect}>
                  {s.fields.idiomaOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={fieldLabel}>
                {s.fields.segmento}
                <select name="segmento" style={fieldSelect}>
                  {s.fields.segmentoOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={fieldLabel}>
                {s.fields.usuarios}
                <select name="usuarios" style={fieldSelect}>
                  {s.fields.usuariosOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={fieldLabel}>
                {s.fields.necessidade}
                <select name="necessidade" style={fieldSelect}>
                  {s.fields.necessidadeOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={fieldLabel}>
                {s.fields.horario}
                <select name="horario" style={fieldSelect}>
                  {s.fields.horarioOptions.map((opt) => (
                    <option key={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label style={{ ...fieldLabel, gridColumn: "1 / -1" }}>
                {s.fields.mensagem}
                <textarea
                  name="mensagem"
                  rows={3}
                  placeholder={s.fields.mensagemPlaceholder}
                  style={{ ...fieldInput, resize: "vertical" }}
                />
              </label>
              <button
                type="submit"
                className="hv-cyan-btn"
                style={sx(
                  "grid-column:1 / -1;display:inline-flex;align-items:center;justify-content:center;gap:9px;background:#009CBB;color:#FFFFFF;font-size:15.5px;font-weight:650;padding:16px 26px;border-radius:999px;border:none;cursor:pointer;box-shadow:0 8px 24px rgba(0,156,187,0.3);transition:background 0.2s,transform 0.2s;font-family:'Geist',system-ui,sans-serif"
                )}
              >
                {s.submit}
              </button>
            </form>
          ) : (
            <div style={sx("text-align:center;padding:48px 24px;animation:xf-fadeup 0.5s ease both")}>
              <div
                style={sx(
                  "width:60px;height:60px;border-radius:50%;background:rgba(0,156,187,0.12);color:#009CBB;display:inline-flex;align-items:center;justify-content:center;font-size:26px;font-weight:700;margin-bottom:20px"
                )}
              >
                ✓
              </div>
              <h3 style={sx("margin:0;font-size:22px;font-weight:650;color:#06222D")}>
                {s.successTitle}
              </h3>
              <p style={sx("margin:12px auto 0;font-size:15px;line-height:1.6;color:#46626C;max-width:380px")}>
                {s.successText}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
