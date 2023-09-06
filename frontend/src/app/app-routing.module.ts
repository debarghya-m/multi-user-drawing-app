import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent } from './canvas/canvas.component';
import { LauncherComponent } from './launcher/launcher.component';
const routes: Routes = [
  { path: '', component: LauncherComponent },
  { path: 'canvas', component: CanvasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
