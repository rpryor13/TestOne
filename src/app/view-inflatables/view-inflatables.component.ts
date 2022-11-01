import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ReturnStatement } from '@angular/compiler';
import { ServerDataSource } from 'ng2-smart-table';
import { Post } from './post.model';
import { InflatablesService } from './inflatables.service';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-view-inflatables',
  styleUrls: ['./view-inflatables.component.css'],
  //templateUrl: './view-inflatables.component.html',
  template: `
  <ng2-smart-table [settings]="settings" [source]="arrInflatables"></ng2-smart-table>
`
})
export class ViewInflatablesComponent implements OnInit {

  arrInflatables: Post[] = [];

  arrInflatables2: Post[] = [];

  settings = {
    columns: {
      blowersNeeded: {
        title: 'Blowers Needed',
        filter: false
      },
      description: {
        title: 'Description',
        filter: false
      },
      employeesNeeded: {
        title: 'Employees Needed',
        filter: false
      },
      id: {
        title: 'ID',
        filter: false
      },
      inflatableName: {
        title: 'Name',
        filter: false
      },
      inflatableType: {
        title: 'Type',
        filter: false
      },
      lastDateUsed: {
        title: 'Last Date of Use',
        filter: false
      },
      purchaseAmount: {
        title: 'Purchase Amount',
        filter: false
      },
      purchaseDate: {
        title: 'Purchase Date',
        filter: false
      },
      stakesNeeded: {
        title: 'Stakes Needed',
        filter: false
      },
      uniqueID: {
        title: 'ID2',
        filter: false
      },
      vehicleNeeded: {
        title: 'Vehicle Needed',
        filter: false
      }
    }
  };

  constructor(private http: HttpClient, private srvcInflatable: InflatablesService) {

    



  }

  // Post[] newFunction() {

  //   this.arrInflates = this.srvcInflatable.fetchPosts();



  // }


  ngOnInit(



    
  ): void {



    this.fetchPosts(this.arrInflatables);
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
