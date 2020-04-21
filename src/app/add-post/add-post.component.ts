import { Component, OnInit } from '@angular/core';
import {ItemService} from '../_services/item.service';
import {Item} from '../_models/item';
import {User} from '../_models/user';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.less']
})
export class AddPostComponent implements OnInit {
  currentUser : User;
  post: Item = {
    id:'',
    post: '',
    codename:'',
    ups:0,
    downs:0
  }

  constructor(private itemService:ItemService ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    if(this.post.post != '' && this.post.codename !=''){
      this.itemService.addItem(this.post);
      this.post.post = '';
      this.post.codename = '';
    }
  }
}