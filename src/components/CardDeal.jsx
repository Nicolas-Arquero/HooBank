import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
      Trouvez une meilleure offre <br className="sm:block hidden" /> en quelques étapes simples.

      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Facile et rapide, vous pouvez trouver la carte de crédit qui convient le mieux à vos besoins en quelques étapes simples. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
