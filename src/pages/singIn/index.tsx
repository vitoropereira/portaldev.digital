import Head from "next/head";
import { SingInGithub } from "../../components/SignInGithub";

export default function SingInPage() {
  return (
    <>
      <Head>
        <title>Login | portal dev</title>
      </Head>
      <div
        className="flex justify-center align-middle"
        style={{
          height: "100vh",
        }}
      >
        <div className="card m-auto">
          <div
            className="card-header"
            style={{
              color: "#000",
            }}
          >
            Escolha sua rede social para fazer o login
          </div>
          <div
            className="card-body"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <SingInGithub />
          </div>
        </div>
      </div>
    </>
  );
}
