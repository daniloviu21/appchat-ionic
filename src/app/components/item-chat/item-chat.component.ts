import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-chat',
  templateUrl: './item-chat.component.html',
  styleUrls: ['./item-chat.component.scss'],
  standalone: false,
})
export class ItemChatComponent  implements OnInit {

  @Input() name: string = '';
  @Input() message: string = '';
  @Input() time: string = '';
  @Input() avatar: string = '';

  constructor() { }

  ngOnInit() {}

}
