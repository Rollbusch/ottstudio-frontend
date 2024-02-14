import Content from "@/components/Content";
import Header from "@/components/Header";
import Projeto from "@/components/Pages/Projeto";
import { getData } from "@/utils/strapi";
import Head from "next/head";

export default function ({ projeto }) {
  return (
    <>
      <Head>
        <title>Ott Studio - Projeto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Content>
          <Projeto {... { projeto }} />
        </Content>
      </main>
    </>
  );
}

export async function getStaticProps (props) {

  const projeto = await getData(`projeto/${props.params.slug}`)

  return {
    props: {
      projeto
    },
    revalidate: 60 // 60s
  }
}

export async function getStaticPaths () {

  const projetos = await getData(`projetos?fields[0]=slug`)
  const paths = projetos.data.map(projeto => ({
    params: {
      slug: projeto.attributes.slug
    }
  }))

  return {
    paths,
    fallback: 'blocking
  }
}
