import {
    registerEventListener,
} from "./EventListenerRegistry";

import {
    cardPlayedEventListener,
} from "./CardPlayedEventListener";


export function registerDefaultEventListeners() {

    registerEventListener(
        cardPlayedEventListener,
    );

}