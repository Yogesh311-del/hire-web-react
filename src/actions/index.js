import { auth, provider } from "../firebase";
import { SET_USER } from "./actionType";

export const setUser = (payload) => ({
    type: SET_USER,
    user: payload,
});

export function signInAPI() {
    return (dispatch) => {
        auth
        .signInWithPopup(auth, provider)
        .then((result) => {
            dispatch(setUser(result.user));
        })
        .catch((error) => {
            console.error('Error signing in with Google:', error);
        });
    };
};

export function getUserAuth() {
    return async(dispatch) => {
        //auth.onAuthStateChanged(async (user) => {
            // if(user) {
            //     dispatch(setUser(user));
            // }
        //});
    };
}