import Animations1 from "./components/Animations1";
import GameBoard from "./components/GameBoard";
import App from "./App";

// not currently being used, because I wanted to combine into one file for now.
export const routes = [
            { path: '/', component: App },
            { path: '/animations', component: Animations1 },
            { path: '/GameBoard', component: GameBoard }
]