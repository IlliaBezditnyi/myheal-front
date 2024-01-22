import { useTranslation } from "react-i18next";

// import { MyCharges } from "../../containers/MyCharges/MyCharges";
// import { ChargesRequests } from "../../containers/ChargesRequests/ChargesRequests";

import { AddableTabBar } from "../../../../components/form/tabs/AddableTabBar/AddableTabBar";
import { PersonalData } from "../PersonalData/PersonalData";

export type Tab = {
  name: string;
  label: string;
  contentRender: () => React.ReactNode;
  permanent?: boolean;
};

export type AddableTabBarProps = {
  tabs: Record<string, Tab>;
  urgent?: string[];
  onChange?: (index: string) => void;
};

export const FormTabs = () => {
  const { t } = useTranslation();

  const availableTabs: Record<string, Tab> = {};

  availableTabs.myCharges = {
    name: "personalData",
    label: t('cabinet.profile.title'),
    permanent: true,
    contentRender() {
      return <PersonalData />;
    },
  };

  // availableTabs.myChargesRequest = {
  //   name: "myChargesRequest",
  //   label: t("charges.myChargesRequest"),
  //   permanent: true,
  //   contentRender() {
  //     return <ChargesRequests />;
  //   },
  // };

  return <AddableTabBar tabs={availableTabs} />;
};