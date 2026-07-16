import { useLanguage } from "../i18n/LanguageContext";
import { sx } from "../utils/sx";

export default function PromoBanner() {
  const { t } = useLanguage();
  const pb = t.promoBanner;

  if (!pb) return null;

  return (
    <div
      style={sx(
        "background:linear-gradient(90deg, #001319 0%, #002C3B 50%, #001319 100%);color:#FFFFFF;font-size:13.5px;font-weight:550;text-align:center;padding:10px 24px;border-bottom:1px solid rgba(255,197,0,0.3);position:relative;z-index:60;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap;transition:all 0.3s ease"
      )}
    >
      <div style={sx("display:inline-flex;align-items:center;gap:8px")}>
        <span
          style={sx(
            "background:rgba(255,197,0,0.15);color:#FFC500;border:1px solid rgba(255,197,0,0.4);padding:2px 10px;border-radius:99px;font-size:11px;font-weight:700;letter-spacing:0.06em;display:inline-flex;align-items:center;gap:6px;line-height:1"
          )}
        >
          <span style={sx("width:6px;height:6px;border-radius:50%;background:#FFC500;animation:xf-blink 1.5s infinite;display:inline-block")} />
          {pb.badge}
        </span>
        <span style={sx("color:#E5F4F7;letter-spacing:-0.01em")}>
          {pb.text}
        </span>
      </div>
      <a
        href={pb.link}
        target="_blank"
        rel="noopener noreferrer"
        className="hv-yellow-btn"
        style={sx(
          "background:#FFC500;color:#002733;font-size:12px;font-weight:750;text-decoration:none;padding:5px 14px;border-radius:999px;display:inline-flex;align-items:center;gap:4px;box-shadow:0 4px 12px rgba(255,197,0,0.25);transition:all 0.2s ease"
        )}
      >
        {pb.cta} <span style={sx("line-height:1;font-size:13px;font-weight:bold")}>→</span>
      </a>
    </div>
  );
}
