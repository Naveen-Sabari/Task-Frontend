import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { BoxComponent } from './box/box.component';
import { BoxListComponent } from './box-list/box-list.component';

export const routes: Routes = [
    { path: '', component: BoxListComponent },
    { path: 'box/:id', component: BoxComponent }
];
