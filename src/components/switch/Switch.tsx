import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

const primaryColor = "#f3d396";
const secondaryColor = "#c39a6e";

const ColouredSwitch = styled(MuiSwitch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: secondaryColor,
    "&:hover": {
      backgroundColor: alpha(secondaryColor, theme.palette.action.hoverOpacity),
    },
  },
  "& .MuiSwitch-track": {
    backgroundColor: primaryColor,
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: secondaryColor,
  },
}));

export const Switch: React.FC<SwitchProps> = (props) => {
  return <ColouredSwitch {...props} />;
};
