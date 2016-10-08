import {NgModule} from '@angular/core';
import {XSDComponent} from './xsd-component';
import {XSDService} from './xsd-service';

export {
  XSDComponent,
  XSDService
};

@NgModule ({
    declarations: [XSDComponent],
    exports: [XSDComponent]
})
export class XSDLibModule {}
//export default XSDLibModule;