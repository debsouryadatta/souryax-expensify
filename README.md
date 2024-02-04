This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.


### Steps of building the project (Expensify App)
1. Following https://www.youtube.com/watch?v=gH3l2DSlXDE & the Hitesh Sir video to set up React Native CLI on windows. npx react-native run-android
2. npm i nativewind, npm i --dev tailwindcss, npx tailwindcss init, modifying the tailwind.config.js and the babel.config.js file
3. Again installing npm install --save-dev tailwindcss@3.3.2, lesser version since it was not working with the latest version
4. Creating navigation folder(Using React Navigation), npm install @react-navigation/native, npm install react-native-screens react-native-safe-area-context, following the official docs of react navigation, npm install @react-navigation/native-stack

5. Adding screens folder, adding AppNavigation in the App.jsx
6. Reloading the app, and checking if the navigation is working or not
7. Creating a screenWrapper component for keeping the content in the safe area
8. Creating empty folders - assets/images, redux, constants, theme, config(for firebase)
9. Copying the images and the theme from the github repo
10. "flex-1" -> Expands the container to the whole screen
11. Creating/Designing the Home Screen
12. Using Flatlist to show the cards, using randomImage Function to show the random images in the cards
13. Creating the EmptyList component, and using it in the HomeScreen Flatlist
14. Creating the AddTripScreen.js and the AddExpenseScreen.js, adding those in the AppNavigation, giving onPress to the Add Trip button in the home screen
15. Creating the BackButton component, npm i react-native-heroicons react-native-svg -> For icons
16. Designing the AddTripScreen, usinbg useState for place & country, and navigate back to home screen using useNavigation hook
17. In React Native -> We use onChangeText instead of only onChange, syntax: onChangeText={value => setPlace(value)}
18. Creating and Designing the TripExpensesScreen - Copying the HomeScreen code styles, creating the expenseCard component, using the Flatlist to show the expenses
19. Designing the expenseCard component, giving bgColors according to the category
20. In the HomeScreen, providing the item in the route, getting the routes params in the TripExpensesScreen -> const {id, place, country} = props.route.params;

21. Designing the AddExpenseScreen - Copying the code styles of AddTripScreen, using the useState for the title, amount, category, Adding the categories array in the constants folder, and using it in the AddExpenseScreen
22. Using Flatlist inside Scrollview -> showing error -> Solution: Using npm i react-native-virtualized-view, taking ScrollView from it, using it instead of ScrollView -> -> This causes problem in the Input component (so removing it)

23. Creating and designing the WelcomeScreen, creating the SignInScreen and the SignUpScreen, adding them in the AppNavigation as presentation: "modal", but unfortunately modal is not working in android
24. Designing the SignInScreen - Same as the AddTripScreen styles, secureTextEntry property in the TextInput component for password
25. Designing the SignUpScreen - Fully same as the SignInScreen

<!-- Video 07 -->
26. Using Redux Toolkit -> npm install @reduxjs/toolkit, npm install react-redux, creating the store.js, creating the slice for user -> Taking code syntax from official docs, giving the slice in the store
27. Wrapping the App with the Provider, giving store as props
28. Using useSelector in the appNavigation to get the user state, setting the Stack navigations according to the user state
29. Setting up firebase console in the firebase website, npm install firebase
30. Exporting db, auth, tripsRef, expensesRef from the firebase.js

<!-- Video 08 -->
31. npm i react-native-snackbar -> To show the error messages, using it in the SignUpScreen
32. createuserWithEmailAndPassword func -> Creating the user in the firebase, using it in the SignUpScreen, onAuthStateChanged func -> Checking if the user is already logged in or not, using it in the AppNavigation, dispatching the setUser action in the onAuthStateChanged func
33. signInWithEmailAndPassword func -> Signing in the user in the firebase, using it in the SignInScreen
34. signOut func -> Signing out the user in the firebase, using it in the HomeScreen
35. Creating the loading component, using it in the SignInScreen, displaying it if the loading state is true
36. Setting the loading state to true and false as required in the SignUpScreen, SignInScreen, HomeScreen
37. Modifying the handleAddTrip func in the AddTripScreen to add the trip in the firebase
38. Fetching the trips from the firebase using firebase query parameter, using useIsFocused hook to call the fetchTrips func whenever the HomeScreen is focused
39. Modifying the handleAddExpense func in the AddExpenseScreen to add the expenses in the firebase
40. Fetching the expenses from the firebase using firebase query parameter, using useIsFocused hook to call the fetchExpenses func whenever the TripExpensesScreen is focused
41. Faced some issues with the text color -> colors.heading, so instead using text-black wherever colors.heading was used














Redux:
- Installation
- Creating the store
- Creating the slice
- giving the slice in the store
- Wrapping the App with the Provider, giving store as props
- Using useSelector in the appNavigation to get the user state
- Using the useDispatch to dispatch the setUser action in the onAuthStateChanged func