import { createStore,combineReducers} from "redux";
import { navReducer } from "./Reducer/navReducer";
import { carouselReducer } from "./Reducer/carouselReducer";
import { mentorReducer } from "./Reducer/mentorReducer";
import { coursesReducer } from "./Reducer/coursesReducer";
export const configStore=()=>{
    const store = createStore(
        combineReducers({
        navReducer,
        carouselReducer,
        mentorReducer,
        coursesReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
};
