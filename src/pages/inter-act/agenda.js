import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../../components/layout";
import Seo from "../../components/seo";
import { GatsbyImage } from "gatsby-plugin-image";
import { StaticImage } from "gatsby-plugin-image";


const agenda = ({ data }) => (
  <Layout className="">
    <Seo title="Agenda" />
    <main className="w-10/12 m-auto">
      <h1 className="font-black text-4xl mb-10  text-vert-interra  bg-white text-center">
        Agenda
      </h1>
      <article className="flex flex-col gap-10 md:grid grid-cols-4">
        {data.allDatoCmsAgenda.edges.map(({ node }) => {
          return (
            <>
              <section className="border flex flex-col">
                <div className="bg-vert-interra text-center p-2 text-xl text-white font-black">
                  Le {node.dateDeLVNement}
                </div>
                <GatsbyImage
                  image={node.atelier.image.gatsbyImageData}
                  alt={node.atelier.image.alt}
                  className="h-full w-full mb-4"
                />
                <div className="flex flex-col gap-2 px-2 mb-4">
                  <h2 className="text-white bg-vert-interra w-max px-2  text-lg">
                    {node.atelier.nomDeLAtelier}
                  </h2>
                  <p> par {node.atelier.organisateur}</p>{" "}
                  <div className="flex flex-row ">
                    <p className="text-vert-interra">réservation:</p> 
                    <span className="w-auto    m-auto">
              <a
                href="https://api.whatsapp.com/send?phone=0032491520520"
                rel="noreferrer"
                target="_blank"
              >
                <figure className="">
                  <StaticImage
                    src="../../../images/whatsapp.png"
                    width={30}
                    quality={95}
                    formats={["auto", "webp", "avif"]}
                    alt="bouton whatsapp"
                  />{" "}
                </figure>
              </a>
            </span>

                  </div>
                </div>
              </section>
            </>
          );
        })}
      </article>
    </main>
  </Layout>
);
export const query = graphql`
  query {
    allDatoCmsAgenda(sort: { order: ASC, fields: dateDeLVNement }) {
      edges {
        node {
          dateDeLVNement(formatString: " D MMMM YYYY à k:mm", locale: "fr")
          atelier {
            nomDeLAtelier
            organisateur
            image {
              alt
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export default agenda;
