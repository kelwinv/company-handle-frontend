import { AiFillHome } from "react-icons/ai";
import { DefaultHeader } from "../components/DefaultHeader";

const CreateCompany = () => {
  return (
    <div className="flex min-h-full w-full flex-col bg-home">
      <DefaultHeader
        pageName="crie sua empresa"
        redirect={{ path: "/", text: "Voltar" }}
        ButtonIcon={AiFillHome}
      />
      <footer className="h-24 w-full">INFO de contato</footer>
    </div>
  );
};

export { CreateCompany };
