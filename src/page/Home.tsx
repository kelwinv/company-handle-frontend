import { useCallback, useState } from "react";
import { CompanyList } from "../components/CompanyList";
import { DefaultHeader } from "../components/DefaultHeader";
import { api } from "../server/api";
import { useDidUpdateEffect } from "../utils/useDidUpdateEffect";
import { Filter, filterType } from "../components/Filter";
import { FooterBar } from "../components/FooterBar";

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
  const [isLoadCompany, setIsLoadCompany] = useState<boolean>(true);
  const [isLoadNewCompanies, setIsLoadNewCompanies] = useState<boolean>(false);
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
    setCompanies([]);
    setIsLoadCompany(true);

    const { data } = await api.get<companiesResponseType>("/companies", {
      params: filter,
    });
    const companies = convertDataToCompanies(data.companies);

    setCompanies(companies);
    setSetTotalPages(data.total_pages);

    setAccPage(1);
    setIsLoadCompany(false);
  }, [filter]);

  const getNextPageCompanies = useCallback(async () => {
    setIsLoadNewCompanies(true);
    const { data } = await api.get<companiesResponseType>("/companies", {
      params: { ...filter, start: accPage },
    });
    const companies = convertDataToCompanies(data.companies);
    setCompanies((oldCompanies) => [...oldCompanies, ...companies]);
    setAccPage((old) => old + 1);
    setIsLoadNewCompanies(false);
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
      <main className="m-auto flex w-full max-w-[min(74rem,90vw)] flex-1 flex-col gap-12 py-10 duration-300 ease-in ">
        <Filter accFilter={filter} setFilter={setFilter} />
        <CompanyList
          companies={companies}
          getNextPage={getNextPageCompanies}
          hasMorePages={totalPages > accPage}
          isLoading={isLoadCompany}
          isLoadingNewCompanies={isLoadNewCompanies}
        />
      </main>
      <FooterBar />
    </div>
  );
};

export { Home };
