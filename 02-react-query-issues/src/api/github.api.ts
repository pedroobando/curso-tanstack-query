import axios from 'axios';

// console.log(import.meta.env.VITE_GITHUB_TOKEN);

export const githubApi = axios.create({
  baseURL: 'https://api.github.com/repos/facebook/react',
  headers: {
    // TODO: Cambiar por el token de github
    Authorization: `Bearer ${import.meta.env.VITE_GITHUB_TOKEN}`,
    // Accept: "application/vnd.github.v3+json",
  },
  // NOTE: Cambiar por el token de github
  // params: {
  //   per_page: 100,
  // },
});

// INFO: Cambiar por el token de github
