export const ADD_ARTICLE = 'ADD_ARTICLE';

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        article
    }
}