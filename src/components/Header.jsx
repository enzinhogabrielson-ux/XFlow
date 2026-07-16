import { useState, useEffect } from "react";
import { sx } from "../utils/sx";
import xflowWhite from "../assets/xflow-white.png";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile viewport using React state to avoid CSS caching/loading issues
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 960;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen, isMobile]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10000,
        background: "rgba(0,39,51,0.95)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)"
      }}
    >
      <div
        className="xf-header-inner"
        style={sx(
          "max-width:1260px;margin:0 auto;padding:0 32px;height:72px;display:flex;align-items:center;justify-content:space-between;gap:20px"
        )}
      >
        <a href="#hero" style={sx("display:flex;align-items:center;flex:none;text-decoration:none")}>
          <img
            src={xflowWhite}
            alt={t.header.logoAlt}
            style={sx("height:32px;display:block")}
            width="114"
            height="32"
            fetchpriority="high"
          />
        </a>

        {/* Desktop Nav (rendered only on desktop) */}
        {!isMobile && (
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
              {t.header.nav.features}
            </a>
            <a
              href="#para-quem"
              className="hv-white"
              style={sx(
                "white-space:nowrap;color:rgba(255,255,255,0.78);font-size:13.5px;font-weight:500;text-decoration:none;transition:color 0.2s"
              )}
            >
              {t.header.nav.forWhom}
            </a>
            <a
              href="#preco"
              className="hv-white"
              style={sx(
                "white-space:nowrap;color:rgba(255,255,255,0.78);font-size:13.5px;font-weight:500;text-decoration:none;transition:color 0.2s"
              )}
            >
              {t.header.nav.pricing}
            </a>
          </nav>
        )}

        {/* Desktop Actions (rendered only on desktop) */}
        {!isMobile && (
          <div className="xf-header-actions" style={sx("display:flex;align-items:center;gap:10px;flex:none")}>
            <LanguageSwitcher />
            <a
              href="#agendar"
              className="hv-outline-b"
              style={sx(
                "white-space:nowrap;flex:none;display:inline-flex;align-items:center;color:rgba(255,255,255,0.9);font-size:13.5px;font-weight:600;text-decoration:none;padding:9px 16px;border-radius:999px;border:1px solid rgba(255,255,255,0.28);transition:border-color 0.2s,background 0.2s"
              )}
            >
              {t.header.schedule}
            </a>
            <a
              href="#ativar"
              className="hv-yellow-btn"
              style={sx(
                "white-space:nowrap;flex:none;display:inline-flex;align-items:center;background:#FFC500;color:#003141;font-size:13.5px;font-weight:700;text-decoration:none;padding:10px 18px;border-radius:999px;box-shadow:0 6px 18px rgba(255,197,0,0.35);transition:background 0.2s,transform 0.2s"
              )}
            >
              {t.header.subscribe}
            </a>
          </div>
        )}

        {/* Mobile Hamburger Button (rendered only on mobile, with micro-animations) */}
        {isMobile && (
          <button
            className="xf-mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              justifyContent: "center",
              alignItems: "center",
              width: "40px",
              height: "40px"
            }}
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                transition: "transform 0.25s ease, margin 0.25s ease",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none"
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                transition: "opacity 0.25s ease",
                opacity: menuOpen ? 0 : 1
              }}
            />
            <span
              style={{
                display: "block",
                width: "22px",
                height: "2px",
                backgroundColor: "#FFFFFF",
                transition: "transform 0.25s ease, margin 0.25s ease",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"
              }}
            />
          </button>
        )}
      </div>

      {/* Mobile Drawer Menu (Sleek absolute slide-down panel positioned exactly under header) */}
      {menuOpen && isMobile && (
        <div
          className="xf-mobile-drawer"
          style={{
            position: "absolute",
            top: "100%", // Starts exactly at the bottom of the sticky header (72px)
            left: 0,
            right: 0,
            height: "calc(100vh - 72px)",
            backgroundColor: "#00212B",
            backgroundImage: "linear-gradient(180deg, #00212B 0%, #003141 100%)",
            display: "flex",
            flexDirection: "column",
            padding: "24px 24px 48px",
            gap: "24px",
            boxShadow: "0 24px 48px rgba(0,0,0,0.6)",
            overflowY: "auto",
            animation: "xf-fadeup 0.3s ease both"
          }}
        >
          {/* App-like Navigation Cards */}
          <nav style={{ display: "flex", flexDirection: "column", gap: "12px", width: "100%" }}>
            <a
              href="#funcionalidades"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.03)",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(127,212,228,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7FD4E4"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7" />
                  <rect x="14" y="3" width="7" height="7" />
                  <rect x="14" y="14" width="7" height="7" />
                  <rect x="3" y="14" width="7" height="7" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#FFFFFF" }}>{t.header.nav.features}</div>
                <div style={{ fontSize: "12px", color: "#7E9BA5", marginTop: "2px" }}>Explore todos os recursos</div>
              </div>
            </a>

            <a
              href="#para-quem"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.03)",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(127,212,228,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7FD4E4"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#FFFFFF" }}>{t.header.nav.forWhom}</div>
                <div style={{ fontSize: "12px", color: "#7E9BA5", marginTop: "2px" }}>Ideal para o seu negócio</div>
              </div>
            </a>

            <a
              href="#preco"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
                padding: "12px 16px",
                borderRadius: "12px",
                backgroundColor: "rgba(255,255,255,0.03)",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)"}
            >
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  backgroundColor: "rgba(127,212,228,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#7FD4E4"
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="1" x2="12" y2="23" />
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div>
                <div style={{ fontSize: "16px", fontWeight: "600", color: "#FFFFFF" }}>{t.header.nav.pricing}</div>
                <div style={{ fontSize: "12px", color: "#7E9BA5", marginTop: "2px" }}>Planos simples e acessíveis</div>
              </div>
            </a>
          </nav>

          <div style={{ height: "1px", backgroundColor: "rgba(255,255,255,0.08)", width: "100%" }} />

          {/* Actions & Language Selector */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center", width: "100%" }}>
            <LanguageSwitcher />

            <a
              href="#agendar"
              onClick={() => setMenuOpen(false)}
              style={{
                width: "100%",
                maxWidth: "280px",
                textAlign: "center",
                color: "#FFFFFF",
                fontSize: "15px",
                fontWeight: "600",
                textDecoration: "none",
                padding: "13px",
                borderRadius: "99px",
                border: "1px solid rgba(255,255,255,0.25)",
                backgroundColor: "rgba(255,255,255,0.05)",
                transition: "background 0.2s, border-color 0.2s"
              }}
              className="hv-outline-b"
            >
              {t.header.schedule}
            </a>

            <a
              href="#ativar"
              onClick={() => setMenuOpen(false)}
              style={{
                width: "100%",
                maxWidth: "280px",
                textAlign: "center",
                backgroundColor: "#FFC500",
                color: "#003141",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                padding: "13px",
                borderRadius: "999px",
                boxShadow: "0 6px 18px rgba(255,197,0,0.3)",
                transition: "background 0.2s, transform 0.2s"
              }}
              className="hv-yellow-btn"
            >
              {t.header.subscribe}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
