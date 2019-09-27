import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { CubeListComponent } from './cubeSummation/cube-list/cube-list.component';
import { CubeDetailComponent } from './cubeSummation/cube-detail/cube-detail.component';
import { CubeUpdateComponent } from './cubeSummation/cube-update/cube-update.component';
import { CubeCreateComponent } from './cubeSummation/cube-create/cube-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    CubeListComponent,
    CubeDetailComponent,
    CubeUpdateComponent,
    CubeCreateComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'cubes', component: CubeListComponent },
      { path: 'cubes/detail/:id', component: CubeDetailComponent},
      { path: 'cubes/update/:id', component: CubeUpdateComponent },
      { path: 'cubes/create', component: CubeCreateComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
