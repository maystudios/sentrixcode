import JobFinderBlog from "../../components/jobFinder/JobFinderBlog";
import JobFinderCategories from "../../components/jobFinder/JobFinderCategories";
import JobFinderCounter from "../../components/jobFinder/JobFinderCounter";
import JobFinderCountries from "../../components/jobFinder/JobFinderCountries";
import JobFinderFaq from "../../components/jobFinder/JobFinderFaq";
import JobFinderFeedback from "../../components/jobFinder/JobFinderFeedback";
import JobFinderFooter from "../../components/jobFinder/JobFinderFooter";
import JobFinderHero from "../../components/jobFinder/JobFinderHero";
import JobFinderHire from "../../components/jobFinder/JobFinderHire";
import JobFinderJobCircular from "../../components/jobFinder/JobFinderJobCircular";
import JobFinderPayment from "../../components/jobFinder/JobFinderPayment";
import Navbar from "../../layout/Header/Navbar";
import Layout from "../../layout/Layout";

const JobFinder = () => {
  return (
    <Layout classOpt="home-38-bg">
      <Navbar />
      <JobFinderHero />
      <JobFinderCounter />
      <JobFinderCategories />
      <JobFinderJobCircular />
      <JobFinderPayment />
      <JobFinderCountries />
      <JobFinderFeedback />
      <JobFinderHire />
      <JobFinderFaq />

      <JobFinderBlog />

      <JobFinderFooter />
    </Layout>
  );
};

export default JobFinder;
