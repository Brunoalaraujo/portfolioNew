import SocialMedia from "./Components/SocialMedia/SocialMedia";
import CustonButton from "./Components/CustonButton/CustonButton";

export default function Home() {
  return (
    <main>
      <header>
        <SocialMedia />
      </header>
      <section className="px-40 my-5 w-screen">
        <h1 className="text-8xl	font-blod tracking-tighter">
          Nice to meet you!
          <br />
          I'm{" "}
          <span className="border-b-4 border-greenCuston">Bruno Andrade</span>
        </h1>
        <p>
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <CustonButton targetId="" buttonText="contact me" />
      </section>
    </main>
  );
}
