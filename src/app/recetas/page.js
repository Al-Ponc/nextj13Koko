import styles from "./recetas.module.css";
import Image from "next/image";

function Recetas() {
  return (
    <>
      <h1 className={styles.h11}>Recetas con amor</h1>
      <section className={styles.secrecetas}>
        <div className={styles.recetas}>
          <div className={styles.tarjetas}>
          <Image src='/recetas1.jpeg' width='4608' height='3456' alt='koko conservas'
              className={styles.imagenrecetaprincipal}
              onclick="openPopup('Ensalada de quinoa con pickles de betarraga', 'Images/Image2.jpg')"
            />
            <p>Ensalada de quinoa con pickles de betarraga</p>
          </div>
          <div
            className={styles.tarjetas}
            onclick="openPopup('Sandwich con chutney', 'Images/Image1.jpg')"
          >
            <Image src='/recetas2.jpeg' width='4608' height='3456' alt='koko conservas'
              className={styles.imagenrecetaprincipal}
            />
            <p>Sandwich con chutney</p>
          </div>
          <div
            className={styles.tarjetas}
            onclick="openPopup('Hamburguesa de porotos negros con pickles de zapallo italiano y chutney de cebolla morada', 'Images/Image3.jpeg')"
          >
            <Image src='/recetas3.jpeg' width='4608' height='3456' alt='koko conservas'
              className={styles.imagenrecetaprincipal}
            />
            <p>
              Hamburguesa de porotos negros con pickles de zapallo italiano y
              chutney de cebolla morada
            </p>
          </div>
          <div
            className={styles.tarjetas}
            onclick="openPopup('Pickles con diferentes dips: hummus, porotos negros y palta', 'Images/Image4.jpg')"
          >
            <Image src='/recetas4.jpeg' width='4608' height='3456' alt='koko conservas'
              className={styles.imagenrecetaprincipal}
            />
            <p>Pickles con diferentes dips: hummus, porotos negros y palta</p>
          </div>
        </div>
      </section>
      <div className={`${styles.popup} ${styles.popup}`}>
        <div className={styles.popupcontent}>
          <span className={styles.closebutton} onclick="closePopup()">
            ×
          </span>
          <h1 className={styles.popuptitle} />
          <img className={styles.popupimage} />
          <p className={styles.popupdescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            iure recusandae voluptatum adipisci dolorem, dignissimos laborum cum
            odio doloremque beatae veniam. Fugit numquam perferendis quae saepe
            architecto est recusandae ea?
          </p>
          <p className={styles.popupdescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            iure recusandae voluptatum adipisci dolorem, dignissimos laborum cum
            odio doloremque beatae veniam. Fugit numquam perferendis quae saepe
            architecto est recusandae ea?
          </p>
          <p className={styles.popupdescription}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta
            iure recusandae voluptatum adipisci dolorem, dignissimos laborum cum
            odio doloremque beatae veniam. Fugit numquam perferendis quae saepe
            architecto est recusandae ea?
          </p>
        </div>
      </div>
    </>
  );
}
export default Recetas;
