import { Component } from '@angular/core';
import { ShoppingModel } from './app.shoppinglist.modal'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shopping-list';

  shoppinglist: ShoppingModel[] = [
    {
      "Grocery list": [{
        "name": "Bring water",
        "completed": true,
        "qty": "1 Glass",
        "id": "0"
      }]
    }
  ];

  toComplete(event: any, l: any) {
    let id = event.target.getAttribute("listid");
    this.shoppinglist.forEach(sh => {
      if(Object.keys(sh)[0] == l)
      {
        sh[Object.keys(sh)[0]].forEach((element: any) => {
            if (element.id == id) {
              element.completed = !element.completed;
            }
          })
      }
    });
  }

  newList(createlist: any) {
    if(createlist == "")
    {
      alert("Create List Can Not be Blank");      
    }
    else
    {
      let regex = /[!@#\$%\^\&*\)\(+=._-]/g
      if(!regex.test(createlist))
      {
        let flag  = 0;
        for(let element of this.shoppinglist)
        {
          if(Object.keys(element)[0] == createlist)
            flag = 1;
        }
        if(flag == 0)
        {
          this.shoppinglist.push({
            [createlist]:[] 
          });
        }
      }
      else
      {
        alert("Not a valid input");
      }
    }
  }

  removeList(listname: any){
    this.shoppinglist = this.shoppinglist.filter(element => {
        return Object.keys(element)[0] != listname;
    });
  }
}
