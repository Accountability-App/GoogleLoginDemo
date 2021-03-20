import { Component, OnInit } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  userInfo = null;

  constructor() { }
  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
  }


  ngOnInit() {
  }

}
