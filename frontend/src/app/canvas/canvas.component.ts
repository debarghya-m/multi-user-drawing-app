import { Component, OnInit } from '@angular/core';
import { SocketioService } from '../socketio.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css'],
})
export class CanvasComponent implements OnInit {
  ctx: any;
  userName: string | null = localStorage.getItem('userName');
  msg: string = '';
  constructor(
    private router: Router,
    private socketService: SocketioService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.drawOnCanvas();
    if (!this.socketService.checkSocketStatus()) {
      this.leaveRoom();
    }
    this.socketService
      .join({ userName: this.userName })
      .subscribe((conntected) => {
        if (!conntected) {
          this.leaveRoom();
        }
      });
    this.socketService.userListener().subscribe((request) => {
      this.openSnackBar(`${request.userName} joined the room !`);
    });
    this.socketService.canvasListener().subscribe((data) => {
      this.msg = data.userName + ' is drawing...';
      var image = new Image();
      var canvas = document.getElementById('board') as HTMLCanvasElement;
      var ctx = canvas.getContext('2d');
      image.onload = () => {
        ctx?.drawImage(image, 0, 0);
      };
      image.src = data.img;
    });
  }
  drawOnCanvas() {
    var canvas = document.getElementById('board') as HTMLCanvasElement;
    this.ctx = canvas.getContext('2d');
    var ctx = this.ctx;

    var sketch = document.getElementById('sketch') as HTMLDivElement;
    var sketch_style = getComputedStyle(sketch);
    canvas.width = parseInt(sketch_style.getPropertyValue('width'));
    canvas.height = parseInt(sketch_style.getPropertyValue('height'));

    var mouse = { x: 0, y: 0 };
    var last_mouse = { x: 0, y: 0 };

    canvas.addEventListener(
      'mousemove',
      function (e) {
        last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
      },
      false
    );

    ctx.lineWidth = 5;
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.strokeStyle = '#242424';

    canvas.addEventListener(
      'mousedown',
      function (e) {
        canvas.addEventListener('mousemove', onPaint, false);
      },
      false
    );

    canvas.addEventListener(
      'mouseup',
      () => {
        this.msg = '';
        canvas.removeEventListener('mousemove', onPaint, false);
      },
      false
    );
    var onPaint = () => {
      ctx.beginPath();
      ctx.moveTo(last_mouse.x, last_mouse.y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.closePath();
      var base64ImageData = canvas.toDataURL('image/png');
      this.msg = 'You are drawing...';
      this.socketService.canvasEmitter({
        img: base64ImageData,
        userName: this.userName,
      });
      ctx.stroke();
    };
  }
  leaveRoom() {
    this.openSnackBar(`You are disconnected !`);
    this.router.navigate(['/']);
    localStorage.removeItem('userName');
  }
  openSnackBar(msg: string) {
    this.snackBar.open(msg, '', {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
    });
  }
}
