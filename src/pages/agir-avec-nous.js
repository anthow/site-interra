import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Duopage = ({ data }) => (
  <Layout className="">
    <div className="w-12/12">
      <h1
        className="font-black  text-4xl md:-mb-20  text-vert-interra  bg-white text-center"
        id="Talent"
      >
        Agir avec nous{" "}
      </h1>

      <article className="md:w-8/12  flex flex-col  md:space-y-40   m-auto">
        <div id="membre"></div>

        <section className=" bg-orange-interra  flex flex-col md:flex-row  justify-around">
          <figure className="h-max">
            <GatsbyImage
              image={data.datoCmsAgirAvecNou.imageMembre.gatsbyImageData}
              alt={data.datoCmsAgirAvecNou.imageMembre.alt}
              className=" min-h-full justify-self-end      "
            />
          </figure>

          <div className="p-10 flex-grow-0 ">
            <h2 className=" mb-2 mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreMembre}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteMembre,
              }}
            ></div>
            <p className="mt-10 text-white font-black">
              {data.datoCmsAgirAvecNou.accrocheMembre}
            </p>
            <Link to="/agir-avec-nous/talent-interact">
              <button
                id=""
                className="mt-10 bg-white text-orange-interra font-black p-2 hover:opacity-90"
              >
                {" "}
                Devenir Talent InterAct{" "}
              </button>
            </Link>
          </div>
        </section>

        <div id="duo"></div>

        <section
          className=" bg-vert-interra  flex flex-col md:flex-row  justify-around"
          id=""
        >
          <div className="p-10 order-2 md:order-1  flex-grow-0 ">
            <h2 className=" mb-2 mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreDuoLangue}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteDuoLangue,
              }}
            ></div>
            <Link to="/agir-avec-nous/former-duo">
              <button className="mt-10 bg-white text-vert-interra font-black p-2 hover:opacity-90">
                {" "}
                Former un duo{" "}
              </button>
            </Link>
          </div>

          <GatsbyImage
            image={data.datoCmsAgirAvecNou.imageDuoLange.gatsbyImageData}
            alt={data.datoCmsAgirAvecNou.imageDuoLange.alt}
            className="h-full order-1 md:order-2 justify-self-end      "
          />
        </section>

        <div id="coach"></div>

        <section
          className=" bg-orange-interra  flex flex-col md:flex-row  justify-around"
          id=""
        >
          <GatsbyImage
            image={data.datoCmsAgirAvecNou.imageTalent.gatsbyImageData}
            alt={data.datoCmsAgirAvecNou.imageTalent.alt}
            className="h-full  justify-self-end      "
          />

          <div className="p-10 flex-grow-0 ">
            <h2 className=" mb-2 mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreTalent}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteTalent,
              }}
            ></div>
            <Link to="/agir-avec-nous/interlab">
              <button className="mt-10 bg-white text-orange-interra font-black p-2 hover:opacity-90">
                {" "}
                Rejoindre l'InterLab{" "}
              </button>
            </Link>
          </div>
        </section>

        {/*.............................................................................................................................*/}

        <div id="formation"></div>

        <section className=" bg-vert-interra  flex flex-col md:flex-row  justify-around">
          <div className="p-10 order-2 md:order-1  flex-grow-0 ">
            <h2 className=" mb-2 mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreParticiperFormation}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteParticiperFormation,
              }}
            ></div>
            <Link to="/agir-avec-nous/participer-formation">
              <button className="mt-10 bg-white text-vert-interra font-black p-2 hover:opacity-90">
                {" "}
                Participer à une formation{" "}
              </button>
            </Link>
          </div>

          <GatsbyImage
            image={
              data.datoCmsAgirAvecNou.imageParticiperFormation.gatsbyImageData
            }
            alt={data.datoCmsAgirAvecNou.imageBNVole.alt}
            className="h-full order-1 md:order-2 justify-self-end      "
          />
        </section>
        {/*.............................................................................................................................*/}

        <div id="volontaire"></div>

        <section className=" bg-orange-interra  flex flex-col md:flex-row  justify-around">
          <GatsbyImage
            image={data.datoCmsAgirAvecNou.imageBNVole.gatsbyImageData}
            alt={data.datoCmsAgirAvecNou.imageBNVole.alt}
            className="h-full  justify-self-end      "
          />
          <div className="p-10 order-2 md:order-1  flex-grow-0 ">
            <h2 className=" mb-2 mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreBNVole}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteBNVole,
              }}
            ></div>
            <Link to="/agir-avec-nous/devenir-volontaire">
              <button className="mt-10 bg-white text-orange-interra font-black p-2 hover:opacity-90">
                {" "}
                Devenir Volontaire{" "}
              </button>
            </Link>
          </div>
        </section>

        <div id="don"></div>

        <section className=" bg-vert-interra  flex flex-col md:flex-row  justify-around">
          <div id="" className="p-10 pb-2  order-2 md:order-1  flex-grow-0 ">
            <h2 className="  mb-10 text-white font-black text-3xl">
              {" "}
              {data.datoCmsAgirAvecNou.titreDon}{" "}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsAgirAvecNou.texteDon,
              }}
            ></div>
            <p className="mt-10 text-white font-black">
              {data.datoCmsAgirAvecNou.numRoDeCompte}
            </p>
          </div>

          <GatsbyImage
            image={data.datoCmsAgirAvecNou.imageDon.gatsbyImageData}
            alt={data.datoCmsAgirAvecNou.imageDon.alt}
            className="h-full order-1 md:order-2 justify-self-end  w-full    "
          />
        </section>
      </article>
    </div>
  </Layout>
);

export const query = graphql`
  {
    datoCmsAgirAvecNou {
      accrocheMembre
      imageBNVole {
        alt
        gatsbyImageData
      }
      imageDon {
        alt
        gatsbyImageData
      }
      imageDuoLange {
        alt
        gatsbyImageData
      }
      imageMembre {
        alt
        gatsbyImageData
      }
      imageTalent {
        alt
        gatsbyImageData
      }
      imageParticiperFormation {
        alt
        gatsbyImageData
      }
      texteParticiperFormation
      titreParticiperFormation
      numRoDeCompte
      texteBNVole
      texteDon
      texteDuoLangue
      texteMembre
      texteTalent
      titreBNVole
      titreDon
      titreDuoLangue
      titreMembre
      titreTalent
      
    }
  }
`;

export default Duopage;
