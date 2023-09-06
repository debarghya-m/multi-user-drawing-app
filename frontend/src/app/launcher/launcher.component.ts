import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketioService } from '../socketio.service';
@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css'],
})
export class LauncherComponent implements OnInit {
  userName: string = '';
  constructor(private router: Router, private socketService: SocketioService) {}
  ngOnInit(): void {
    this.socketService.setupSocketConnection();
  }
  joinRoom() {
    localStorage.setItem('userName', this.userName);
    this.router.navigate(['/canvas']);
  }
}
