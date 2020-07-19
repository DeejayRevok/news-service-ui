import {ApolloClient, gql, InMemoryCache} from "@apollo/client";

export class NewsGraphQLService {

    constructor(clientUrl: string) {
        this.client = new ApolloClient({
            uri: clientUrl,
            cache: new InMemoryCache(),
            credentials: 'include',
            fetchOptions: {
                mode: 'no-cors',
            },
        });
    }


    getNews = () => {
        const GET_NEWS =  {
            query: gql`
            {
                news {
                    title
                    summary
                    content
                    sentiment
                    entities {
                        text
                        type
                    }
                }
            }
        `};
        return this.client.query(GET_NEWS);
    }
}