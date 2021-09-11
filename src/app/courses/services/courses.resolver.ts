import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Course } from "../model/course";
import { CoursesService } from "./courses.service";

@Injectable()
export class CoursesResolver implements Resolve<Course> {

    constructor(private _coursesService: CoursesService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {
        const courseUrl = route.paramMap.get('courseUrl');
        
        return this._coursesService.loadCourseByUrl(courseUrl);
    }

}