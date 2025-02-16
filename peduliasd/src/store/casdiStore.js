import { casdiArticleByIdReducer, casdiArticleCreatedReducer, casdiArticleListReducer, casdiDeleteArticleReducer, casdiUpdateArticleReducer, createAnswerCASDIReducer, createAppointmentReducer, createQuestionCASDIReducer, deleteQuestionReducer, getHourMemberReducer, getQuestionCASDIReducer } from '../reducers/casdiReducers';

export const casdiStore = {
    hourMember: getHourMemberReducer,
    createAppointment: createAppointmentReducer,
    questionCasdi: getQuestionCASDIReducer,
    createQuestion: createQuestionCASDIReducer,
    createAnswer: createAnswerCASDIReducer,
    deleteQuestion: deleteQuestionReducer,
    casdiCreateArticle: casdiArticleCreatedReducer,
    casdiListArticle: casdiArticleListReducer,
    casdiUpdateArticle: casdiUpdateArticleReducer,
    casdiDetailArticle: casdiArticleByIdReducer,
    casdiDeleteArticle: casdiDeleteArticleReducer
}