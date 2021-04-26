// React/next imports
import Head from "next/head";
// Component imports
import Header from "./navigation/Header";
import Footer from "./Footer";
// Style imports

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>

      <Header />

      <div>{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Casey Hall Law | Personal Injury Lawyer",
  description:
    "Eastern Kentucky Personal Injury Lawyers. Our team of experienced personal injury lawyers can help you get the compensation you deserve. Casey Hall Law LLP helps clients in the Pikeville and Whitesburg areas in a wide variety of personal injury cases. If you or a loved one has been injured, contact us right",
  keywords:
    "Lawyer, car wreck, dog bit, attorney, accident, personal injury, eastern Kentucky, KY, Fleming-Neon, Whitesburg, Pikeville",
};
