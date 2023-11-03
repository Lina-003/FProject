import { Screens } from "../types/places";

export const navigate = (screen: Screens) => {
    return {
        type: "NAVIGATE",
        payload: screen
    }
};
