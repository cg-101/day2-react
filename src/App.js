import { AboutUs } from "./views/AboutUs";
import Home from "./views/Home";
import { Product } from "./views/Product";

export default function App() {
  // UI :: JSX
  return (
    <>
      <Home />
      <Product />
      <AboutUs />
    </>
  );
}
