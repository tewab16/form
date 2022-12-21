import { combineReducers } from "redux";
import { Age,  name,  Gender, Lname, Profession } from "./reducer";

export const reducers = combineReducers({
    firstName: name,
    lastName: Lname,
    age:Age,
    gender:Gender,
    profession:Profession


})

