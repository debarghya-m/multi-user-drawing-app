import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { environment } from '../environments/environment';
import { from, Observable, Observer } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class SocketioService {
  socket: any;
  constructor() {}
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    console.log(this.socket);
  }
  checkSocketStatus() {
    if (!this.socket) {
      return false;
    } else {
      return true;
    }
  }
  join(data: object) {
    this.socket.emit('join-room', data);
    return new Observable((observer: Observer<any>) => {
      this.socket.on('disconnect', () => {
        observer.next(false);
      });
      if (!this.socket) {
        observer.next(false);
      }
    });
  }
  userListener() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('new-user', (data: object) => {
        if (data) {
          observer.next(data);
        } else {
          observer.error('Unable To Reach Server');
        }
      });
    });
  }
  canvasEmitter(data: any) {
    this.socket.emit('canvas-data', data);
  }
  canvasListener() {
    return new Observable((observer: Observer<any>) => {
      this.socket.on('canvas-data', (data: object) => {
        if (data) {
          observer.next(data);
        } else {
          observer.error('Unable To Reach Server');
        }
      });
    });
  }
}
