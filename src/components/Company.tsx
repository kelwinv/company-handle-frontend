import { Chip, IconButton, Tooltip } from "@mui/material";
import { AiFillDelete, AiFillEdit, AiOutlineInfoCircle } from "react-icons/ai";

type CompanyProps = {
  id: string;
  companyName: string;
  tradingName: string;
  cnpj: string;
  cnae: string;
  idx: number;
};

const Company = ({
  id,
  companyName,
  tradingName,
  cnpj,
  cnae,
  idx,
}: CompanyProps) => {
  console.log(navigator);

  const copyTextToClipboard = async () => {
    if (!("clipboard" in navigator)) return;

    await navigator.clipboard.writeText(id);
  };

  return (
    <div className="w-full max-w-xl flex-col rounded-sm bg-indigo-50  drop-shadow-md">
      <span className="absolute right-2 top-2 text-gray-900">{idx}</span>
      <section className="flex justify-between p-6">
        <div>
          <h1 className="text-2xl font-bold text-indigo-900">{companyName}</h1>
          <h2 className="pl-1 text-gray-900">{tradingName}</h2>
        </div>
        <Tooltip title={`Copy id: ${id}`} placement="top-end">
          <IconButton className="p-3" onClick={() => copyTextToClipboard()}>
            <AiOutlineInfoCircle
              className=" h-8 w-8 fill-rose-500 p-1"
              style={{ size: "2rem" }}
            />
          </IconButton>
        </Tooltip>
      </section>
      <div className="flex justify-center gap-2 p-4 pt-0">
        <p className="text-gray-900">
          CNPJ:
          <strong>{cnpj}</strong>
        </p>
        <span>|</span>
        <p className="text-gray-900">
          CNAE: <strong> {cnae}</strong>
        </p>
      </div>
      <div className="h-[1px] w-full bg-gray-300" />
      <section className="flex gap-2 p-2 align-middle">
        <Chip
          label="Deletable"
          onClick={() => alert("deletado")}
          icon={<AiFillDelete className="h-4 w-4" />}
          variant="outlined"
          color="error"
          className="rounded-md p-1"
        />
        <Chip
          label="Excluir Empresa"
          onClick={() => alert("editar")}
          icon={<AiFillEdit className="h-4 w-4" />}
          variant="outlined"
          color="info"
          className="rounded-md p-1"
        />
      </section>
    </div>
  );
};

export { Company };
