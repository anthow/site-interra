import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";

const FormationPage = ({ data }) => (
  <Layout className="">
    <Seo title="Formation interculturelle" />
    <div className="w-12/12">
      <article className="w-10/12 mt-2  m-auto">
        <h1 className="font-black text-4xl mb-10 md:mb-20 text-bleu-interra  text-center">
          {" "}
          {data.datoCmsFormationInterculturelle.titre}
        </h1>
        <section className="md:grid grid-cols-2 mb-10 flex flex-col gap-x-10 gap-y-10 md:gap-y-20">
          <div className="order-1 md:order-2">
            <h2 className="font-black text-2xl mb-5 text-bleu-interra ">
              {" "}
              {data.datoCmsFormationInterculturelle.titreOrganiser}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationInterculturelle.texteUnOrganiser,
              }}
              className="paragraphe"
            ></div>
          </div>
          <figure className="order-1 md:order-2">
            <GatsbyImage
              image={
                data.datoCmsFormationInterculturelle.imageUneOrganiser
                  .gatsbyImageData
              }
              alt={data.datoCmsFormationInterculturelle.imageUneOrganiser.alt}
              className=""
            />
          </figure>
        </section>
        <div
          dangerouslySetInnerHTML={{
            __html: data.datoCmsFormationInterculturelle.texteUnUn,
          }}
          className="paragraphe mb-10"
        ></div>
        <section className="md:grid grid-cols-2 mb-10 flex flex-col gap-x-10 gap-y-10 md:gap-y-20">
          <figure>
            <GatsbyImage
              image={
                data.datoCmsFormationInterculturelle.imageDeuxOrganiser
                  .gatsbyImageData
              }
              alt={data.datoCmsFormationInterculturelle.imageDeuxOrganiser.alt}
              className=""
            />
          </figure>
          <div>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsFormationInterculturelle.texteDeuxOrganiser,
              }}
              className="paragraphe"
            ></div>
          </div>
        </section>
        

    <section className=" bg-bleu-interra mb-10  md:mb-20 flex flex-col md:grid grid-cols-2 text-white gap-10 md:gap-20  justify-around">
          <figure className="h-max">
            <GatsbyImage
              image={data.datoCmsFormationInterculturelle.imageTroisOrganiser.gatsbyImageData}
              alt={data.datoCmsFormationInterculturelle.imageTroisOrganiser.alt}
              className=" min-h-full justify-self-end      "
            />
          </figure>

           <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationInterculturelle.texteTroisOrganiser,
            }}
            className="paragraphe p-5"
          ></div>
        </section>


       <h2 className="font-black text-3xl text-center mb-10 text-bleu-interra"> Les coachs</h2> 
    <section className="  md:grid grid-cols-2 mb-10 flex flex-col gap-x-10 gap-y-10 md:gap-y-20">
    <section className="md:grid grid-cols-2 flex flex-col gap-x-10 gap-y-5 ">
    <figure>
            <GatsbyImage
              image={
                data.datoCmsFormationInterculturelle.imageFormateurUn
                  .gatsbyImageData
              }
              alt={data.datoCmsFormationInterculturelle.imageFormateurUn.alt}
              className=""
            />
            </figure>
            <div className="flex flex-col gap-5">
            <h3 className="font-black text-xl mb-5 text-bleu-interra ">{data.datoCmsFormationInterculturelle.nomFormateurUn}</h3>

            <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationInterculturelle.texteFormateurUn,
            }}
            className="paragraphe"
          ></div>
            </div>
</section>
<section className="md:grid grid-cols-2 flex flex-col gap-x-10 gap-y-5 ">
    <figure>
            <GatsbyImage
              image={
                data.datoCmsFormationInterculturelle.imageFormateurDeux
                  .gatsbyImageData
              }
              alt={data.datoCmsFormationInterculturelle.imageFormateurDeux.alt}
              className=""
            />
            </figure>
            <div className="flex flex-col gap-5">
            <h3 className="font-black text-xl mb-5 text-bleu-interra ">{data.datoCmsFormationInterculturelle.nomFormateurDeux}</h3>

            <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsFormationInterculturelle.texteFormateurDeux,
            }}
            className="paragraphe"
          ></div>
            </div>
</section>
</section>
<figure className="mt-10">
            <GatsbyImage
              image={
                data.datoCmsFormationInterculturelle.imageFormateurs
                  .gatsbyImageData
              }
              alt={data.datoCmsFormationInterculturelle.imageFormateurs.alt}
              className=""
            />
  </figure>
      </article>
    </div>
  </Layout>
);


export const query = graphql`
  {
    datoCmsFormationInterculturelle {
        imageFormateurDeux {
            alt
            gatsbyImageData
          }
          imageFormateurUn {
            alt
            gatsbyImageData
          }
          imageFormateurs {
            alt
            gatsbyImageData
          }
          nomFormateurDeux
          nomFormateurUn
          texteFormateurDeux
          texteFormateurUn

      imageDeuxOrganiser {
        gatsbyImageData
        alt
      }
      imageUneOrganiser {
        gatsbyImageData
        alt
      }
      imageTroisOrganiser {
        gatsbyImageData
        alt
      }
      texteDeuxOrganiser
      texteTroisOrganiser
      texteUnOrganiser
      texteUnUn
      titre
      titreOrganiser
    }
  }
`;

export default FormationPage;
