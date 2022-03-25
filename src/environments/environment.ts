// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const baseAPIURL = "http://localhost:3000";
export const environment = {
  production: false,
  GOOGLE_CLIENT_ID: "550498262533-4l39o7sruv7h0i9jvce4j2f3sagn7fes.apps.googleusercontent.com",
  subject_api: `${baseAPIURL}/subjects`,
  student_api: `${baseAPIURL}/students`,
  question_api: `${baseAPIURL}`
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
