import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

const ProductList = [
  {
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/docs/intro",
  },
  {
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/docs/intro",
  },
];

function Product({ title, description, url }) {
  return (
    <Link href={url} className={clsx("product-card col")}>
      <div className="text--left">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="product-cards">
          {ProductList.map((props, idx) => (
            <Product key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
