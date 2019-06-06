import QuizApp from "./components/QuizProject/QuizApp.vue";
import CitiesGame from "./components/CitiesGame";
import App from "./App";

// not currently being used, because I wanted to combine into one file for now.
export const routes = [
      { path: '/', component: QuizApp },
      { path: '/cities', component: CitiesGame },
]