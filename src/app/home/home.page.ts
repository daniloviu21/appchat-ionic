import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  chats = [
    {name: 'Daniel', message: 'Hola', time: '12:00', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Luis', message: '¿Qué tal?', time: '12:01', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Marta', message: '¿Cómo estás?', time: '12:05', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Javier', message: '¡Buenas tardes!', time: '12:10', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Ana', message: '¿Dónde estás?', time: '12:15', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Carlos', message: 'Hasta luego', time: '12:20', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Sofia', message: 'Tomto el que lo lea', time: '12:25', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Pedro', message: 'Ya voy de camino', time: '12:30', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Elena', message: 'Te estoy esperando', time: '12:35', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Raul', message: 'Vamos por un café', time: '12:40', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Lucía', message: '¿Dónde nos encontramos?', time: '12:45', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Victoria', message: '¿Vienes?', time: '12:50', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Felipe', message: 'Hablamos pronto', time: '12:55', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'},
    {name: 'Laura', message: 'Ya estoy llegando', time: '13:00', avatar: 'https://ionicframework.com/docs/img/demos/avatar.svg'},
    {name: 'Raquel', message: '¡Ya casi llego!', time: '13:05', avatar: 'https://cdn-icons-png.flaticon.com/256/12225/12225881.png'}
  ];
  
  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  constructor() {}

}
