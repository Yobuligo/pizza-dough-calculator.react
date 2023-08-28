import MuiSwitch, { SwitchProps } from "@mui/material/Switch";
import { alpha, styled } from "@mui/material/styles";
import { ColorType } from "../../utils/color/ColorType";
import { useColor } from "../../utils/color/useColor";

export const Switch: React.FC<SwitchProps> = (props) => {
  const primaryColor = useColor(ColorType.PRIMARY);
  const secondaryColor = useColor(ColorType.SECONDARY);

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
