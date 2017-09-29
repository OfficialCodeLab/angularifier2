import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdSelectModule, MdTableModule, MdProgressSpinnerModule, MdCardModule} from '@angular/material';

const elements = [
    MdButtonModule,
    MdCheckboxModule,
    MdSelectModule,
    MdTableModule,
    MdProgressSpinnerModule,
    MdCardModule
];

@NgModule({
    imports: elements,
    exports: elements,
})
export class MaterialModule { }
