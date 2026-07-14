import { sx } from "../utils/sx";
import { useReveal } from "../hooks/useReveal";
import xflowIcon from "../assets/xflow-icon.png";

export default function Trust() {
  const revealRef = useReveal();

  return (
    <section style={sx("background:#FFFFFF")}>
      <div ref={revealRef} className="xf-section-pad" style={sx("max-width:760px;margin:0 auto;padding:104px 40px;text-align:center")}>
        <img src={xflowIcon} alt="XFlow" style={sx("height:44px;width:auto;margin-bottom:26px")} />
        <h2
          className="xf-h2-sm"
          style={sx(
            "margin:0;font-size:36px;line-height:1.15;font-weight:650;letter-spacing:-0.03em;color:#06222D;text-wrap:balance"
          )}
        >
          Tecnologia XLENT para simplificar a gestão
        </h2>
        <p style={sx("margin:22px 0 0;font-size:16.5px;line-height:1.7;color:#46626C;text-wrap:pretty")}>
          O XFlow nasce dentro do ecossistema XLENT com a proposta de entregar uma ferramenta
          acessível, completa e preparada para empresas que querem profissionalizar sua operação.
        </p>
        <p style={sx("margin:14px 0 0;font-size:16.5px;line-height:1.7;color:#46626C;text-wrap:pretty")}>
          Mais do que um CRM, o XFlow é uma central de gestão para organizar dados, pessoas,
          processos e comunicação.
        </p>
      </div>
    </section>
  );
}
