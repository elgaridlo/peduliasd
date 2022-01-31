import { articleByIdReducer, articleCreatedReducer, articleListReducer, updateArticleReducer } from "../reducers/articleReducers";

export const articleStore = {
    articleNew: articleCreatedReducer,
    articleList: articleListReducer,
    articleDetail : articleByIdReducer,
    updateArticle: updateArticleReducer
}