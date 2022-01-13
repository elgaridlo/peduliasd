import { deleteEduProgramReducer, EduListProgramReducer, eduProgramCreated, GetEduProgramByIdReducer } from "../reducers/eduProgramReducer";

export const eduProgramStore = {
    newEduProgram: eduProgramCreated,
    eduListProgram: EduListProgramReducer,
    eduProgramDetail: GetEduProgramByIdReducer,
    deleteEduProgram: deleteEduProgramReducer
}