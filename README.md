# GoogleLoginDemo WIP
Status:
```diff
+ Working!
+ Reinstall VM [x]
! maybe install macOS
```
## Resources
+ https://www.youtube.com/watch?v=Rs1imvTbeN0
+ https://www.youtube.com/watch?v=SyrS10a6Ctc
+ https://www.youtube.com/watch?v=lNqXCn8KacI
+ https://www.youtube.com/watch?v=xNleEVG9_yA
+ https://www.youtube.com/watch?v=RuuOdfz9Kxc&list=LL&index=2&t=997s

For capacitor google sign in we need :
```
npm i @codetrix-studio/capacitor-google-auth
```
## configure the native apps:capacitor.config.json
```json
{
  "appId": "com.loginDev.accapp", // "com.AccountabilityApp.accapp"
  "appName": "loginDev", //"AccountabilityApp"
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "www",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 0
    }
  },
  "cordova": {}
}
```
Now we can add native platforms after running one initial build:
```
ionic build
npx cap add ios
npx cap add android
```
onfiguration begins

# Firebase Google Sign In Preparation
In FireBase DB 
**Add app** and select Android.
SHA-1 signing certificate: used for signing APK for the Play Store in the end and hook app to google services
get the fingerprint of debug key, which is 99% of the time automatically created at **~/.android/debug.keystore** on computer.
```
 keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
 ```
 download the google-services.json file and move it to the **android/app**
 
To make the value available to our Android app we also need to make a change to the **android/app/src/main/res/values/strings.xml** and add an entry for the **server_client_id**

```xml
<?xml version='1.0' encoding='utf-8'?>
<resources>
    <string name="app_name">AccountabilityApp</string>
    <string name="title_activity_main">AccountabilityApp</string>
    <string name="package_name">com.AccountabilityApp.accapp</string>
    <string name="custom_url_scheme">com.AccountabilityApp.accapp</string>
    <string name="server_client_id">REPLACEME.apps.googleusercontent.com</string>
</resources>
```
You now want to copy from the OAuth 2.0 Client IDs section, the row Web client and more specific the Client ID in that row
note: inside google APIs console or in .json with the .apps.googleusercontent.com extension in the oauth text field.
Inside Firebase project, go to the Authentication menu, select the Sign-in method tab and activate Google sign in – after hitting safe, this fixed all the OAuth consent screen issues!
 
 ## Capacitor Google Sign In Preparation – Android
  we need to tell Android about the Capacitor plugin we installed. Therefore, we need to open the **android/app/src/main/java/com/AccountabilityApp/accapp/MainActivity.java**
  ```java
package com.AccountabilityApp.capalogin;
 
import android.os.Bundle;
 
import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
 
import java.util.ArrayList;
**import com.codetrixstudio.capacitor.GoogleAuth.GoogleAuth;**
 
public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
 
    // Initializes the Bridge
    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // Additional plugins you've installed go here
      **add(GoogleAuth.class);**
    }});
  }
}
```
Open ~/AccountabilityApp/src/idex.html and put the following line with your client ID into the head tag of your page:
```html
 <meta name="google-signin-client_id" content="REPLACEME.apps.googleusercontent.com">:w
```
```
