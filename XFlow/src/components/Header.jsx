import { sx } from "../utils/sx";
import xflowWhite from "../assets/xflow-white.png";

export default function Header() {
  return (
    <header
      style={sx(
        "position:sticky;top:0;z-index:50;background:rgba(0,39,51,0.88);backdrop-filter:blur(14px);border-bottom:1px solid rgba(255,255,255,0.08)"
      )}
    >
      <div
        className="xf-header-inner"
        style={sx(
          "max-width:1260px;margin:0 auto;padding:0 32px;height:72px;display:flex;align-items:center;gap:36px"
        )}
      >
        <a href="#hero" style={sx("display:flex;align-items:center;flex:none;text-decoration:none")}>
          <img
            src={xflowWhite}
            alt="XFlow — CRM e Automação Comercial"
            style={sx("height:32px;display:block")}
          />
        </a>
        <nav
          className="xf-nav"
          style={sx("display:flex;align-items:center;gap:28px;flex:1;justify-content:center")}
        >
          <a
            href="#funcionalidades"
            className="hv-white"
            style={sx(
              "white-space:nowrap;color:rgba(255,255,255,0.78);font-size:13.5px;font-weight:500;text-decoration:none;transition:color 0.2s"
            )}
          >
            Funcionalidades
          </a>
          <a
            href="#para-quem"
            className="hv-white"
            style={sx(
              "white-space:nowrap;color:rgba(255,255,255,0.78);font-size:13.5px;font-weight:500;text-decoration:none;transition:color 0.2s"
            )}
          >
            Para quem é
          </a>
          <a
            href="#preco"
            className="hv-white"
            style={sx(
              "white-space:nowrap;color:rgba(255,255,255,0.78);font-size:13.5px;font-weight:500;text-decoration:none;transition:color 0.2s"
            )}
          >
            Preço
          </a>
        </nav>
        <div style={sx("display:flex;align-items:center;gap:10px;flex:none")}>
          <a
            href="https://crm.xlentbrasil.com"
            className="hv-white xf-header-login"
            style={sx(
              "white-space:nowrap;flex:none;color:rgba(255,255,255,0.85);font-size:13.5px;font-weight:500;text-decoration:none;padding:9px 10px;border-radius:999px;transition:color 0.2s"
            )}
          >
            Entrar na plataforma
          </a>
          <a
            href="#agendar"
            className="hv-outline-b"
            style={sx(
              "white-space:nowrap;flex:none;display:inline-flex;align-items:center;color:rgba(255,255,255,0.9);font-size:13.5px;font-weight:600;text-decoration:none;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,0.28);transition:border-color 0.2s,background 0.2s"
            )}
          >
            Agendar apresentação
          </a>
          <a
            href="#ativar"
            className="hv-yellow-btn"
            style={sx(
              "white-space:nowrap;flex:none;display:inline-flex;align-items:center;background:#FFC500;color:#003141;font-size:13.5px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:999px;box-shadow:0 6px 18px rgba(255,197,0,0.35);transition:background 0.2s,transform 0.2s"
            )}
          >
            Assine agora
          </a>
        </div>
      </div>
    </header>
  );
}
