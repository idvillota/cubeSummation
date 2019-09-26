import { Component, OnInit } from "@angular/core";
import { ICube } from "./cube";
import { ActivatedRoute, Router } from "@angular/router";
import { CubeService } from "./cube.service";

@Component({
  templateUrl: './cube-detail.component.html'
})

export class CubeDetailComponent implements OnInit {

  cube: ICube | undefined;
  errorMessage = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
            private cubeService: CubeService) {
  }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.getCube(id);
    }
  }

  getCube(id: string) {
    this.cubeService.getCube(id).subscribe({
      next: cube => this.cube = cube,
      error: err => this.errorMessage = err
    });
  }

}
