# Angular Weather Web App

Weather app that show current weather in 5 cities, Belgrade, Munich, London, rome and Helsinki. When one of those cities cards are clicked, the card expands and shows chart of forecast data either for Temperature or for Wind, for the next 8, 12 or 24 hours.

![Cads view](https://i.imgur.com/zD4gpPX.jpg)
![Expanded forecast](https://i.imgur.com/XJBgtIE.jpg)

## Architecture

App is using Global Store, with the help of NgRx, for getting the data and displayin it in the DOM.
On the initialization of the app, provider dispatches the action for getting the current weather conditions for the five cities, and displays it by rendering 5 cards, that recognize for each location is there day or night according to sunset and sunrise data from the response of the endpoint, and shows black or purple theme depending of the time of the day.

When clicked on the single card, other cards get closed, and they show only current temperature and city name, while the clicked card expands, and dispatches the action for getting the forecast for cards location.

The store effect for the forecast, first check if there is saved forecast for the current users hour. If there is, it wont send request towards the api endpoint, but if there is no saved data for current location, it will get it from the api. When the effect finishes the evaluation, it dispatches success action in order to render forecast chart. The reducer then sets the selected city forecast in the store, and saves the forecast for the later use.

Forecast is used from the state only if the same forecast api request, happened in the current hour.

## Used technologies

-   Angular10
-   Angular FontAwesome
-   Ngrx (Store and Effects),
-   Ngx-Charts
-   Jasmine and carma for Unit Testing
-   Cypress for e2e testing
-   Prettier for formating the code

Attempted to use best Angular practices, with using RxJs, Angular Animations, OnPush detection strategy.

## API Key

For application to work you will need the API key from https://openweathermap.org/, and put it in

```sh
src/app/configs/api-key.config.ts
```

## Installation

```sh
$ npm install
```

#### Running on local machine

```sh
$ ng serve -o
```

#### Running unit tests

```sh
$ ng test
```

#### Running e2e tests

```sh
$ ng e2e
```

or for developement cypress mode

```sh
$ ng e2e:dev
```
