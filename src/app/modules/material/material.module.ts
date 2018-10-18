import { NgModule } from '@angular/core';

// Material modules
// importing this way makes these modules faster
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field'

// Material options
import { MATERIAL_SANITY_CHECKS } from '@angular/material/core';

const materialModules = [
  MatButtonModule,
  MatExpansionModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatFormFieldModule,
];

@NgModule({
  imports: materialModules,
  exports: materialModules,
  providers: [
    {
      provide: MATERIAL_SANITY_CHECKS,
      useValue: false
    }
  ]
})
export class MaterialModule { }
