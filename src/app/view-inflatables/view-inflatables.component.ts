import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ReturnStatement } from '@angular/compiler';
import { ServerDataSource } from 'ng2-smart-table';
import { Post } from './post.model';
import { InflatablesService } from './inflatables.service';

@Component({
  selector: 'app-view-inflatables',
  styleUrls: ['./view-inflatables.component.css'],
  templateUrl: './view-inflatables.component.html',
})
export class ViewInflatablesComponent implements OnInit {

  arrInflatables: Post[] = [];

  arrInflatables2: Post[] = [];


  constructor(private http: HttpClient, private srvcInflatable: InflatablesService) {





  }

  // Post[] newFunction() {

  //   this.arrInflates = this.srvcInflatable.fetchPosts();



  // }


  ngOnInit(



    
  ): void {



    //arrInflatables = this.fetchPosts(this.arrInflatables);
    console.log(this.arrInflatables);


  }

  // // for individual inflatables
//   fetchPosts() {
//     this.http
//     .get('https://vernal-design-313916-default-rtdb.firebaseio.com/inflatables/posts.json')
//     .subscribe(posts => {
//       console.log(posts);
//       return posts;
//       //Here we find the key and the values. Use this to assign to variables
//       for(var key in posts){
//       console.log("key: " + key + ", value: " + posts[key as keyof typeof posts])
//         return posts;
//       }
//     });
// }


  //FOR all inflatables
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

  showData(arrInflatables: { id: string; blowersNeeded: number; description: string; employeesNeeded: number; inflatableName: string; inflatableType: string; lastDateUsed: string; purchaseAmount: number; purchaseDate: string; stakesNeeded: number; uniqueID?: number | undefined; vehicleNeeded: string; }[]) {
    {

      console.log(arrInflatables);


    
    }}}