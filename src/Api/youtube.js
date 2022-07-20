import axios from 'axios';

const KEY = 'AIzaSyBbBRtMQnJkhsH7bo1mavCcIHdtP9SIeMo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY,
        part: 'snippet',
        maxResults: 25,
    }
});
