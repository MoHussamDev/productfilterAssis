import apiClient from "../../network/apiClient";

export const actionTypes = {
  SIGNUP: "SIGNUP",
  LOGIN: "LOGIN",
  LOGOUT: "LOGOUT",
  ACTIVATE: "ACTIVATE",
  ASK_RESET_PASSWORD: "ASK_RESET_PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
  ADD_USERNAME: "ADD_USERNAME",
  ADD_TOKEN: "ADD_TOKEN",
  SIGNED: "SIGNED",
};

export const _setUserProfile = (userData) => ({
  type: actionTypes.ADD_USERNAME,
  ...userData,
});

export const _addToken = (token) => ({
  type: actionTypes.ADD_TOKEN,
  token,
});

export const _isSignedup = () => ({
  type: actionTypes.SIGNED,
});

export const _logout = () => ({
  type: actionTypes.LOGOUT,
});

export const _login = (d) => async (dispatch) => {
  try {
    apiClient.setAuthTokenInHeader(d.token);
    dispatch(_addToken(d.token));
  } catch (error) {
    console.log({ error });
  }
};

export const _signup = (userData) => async (dispatch) => {
  try {
    const { res } = await apiClient.signup(userData);
    dispatch(_isSignedup());
    console.log(res);
    alert("user Signed");
  } catch (err) {
    if (err.response.data.errors) {
      err.response.data.errors.forEach((e) => {
        if (e.param === "password") {
          alert("password must be at least 8 length");
        }
      });
    }

    if (err && err.response.data.error) {
      if (err.response.data.error.name === "UserExistsError") {
        alert(err.response.data.error.message);
      }
    }
    console.log({ err });
  }
};

export const _activate = () => async (dispatch, getState) => {
  const { token, username } = getState().auth;

  try {
    const { data } = await apiClient.activate(token, username);
  } catch (error) {
    console.log({ error });
  }
};

export const _askResetPassword = () => async (dispatch, getState) => {
  const { username } = getState().auth;
  try {
    const { data } = await apiClient.askResetPassword(username);
  } catch (error) {
    console.log({ error });
  }
};

export const _userProfileData = (d) => async (dispatch, getState) => {
  dispatch(_setUserProfile(d));
};
export const _resetPassword = () => async (dispatch, getState) => {
  const { username } = getState().auth;
  try {
    const { data } = await apiClient.resetPassword(username);
  } catch (error) {
    console.log({ error });
  }
};
