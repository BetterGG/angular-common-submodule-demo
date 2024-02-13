import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CommonFooterComponent } from './common-footer.component'

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CommonFooterComponent
  ],
  exports: [
    CommonFooterComponent
  ]
})
export class CommonFooterModule {

}
