import styles from "./page.module.css";
import Image from "next/image";

export default function Inicio() {
  return (
    <>
      <div>
        <br />
        <section className={styles.sectarjetas3s}>
          <div className={styles.tarjetas3s}>
            <div className={styles.tarjetas3s}>
              <Image
                src="/img/Sustentable2.png"
                alt="Sustentable"
                className={styles.imagen3sprincipal} width={400}
                height={400}
              />
              <h1 className={styles.h11}>Sustentable</h1>
              <p>
                Elaboramos conservas y fermentados con verduras que cultivamos
                en nuestro huerto familiar con métodos amigables para el
                medioambiente.
              </p>
            </div>
            <div className={styles.tarjetas3s}>
              <img
                src="/img/Saludable3.png"
                alt="Saludable"
                className={styles.imagen3sprincipal}
                width={400}
                height={400}
              />
              <h1 className={styles.h11}>Saludable</h1>
              <p>
                Utilizamos diferentes técnicas de conservación, fomentando una
                alimentación sana y natural sin conservantes, colorantes ni
                aditivos.
              </p>
            </div>
            <div className={styles.tarjetas3s}>
              <Image
                src="/img/Sabroso3.png"
                alt="Sabroso"
                className={styles.imagen3sprincipal}
                width={400}
                height={400}
              />
              <h1 className={styles.h11}>Sabroso</h1>
              <p>
                Combinamos diferentes culturas, sabores y saberes entregando un
                toque único a nuestros productos.
              </p>
            </div>
          </div>
          <div className={styles.buttoncontainerrecetas}></div>
        </section>
        {/*CATEGORIA PRODUCTOS*/}
        <center>
        </center>
        <br />
        <section className={styles.secproductos}>
          <div className={styles.contsecproductos}>
            <div className={styles.intro}>
              <h1 className={styles.h11}>¡SABROSO!</h1>
              <h3 className={styles.h33}>100% orgánico, local y vegan.</h3>
              <button>PRODUCTOS</button>
            </div>
            <div className={styles.categorias}>
              <label className={styles.tarjetaproducto}>
                <Image
                  src="/img/chutneyCategoria.jpeg"
                  alt="cat-chutneys"
                  width={400}
                height={400}
                />
                <span className={styles.labeltext}>Chutneys</span>
              </label>
              <label className={styles.tarjetaproducto}>
                <Image
                  src="/img/picklesCategoria.jpeg"
                  alt="cat-pickles"
                  width={400}
                  height={400}
                />
                <span className={styles.labeltext}>Pickles</span>
              </label>
              <label className={styles.labeltext}>
                <Image src="/img/ajiCategoria.jpeg"
                 alt="cat-aji"
                 width={400}
                 height={400} />
                <span className={styles.labeltext}>Salsas de ají</span>
              </label>
              <label className={styles.labeltext}>
                <Image src="/img/varios.jpg" alt="cat-fermentos" width={500}
                height={500}/>
                <span className={styles.labeltext}>Fermentos</span>
              </label>
            </div>
          </div>
        </section>
        <br />
        <center>

        </center>
        {/*CONOCENOS*/}
        <div className={styles.contenedorconocenos}>
          <Image src="/img/giphy.gif" width={500}
                height={500} />
          <div className={styles.txtconocenos}>
            <h1 className={styles.somos}>Quienes somos</h1>
            <p>
              La huertera, la cocinera, la vendedora, la del marketing y de las
              redes sociales…. soy yo!
            </p>
            <div>
              A orillas del rio Kurako, en la comuna de Cunco, en el centro de
              la hermosa región de la Araucanía Andina.{" "}
            </div>
            <p />
            <a className={styles.hiperlinkconocenos} href="#" target="_blank">
              más info
            </a>
          </div>
        </div>
        <br />
        <center>

        </center>
        {/*RECETAS*/}
        <section className={styles.secrecetas}>
          <div className={styles.recetas}>
            <div className={styles.tarjetasrecetas}>
              <Image
                src="/img/Image2.jpg"
                width={400}
                height={400}
                alt="ensalada"
                className={styles.imagenrecetaprincipal}
              />
              <p>Ensalada de quinoa con pickles de betarraga</p>
            </div>
            <div className="tarjetasrecetas">
              <img
                src="/img/Image1.jpg"
                width={400}
                height={400}
                alt="sandwich"
                className={styles.imagenrecetaprincipal}
              />
              <p>Sandwich con chutney</p>
            </div>
            <div className="tarjetasrecetas">
              <Image
                src="/img/Image3.jpeg"
                width={400}
                height={400}
                alt="hamburguesa"
                className={styles.imagenrecetaprincipal}
              />
              <p>
                Hamburguesa de porotos negros con pickles de zapallo italiano y
                chutney de cebolla morada
              </p>
            </div>
          </div>
          <div className={styles.buttoncontainerrecetas} >
            <button>VER MÁS RECETAS</button>
          </div>
        </section>
      </div>
    </>
  );
}
