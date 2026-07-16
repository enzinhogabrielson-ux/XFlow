import { sx } from "../utils/sx";
import xflowWhite from "../assets/xflow-white.png";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const f = t.footer;
  const [features, pricing, schedule] = f.platformLinks;
  const [privacy, terms] = f.legalLinks;

  return (
    <footer style={sx("background:#00212B;border-top:1px solid rgba(255,255,255,0.06)")}>
      <div className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:64px 40px 40px")}>
        <div className="xf-footer-grid" style={sx("display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px")}>
          <div>
            <img src={xflowWhite} alt="XFlow XLENT" style={sx("height:38px;width:auto")} width="135" height="38" loading="lazy" />
            <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#7E9BA5;max-width:280px")}>
              {f.tagline}
            </p>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              {f.platformLabel}
            </span>
            <a href="#funcionalidades" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {features}
            </a>
            <a href="#preco" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {pricing}
            </a>
            <a href="#agendar" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {schedule}
            </a>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              {f.legalLabel}
            </span>
            <a href="#" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {privacy}
            </a>
            <a href="#" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {terms}
            </a>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              {f.contactLabel}
            </span>
            <a
              href="https://wa.me/5515996935671"
              className="hv-white"
              style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}
            >
              {f.whatsapp}
            </a>
            <a href="#agendar" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              {f.contact}
            </a>
          </div>
        </div>
        <div
          className="xf-footer-bottom"
          style={sx(
            "display:flex;align-items:center;justify-content:space-between;margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07)"
          )}
        >
          <span style={sx("font-size:12.5px;color:#5E8794")}>{f.copyright}</span>
          <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794")}>
            {f.langBadge}
          </span>
        </div>
      </div>
    </footer>
  );
}
