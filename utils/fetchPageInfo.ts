import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";
import { PageInfo } from "../typings";

// Davis Nwanze
// hace 3 meses
// In case you have a prerendering error at "./". The problem is from getStaticProps. This function is trying to request from an api endpoint that hasn't been built yet. The api routes in this application are in the next js application which is getting built. To solve this issue take the logic from the getPageInfo, getExperience...etc and put it in the respective helper methods in the utils folder. Basically, make your request to sanity straight from the helper utils without the api routes. After I did this it deployed. 

// So you will be fetching like this

// const res = await sanityClient.fetch(query)

// const experiences: Experience [ ] = result

// return experiences 

// The query is your groq query string.

const query = groq`
*[_type == "pageInfo"][0]
`;

type Data = {
    pageInfo: PageInfo;
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfo: PageInfo = await sanityClient.fetch(query)
    res.status(200).json({pageInfo})
  }

export const fetchPageInfo = async() =>{
  const res = await sanityClient.fetch(query)
  const pageInfo:PageInfo = res
  return pageInfo 
}