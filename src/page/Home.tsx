import { AiFillHome } from "react-icons/ai";
import { CompanyList } from "../components/CompanyList";
import { DefaultHeader } from "../components/DefaultHeader";

const Home = () => {
  const companies = [...new Array(25)].map(() => ({
    id: "132",
    cnae: "1324534",
    cnpj: "56415645646",
    companyName: "Company Name",
    tradingName: "Fantasia nome",
  }));
  return (
    <div className="flex min-h-full w-full flex-col bg-home">
      <DefaultHeader
        pageName="home"
        redirect={{
          path: "/create-company",
          text: "crie sua empresa",
        }}
      />
      <main className="flex-1 py-10 duration-300 ease-in">
        {/* <section className="h-[calc(50vh-6rem)]"></section> */}
        <div className=" mb-4 bg-slate-50">Filter</div>
        <CompanyList companies={companies} />
      </main>
      <footer className="h-24 w-full">INFO de contato</footer>
    </div>
  );
};

export { Home };
