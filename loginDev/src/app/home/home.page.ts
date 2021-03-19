import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userInfo = null;
  constructor() {}

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn();
    console.log('user: ', googleUser);
    this.userInfo = googleUser;
  }

}
