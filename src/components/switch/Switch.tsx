import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";

export const Switch: React.FC<SwitchProps> = (props) => {
  const computedStyle = getComputedStyle(document.body);
  const primaryColor = computedStyle.getPropertyValue("--primaryColor");
  const secondaryColor = computedStyle.getPropertyValue("--secondaryColor");

  const ColouredSwitch = styled(MuiSwitch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: secondaryColor,
      "&:hover": {
        backgroundColor: alpha(
          secondaryColor,
          theme.palette.action.hoverOpacity
        ),
      },
    },
    "& .MuiSwitch-track": {
      backgroundColor: primaryColor,
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: secondaryColor,
    },
  }));

  return <ColouredSwitch id={props.id} />;
};
