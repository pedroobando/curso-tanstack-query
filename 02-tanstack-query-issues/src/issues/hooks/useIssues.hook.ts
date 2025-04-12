import { useQuery } from '@tanstack/react-query';
import { getIssues } from '../actions';
import { GithubState } from '../interfaces';
import { useEffect, useState } from 'react';

interface IssuesProps {
  state: GithubState;
  selectedLabel: string[];
}

export const useIssues = ({ state, selectedLabel }: IssuesProps) => {
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    setPage(1);
  }, [state]);

  useEffect(() => {
    setPage(1);
  }, [selectedLabel]);

  const issuesQuery = useQuery({
    queryKey: ['issues', { state, selectedLabel, page }],
    queryFn: () => getIssues(state, selectedLabel, page),
    staleTime: 1000 * 60 * 1, // 1 minuto de stale time => no volver a hacer la peticion

    // INFO: En conclusion me quedo con el spinner de loading,
    // esto dependera de la funcionalidad que se le quiera dar al componente.
  });

  const prevPage = () => {
    if (page === 1) {
      return;
    }
    setPage(page - 1);
  };

  const nextPage = () => {
    if (issuesQuery.data?.length === 0) {
      return;
    }
    setPage(page + 1);
  };

  return {
    issuesQuery,

    // Getters
    page,

    // Actions
    prevPage,
    nextPage,
  };
};
