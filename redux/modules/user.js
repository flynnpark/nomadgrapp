// Imports

import { API_URL } from "../../constants";

// Actions

// Action Creators

// API Actions

function login(username, password) {
    return dispatch => {
        fetch(`${API_URL}/rest-auth/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => console.log(json));
    };
}

// Initial State

const initialState = {
    isLoggedIn: false
};

// Reducer

function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}

// Reducer functions

// Exports

const actionCreators = {
    login
};

export { actionCreators };

// Default Reducer Export

export default reducer;
