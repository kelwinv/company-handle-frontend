import Button from "@mui/material/Button";
import { CompanyList } from "../components/CompanyList";

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
      <header className="border-b-2 border-[#2422310d]">
        <div className="m-auto h-24 w-full max-w-[80vw]">
          <div className="flex h-full flex-col justify-center align-bottom md:flex-row md:justify-between">
            <h1 className="mx-auto mt-auto w-min whitespace-nowrap text-4xl font-bold uppercase md:mx-0">
              Company Handle
            </h1>
            <Button
              variant="contained"
              className="mt-auto bg-indigo-500 px-9 py-2 text-base font-bold shadow-md"
            >
              crie sua empresa
            </Button>
          </div>
        </div>
      </header>
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
