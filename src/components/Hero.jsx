import { sx } from "../utils/sx";
import Ribbon from "./Ribbon";
import xflowWhite from "../assets/xflow-white.png";

export default function Hero() {
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
            XFLOW XLENT · CRM E AUTOMAÇÃO COMERCIAL
          </div>
          <h1
            className="xf-h1"
            style={sx(
              "margin:0;font-size:58px;line-height:1.06;font-weight:650;letter-spacing:-0.035em;color:#FFFFFF;max-width:560px;text-wrap:balance"
            )}
          >
            O CRM completo da XLENT por apenas{" "}
            <span
              style={sx(
                "background:linear-gradient(95deg,#2FC6E4,#FFC500);-webkit-background-clip:text;background-clip:text;-webkit-text-fill-color:transparent;color:transparent;white-space:nowrap"
              )}
            >
              R$ 39,90
            </span>
          </h1>
          <p
            style={sx(
              "margin:22px 0 0;font-size:18px;line-height:1.6;color:#B9CFD6;max-width:500px;text-wrap:pretty"
            )}
          >
            Organize vendas, contatos, tarefas, agenda, financeiro, atendimento e gestão da sua
            empresa em uma única plataforma simples, completa e acessível.
          </p>
          <p
            style={sx(
              "margin:14px 0 0;font-size:14.5px;line-height:1.65;color:#7E9BA5;max-width:500px;text-wrap:pretty"
            )}
          >
            O XFlow XLENT foi criado para empresas que precisam de controle, velocidade e
            organização, sem pagar caro por ferramentas separadas. Com múltiplos acessos, idioma
            em português, inglês e espanhol, e estrutura preparada para atender negócios em
            diversos países.
          </p>
          <div className="xf-hero-ctas" style={sx("display:flex;align-items:center;gap:14px;margin-top:34px")}>
            <a
              href="#ativar"
              className="hv-yellow-btn"
              style={sx(
                "white-space:nowrap;display:inline-flex;align-items:center;gap:9px;background:#FFC500;color:#003141;font-size:15px;font-weight:700;padding:14px 26px;border-radius:999px;text-decoration:none;box-shadow:0 8px 24px rgba(255,197,0,0.4);transition:transform 0.2s,background 0.2s"
              )}
            >
              Assine agora — R$ 39,90/mês <span style={sx("line-height:1")}>→</span>
            </a>
            <a
              href="#agendar"
              className="hv-outline-a"
              style={sx(
                "white-space:nowrap;display:inline-flex;align-items:center;gap:8px;color:#FFFFFF;font-size:15px;font-weight:600;padding:14px 22px;border-radius:999px;text-decoration:none;border:1px solid rgba(255,255,255,0.3);background:rgba(255,255,255,0.05);transition:border-color 0.2s,background 0.2s"
              )}
            >
              Agendar apresentação
            </a>
          </div>
          <div
            style={sx(
              "display:flex;flex-wrap:wrap;gap:9px;margin-top:32px;max-width:520px"
            )}
          >
            {[
              "CRM completo",
              "Acessos múltiplos",
              "PT · EN · ES",
              "Comercial, financeiro e gestão em um só lugar",
            ].map((label) => (
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
              Apenas R$ 39,90/mês
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
                  crm.xlentbrasil.com
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
                  />
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      COMERCIAL
                    </span>
                    <span
                      style={sx(
                        "font-size:9.5px;color:#FFFFFF;background:rgba(0,156,187,0.35);border-radius:5px;padding:4px 8px;font-weight:500"
                      )}
                    >
                      Pipeline
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>Contatos</span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>Agenda</span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      FINANCEIRO
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>
                      Contas a Pagar
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>
                      Fluxo de Caixa
                    </span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      GESTÃO
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>Tarefas</span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>Projetos</span>
                  </div>
                  <div style={sx("display:flex;flex-direction:column;gap:3px")}>
                    <span
                      style={sx(
                        "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.08em;color:#5E8794;padding:2px 6px"
                      )}
                    >
                      COMUNICAÇÃO
                    </span>
                    <span style={sx("font-size:9.5px;color:#A9C4CC;padding:3px 8px")}>Conversas</span>
                  </div>
                </div>
                <div style={sx("background:#F8FAFB;padding:14px")}>
                  <div
                    style={sx(
                      "display:flex;align-items:center;justify-content:space-between;margin-bottom:12px"
                    )}
                  >
                    <span style={sx("font-size:12px;font-weight:600;color:#06222D")}>
                      Visão geral
                    </span>
                    <span style={sx("display:flex;align-items:center;gap:6px")}>
                      <span
                        style={sx(
                          "font-family:'Geist Mono',monospace;font-size:8.5px;color:#009CBB;border:1px solid rgba(0,156,187,0.3);border-radius:999px;padding:2px 8px"
                        )}
                      >
                        PT · EN · ES
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
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:9px 10px"
                      )}
                    >
                      <div
                        style={sx(
                          "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.06em;color:#6B8089"
                        )}
                      >
                        NOVOS LEADS
                      </div>
                      <div style={sx("font-size:16px;font-weight:650;color:#06222D;margin-top:3px")}>
                        128
                      </div>
                      <div style={sx("font-size:8.5px;color:#1E9E6A;margin-top:2px")}>
                        ▲ 12% na semana
                      </div>
                    </div>
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:9px 10px"
                      )}
                    >
                      <div
                        style={sx(
                          "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.06em;color:#6B8089"
                        )}
                      >
                        RECEITA DO MÊS
                      </div>
                      <div style={sx("font-size:16px;font-weight:650;color:#06222D;margin-top:3px")}>
                        R$ 84.210
                      </div>
                      <div style={sx("font-size:8.5px;color:#1E9E6A;margin-top:2px")}>
                        ▲ 8% vs. anterior
                      </div>
                    </div>
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:9px 10px"
                      )}
                    >
                      <div
                        style={sx(
                          "font-family:'Geist Mono',monospace;font-size:7.5px;letter-spacing:0.06em;color:#6B8089"
                        )}
                      >
                        TAREFAS HOJE
                      </div>
                      <div style={sx("font-size:16px;font-weight:650;color:#06222D;margin-top:3px")}>
                        23
                      </div>
                      <div style={sx("font-size:8.5px;color:#6B8089;margin-top:2px")}>
                        9 concluídas
                      </div>
                    </div>
                  </div>
                  <div style={sx("display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px")}>
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:8px"
                      )}
                    >
                      <div style={sx("font-size:8.5px;font-weight:600;color:#46626C;margin-bottom:6px")}>
                        Novo lead · 12
                      </div>
                      <div
                        style={sx(
                          "background:#F1F6F7;border-radius:6px;padding:6px;margin-bottom:5px"
                        )}
                      >
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>
                          Agência Prisma
                        </div>
                        <div style={sx("font-size:7.5px;color:#6B8089")}>R$ 2.400/mês</div>
                      </div>
                      <div style={sx("background:#F1F6F7;border-radius:6px;padding:6px")}>
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>
                          Studio Aline
                        </div>
                        <div style={sx("font-size:7.5px;color:#6B8089")}>R$ 890/mês</div>
                      </div>
                    </div>
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:8px"
                      )}
                    >
                      <div style={sx("font-size:8.5px;font-weight:600;color:#46626C;margin-bottom:6px")}>
                        Proposta · 7
                      </div>
                      <div
                        style={sx(
                          "background:#FFF6DC;border-radius:6px;padding:6px;margin-bottom:5px"
                        )}
                      >
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>Log Mais</div>
                        <div style={sx("font-size:7.5px;color:#6B8089")}>R$ 5.100/mês</div>
                      </div>
                      <div style={sx("background:#F1F6F7;border-radius:6px;padding:6px")}>
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>
                          Clínica Vitta
                        </div>
                        <div style={sx("font-size:7.5px;color:#6B8089")}>R$ 1.750/mês</div>
                      </div>
                    </div>
                    <div
                      style={sx(
                        "background:#FFFFFF;border:1px solid rgba(0,49,65,0.08);border-radius:9px;padding:8px"
                      )}
                    >
                      <div style={sx("font-size:8.5px;font-weight:600;color:#46626C;margin-bottom:6px")}>
                        Fechado · 4
                      </div>
                      <div
                        style={sx(
                          "background:#E2F4F0;border-radius:6px;padding:6px;margin-bottom:5px"
                        )}
                      >
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>
                          Grupo Andar
                        </div>
                        <div style={sx("font-size:7.5px;color:#1E9E6A")}>✓ Ganho</div>
                      </div>
                      <div style={sx("background:#E2F4F0;border-radius:6px;padding:6px")}>
                        <div style={sx("font-size:8px;font-weight:600;color:#06222D")}>TecServ</div>
                        <div style={sx("font-size:7.5px;color:#1E9E6A")}>✓ Ganho</div>
                      </div>
                    </div>
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
              + R$ 12.480 recebidos
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
              Tarefa concluída · Onboarding
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
