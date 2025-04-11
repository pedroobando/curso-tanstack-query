import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers';
import { GithubLabel } from '../interfaces';

export const getLabels = async (): Promise<GithubLabel[]> => {
  await sleep(2000);

  // INFO: Cambiar por el githubApi
  // const response = await fetch(
  //   'https://api.github.com/repos/facebook/react/labels'
  // ).then((res) => res.json());

  const { data } = await githubApi.get<GithubLabel[]>('/labels');
  // console.log(data);
  return data;
};
