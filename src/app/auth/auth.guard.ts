import { isLoggedIn } from './auth.selectors';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AppState } from '../reducers';
import { select, Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(
        private store:Store<AppState>,
        private router:Router){
        
    }
    canActivate(route: ActivatedRouteSnapshot,state:RouterStateSnapshot)
        :Observable<boolean>{
            return this.store
                .pipe(
                    select(isLoggedIn),
                    tap(loggedIn=>{ //is use for side effects
                        !loggedIn?this.router.navigateByUrl('/login'):null;
                    })
                )
        }
}