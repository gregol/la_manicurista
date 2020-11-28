import Link from "next/link";
import Layout from "../components/Layout";
import { sitInformation } from "@site-setting/site-information";
const IndexPage = () => (
  <Layout title={`Home | ${sitInformation.enterpriseName} `}>
    <h1>Hello Weklcome to {sitInformation.enterpriseName} 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
