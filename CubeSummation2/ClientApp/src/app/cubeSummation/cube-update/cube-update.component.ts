import { Component, OnInit } from "@angular/core";
import { ICube } from "../cube";
import { CubeService } from "../cube.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule, FormBuilder } from "@angular/forms";

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
    this.updateForm = new FormGroup({
      size: new FormControl('', [Validators.required])
    });

    let cubeUpdateId = this.route.snapshot.params['id'];
    this.getCubeById(cubeUpdateId);

  }

  cubeUpdate(cubeFormValue) {
    if (this.updateForm.valid)
      this.executeCubeUpdate(cubeFormValue);
  }

  private executeCubeUpdate(cubeFormValue) {
    this.cube.size = cubeFormValue.size;
    this.cubeService.updateCube(this.cube)
      .subscribe(res => {
        alert('Cube succesfully uploaded');
      },
        (error) => {
          console.log("cube-update.component::onSubmit::error");
        });
  }

  getCubeById(id: string) {
    this.cubeService.getCube(id).subscribe(
      res => {
      this.cube = res as ICube
      this.updateForm.patchValue(this.cube);
    },
      (error) => {
        console.log("cube-update.component::getCubeByid::error");
      }
    );
  }

  public validateControl(controlName: string) {
    if (this.updateForm.controls[controlName].invalid && this.updateForm.controls[controlName].touched)
      return true;

    return false;
  }

}
