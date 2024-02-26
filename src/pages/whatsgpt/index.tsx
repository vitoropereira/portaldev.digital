import { FormEvent, useState } from "react";

// import Faq from "../../components/Faq";
import Navbar from "../../components/Navbar";
import StripePage from "@/components/StripeWhatsGpt";

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
      <h3>Whats Bot GPT é um produto Portal dev.</h3>
      <div className="container mx-auto homeBackground">
        <StripePage />
      </div>
    </>
  );
}
