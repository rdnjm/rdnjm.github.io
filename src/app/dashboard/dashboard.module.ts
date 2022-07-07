import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroComponent } from './dashboard/hero/hero.component';
import { AboutComponent } from './dashboard/about/about.component';

@NgModule({
  declarations: [DashboardComponent, HeroComponent, AboutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
