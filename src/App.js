import logo from "./logo.svg";
import "./App.css";

export default function App() {
  // UI :: JSX
  return (
    <>
      <Home />
      <AboutUs />
    </>
  );
}

function Home() {
  return (
    <div className="text-primary">
      HOme Component Lorem ipsum, dolor sit amet consectetur adipisicing
      elit. Recusandae explicabo ad perspiciatis alias, nisi molestias
      libero sint officiis autem corrupti ipsam eum animi veniam voluptas
      voluptates odio. Accusantium, odit itaque.
    </div>
  );
}

function AboutUs() {
  return (
    <div className="text-info">
      About Us Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Architecto perferendis ut ullam placeat cumque vel porro, maxime quis
      eveniet at a ipsam veniam aliquam incidunt, ratione veritatis minima.
      Dolorem, hic!
    </div>
  );
}
