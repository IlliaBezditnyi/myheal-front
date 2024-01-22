import { BaseScreen } from "../../../../shared/components/layout/Screen/BaseScreen";
import { PageHeader } from "../../../../shared/components/layout/Header/PageHeader";
import { FormTabs } from "./components/FormTabs/FormTabs";
import { useTranslation } from "react-i18next";

export function Page() {
  const { t } = useTranslation();

  return (
    <BaseScreen>
      <PageHeader
        title={t("menu.profile.settings")}
      />
      <FormTabs />
    </BaseScreen>
  );
}