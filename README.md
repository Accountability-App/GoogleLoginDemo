# GoogleLoginDemo

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
SHA-1 signing certificate: used forsigning your APK for the Play Store in the end and hook app to google services
get the fingerprint of debug key, which is 99% of the time automatically created at ~/.android/debug.keystore on your computer.
```
 keytool -list -v -alias androiddebugkey -keystore ~/.android/debug.keystore
 ```
