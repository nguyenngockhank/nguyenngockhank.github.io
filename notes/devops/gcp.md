# Google cloud 

There is no public API. Setting up OAuth Client Secrets must be performed in the Console.

https://stackoverflow.com/questions/58584516/google-cloud-platform-api-to-configure-oauth2-consent-and-credentials

## Social login for the app 

- Go to [https://console.cloud.google.com/](https://console.cloud.google.com/)
- First, Create a **project** 
- Next, access project > API & Services > OAuth consent screen > create
    - App domain
    - Authorized domains
    - User type: `external`
- Then, API & Services > Credentials > Create `OAuth client ID`
    - Application type: `Web application`
    - Authorized JavaScript origins: e.g `https://sotaychemgio.com`
    - Authorized redirect URIs: `https://sotaychemgio-user.auth.eu-central-1.amazoncognito.com/oauth2/idpresponse`
- After that, store `Client ID` & `Client secrets`
- Finally, apply in your project 


::: warning
Your app will be available to any user with a Google Account.

You do not need to submit your app for verification. If you change your app's configuration in the future, like adding more than `10 domains`, `uploading a logo`, or requesting sensitive or restricted scopes, you will need to submit for verification .
:::

## Google captcha
- Access this link [https://www.google.com/recaptcha/admin/create]

- Input 
  - reCAPTCHA type: Challenge (v2)
    - I'm not a robot
  - domain (without https)

