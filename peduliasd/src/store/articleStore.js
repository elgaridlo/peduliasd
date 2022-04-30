import { articleByIdReducer, articleCreatedReducer, articleListReducer, deleteArticleReducer, updateArticleReducer } from "../reducers/articleReducers";

export const articleStore = {
    articleNew: articleCreatedReducer,
    articleList: articleListReducer,
    articleDetail : articleByIdReducer,
    updateArticle: updateArticleReducer,
    deleteArticle: deleteArticleReducer
}