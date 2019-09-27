import { Component, OnInit } from "@angular/core";
import { ICube } from "../cube";
import { CubeService } from "../cube.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators, FormsModule } from "@angular/forms";
import { first } from "rxjs/operators";

@Component({
  templateUrl: './cube-update.component.html'
})

export class CubeUpdateComponent implements OnInit {

  cube: ICube;
  errorMessage = '';
  updateForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private cubeService: CubeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    let cubeId = window.localStorage.getItem("updateCubeId");
    if (!cubeId) {
      alert("Invalid Action");
      this.router.navigate(['cubes']);
      return;
    }

    this.updateForm = this.formBuilder.group({
      id: [''],
      size: ['', Validators.required],
    });

    this.cubeService.getCube(cubeId)
      .subscribe(data => {
        this.updateForm.setValue(data);
      });    
  }

  onSubmit() {
    alert("submit...");
    //this.cubeService.updateCube(this.updateForm.value)
    //  .pipe(first())
    //  .subscribe(data => {
    //    if (data.status === 200) {
    //      alert('Cube updated successfully')
    //    } else {
    //      alert(data.message),
    //    }
    //  }
    //    )
  }

  getCube(id: string) {
    this.cubeService.getCube(id).subscribe({
      next: cube => this.cube = cube,
      error: err => this.errorMessage = err
    });
  }

}
