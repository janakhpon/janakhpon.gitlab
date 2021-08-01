import Hero from "@components/hero";
import Techs from "@components/techs";
import Timeline from "@components/Timeline";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <Hero />
      <Techs />
      <Timeline />
    </>
  );
}
