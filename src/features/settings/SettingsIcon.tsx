import { Icon } from "../../components/icon/Icon";
import { useModalDialog } from "../../hooks/useModalDialog";
import { texts } from "../../i18n/texts";
import { IconType } from "../../types/IconType";
import { Settings } from "./Settings";

export const SettingsIcon: React.FC = () => {
  const modalDialog = useModalDialog();

  return (
    <Icon
      iconType={IconType.MENU}
      onClick={() =>
        modalDialog.show({
          component: <Settings />,
          title: () => texts.settings.title,
          width: "20rem",
        })
      }
    />
  );
};
