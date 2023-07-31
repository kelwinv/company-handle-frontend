import { Alert, Box } from "@mui/material";
import { Company } from "./Company";
import { CompanySkeleton } from "./CompanySkeleton";

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
  isLoading: boolean;
};

const CompanyList = ({
  companies,
  getNextPage,
  hasMorePages,
  isLoading,
}: CompanyListProps) => {
  if (isLoading) {
    return (
      <main className="m-auto w-full flex-1 justify-center">
        <section className="flex flex-wrap justify-center gap-x-8 gap-y-6 xl:justify-start">
          {[...new Array(6)].map(() => (
            <CompanySkeleton />
          ))}
        </section>
      </main>
    );
  }

  return (
    <main className="m-auto w-full flex-1 justify-center">
      {companies.length <= 0 && (
        <Box className="flex h-[30vh] w-full items-center justify-center">
          <Alert
            severity="info"
            className=" flex h-1/2 w-full items-center justify-center rounded-md text-xs shadow-md md:w-1/2 md:text-lg"
          >
            Nem uma empresa foi encontrada
          </Alert>
        </Box>
      )}
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
