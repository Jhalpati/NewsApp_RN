import { articles_url } from '../config/rest_config';

export async function getArticles() {

    try{
        let articles = await fetch(articles_url);

        let result = await articles.json();
        articles = null;


        return result.articles;
    }

    catch(error){
        throw error;
    }
}