import Link from "next/link";

interface CustonButtonProps {
  targetId: string;
  buttonText: string;
}

export default function CustonButton({
  targetId,
  buttonText,
}: CustonButtonProps) {
  return (
    <Link
      className="text-white text-base font-bold leading-relaxed tracking-widest uppercase border-b-2 pb-2 border-greenCuston"
      href={`#${targetId}`}
    >
      {buttonText}
    </Link>
  );
}
