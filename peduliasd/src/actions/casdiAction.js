import axios from 'axios';
import {
  CASDI_ARTICLE_BY_ID_FAIL,
  CASDI_ARTICLE_BY_ID_REQUEST,
  CASDI_ARTICLE_BY_ID_SUCCESS,
  CREATE_ANSWER_CASDI_FAIL,
  CREATE_ANSWER_CASDI_REQUEST,
  CREATE_ANSWER_CASDI_SUCCESS,
  CREATE_APPOINTMENT_FAIL,
  CREATE_APPOINTMENT_REQUEST,
  CREATE_APPOINTMENT_SUCCESS,
  CREATE_CASDI_ARTICLE_FAIL,
  CREATE_CASDI_ARTICLE_REQUEST,
  CREATE_CASDI_ARTICLE_SUCCESS,
  CREATE_QUESTION_CASDI_FAIL,
  CREATE_QUESTION_CASDI_REQUEST,
  CREATE_QUESTION_CASDI_SUCCESS,
  DELETE_CASDI_ARTICLE_FAIL,
  DELETE_CASDI_ARTICLE_REQUEST,
  DELETE_CASDI_ARTICLE_SUCCESS,
  DELETE_QUESTION_CASDI_FAIL,
  DELETE_QUESTION_CASDI_REQUEST,
  DELETE_QUESTION_CASDI_SUCCESS,
  GET_HOUR_MEMBER_FAIL,
  GET_HOUR_MEMBER_REQUEST,
  GET_HOUR_MEMBER_SUCCESS,
  GET_QUESTION_CASDI_FAIL,
  GET_QUESTION_CASDI_REQUEST,
  GET_QUESTION_CASDI_SUCCESS,
  LIST_CASDI_ARTICLE_FAIL,
  LIST_CASDI_ARTICLE_REQUEST,
  LIST_CASDI_ARTICLE_SUCCESS,
  UPDATE_CASDI_ARTICLE_FAIL,
  UPDATE_CASDI_ARTICLE_REQUEST,
  UPDATE_CASDI_ARTICLE_SUCCESS,
} from '../constants/casdiConstants';

const URL_API = '/api/casdi';

export const getHourMemberAction = (appointment_date) => async (dispatch) => {
  try {
    dispatch({
      type: GET_HOUR_MEMBER_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.post(
      `${URL_API}/appointments/hour`,
      { appointment_date },
      config
    );

    dispatch({
      type: GET_HOUR_MEMBER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_HOUR_MEMBER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createAppointmentAction =
  (code_member, appointment_date, duration) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_APPOINTMENT_REQUEST,
      });

      // const { userLogin: {userInfo} } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${userInfo.token}`
        },
      };

      const { data } = await axios.post(
        `${URL_API}/appointments`,
        { code_member, appointment_date, duration },
        config
      );

      dispatch({
        type: CREATE_APPOINTMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_APPOINTMENT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const createQuestionCasdiAction =
  (question) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_QUESTION_CASDI_REQUEST,
      });

      // const { userLogin: {userInfo} } = getState()
      const config = {
        headers: {
          'Content-Type': 'application/json',
          // Authorization: `Bearer ${userInfo.token}`
        },
      };

      const { data } = await axios.post(
        `${URL_API}/question`,
        { question },
        config
      );

      dispatch({
        type: CREATE_QUESTION_CASDI_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_QUESTION_CASDI_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getQuestionCASDIAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_QUESTION_CASDI_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`${URL_API}/question`, config);

    dispatch({
      type: GET_QUESTION_CASDI_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_QUESTION_CASDI_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteQuestionAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_QUESTION_CASDI_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${URL_API}/question`, { ...config, data: { id } });

    dispatch({
      type: DELETE_QUESTION_CASDI_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_QUESTION_CASDI_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createAnswerCasdiAction =
  (answer) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_ANSWER_CASDI_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(
        `${URL_API}/answer`,
        { ...answer },
        config
      );

      dispatch({
        type: CREATE_ANSWER_CASDI_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ANSWER_CASDI_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// CASDI ARTICLES
export const casdiCreateArticleAction =
  (payload) => async (dispatch, getState) => {
    try {
      dispatch({
        type: CREATE_CASDI_ARTICLE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.post(`${URL_API}/article`, payload, config);

      dispatch({
        type: CREATE_CASDI_ARTICLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_CASDI_ARTICLE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const casdiListArticleAction = (query) => async (dispatch) => {
  try {
    dispatch({
      type: LIST_CASDI_ARTICLE_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(
      `${URL_API}/article`,
      { params: query },
      config
    );

    dispatch({
      type: LIST_CASDI_ARTICLE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIST_CASDI_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const casdiGetArticleByIdAction = (id) => async (dispatch) => {
  try {
    dispatch({
      type: CASDI_ARTICLE_BY_ID_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const { data } = await axios.get(`${URL_API}/article/${id}`, config);

    dispatch({
      type: CASDI_ARTICLE_BY_ID_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CASDI_ARTICLE_BY_ID_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const casdiUpdateArticleAction =
  (id, payload) => async (dispatch, getState) => {
    try {
      dispatch({
        type: UPDATE_CASDI_ARTICLE_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(
        `${URL_API}/article/${id}`,
        payload,
        config
      );

      dispatch({
        type: UPDATE_CASDI_ARTICLE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: UPDATE_CASDI_ARTICLE_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const casdiDeleteArticleAction = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_CASDI_ARTICLE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    await axios.delete(`${URL_API}/article/${id}`, config);

    dispatch({
      type: DELETE_CASDI_ARTICLE_SUCCESS,
    });
  } catch (error) {
    dispatch({
      type: DELETE_CASDI_ARTICLE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
