import Link from "next/link";
import GithubIcon from "../Icons/GithubIcon";
import LinkedinIcon from "../Icons/LinkedinIcon";
import FrontendMentorIcon from "../Icons/FrontendMentorIcon";

interface SocialMediaProps {
  className?: string;
}

export default function SocialMedia({ className }: SocialMediaProps) {
  return (
    <nav
      className={`flex flex-grow items-center max-w-[1110px]  justify-between ${className}`}
    >
      <Link
        className="text-[32px] font-bold leading-loose"
        href={"/"}
        role="link"
      >
        BrunoAndrade
      </Link>
      <ul className="flex w-48 justify-around">
        <li>
          <Link
            href="https://github.com/Brunoalaraujo"
            target="_blank"
            role="link"
          >
            <GithubIcon alt="Ícone do GitHub" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/brunoandradel-a-dev/"
            target="_blank"
            role="link"
          >
            <LinkedinIcon alt="Ícone do LinkedIn" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.frontendmentor.io/profile/Brunoalaraujo"
            target="_blank"
            role="link"
          >
            <FrontendMentorIcon alt="Ícone do LinkedIn" />
          </Link>
        </li>
      </ul>
    </nav>
  );
}
