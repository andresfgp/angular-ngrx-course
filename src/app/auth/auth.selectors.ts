import { createSelector } from "@ngrx/store";

export const isLoggedIn=createSelector( //Ngrx selector, it is a mapping function which has memory
    state=>state["auth"],
    (auth)=>!!auth.user
)
export const isLoggedOut=createSelector( //Ngrx selector, it is a mapping function which has memory
    // state=>state["auth"],
    // (auth)=>!auth.user
    isLoggedIn,
    isLoggedIn=>!isLoggedIn
)