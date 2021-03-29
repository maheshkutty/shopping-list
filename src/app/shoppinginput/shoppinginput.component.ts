import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import {  NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-shoppinginput',
  templateUrl: './shoppinginput.component.html',
  styleUrls: ['./shoppinginput.component.css', '../app.component.css']
})

export class ShoppinginputComponent implements OnInit {

  list : string = ""; 
  qty : string = "";  
  closeResult = "";

  @Input() shoppinglist : any;

  @Input() nameoflist: any;

  constructor(private modalService: NgbModal){  
  }

  ngOnInit(): void {
    this.nameoflist = this.nameoflist
    console.log(this.nameoflist);
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  addlist(list:string, qty:string){
    this.list = list;
    this.qty = qty;
    console.log(this.nameoflist)
    console.log(this.shoppinglist[this.nameoflist]);
    let id = this.shoppinglist[this.nameoflist].length == 0?0:this.shoppinglist[this.nameoflist][this.shoppinglist[this.nameoflist].length - 1].id + 1
    let pdata = {
        "name":this.list,
        "completed":false,
        "qty":this.qty,
        "id":id    
    }
    this.shoppinglist[this.nameoflist].push(pdata);  
    this.modalService.dismissAll();
  }

  toDelete(event : any){
    this.shoppinglist[this.nameoflist] = this.shoppinglist[this.nameoflist].filter((element : any)=>{
      return element.completed == false;
  });
  }
}
