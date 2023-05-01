import Feed from '@/components/Feed';
import Sidebar from '@/components/Sidebar'
import Widgets from '@/components/Widgets';
import Head from 'next/head'

const Home = ({ newsResults,randomUsersResults }) => {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">

        {/*------------------- SideBar -------------------*/}

        <Sidebar />


        {/*------------------- Feed -------------------*/}

        <Feed />


        {/*------------------- Widgets -------------------*/}

        <Widgets newsResults={newsResults.articles} randomUsersResults={randomUsersResults.results} />


        {/*------------------- Modal -------------------*/}

      </main>


    </>
  )
}


export default Home;



// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json


export async function getServerSideProps() {

  const newsResults = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/us.json").then((res) => res.json());


  // --- Who to follow section

  const randomUsersResults = await fetch("https://randomuser.me/api/?results=50&inc=name,login,picture").then((res) => res.json());

  return {
    props: { newsResults,randomUsersResults }
  }
}