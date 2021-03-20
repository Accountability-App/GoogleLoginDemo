import { Component } from '@angular/core';
import '@codetrix-studio/capacitor-google-auth';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  userInfo = null;

  constructor() {}

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
  }
}
