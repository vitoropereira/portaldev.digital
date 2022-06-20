import { Check } from "phosphor-react";

interface SuccessSentProps {
  setRepositoryHasBeenSent: (repositoryHasBeenSent: boolean) => void;
}

export function SuccessSent({ setRepositoryHasBeenSent }: SuccessSentProps) {
  return (
    <>
      <div className="flex flex-col items-center py-10">
        <Check className="w-12 h-12 text-rose-600" />

        <span className="text-xl text-gray-900  mt-2">
          Recebemos seu envio!
        </span>

        <p className="text-center text-gray-700 text-lg">
          Em breve enviaremos o Feedback.
        </p>

        <button
          className="py-2 px-6 mt-6 bg-zinc-800 rounded-lg border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:border-brand-500 focus:bg-brand-500 focus:outline-none"
          type="button"
          onClick={() => setRepositoryHasBeenSent(false)}
        >
          Quero enviar outro repositório.
        </button>
      </div>
    </>
  );
}
