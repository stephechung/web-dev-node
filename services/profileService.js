const PROFILE_API = 'https://web-dev-schung.herokuapp.com/api/profile';

export const fetchProfile = (dispatch) =>
    fetch(PROFILE_API)
        .then(response => response.json())
        .then(profile =>
            dispatch({
                type: 'fetch-profile',
                profile
            })
        );

export const updateProfile = (dispatch, profile) =>
fetch(PROFILE_API, {
    method: 'PUT',
    body: JSON.stringify(profile),
    headers: {
        'content-type': 'application/json'
    }
})
.then(response => response.json())
.then(response =>
    dispatch({
        type: 'update',
        profile
}));