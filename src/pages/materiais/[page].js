import Content from "@/components/Content";
import Header from "@/components/Header";
import MateriaisComponent from "@/components/Pages/Materiais";
import { getData } from "@/utils/strapi";
import Head from "next/head";

export default function Materiais({ materiais }) {
  return (
    <>
      <Head>
        <title>Ott Studio - Metodologia</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Content>
          <MateriaisComponent {...{ materiais }} />
        </Content>
      </main>
    </>
  );
}

export async function getStaticProps ({ params }) {

  const materiais = await getData(`materials?populate=*&&pagination[page]=${params.page}&pagination[pageSize]=5`)

  return {
    props: {
      materiais
    },
    revalidate: 30 // 30s
  }
}

export async function getStaticPaths () {

  const pages = await getData(`materials`)
  const paths = Array(pages.meta.pagination.pageCount).fill(1).map((item, index) => ({
    params: {
      page: `${index + 1}`
    }
  }))

  return {
    paths,
    fallback: true
  }
}