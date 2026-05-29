import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "./styles.module.css";

const ProductList = [
  {
    icon: "/img/p-icons/sticky.png",
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/sticky/intro",
  },
  {
    icon: "/img/p-icons/appkit.png",
    title: "اپکیت",
    description: <>قالب وب اپلیکیشن اپکیت</>,
    url: "/appkit/intro",
  },
  {
    icon: "/img/p-icons/duo.png",
    title: "دیوو",
    description: <>قالب وب اپلیکیشن دیوو</>,
    url: "/duo/intro",
  },
  {
    icon: "/img/p-icons/pocketinvoice.png",
    title: "پاکت",
    description: <>قالب فاکتور whmcs پاکت</>,
    url: "/pocketinvoice/help",
  },
  {
    icon: "/img/p-icons/bredh.png",
    title: "برد",
    description: <>قالب هاستیگ</>,
    url: "/bredh/help",
  },
  {
    icon: "/img/p-icons/coowhm.png",
    title: "coowhm",
    description: <>قالب هاستیگ</>,
    url: "/coowhm/help",
  },
  {
    icon: "/img/p-icons/horn.png",
    title: "هورن",
    description: <>قالب هاستیگ</>,
    url: "/horn/help",
  },
  {
    icon: "/img/p-icons/nuhost.png",
    title: "نوهاست",
    description: <>قالب هاستیگ</>,
    url: "/nuhost/help",
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
                className={styles["product-card"]}
              >
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
