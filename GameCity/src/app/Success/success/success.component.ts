// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-success',
//   templateUrl: './success.component.html',
//   styleUrls: ['./success.component.css']
// })
// export class SuccessComponent implements OnInit {
//   empformlabel: string = 'Edit Employee';
//   empformbtn: string = 'Update';
  // constructor(private formBuilder: FormBuilder, private router: Router, private gameService: gameService) {
  // }

  // playForm: FormGroup;
  // ngOnInit() {

  //   this.playForm = this.formBuilder.group({
  //     id: [],
  //     game_balance: ['', Validators.required],
    
  //   });

  //   let game_balance = localStorage.getItem('playnow');
  //   if (+game_balance > 0) {
  //     this.gameService.getEmployeeById(+game_balance ).subscribe(data => {
  //       this.playForm.patchValue(data);
  //     })
    
  //   }
  // }

  // playGame() {
  //   console.log('Updating record.');
  //   this.gameService.(this.playForm.value).subscribe(data => {
  //     alert("record updated");
  //     this.router.navigate(['list-games']);
  //   },
  //     error => {
  //       alert(error);
  //     });
  // }

//}
