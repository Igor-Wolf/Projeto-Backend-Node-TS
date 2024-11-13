
import { FilterPodcastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { StatusCode } from "../utils/status-code"


export const serviceFilterEpisodes = async (podcastsName: string | undefined):Promise<FilterPodcastModel> => {
    

    //define a interface de retorno
    let responseFormat: FilterPodcastModel = {

        statusCode: 0,
        body: [],

    } 
    
    
    //buscando os dados
    const queryString = podcastsName?.split("?p=")[1] || ""

    const data = await repositoryPodcast(queryString)


    //verifico se tem conteúdo
    if (data.length > 0)  {
        responseFormat.statusCode = StatusCode.OK
        
    } else {
        responseFormat.statusCode = StatusCode.NoContent

    }

    responseFormat.body = data
    


    return responseFormat
}