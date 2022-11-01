import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { ReturnStatement } from '@angular/compiler';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  fetchPosts() {
    this.http
    .get('https://vernal-design-313916-default-rtdb.firebaseio.com/inflatables/posts.json')
    .subscribe(posts => {

      console.log(posts);

      return posts;
      
      //Here we find the key and the values. Use this to assign to variables
      for(var key in posts){
      console.log("key: " + key + ", value: " + posts[key as keyof typeof posts])

        return posts;

      }


    });
  }

}
