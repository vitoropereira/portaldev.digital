import Link from "next/link";

interface Props {
  code: string;
}

export function EmptyMyPoolList({ code }: Props) {
  async function handleCodeShare() {}
  return (
    <div className="flex-wrap flex-row justify-center p-4">
      <span className="text-gray-200 text-sm">
        Esse bolão ainda não tem participantes, que tal
      </span>

      <Link href={`javascript:handleCodeShare`}>
        <span className="text-yellow-500">compartilhar o código</span>
      </Link>

      <span className="text-gray-200 text-sm">do bolão com alguém?</span>

      <span className="text-gray-200 mr-1">Use o código</span>

      <span className="text-gray-200 text-sm text-center">{code}</span>
    </div>
  );
}
