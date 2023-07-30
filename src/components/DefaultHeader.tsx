import { Button, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconType } from "react-icons";

const DefaultHeader = ({
  pageName,
  redirect,
  ButtonIcon,
}: {
  pageName?: string;
  redirect: { path: string; text: string };
  ButtonIcon?: IconType;
}) => {
  const navigate = useNavigate();

  return (
    <header className="border-b-2 border-[#2422310d]">
      <div className="m-auto h-32 w-full max-w-full md:h-24 md:max-w-[80vw]">
        <div className="flex h-full flex-col justify-between align-bottom md:flex-row">
          <h1 className="mx-auto mt-8 w-min whitespace-nowrap text-4xl font-bold uppercase md:mx-0 md:mt-auto">
            {pageName ?? "Company Handle"}
          </h1>
          <div className="mx-auto mt-0 max-w-[90vw] md:mx-0 md:mt-auto md:max-w-full">
            <Button
              variant="contained"
              className="bg-indigo-500 px-9 py-2 text-base font-bold shadow-md"
              onClick={() => navigate(redirect.path)}
              startIcon={
                ButtonIcon ? (
                  <IconButton aria-label="button icon" size="small">
                    <ButtonIcon className="fill-indigo-50" />
                  </IconButton>
                ) : null
              }
            >
              {redirect.text}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export { DefaultHeader };
