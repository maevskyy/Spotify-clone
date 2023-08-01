import axios from "axios";
import { TSearch } from "../../../types/searchT";


export const searchRapid = async (searchQuery: string): Promise<TSearch[]> => {

    const searchUrl = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`

    // const imageSize = "500x500"; // ( "250x250", "56x56",)

    try {

        const response = await axios.get(
            `https://deezerdevs-deezer.p.rapidapi.com/search?q=${searchQuery}`, {
            headers: {
                'X-RapidAPI-Key': 'e60639d916msh4a933a94e241e05p1816f1jsn877f880e44de',
                'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
            }
        })

        const searchWithPhotos:TSearch[] = response.data.data.map((obj: TSearch) => {
            return {
                ...obj,
                md5_image: `https://e-cdns-images.dzcdn.net/images/cover/${obj.md5_image}/250x250-000000-80-0-0.jpg`
                
            }
        })

        return searchWithPhotos



    } catch (error) {
        console.log('Error in searchRapid', error) 
        return []
    }

}