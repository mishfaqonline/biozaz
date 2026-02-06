import Home from "../pages/Home";
import { allimages } from "../assets/img";

export const metadata = {
  title: "Biozaz | Medical Imaging, PACS, Ultrasound & Skincare Equipment",
  alternates: { canonical: "https://biozaz.com/" }
};

export default function Page() {
  return <Home sliderImages={allimages} />;
}
