import { useTranslation } from "../../hooks/useTranslation";

export const Title: React.FC = () => {
  const { t } = useTranslation();
  return <>{t.title}</>;
};
