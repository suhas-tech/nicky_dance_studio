export const login = (payload) => ({
    type: 'LOGIN_ADMIN',
    payload
});

export const checkToken = (payload) => ({
    type: 'CHECK_TOKEN',
    payload
});