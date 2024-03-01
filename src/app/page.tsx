import SocialMedia from "./Components/SocialMedia/SocialMedia";
import CustonButton from "./Components/CustonButton/CustonButton";

export default function Home() {
  return (
    <main>
      <header>
        <SocialMedia />
      </header>
      <section>
        <h1>
          Nice to meet you!
          <br />
          I'm Bruno Andrade
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
