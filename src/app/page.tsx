import Image from "next/image";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import CustonButton from "./Components/CustonButton/CustonButton";
import Rings from "./Components/Icons/Rings";
import ProfileD from "../../public/images/image-profile-desktop.webp";
import Circle from "./Components/Icons/Circle";

export default function Home() {
  return (
    <main className="px-40">
      <SocialMedia />
      <section className="my-5 ">
        <Rings className="absolute left-[-100px] top-[170px]" />
        <h1 className="mb-11 max-w-[709px] text-7xl font-bold leading-[88px]">
          Nice to meet you! I'm{" "}
          <span className="border-b-4 border-greenCuston">Bruno Andrade</span>
        </h1>
        <p className="text-gainsboro text-lg max-w-[445px] font-medium leading-7 mb-16 ">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <CustonButton targetId="" buttonText="contact me" />
        <Image
          src={ProfileD}
          width={445}
          height={720}
          alt=""
          className="absolute top-0 right-[165px] -z-10"
        />
        <Circle className="absolute right-[545px] top-[521px]" />
      </section>
      <div className="w-[1110px] h-px mt-56 bg-white"></div>
    </main>
  );
}
