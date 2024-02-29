"use client";

import Link from "next/link";
import Image from "next/image";
import Git from "../../../../public/images/icon-github.svg";
import FrontEndMentor from "../../../../public/images/icon-frontend-mentor.svg";
import Linkedin from "../../../../public/images/icon-linkedin.svg";
import Gmail from "../../../../public/images/gmail-icon-logo-svgrepo-com.svg";
import { useRef, useState, useEffect } from "react";

export default function SocialMedia() {
  const [copiedMessage, setCopiedMessage] = useState("");
  const [showCopiedMessage, setShowCopiedMessage] = useState(false);
  const textToCopyRef = useRef<HTMLTextAreaElement>(null);

  const handleCopyToClipboard = () => {
    const textToCopy = textToCopyRef.current?.value;
    if (textToCopy) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          setCopiedMessage("O endereço de Gmail foi copiado com sucesso!");
          setShowCopiedMessage(true);
        })
        .catch((error) => {
          console.error("Erro ao copiar texto:", error);
        });
    }
  };

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    if (showCopiedMessage) {
      timeoutId = setTimeout(() => {
        setShowCopiedMessage(false);
      }, 5000); // 5 segundos
    }
    return () => {
      clearTimeout(timeoutId);
    };
  }, [showCopiedMessage]);

  return (
    <div>
      <Link className="text-whiteCuston" href={"/"}>
        BrunoAndrade
      </Link>
      <ul>
        <li>
          <Link href="https://github.com/Brunoalaraujo" target="_blank">
            <Image src={Git} alt="Link para o GitHub de Bruno Andrade" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/brunoandradel-a-dev/"
            target="_blank"
          >
            <Image src={Linkedin} alt="Link para o LinkedIn de Bruno Andrade" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.frontendmentor.io/profile/Brunoalaraujo"
            target="_blank"
          >
            <Image
              src={FrontEndMentor}
              alt="Link para o Front-end Mentor de Bruno Andrade"
            />
          </Link>
        </li>
        <li className="cursor-pointer relative">
          <Image
            onClick={handleCopyToClipboard}
            src={Gmail}
            alt="Link para o copiar o endereço de email de Bruno Andrade"
          />
          <textarea
            ref={textToCopyRef}
            className="hidden"
            defaultValue="asd@asd.com"
          />
          {copiedMessage && (
            <span className="absolute top-0 left-0 mt-2 text-green-600 animate-fade-in-out">
              {copiedMessage}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
}
