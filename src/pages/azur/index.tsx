import Navbar from "../../components/Navbar";
import StripePage from "@/components/StripeWhatsGpt";
import Link from "next/link";
import Faq from "@/components/faq";
import Image from "next/image";

import azur from "public/images/azur.jpg";

export default function StripeGpt() {
  return (
    <>
      <Navbar />
      <div className="w-ful m-3">
        <div className="container px-3 mx-auto homeBackground">
          <div className="flex justify-center flex-col align-middle items-center my-3">
            <Image
              className="rounded-lg w-2/6 md:w-1/6 lg:w-1/6 object-cover"
              src={azur}
              alt="Azur seu assistente de WhatsApp com ChatGPT"
            />
            <h2 className="text-2xl mb-1">Azur sua assistente GPT.</h2>
          </div>
          <div className="mt-3 w-[1080px] max-w-full flex justify-center items-center flex-col mx-auto">
            <p className="">
              🌟 Conheça a Azur! 💬✨ Sua assistente virtual desenvolvida para
              te ajudar a utilizar o ChatGPT pelo WhatsApp. Criado para fornecer
              informações e auxílio de forma educada e prestativa. 🤖
            </p>
            <Link
              href="https://dlxb.short.gy/RtcZws"
              className="text-red-500 hover:text-gray-300"
            >
              <span>Teste grátis</span>
            </Link>
          </div>
        </div>
        <div className="container mx-auto homeBackground mb-5">
          <StripePage />
          <p className="font-bold text-lg -mt-5 mb-8 w-full justify-center items-center flex">
            🎤 Azur suporta entrada de áudio, com transcrição automática para
            sua comodidade! 📝
          </p>
          <div className="p-4 bg-blue-200 text-blue-800 rounded-lg ">
            <p className="font-bold text-lg mb-2">
              🚀 Não perca! Promoção de estreia por tempo limitado! 🎉
            </p>
            <p className="text-sm">
              Aproveite nossos valores promocionais especiais antes que acabem!
              ⏳
            </p>
          </div>

          <p className="mt-3">
            Duvidas entre em contato com o{" "}
            <Link
              href="https://chat.whatsapp.com/Kv6sbZTIWJtDjZvCJIlVy2"
              className="hover:text-red-500 text-gray-300"
            >
              Suporte
            </Link>
            .
          </p>
          <Faq />
        </div>
      </div>
    </>
  );
}
