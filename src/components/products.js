import clsx from "clsx";
import Heading from "@theme/Heading";
import Link from "@docusaurus/Link";

const ProductList = [
  {
    title: "استیکی",
    description: <>قالب وب اپلیکیشن استیکی</>,
    url: "/appkit/intro",
  },
  {
    title: "اپکیت",
    description: <>قالب وب اپلیکیشن اپکیت</>,
    url: "/appkit/intro",
  },
  {
    title: "دیوو",
    description: <>قالب وب اپلیکیشن دیوو</>,
    url: "/appkit/intro",
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

export default function Products() {
  return (
    <section>
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
