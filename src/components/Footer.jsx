import { sx } from "../utils/sx";
import xflowWhite from "../assets/xflow-white.png";

export default function Footer() {
  return (
    <footer style={sx("background:#00212B;border-top:1px solid rgba(255,255,255,0.06)")}>
      <div className="xf-section-pad" style={sx("max-width:1200px;margin:0 auto;padding:64px 40px 40px")}>
        <div className="xf-footer-grid" style={sx("display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:48px")}>
          <div>
            <img src={xflowWhite} alt="XFlow XLENT" style={sx("height:38px;width:auto")} />
            <p style={sx("margin:18px 0 0;font-size:13.5px;line-height:1.6;color:#7E9BA5;max-width:280px")}>
              XFlow XLENT — Produto oficial do ecossistema XLENT.
            </p>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              PLATAFORMA
            </span>
            <a href="#funcionalidades" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Funcionalidades
            </a>
            <a href="#preco" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Preço
            </a>
            <a href="#agendar" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Agendar apresentação
            </a>
            <a
              href="https://crm.xlentbrasil.com"
              className="hv-white"
              style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}
            >
              Login
            </a>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              LEGAL
            </span>
            <a href="#" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Política de Privacidade
            </a>
            <a href="#" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Termos de Uso
            </a>
          </div>
          <div style={sx("display:flex;flex-direction:column;gap:11px")}>
            <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794;margin-bottom:4px")}>
              CONTATO
            </span>
            <a
              href="https://wa.me/5515996935671"
              className="hv-white"
              style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}
            >
              WhatsApp · +55 15 99693-5671
            </a>
            <a href="#agendar" className="hv-white" style={sx("color:#A9C4CC;font-size:13.5px;text-decoration:none;transition:color 0.2s")}>
              Contato
            </a>
          </div>
        </div>
        <div
          className="xf-footer-bottom"
          style={sx(
            "display:flex;align-items:center;justify-content:space-between;margin-top:48px;padding-top:24px;border-top:1px solid rgba(255,255,255,0.07)"
          )}
        >
          <span style={sx("font-size:12.5px;color:#5E8794")}>© 2026 XLENT. Todos os direitos reservados.</span>
          <span style={sx("font-family:'Geist Mono',monospace;font-size:10.5px;letter-spacing:0.08em;color:#5E8794")}>
            PT · EN · ES
          </span>
        </div>
      </div>
    </footer>
  );
}
