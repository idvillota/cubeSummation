import { OnInit, Component } from "@angular/core";
import { ICube } from "../cube";
import { CubeService } from "../cube.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cube-delete',
  templateUrl: './cube-delete.component.html'
})

export class CubeDeleteComponent implements OnInit {

  public cube: ICube

  constructor(private cubeService: CubeService,
    private router: Router,
    private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCubeById();
  }

  private getCubeById() {
    let cubeId: string = this.activeRoute.snapshot.params['id'];
    this.cubeService.getCube(cubeId)
      .subscribe(res => {
        this.cube = res as ICube;
      },
        (error) => {
          alert("Error getting cube");
        })
  }

  public redirectToCubeList() {
    this.router.navigate(['/cubes']);
  }

  public deleteCube() {
    this.cubeService.deleteCube(this.cube.id)
      .subscribe(res => {
        alert("Cube successfully deleted");
        this.router.navigate(['/cubes']);
      },
        (error) => {
          alert("Error deleting cube");
        })
  }

}
