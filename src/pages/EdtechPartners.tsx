import Layout from "@/components/layout/Layout";
import EdtechHero from "@/components/edtech/EdtechHero";
import EdtechWhyPartners from "@/components/edtech/EdtechWhyPartners";
import EdtechFeaturedPartners from "@/components/edtech/EdtechFeaturedPartners";
import EdtechTestimonials from "@/components/edtech/EdtechTestimonials";
import EdtechGetInvolved from "@/components/edtech/EdtechGetInvolved";

const EdtechPartners = () => {
  return (
    <Layout>
      <EdtechHero />
      <EdtechWhyPartners />
      <EdtechFeaturedPartners />
      <EdtechTestimonials />
      <EdtechGetInvolved />
    </Layout>
  );
};

export default EdtechPartners;
