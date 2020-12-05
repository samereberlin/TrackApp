# TrackApp

TrackApp is a simple React Native (iOS/Android) application to track user's fitness measures.

It was implemented for didactic reasons, therefore it is not yet ready for production (see [Next steps](#next-steps) section below).

The following video presents the basic functionalities in action (list measurements, create measurements, data validation, and image upload).

[TrackApp.mp4](TrackApp.mp4)

## Instructions to run

It is a standard react-native project (created with `npx react-native init...`), so basically:

```
git clone https://github.com/samereberlin/TrackApp.git
cd TrackApp
npm i
cd ios
pod install
cd ..
npm start
npm run ios
npm run android
```

## Design decisions

Following the KISS design principle, and considering that it is a simple application (with 2 screens only), I decided to include less dependencies as possible, So...

- It is not using any modern UI widget toolkit (like react-native-elements, native-base, etc.), which means that it was implemented using react-native standard components only (View, Text, InputText, Touchable, etc.).

- It is not using any global state container (like redux/thunk, flux, etc.), because since the communication with the server is mostly via GraphQL, ApolloProvider was quite enough to solve all the application's data management needs.

- As a router/navigation solution, I decided to pick react-navigation, not only because it is the default recommended option in the official react-native documentation, but also because I was curious to know more about that powerful/straightforward library (curious to learn how to use it, since most of the projects I have worked before were using react-router-native instead).

- For the image-upload popup selection, I decided to use react-native-image-picker, since it is simple, light, and widely used by well established projects.

- And for the image-upload request (the only client-server communication not executed via GraphQL) I decided to use the default fetch API (for cleanses and simplicity reasons).

- And last (but not least), I choose to use react-native version 0.62.2 instead of the latest release (v0.63.2), due to the "Missing request token for request" issue (while trying to upload files on iOS) that is being reported since v0.63.0.


## Next steps

The application still needs a lot of adjustments to reach the production level, and the list below presents the main/urgent needs according to my feeling...

- Choose an i18n solution (currently it contains hard-coded english texts only).

- Choose some date-picker library, since that is the way iOS/Android users are used to input date, instead of typing.

- Focus switching after validation (I know it is not a big deal regarding implementation, but I haven't had enough time for that).

- Implement another screen to view measurements (after clicking on the list), and also view the image in full-screen.

- Add the possibility to edit or delete measurements.

- Write end-to-end tests (suggested framework: Detox) and increase unit-tests coverage.
