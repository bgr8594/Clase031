import { Component, OnInit } from '@angular/core';
import { User } from '../interface/user';
import { ModalErrorComponent } from '../component/modal-error/modal-error.component'
import { ModalController } from '@ionic/angular';
import { AuthService} from '../service/auth.service';
import { Router } from '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  user: User = new User();
    ionicForm: any;

  constructor(private router: Router,
    private modalCtrl: ModalController,
    private autSvc: AuthService,
    private menuService: MenuServiceService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
  }

  async onLogin(){
    this.autSvc.onLogin(this.user).then((user:any)=>{
      if(user!=null && user.code ==undefined){
        console.log('Successfully logged in!');
        this.menuService.setTitle("Valoracion")//Aqui se cambia la ruta.
        this.router.navigate(['/main/valoracion']); //this
      }
      else{
        if(user.code){
          if(user.code=='auth/wrong-password' || user.code =='auth/invalid-email' || user.code=='auth/argument-error'){
            this.openModal(user);
          }
        }
      }
    }).catch((error: any)=>{
      this.openModal(error);
    })

  }

  async openModal(user: any){
    const modal = await this.modalCtrl.create({
      component: ModalErrorComponent,
      componentProps:{
        error: 'Ingres password y/o contraseña'
      }
    });
    console.error(user);
    return await modal.present();
  }

  onRegister(){
    this.menuService.setTitle("register")
    this.router.navigate(['/register']);
  }

  buildForm(){
    this.ionicForm = this.formBuilder.group({
      email: new FormControl('',{validators: [Validators.email,Validators.required]}),
      password: new FormControl('', {validators: [Validators.required, Validators.minLength(6), Validators.maxLength(6)]})
    });
  }  

  hasError: any = (controlName: string, errorName: string) => {
    return !this.ionicForm.controls[controlName].valid &&
      this.ionicForm.controls[controlName].hasError(errorName) &&
      this.ionicForm.controls[controlName].touched;
  }   

  submitForm(){
    if(this.ionicForm.valid){
      this.user.email = this.ionicForm.get('email').value;
      this.user.password = this.ionicForm.get('password').value;
      this.onLogin();
    }
  }

  notZero(control: AbstractControl) {
    if (control.value && control.value.monto <= 0) {
      return { 'notZero': true };
    }
    return null;
  } 

  ionViewWillEnter(){
    this.ionicForm.reset();
  }

}
