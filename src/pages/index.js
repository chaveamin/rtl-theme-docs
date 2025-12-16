import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const ProductList = [
  {
    icon: "./appkit.png",
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/category/اپکیت",
  },
  {
    icon: "./appkit.png",
    title: "اپکیت",
    description: <>قالب وب اپلیکیشن اپکیت</>,
    url: "/category/اپکیت",
  },
  {
    icon: "./appkit.png",
    title: "دیوو",
    description: <>قالب وب اپلیکیشن دیوو</>,
    url: "/category/اپکیت",
  },
];

export default function Landing() {
  return (
    <Layout title="محصولات">
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
                <img src={p.icon} />
                <Heading as="h3">{p.title}</Heading>
                <p>{p.description}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
