import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
    onSubmit(form: NgForm) {
		// console.log(form.value);
		const email = form.value.email;
		const password = form.value.password;

		// let authObs: Observable<AuthResponseData>

		// this.isLoading = true;
		// if(this.isLoginMode) {
		// 	authObs = this.authService.login(email, password);
		// } else {
		// 	authObs = this.authService.signUp(email, password);
		// }

		// authObs.subscribe(resData => {
		// 	console.log(resData);
		// 	this.isLoading = false;
		// 	this.error = null;
		// 	this.router.navigate(['/recipes']);
		// 	}, errorMsg => {
		// 	// console.log(errorRes);
		// 	this.error = errorMsg;
		// 	this.showErrorAlert(errorMsg);
		// 	this.isLoading = false;
		// });

		form.reset();
	}

}
