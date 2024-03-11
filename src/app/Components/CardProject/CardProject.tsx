"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CardProjectPropos {
  urlImage: string;
  altImage: string;
  linkHrefProject: string;

  linkHrefCode: string;

  titleCard: string;
  textCard: string;
}

export default function CardProject({
  urlImage,
  altImage,
  linkHrefProject,
  linkHrefCode,
  titleCard,
  textCard,
}: CardProjectPropos) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
        className=" container w-[540px] h-[400px] relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          className={`${isHovered ? "opacity-50" : ""}`}
          src={urlImage}
          alt={altImage}
          fill={true}
        />
        <div
          className={`absolute top-[138px] left-[201px] w-[138px] h-[38px] flex flex-col text-center items-center gap-12  ${
            isHovered ? "visible" : "invisible"
          }`}
        >
          <Link
            className="h-8 font-bold leading-relaxed tracking-widest uppercase border-b-2 pb-2 border-greenCustom"
            href={linkHrefProject}
            target={"_blank"}
          >
            view project
          </Link>
          <Link
            className="h-8 w-24 font-bold leading-relaxed tracking-widest uppercase border-b-2 pb-2 border-greenCustom"
            href={linkHrefCode}
            target={"_blank"}
          >
            view code
          </Link>
        </div>
      </div>
      <div>
        <h4 className="text-2xl font-bold leading-loose uppercase">
          {titleCard}
        </h4>
        <p className="text-lg text-gainsboro font-medium leading-7 uppercase">
          {textCard}
        </p>
      </div>
    </div>
  );
}
