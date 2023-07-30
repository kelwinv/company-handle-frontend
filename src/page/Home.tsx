import { useCallback, useState } from "react";
import { CompanyList } from "../components/CompanyList";
import { DefaultHeader } from "../components/DefaultHeader";
import { api } from "../server/api";
import { useDidUpdateEffect } from "../utils/useDidUpdateEffect";

type companiesType = {
  id: string;
  cnae: string;
  cnpj: string;
  companyName: string;
  tradingName: string;
}[];

type companiesResponseType = {
  companies: {
    cnae: string;
    cnpj: string;
    company_name: string;
    id: string;
    trading_name: string;
  }[];
  total_items: number;
  total_pages: number;
};

const Home = () => {
  const [companies, setCompanies] = useState<companiesType>([]);

  const getCompanies = useCallback(async () => {
    const { data } = await api.get<companiesResponseType>("/companies");
    const companies = data.companies.map((company) => ({
      id: company.id,
      cnae: company.cnae,
      cnpj: company.cnpj,
      companyName: company.company_name,
      tradingName: company.trading_name,
    }));
    setCompanies(companies);
  }, []);

  useDidUpdateEffect(() => {
    getCompanies();
  }, [getCompanies]);

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
