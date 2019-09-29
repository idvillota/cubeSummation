import { OnInit, Component } from "@angular/core";
import { FormGroup, Validators, FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ICube, ICubeForCreation } from "../cube";
import { CubeService } from "../cube.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-cube-create',
  templateUrl: './cube-create.component.html'
})

export class CubeCreateComponent implements OnInit {
  public errorMessage: string = '';
  public cubeForm: FormGroup;

  constructor(private cubeService: CubeService,
              private router: Router,) {
  }

  ngOnInit() {
    console.log("cube-create.component::ngOnInit::start...");
    this.cubeForm = new FormGroup({
      size: new FormControl('', [Validators.required])
    });
  }

  public validateControl(controlName: string) {
    if (this.cubeForm.controls[controlName].invalid && this.cubeForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.cubeForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }

  public createCube(cubeFormValue) {
    if (this.cubeForm.valid) {
      let cube: ICubeForCreation = {
        size: cubeFormValue.size        
      }

      this.cubeService.createCube(cube)
        .subscribe(rest => {
          alert("Cube created successfully");
          this.router.navigate(['/cubes']);
        },
          (error => {
            alert("Error creating cube");
          }));          
    }
  }

}
