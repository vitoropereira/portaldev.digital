import Navbar from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import Head from "next/head";
import { FormEvent, useState } from "react";

interface Project {
  name: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    name: "SmartMeet 🗓️",
    description:
      "Gerencie seus agendamentos de forma eficiente e compartilhe sua agenda com facilidade.",
    link: "https://smartmeet-git-main-portaldev.vercel.app/",
  },
  {
    name: "WebSell 🛒",
    description:
      "Crie sua loja virtual personalizada e venda produtos e serviços online.",
    link: "https://websell-online.vercel.app/",
  },
  {
    name: "Insight Vídeo IA 🎥",
    description:
      "Analise vídeos com inteligência artificial e obtenha insights valiosos.",
    link: "https://insightvideoia.com.br",
  },
  {
    name: "DataClarityIA 📊",
    description:
      "Capacite sua empresa com insights estratégicos usando Inteligência Artificial.",
    link: "https://dataclarityia.com.br",
  },
  {
    name: "Respondeaqui 💬",
    description:
      "Conecte-se com outras pessoas e compartilhe ideias em uma plataforma de discussão online.",
    link: "https://respondeaqui.com.br",
  },
  {
    name: "Bill Scanner 🧾",
    description: "Simplifique a digitalização de faturas e recibos.",
    link: "https://bill-scanner.vercel.app",
  },
  {
    name: "Quiz 🧠",
    description: "Crie e compartilhe questionários interativos.",
    link: "https://quiz-neon-eta.vercel.app",
  },
  {
    name: "Azur 🤖",
    description:
      "Uma assistente virtual inteligente e acessível, que facilita a vida através do ChatGPT no WhatsApp.",
    link: "https://dlxb.short.gy/LFGECb",
  },
  {
    name: "Startup News 🚀",
    description:
      "As novidades mais quentes em startups e tecnologias, direto para você com o Startup News!",
    link: "https://dlxb.short.gy/LkT6nP",
  },
];

export default function Mentoring() {
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
      <Head>
        <title>Projetos | portal dev</title>
      </Head>
      <div className="container mx-auto homeBackground">
        <div className="grid grid-cols-1">
          <div className="mt-6 flex flex-col justify-left align-middle">
            <h1 className="text-4xl md:text-7xl pl-10 mt-3">
              Projetos <br />
              <span className="text-rose-600">portal dev.</span>
            </h1>
            <p className="text-1xl md:text-2xl pl-10 pr-5 mt-3">
              Esses são alguns dos projetos criados e desenvolvidos pelo
              portaldev.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap mb-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2 mt-10"
            >
              <ProjectCard {...project} />
            </div>
          ))}
          <div className="w-full text-center mt-4 text-gray-500">
            Observação: Alguns projetos ainda não foram concluídos e, portanto,
            podem conter erros.
          </div>
        </div>
      </div>
    </>
  );
}
