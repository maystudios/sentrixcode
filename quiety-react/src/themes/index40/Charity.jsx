import CharityAbout from "../../components/charity/CharityAbout";
import CharityBlog from "../../components/charity/CharityBlog";
import CharityCommunityes from "../../components/charity/CharityCommunityes";
import CharityFaq from "../../components/charity/CharityFaq";
import CharityFeedback from "../../components/charity/CharityFeedback";
import CharityFooter from "../../components/charity/CharityFooter";
import CharityGoal from "../../components/charity/CharityGoal";
import CharityHero from "../../components/charity/CharityHero";
import CharityWork from "../../components/charity/CharityWork";
import CharityWorkTwo from "../../components/charity/CharityWorkTwo";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const Charity = () => {
  return (
    <>
      <Layout>
        <Navbar navDark />

        <CharityHero />
        <CharityAbout />
        <CharityWork />
        <CharityBlog />
        <CharityGoal />
        <CharityWorkTwo />
        <CharityFeedback />
        <CharityCommunityes />
        <CharityFaq />
        <CharityFooter />
      </Layout>
    </>
  );
};

export default Charity;
