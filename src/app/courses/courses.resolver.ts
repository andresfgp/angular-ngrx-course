import { areCoursesLoaded } from './courses.selectors';
import { loadAllCourses } from './course.actions';
import { AppState } from './../reducers/index';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';



@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store<AppState>) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                select(areCoursesLoaded),
                tap((coursesLoaded) => {
                    if (!this.loading && !coursesLoaded) {
                        this.loading = true;
                        this.store.dispatch(loadAllCourses());
                    }
                }),
                filter(coursesLoaded => coursesLoaded),
                first(),
                finalize(() => this.loading = false)
            );
    }
}
