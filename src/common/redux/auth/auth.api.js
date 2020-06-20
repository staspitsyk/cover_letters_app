import axios from 'axios';

function submitLoginApi(data) {
  const url = process.env.REACT_APP_SUBMIT_LOGIN;

  return axios
    .post(url, JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response);
}

export { submitLoginApi };
