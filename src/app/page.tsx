import Image from "next/image";
import SocialMedia from "./Components/SocialMedia/SocialMedia";
import CustomButton from "./Components/CustomButton/CustomButton";
import Technologies from "./Components/Technologies/Technologies";
import CustomForm from "./Components/CustomForm/CustomForm";

import Rings from "./Components/Icons/Rings";
import Circle from "./Components/Icons/Circle";
import CardProject from "./Components/CardProject/CardProject";

import ProfileD from "../../public/images/image-profile-desktop.webp";
import DesignPt from "../../public/images/thumbnail-project-1-large.webp";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center">
      <SocialMedia className=" mb-32 mx-40" />
      {/* Banner TOP */}
      <section className="my-5 relative w-[1110px]">
        <Rings className="absolute left-[-300px] top-[-60px]" />
        <h1 className="mb-11 max-w-[709px] text-7xl font-bold leading-[88px]">
          Nice to meet you! I'm{" "}
          <span className="border-b-4 border-greenCustom">Bruno Andrade</span>
        </h1>
        <p className="text-gainsboro text-lg max-w-[445px] font-medium leading-7 mb-16 ">
          Based in the UK, I'm a front-end developer passionate about building
          accessible web apps that users love.
        </p>
        <CustomButton targetHref="#contact" buttonText="contact me" />
        <Image
          src={ProfileD}
          width={445}
          height={720}
          alt=""
          className="absolute top-[-220px] right-0 -z-10"
        />
        <Circle className="absolute right-[380px] bottom-[-30px]" />
      </section>
      <div className="w-[1110px] h-px mt-56 bg-white"></div>
      {/* Technologies */}
      <section className="max-w-[1110px] mt-20 mb-36 grid grid-cols-3 gap-x-8 gap-y-14 relative">
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Technologies
          titleTechnologies="next js"
          textTechnologies="using in 2 projects"
        />
        <Rings className="-bottom-12 -right-96 absolute" />
      </section>
      {/* Projects */}
      <section className="mb-36">
        <div className="flex items-center justify-between mb-20">
          <h2 className="text-7xl font-bold leading-[88px] capitalize">
            projects
          </h2>
          <CustomButton targetHref="#contact" buttonText="contact me" />
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-16">
          <CardProject
            urlImage={DesignPt.src}
            altImage="Teste"
            linkHrefProject="a"
            linkHrefCode="https://www.tibia.com/"
            titleCard="Titulo1"
            textCard="css html"
          />
          <CardProject
            urlImage={DesignPt.src}
            altImage="Teste"
            linkHrefProject="a"
            linkHrefCode="https://www.tibia.com/"
            titleCard="Titulo1"
            textCard="css html"
          />
          <CardProject
            urlImage={DesignPt.src}
            altImage="Teste"
            linkHrefProject="a"
            linkHrefCode="https://www.tibia.com/"
            titleCard="Titulo1"
            textCard="css html"
          />
        </div>
      </section>
      {/* Contact */}
      <section
        id="contact"
        className="bg-grayCustom w-screen px-40 py-20 relative"
      >
        <div className="container flex justify-between">
          <div className="w-[445px] h-52">
            <h2 className="text-7xl font-bold leading-[88px] capitalize ">
              contact
            </h2>
            <p className="text-lg text-gainsboro font-medium leading-7">
              I would love to hear about your project and how I could help.
              Please fill in the form, and I'll get back to you as soon as
              possible.
            </p>
          </div>
          <CustomForm />
        </div>
        <Rings className="absolute bottom-[275px] left-[-250px] " />
        <div className="w-[1110px] h-px mt-56 bg-white"></div>
        <SocialMedia className="mt-12" />
      </section>
    </main>
  );
}
