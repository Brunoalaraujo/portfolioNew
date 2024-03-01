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
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      href={`#${targetId}`}
    >
      {buttonText}
    </Link>
  );
}
