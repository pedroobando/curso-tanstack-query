import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { GithubState } from '../interfaces';

interface IssuesProps {
  state: GithubState;
  selectedLabel: string[];
}

export const useIssues = ({ state, selectedLabel }: IssuesProps) => {
  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabel }],
    queryFn: () => getIssues(state, selectedLabel),
    staleTime: 1000 * 60 * 1, // 1 minuto de stale time => no volver a hacer la peticion

    // INFO: En conclusion me quedo con el spinner de loading,
    // esto dependera de la funcionalidad que se le quiera dar al componente.
  });

  return {
    issuesQuery,
  };
};
