import { allCoursesLoaded } from './course.actions';
import { CoursesHttpService } from './services/courses-http.service';
import { ofType } from '@ngrx/effects';
import { createEffect } from '@ngrx/effects';
import { Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { CourseActions } from './action-types';
import { concatMap, map } from 'rxjs/operators';

@Injectable()
export class CoursesEffects {
    constructor(private actions$: Actions, private coursesHttpService: CoursesHttpService) {}

    loadCourses$ = createEffect(
        () => this.actions$
            .pipe(
                ofType(CourseActions.loadAllCourses), // ignore other actions
                concatMap(action => this.coursesHttpService.findAllCourses()),
                map(courses => allCoursesLoaded({courses}))
            )
    );


}
