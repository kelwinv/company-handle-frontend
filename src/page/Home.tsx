import { useCallback, useState } from "react";
import { CompanyList } from "../components/CompanyList";
import { DefaultHeader } from "../components/DefaultHeader";
import { api } from "../server/api";
import { useDidUpdateEffect } from "../utils/useDidUpdateEffect";
import { Filter, filterType } from "../components/Filter";

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
  const [accPage, setAccPage] = useState<number>(0);
  const [totalPages, setSetTotalPages] = useState<number>(1);
  const [filter, setFilter] = useState<filterType>({
    start: 0,
    limit: 5,
    direction: "asc",
  });

  const convertDataToCompanies = (
    companies: companiesResponseType["companies"],
  ) => {
    const newCompanies = companies.map((company) => ({
      id: company.id,
      cnae: company.cnae,
      cnpj: company.cnpj,
      companyName: company.company_name,
      tradingName: company.trading_name,
    }));
    return newCompanies;
  };

  const getCompanies = useCallback(async () => {
    const { data } = await api.get<companiesResponseType>("/companies", {
      params: filter,
    });
    const companies = convertDataToCompanies(data.companies);
    setCompanies(companies);
    setSetTotalPages(data.total_pages);
    setAccPage(1);
  }, [filter]);

  const getNextPageCompanies = useCallback(async () => {
    const { data } = await api.get<companiesResponseType>("/companies", {
      params: { ...filter, start: accPage },
    });
    const companies = convertDataToCompanies(data.companies);
    setCompanies((oldCompanies) => [...oldCompanies, ...companies]);
    setAccPage((old) => old + 1);
  }, [filter, accPage]);

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
        <Filter accFilter={filter} setFilter={setFilter} />
        <CompanyList
          companies={companies}
          getNextPage={getNextPageCompanies}
          hasMorePages={totalPages > accPage}
        />
      </main>
      <footer className="h-24 w-full">INFO de contato</footer>
    </div>
  );
};

export { Home };
