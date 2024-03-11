import Link from "next/link";

interface CustomButtonProps {
  targetHref?: string;
  targetPage?: string;
  buttonText: string;
}

export default function CustomButton({
  targetHref,
  targetPage,
  buttonText,
}: CustomButtonProps) {
  return (
    <Link
      className="h-8 font-bold leading-relaxed tracking-widest uppercase border-b-2 pb-2 border-greenCustom"
      href={`${targetHref}`}
      target={targetPage}
    >
      {buttonText}
    </Link>
  );
}
