import Layout from "@theme/Layout";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";
import styles from "../components/ProductLanding/styles.module.css";
import "../css/custom.css";

const CatList = [
  {
    icon: "/img/theme.png",
    title: "قالب",
    url: "/themes",
  },
  {
    icon: "/img/plugin.png",
    title: "افزونه",
    url: "/modules",
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
          <div className="cat-cards">
            {CatList.map((p) => (
              <Link key={p.title} href={p.url} className="cat-card">
                <img className="prod-icon" src={p.icon} alt="آیکون" />
                <Heading className="cat-card-title" as="h3">
                  {p.title}
                </Heading>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
