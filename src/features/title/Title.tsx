import { useTranslation } from "../../hooks/useTranslation";

export const Title: React.FC = () => {
  const { t } = useTranslation();
  return <h3>{t.title}</h3>;
};
