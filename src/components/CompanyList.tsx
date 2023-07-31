import { Company } from "./Company";

type companyType = {
  id: string;
  cnae: string;
  cnpj: string;
  companyName: string;
  tradingName: string;
};

type CompanyListProps = {
  companies: companyType[];
  getNextPage: () => void;
  hasMorePages: boolean;
};

const CompanyList = ({
  companies,
  getNextPage,
  hasMorePages,
}: CompanyListProps) => {
  return (
    <main className="m-auto max-w-[min(74rem,90vw)] justify-center">
      <section className="flex flex-wrap justify-center gap-x-8 gap-y-6 xl:justify-start">
        {companies.map(({ cnae, cnpj, companyName, id, tradingName }, idx) => (
          <Company
            id={id}
            cnae={cnae}
            cnpj={cnpj}
            companyName={companyName}
            tradingName={tradingName}
            idx={idx + 1}
            key={id}
          />
        ))}
      </section>
      {hasMorePages && (
        <button className="m-auto bg-white" onClick={getNextPage}>
          Ver mais
        </button>
      )}
    </main>
  );
};

export { CompanyList };
