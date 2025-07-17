import JobFinderTwoBlog from "../../components/jobFinderTwo/JobFinderTwoBlog";
import JobFinderTwoBrand from "../../components/jobFinderTwo/JobFinderTwoBrand";
import JobFinderTwoCta from "../../components/jobFinderTwo/JobFinderTwoCta";
import JobFinderTwoFaq from "../../components/jobFinderTwo/JobFinderTwoFaq";
import JobFinderTwoFeedback from "../../components/jobFinderTwo/JobFinderTwoFeedback";
import JobFinderTwoFooter from "../../components/jobFinderTwo/JobFinderTwoFooter";
import JobFinderTwoHero from "../../components/jobFinderTwo/JobFinderTwoHero";
import JobFinderTwoJobCircular from "../../components/jobFinderTwo/JobFinderTwoJobCircular";
import JobFinderTwoTab from "../../components/jobFinderTwo/JobFinderTwoTab";
import JobFinderTwoTeam from "../../components/jobFinderTwo/JobFinderTwoTeam";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const JobFinderTwo = () => {
  return (
    <Layout>
      <Navbar navDark />
      <JobFinderTwoHero />
      <JobFinderTwoTab />
      <JobFinderTwoJobCircular />
      <JobFinderTwoTeam />
      <JobFinderTwoFeedback />
      <JobFinderTwoBlog />
      <JobFinderTwoBrand />
      <JobFinderTwoFaq />
      <JobFinderTwoCta />
      <JobFinderTwoFooter />
    </Layout>
  );
};

export default JobFinderTwo;
