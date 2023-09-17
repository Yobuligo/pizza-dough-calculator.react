import { Icon } from "../../components/icon/Icon";
import { useModalDialog } from "../../hooks/useModalDialog";
import { useTranslation } from "../../hooks/useTranslation";
import { IconType } from "../../types/IconType";
import { texts } from "../../utils/translation/texts";
import { Settings } from "./Settings";

export const SettingsIcon: React.FC = () => {
  const modalDialog = useModalDialog();
  const { t } = useTranslation();

  return (
    <Icon
      iconType={IconType.MENU}
      onClick={() =>
        modalDialog.show({
          component: <Settings />,
          title: () => t(texts.settings.title),
          width: "20rem",
        })
      }
    />
  );
};
