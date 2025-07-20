import Layout from "../../layout/Layout";
import ItCompanyAbout from "../../components/itCompany/ItCompanyAbout";
import ItCompanyFaq from "./ItCompanyFaq";
import ItCompanyFeature from "../../components/itCompany/ItCompanyFeature";
import ItCompanyFooter from "../../components/itCompany/ItCompanyFooter";
import ItCompanyHero from "./ItCompanyHero";
import ItCompanyProject from "../../components/itCompany/ItCompanyProject";
import ItCompanySupport from "../../components/itCompany/ItCompanySupport";
import ItCompanySupportTwo from "../../components/itCompany/ItCompanySupportTwo";
import ItCompanyTeam from "./ItCompanyTeam";
import ItCompanyTestimonial from "../../components/itCompany/ItCompanyTestimonial";
import IteCompanyServices from "../../components/itCompany/IteCompanyServices";
import Navbar from "../../layout/Header/Navbar";

import AiCompanyLogSlider from "../../components/aiCompany/AiCompanyLogSlider";
const SentrixCode = () => {
  return (
    <Layout>
      <Navbar navDark itCompany />
      <ItCompanyHero />
      <AiCompanyLogSlider />
      <ItCompanyTeam />
      <ItCompanyFaq />
      <ItCompanyFooter />
    </Layout>
  );
};

export default SentrixCode;
