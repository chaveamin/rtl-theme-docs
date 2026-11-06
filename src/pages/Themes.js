import ProductLanding from "@site/src/components/ProductLanding";

const ProductList = [
  {
    icon: "/img/p-icons/sticky.png",
    title: "استیکی",
    description: <>قالب وب اپلیکیشن</>,
    url: "/sticky/intro",
  },
  {
    icon: "/img/p-icons/appkit.png",
    title: "اپکیت",
    description: <>قالب وب اپلیکیشن</>,
    url: "/appkit/intro",
  },
  {
    icon: "/img/p-icons/duo.png",
    title: "دیوو",
    description: <>قالب وب اپلیکیشن</>,
    url: "/duo/intro",
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
  {
    icon: "/img/p-icons/emyui.png",
    title: "emyui",
    description: <>قالب هاستیگ</>,
    url: "/emyui/help",
  },
];

export default function Themes() {
  return (
    <ProductLanding pageTitle="قالب ها" heading="قالب" products={ProductList} />
  );
}
