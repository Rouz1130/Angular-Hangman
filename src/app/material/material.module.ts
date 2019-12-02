import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    MatNativeDateModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatTabsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatInputModule
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
    imports: [
        MatTabsModule,
        MatDividerModule,
        MatSliderModule,
        MatSelectModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatGridListModule,
        CommonModule
    ],
    exports: [
        MatTabsModule,
        MatDividerModule,
        MatSliderModule,
        MatSelectModule,
        MatRadioModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatIconModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatButtonModule,
        MatSortModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatCardModule,
        MatTableModule,
        MatTabsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatPaginatorModule,
        MatSidenavModule,
        MatGridListModule
    ]
})
export class MaterialModule { }
