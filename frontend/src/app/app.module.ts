import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { LauncherComponent } from './launcher/launcher.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { SocketioService } from './socketio.service';
@NgModule({
  declarations: [AppComponent, CanvasComponent, LauncherComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
  ],
  providers: [SocketioService],
  bootstrap: [AppComponent],
})
export class AppModule {}
