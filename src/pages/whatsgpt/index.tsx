import { FormEvent, useState } from "react";

import Navbar from "../../components/Navbar";
import StripePage from "@/components/StripeWhatsGpt";
import Link from "next/link";
import Faq from "@/components/faq";
import Image from "next/image";

import whatsBotGpt from "public/images/whatsBotGpt.png";

export default function StripeGpt() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [repository, setRepository] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repositoryHasBeenSent, setRepositoryHasBeenSent] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    setIsLoading(true);
    event.preventDefault();

    let data = {
      name,
      email,
      message,
      repository,
    };

    fetch("/api/emailSent", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        console.log("Response received");
        console.log(res);
        if (res.status === 200) {
          setName("");
          setEmail("");
          setMessage("");
          setRepository("");
          setRepositoryHasBeenSent(true);
        } else {
          alert("Error ao enviar a o email. Tente novamente mais tarde.");
          console.log(res);
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto homeBackground w-[768px] grid md:grid-cols-2 grid-cols-1">
        <div className="flex justify-center my-3">
          <Image
            className="rounded-lg w-1/3 md:w-1/2 lg:w-1/2 object-cover"
            src={whatsBotGpt}
            alt="Whats Bot GPT"
          />
        </div>
        <div className="mt-3">
          <h2 className="text-2xl">Whats Bot GPT é um produto Portal dev.</h2>
          <p className="mb-0">
            🌟 Conheça o Whats Bot GPT! 💬✨ Seu assistente virtual desenvolvido
            para te ajudar a utilizar o ChatGPT pelo WhatsApp. Criado para
            fornecer informações e auxílio de forma educada e prestativa. 🤖
          </p>
        </div>
      </div>
      <div className="container mx-auto homeBackground w-[768px] mb-5">
        <StripePage />
        <div className="p-4 bg-blue-200 text-blue-800 rounded-lg">
          <p className="font-bold text-lg mb-2">
            🚀 Não perca! Promoção de estreia por tempo limitado! 🎉
          </p>
          <p className="text-sm">
            Aproveite nossos valores promocionais especiais antes que acabem! ⏳
          </p>
        </div>

        <p>
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
    </>
  );
}
