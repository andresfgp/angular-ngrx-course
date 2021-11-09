import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";
import { AuthActions } from "./action-types";

@Injectable()
export class AuthEffects{

    constructor(
        private actions$:Actions
    ){
        // actions$.subscribe(action => {
        //     if(action.type==="[Login Page] User Login"){
        //         localStorage.setItem('user',JSON.stringify(action["user"])) //save in localStorage
        //     }
        // });
    }

    login$=createEffect(()=>
        this.actions$
            .pipe(
                ofType(AuthActions.login),
                tap(action=> localStorage.setItem('user',JSON.stringify(action["user"]))) //save in localStorage)
            ),
        {dispatch:false}
    )
    
    logout$=createEffect(()=>
        this.actions$
            .pipe(
                ofType(AuthActions.logout),
                tap(action=> localStorage.removeItem('user')) //save in localStorage)
            ),
        {dispatch:false}
    )
    
}