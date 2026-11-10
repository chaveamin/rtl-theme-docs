import ProductLanding from "@site/src/components/ProductLanding";

const ProductList = [
  {
    icon: "/img/p-icons/elansaz.png",
    title: "اعلان ساز",
    description: "افزونه اعلان مشتری whmcs",
    url: "/modules/elansaz-whmcs-module/install",
  },
  {
    icon: "/img/p-icons/pocketinvoice.png",
    title: "پاکت",
    description: "افزونه فاکتور whmcs",
    url: "/modules/pocketinvoice/help",
  },
  {
    icon: "/img/p-icons/taeedban.png",
    title: "تایید‌بان",
    description: "افزونه تایید ایمیل whmcs",
    url: "/modules/taeedban-whmcs-module/install",
  },
];

export default function Modules() {
  return (
    <ProductLanding
      pageTitle="افزونه ها"
      heading="افزونه"
      products={ProductList}
    />
  );
}
