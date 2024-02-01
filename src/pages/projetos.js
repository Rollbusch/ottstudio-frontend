import Content from "@/components/Content";
import Header from "@/components/Header";
import Projetos from "@/components/Pages/Projetos";
import Head from "next/head";

export default function Home({ projetos }) {

  return (
    <>
      <Head>
        <title>Ott Studio - Projetos</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>
        <Projetos {...{ projetos }} />
      </Content>
    </>
  );
}

export async function getStaticProps () {
  const getData = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projetos?populate=banner`)
    if (!data.ok) return { data: [] }
    return await data.json()
  }
  
  const projetos = await getData()

  return {
    props: {
      projetos
    }
  }
}
