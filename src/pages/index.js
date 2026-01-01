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
    icon: "/img/p-icons/hostlar.png",
    title: "هاستلر",
    description: <>قالب هاستینگ هاستلر</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "هاستیم",
    description: <>قالب هاستینگ هاستیم</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "برد",
    description: <>قالب هاستینگ برد</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "نوهاست",
    description: <>قالب هاستینگ نوهاست</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "هورن",
    description: <>قالب هاستینگ هورن</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "کوو وی اچ ام",
    description: <>قالب هاستینگ کوو وی اچ ام</>,
    url: "/hostlar/intro",
  },
  {
    icon: "/img/p-icons/hostlar.png",
    title: "ایمی یو آی",
    description: <>قالب هاستینگ ایمی یو آی</>,
    url: "/hostlar/intro",
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
