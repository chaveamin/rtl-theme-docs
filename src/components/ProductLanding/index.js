import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

export default function ProductLanding({ pageTitle, heading, products }) {
  return (
    <Layout title={pageTitle}>
      <div className={`${styles.landing} container`}>
        <header>
          <h1>{heading}</h1>
        </header>

        <section>
          <div className={styles["product-cards"]}>
            {products.map((p) => (
              <Link
                key={p.title}
                href={p.url}
                className={styles["product-card"]}
              >
                <span className={styles["product-icon"]}>
                  <img src={p.icon} alt={p.title} />
                </span>

                <div>
                  <Heading as="h3">{p.title}</Heading>
                  <p>{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
