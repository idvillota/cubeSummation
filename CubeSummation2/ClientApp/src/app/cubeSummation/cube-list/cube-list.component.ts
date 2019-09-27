import { Component, OnInit } from '@angular/core';
import { ICube } from '../cube';
import { CubeService } from '../cube.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-cube-list',
    templateUrl: './cube-list.component.html'
})
export class CubeListComponent implements OnInit {

  public cubes: ICube[] = [];
  cube: ICube;
  errorMessage = '';

  constructor(private cubeService: CubeService, private router: Router) {
  }

  ngOnInit(): void {
    this.getCubes();
  }

  getCubes() {
    this.cubeService.getCubes().subscribe({
      next: cubes => {
        this.cubes = cubes;
      },
      error: err => this.errorMessage = err
    });
  }

  createCube() {
    console.log("cub-list.component::createCube::initiating...");
    this.router.navigate(['/cubes/create']);
  }

  updateCube(cube: ICube) {
    window.localStorage.removeItem('updateCubeId');
    window.localStorage.setItem('updateCubeId', cube.id),
      this.router.navigate(['../cubes/update']);
      //this.router.navigate(['cubes/update', cubeId]);
    
  }

  deleteCube(cubeId: string) {
    if (confirm("Are you sure you want to delete this?")) {
      this.cubeService.deleteCube(cubeId).subscribe(() => {
        this.getCubes();
      });
    }
  }

}
