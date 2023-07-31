import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { useCallback, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

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
  const [openOrderList, setOpenOrderList] = useState(false);

  const updateFilter = useCallback(() => {
    const newFilter = {
      company_name: companyName || null,
      limit,
      sort,
      direction,
    };

    setFilter((oldFilter) => ({ ...oldFilter, ...newFilter }));
  }, [limit, sort, direction, companyName, setFilter]);

  return (
    <div className="m-auto flex w-full flex-col justify-between gap-4 md:flex-row">
      <Box className="flex flex-1 items-end justify-between gap-4 md:justify-start">
        <Button
          onClick={() => setOpenOrderList(true)}
          className="flex"
          variant="outlined"
        >
          Ordenar Lista
        </Button>
        <FormControl variant="outlined" fullWidth className="max-w-[6rem]">
          <InputLabel htmlFor="limit">Limit:</InputLabel>
          <Select
            id="limit"
            value={limit}
            onChange={(e) => {
              setLimit(parseInt(e.target.value as string));
              updateFilter();
            }}
            label="Limit"
            variant="standard"
          >
            {[5, 10, 15, 20, 25, 30].map((value) => (
              <MenuItem key={value} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box>
        <FormControl variant="standard">
          <InputLabel htmlFor="standard-company">Busque empresas</InputLabel>
          <Input
            id="standard-company"
            type={"text"}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                updateFilter();
              }
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={() => updateFilter()}>
                  <AiOutlineSearch />
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Box>
      <Dialog
        disableEscapeKeyDown
        open={openOrderList}
        onClose={() => setOpenOrderList(false)}
      >
        <DialogTitle>Ordenar Lista</DialogTitle>
        <DialogContent>
          <Box component="form" className="flex flex-wrap gap-4 p-4">
            <FormControl variant="outlined" sx={{ m: 1, minWidth: 120 }}>
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

            <FormControl
              variant="outlined"
              sx={{ m: 1, minWidth: 120 }}
              className=""
            >
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
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenOrderList(false)}>Cancel</Button>
          <Button
            onClick={() => {
              setOpenOrderList(false);
              updateFilter();
            }}
          >
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export { Filter };
