import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const ProductList = [
  {
    icon: "/img/sticky.png",
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/category/appkit",
  },
  {
    icon: "/img/appkit.png",
    title: "اپکیت",
    description: <>قالب وب اپلیکیشن اپکیت</>,
    url: "/category/appkit",
  },
  {
    icon: "/img/due.png",
    title: "دیوو",
    description: <>قالب وب اپلیکیشن دیوو</>,
    url: "/category/appkit",
  },
];

export default function Landing() {
  return (
    <Layout title="امین چاوه پور">
      <div className={`${styles.landing} container`}>
        <header>
          <h1>محصولات</h1>
        </header>
        <section>
          <div className={styles["product-cards"]}>
            {ProductList.map((p) => (
              <Link
                key={p.title}
                href={p.url}
                className={styles["product-card"]}>
                <img
                  className={styles["product-icon"]}
                  src={p.icon}
                  alt="آیکون"
                />
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
