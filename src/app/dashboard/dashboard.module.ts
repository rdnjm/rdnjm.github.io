import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HeroComponent } from './dashboard/hero/hero.component';
import { AboutComponent } from './dashboard/about/about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DashboardComponent, HeroComponent, AboutComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
