import { useEffect, useRef, useState } from "react";
import { sx } from "../utils/sx";
import { LANGUAGES } from "../i18n/translations";
import { useLanguage } from "../i18n/LanguageContext";

export default function LanguageSwitcher() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onDocClick(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  const current = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div ref={rootRef} style={sx("position:relative;flex:none")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="hv-white"
        style={sx(
          "display:inline-flex;align-items:center;gap:6px;white-space:nowrap;background:transparent;border:1px solid rgba(255,255,255,0.22);color:rgba(255,255,255,0.9);font-size:12.5px;font-weight:600;font-family:'Geist Mono',monospace;letter-spacing:0.02em;padding:8px 12px;border-radius:999px;cursor:pointer;transition:border-color 0.2s,background 0.2s"
        )}
      >
        {current.label}
        <span style={sx(`font-size:9px;transition:transform 0.2s;transform:${open ? "rotate(180deg)" : "rotate(0deg)"}`)}>
          ▾
        </span>
      </button>
      {open && (
        <div
          role="listbox"
          style={sx(
            "position:absolute;top:calc(100% + 8px);right:0;min-width:150px;background:#00212B;border:1px solid rgba(255,255,255,0.14);border-radius:12px;padding:6px;box-shadow:0 16px 40px rgba(0,10,14,0.45);z-index:60"
          )}
        >
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              type="button"
              role="option"
              aria-selected={l.code === lang}
              onClick={() => {
                setLang(l.code);
                setOpen(false);
              }}
              style={sx(
                `display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;text-align:left;background:${
                  l.code === lang ? "rgba(255,197,0,0.12)" : "transparent"
                };border:none;border-radius:8px;padding:9px 10px;font-size:13px;font-weight:500;color:${
                  l.code === lang ? "#FFC500" : "#DCE9EC"
                };cursor:pointer;transition:background 0.15s`
              )}
              onMouseEnter={(e) => {
                if (l.code !== lang) e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                if (l.code !== lang) e.currentTarget.style.background = "transparent";
              }}
            >
              <span>{l.name}</span>
              <span style={sx("font-family:'Geist Mono',monospace;font-size:11px;opacity:0.7")}>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
