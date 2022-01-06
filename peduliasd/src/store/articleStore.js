import { articleCreatedReducer, articleListReducer } from "../reducers/articleReducers";

export const articleStore = {
    articleNew: articleCreatedReducer,
    articleList: articleListReducer
}