import { Component, OnInit } from '@angular/core';
import { ICube } from './cube';
import { CubeService } from './cube.service';

@Component({
    selector: 'app-cube-list',
    templateUrl: './cube-list.component.html'
})
export class CubeListComponent implements OnInit {

  public cubes: ICube[] = [];
  errorMessage = '';

  constructor(private cubeService: CubeService){
  }

  ngOnInit(): void {
    this.cubeService.getCubes().subscribe({
      next: cubes => {
        this.cubes = cubes;
      },
      error: err => this.errorMessage = err
    });
  }

}
