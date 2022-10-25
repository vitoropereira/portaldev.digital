import Head from "next/head";
import { FormEvent, useState } from "react";

import Faq from "../../components/Faq";
import { Loading } from "../../components/Loading";
import Navbar from "../../components/Navbar";
import { SuccessSent } from "../../components/SuccessSent";

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
        <title>Mentoria | portal dev</title>
      </Head>
      <div className="container mx-auto homeBackground">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="mt-6 flex flex-col justify-left align-middle">
            <h1 className="text-4xl md:text-7xl pl-10 mt-3">
              Mentoria <br />
              <span className="text-rose-600">portal dev.</span>
            </h1>
            <p className="text-1xl md:text-2xl pl-10 pr-5 mt-3">
              Precisando de uma ajudinha com o seu código?
            </p>
            <div className="ml-8 mt-3">
              <ul className="text-sm text-gray-100 dark:text-gray-100 w-full mt-6 mb-6">
                <li className="mb-3 flex items-center ">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Não sei o que estou fazendo de errado.
                </li>
                <li className="mb-3 flex items-center ">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Gostaria de entender o porque esta dando este erro.
                </li>
                <li className="mb-3 flex items-center ">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Quero uma explicação sobre o código.
                </li>
                <li className="mb-3 flex items-center ">
                  <svg
                    className="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="6"
                    height="6"
                    stroke="currentColor"
                    fill="#10b981"
                    viewBox="0 0 1792 1792"
                  >
                    <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                  </svg>
                  Outros motivos...
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto py-4">
            <form
              className="flex w-full max-w-xl space-x-3"
              onSubmit={handleSubmit}
            >
              <div className="w-full max-w-7xl px-5 py-10 m-auto mt-10 bg-white rounded-lg shadow dark:bg-gray-800">
                {repositoryHasBeenSent ? (
                  <div className="flex flex-col items-center justify-center">
                    <SuccessSent
                      setRepositoryHasBeenSent={setRepositoryHasBeenSent}
                    />
                  </div>
                ) : (
                  <>
                    <div className="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
                      {isLoading
                        ? "Dados sendo enviado..."
                        : "Envie seu repositório"}
                    </div>
                    {isLoading ? (
                      <div className="flex justify-center items-center">
                        <Loading />
                      </div>
                    ) : (
                      <div className="grid max-w-xl grid-cols-2 gap-4 m-auto">
                        <div className="col-span-2 lg:col-span-1">
                          <div className="relative">
                            <input
                              name="name"
                              onChange={(e) => {
                                setName(e.target.value);
                              }}
                              type="text"
                              id="contact-form-name"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div className="col-span-2 lg:col-span-1">
                          <div className="relative">
                            <input
                              name="email"
                              type="email"
                              onChange={(e) => {
                                setEmail(e.target.value);
                              }}
                              id="contact-form-email"
                              className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                              placeholder="email de resposta"
                            />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <div className="relative">
                            <input
                              className="rounded-l-lg flex-1 border border-gray-300 w-1/5 py-2 px-6 bg-gray-300 text-gray-700 placeholder-gray-700 shadow-sm text-base "
                              placeholder="http://"
                              disabled={true}
                            />

                            <input
                              name="repository"
                              onChange={(e) => {
                                setRepository(e.target.value);
                              }}
                              type="text"
                              id="contact-form-email"
                              className="rounded-r-lg border-transparent flex-1 appearance-none border border-gray-300 w-4/5 py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                              placeholder="Link do repositório"
                            />
                          </div>
                        </div>
                        <div className="col-span-2">
                          <label className="text-gray-700" htmlFor="name">
                            <textarea
                              name="message"
                              onChange={(e) => {
                                setMessage(e.target.value);
                              }}
                              className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-rose-600 focus:border-transparent"
                              id="comment"
                              placeholder="Escreva sua duvida"
                              rows={5}
                              cols={40}
                            ></textarea>
                          </label>
                        </div>
                        <div className="col-span-2 text-right">
                          <button
                            type="submit"
                            className="py-2 px-4 bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                          >
                            Enviar
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-3">
          <div className="mt-6 flex justify-center align-middle max-w-screen-xl mx-auto p-8">
            <h1 className="text-7xl font-extrabold leading-9 border-gray-100 text-gray-100 mb-12">
              Duvidas
            </h1>
          </div>

          <Faq />
        </div>
      </div>
    </>
  );
}
