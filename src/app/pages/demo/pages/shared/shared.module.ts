import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';

import { ButtonsModule, ControlsModule, SelectModule } from '@app/shared';
@NgModule({
  declarations: [SharedComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedRoutingModule,
    ButtonsModule,
    ControlsModule,
    SelectModule
  ]
})
export class SharedModule { }
