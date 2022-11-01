import { Post } from "./post.model";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";
import {map} from 'rxjs/operators'
import { Injectable } from "@angular/core";

@Injectable()
export class InflatablesService {

    private availInflatables: Post[] = [];



    constructor(private http: HttpClient) {

    }

    getAvailInflates() {
        return this.availInflatables.slice();
    }

    fetchPosts(arrInflatables: { id: string; blowersNeeded: number; description: string; employeesNeeded: number; inflatableName: string; inflatableType: string; lastDateUsed: string; purchaseAmount: number; purchaseDate: string; stakesNeeded: number; uniqueID?: number | undefined; vehicleNeeded: string; }[]) {
        this.http
        .get<{[key: string]: Post}>('https://vernal-design-313916-default-rtdb.firebaseio.com/inflatables/posts.json')
        .pipe(
          map(responseData  => {
          for (const key in responseData){
            if (responseData.hasOwnProperty(key)){
              arrInflatables.push({ ...responseData[key as keyof typeof responseData], id: key })
            }
          }
          console.log(arrInflatables);
          //alert(postsArray);
          return arrInflatables;
        }))
        .subscribe(posts => {
          console.log(posts);
        });
      }
    }



    // export class TrainingService {
    //     exerciseChanged = new Subject<Exercise>();
    //     private availableExercises: Exercise[] = [
    //       { id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    //       { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    //       { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    //       { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    //     ];
    //     private runningExercise: Exercise; //store user selected exercise
    //     private exercises: Exercise[] = [];
      
    //     getAvailableExercises() {
    //       return this.availableExercises.slice();
    //     }
      
    //     startExercise(selectedId: string) {
    //       this.runningExercise = this.availableExercises.find(ex => ex.id === selectedId);
    //       this.exerciseChanged.next({...this.runningExercise});
    //     }
      
    //     completeExercise() {
    //       this.exercises.push({
    //         ...this.runningExercise,
    //         date: new Date(),
    //         state: 'completed'
    //       });
    //       this.runningExercise = null;
    //       this.exerciseChanged.next(null);
    //     }
      
    //     cancelExercise(progress: number) {
    //       this.exercises.push({
    //         ...this.runningExercise,
    //         duration: this.runningExercise.duration * (progress / 100),
    //         calories: this.runningExercise.calories * (progress / 100),
    //         date: new Date(),
    //         state: 'cancelled'
    //       });
    //       this.runningExercise = null;
    //       this.exerciseChanged.next(null);
    //     }
      
    //     getRunningExercise() {
    //       return {...this.runningExercise};
    //     }
      
    //     getCompletedOrCancelledExercises() {
    //       return this.exercises.slice();
    //     }
    //   }