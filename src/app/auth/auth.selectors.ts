import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./reducers";

export const selectAuthState=
        createFeatureSelector<AuthState>("auth")

export const isLoggedIn=createSelector( //Ngrx selector, it is a mapping function which has memory
    selectAuthState,
    // state=>state["auth"],
    auth => !!auth.user
)
export const isLoggedOut=createSelector( //Ngrx selector, it is a mapping function which has memory
    // state=>state["auth"],
    // (auth)=>!auth.user
    isLoggedIn,
    isLoggedIn=>!isLoggedIn
)