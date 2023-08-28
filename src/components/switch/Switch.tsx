import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

export const Switch: React.FC<SwitchProps> = (props) => {
  const colour = getComputedStyle(document.body).getPropertyValue(
    "--secondaryColor"
  );

  const ColouredSwitch = styled(MuiSwitch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: colour,
      "&:hover": {
        backgroundColor: alpha(colour, theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: colour,
    },
  }));

  return <ColouredSwitch id={props.id} />;
};
