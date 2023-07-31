import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useCallback, useState } from "react";

type FilterProps = {
  accFilter: filterType;
  setFilter: React.Dispatch<React.SetStateAction<filterType>>;
};

export type filterType = {
  start: number;
  limit: number;
  sort?: string;
  direction: "asc" | "desc";
  id?: string;
  cnae?: string;
  cnpj?: string;
  company_name?: string | null;
  trading_name?: string;
};

const Filter: React.FC<FilterProps> = ({ setFilter, accFilter }) => {
  const [limit, setLimit] = useState(accFilter.limit);
  const [sort, setSort] = useState(accFilter.sort);
  const [direction, setDirection] = useState(accFilter.direction);
  const [companyName, setCompanyName] = useState("");

  const handleSearchSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const newFilter = {
        company_name: companyName || null,
        limit,
        sort,
        direction,
      };

      setFilter((oldFilter) => ({ ...oldFilter, ...newFilter }));
    },
    [limit, sort, direction, companyName, setFilter],
  );

  return (
    <div className="max-h-[80vh] overflow-y-auto bg-gray-100 p-4">
      <form onSubmit={handleSearchSubmit}>
        <FormControl variant="outlined" fullWidth className="mb-4">
          <InputLabel htmlFor="limit">Limit:</InputLabel>
          <Select
            id="limit"
            value={limit}
            onChange={(e) => setLimit(parseInt(e.target.value as string))}
            label="Limit"
          >
            {[5, 10, 15, 20, 25, 30].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth className="mb-4">
          <InputLabel htmlFor="sort">Sort:</InputLabel>
          <Select
            id="sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as string)}
            label="Sort"
          >
            <MenuItem value="">Selecione...</MenuItem>
            <MenuItem value="id">ID</MenuItem>
            <MenuItem value="cnae">CNAE</MenuItem>
            <MenuItem value="cnpj">CNPJ</MenuItem>
            <MenuItem value="company_name">Nome da Empresa</MenuItem>
            <MenuItem value="trading_name">Nome Fantasia</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" fullWidth className="mb-4">
          <InputLabel htmlFor="direction">Direction:</InputLabel>
          <Select
            id="direction"
            value={direction}
            onChange={(e) => setDirection(e.target.value as "asc" | "desc")}
            label="Direction"
          >
            <MenuItem value="asc">Ascendente</MenuItem>
            <MenuItem value="desc">Descendente</MenuItem>
          </Select>
        </FormControl>

        <TextField
          variant="outlined"
          fullWidth
          id="search"
          label="Buscar por nome da empresa"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          className="mb-4"
        />

        <Button variant="contained" type="submit" className="mr-4">
          Buscar
        </Button>
      </form>
    </div>
  );
};

export { Filter };
