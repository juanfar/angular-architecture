// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: "default",
  firebase: {
    config: {
      apiKey: 'AIzaSyAgTPgLc8ulPRTdRqaiG0Bz72JSpiUbX7Y',
      authDomain: 'courseapp-b05f3.firebaseapp.com',
      projectId: 'courseapp-b05f3',
      storageBucket: 'courseapp-b05f3.appspot.com',
      messagingSenderId: '179852081519',
      appId: '1:179852081519:web:aee1a8fd446b692ec5109a'
    },
    actionCodeSettings: {
      url: 'http://localhost:5200/demo',
      handleCodeInApp: true
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
