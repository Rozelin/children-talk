import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
})

// instance.defaults.headers.common['Content-Type'] = 'application/json';
// instance.defaults.headers.common['returnSecureToken'] = true;

export default instance;
