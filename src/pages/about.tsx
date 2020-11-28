import Link from "next/link";
import Layout from "../components/Layout";
import { sitInformation } from "@site-setting/site-information";

const AboutPage = () => (
  <Layout t title={`About | ${sitInformation.enterpriseName} `}>
    <h1>About</h1>
    <p>{sitInformation.aboutUs}</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
