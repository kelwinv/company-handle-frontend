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
};

const CompanyList = ({ companies }: CompanyListProps) => {
  return (
    <section className="m-auto flex max-w-[min(74rem,90vw)] flex-wrap justify-center gap-x-8 gap-y-6 ">
      {companies.map(({ cnae, cnpj, companyName, id, tradingName }, idx) => (
        <Company
          id={id}
          cnae={cnae}
          cnpj={cnpj}
          companyName={companyName}
          tradingName={tradingName}
          idx={idx}
          key={id}
        />
      ))}
    </section>
  );
};

export { CompanyList };
