import Head from "next/head"
import Header from "../components/Header"
import Response from '../Response'
import {useRouter} from 'next/router'
import SearchResults from "../components/SearchResults"

const API_KEY = process.env.API_KEY;
const CONTEXT_KEY = process.env.CONTEXT_KEY;

function Search({results}) {
  const router = useRouter()
  return (
    <div>
   <Head>
       <title>{router.query.term} - Google Search</title>
       <link rel="icon" href="/gl2.png" />
   </Head>
{/* header */}
<Header/>
{/* Search Results */}
<SearchResults results = {results}/>
    </div>
  )
}

export default Search

export async function getServerSideProps(context){
  const useDummyData = false;
  const startIndex = context.query.start || "0";


  const data = useDummyData ? Response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((response) => response.json())
   
 
  

  return {
    props:{
      results: data
    }
  }
}