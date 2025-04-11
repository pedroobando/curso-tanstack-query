import { githubApi } from '../../api/github.api';
import { sleep } from '../../helpers';
import { GithubIssue, GithubState } from '../interfaces';

export const getIssues = async (
  state: GithubState,
  selectedLabel: string[]
): Promise<GithubIssue[]> => {
  await sleep(1500);

  const params = new URLSearchParams();

  if (state !== 'all') {
    params.append('state', state);
  }

  if (selectedLabel.length > 0) {
    params.append('labels', selectedLabel.join(','));
  }

  const { data } = await githubApi.get<GithubIssue[]>('/issues', { params });
  return data;
};
