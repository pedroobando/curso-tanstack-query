import { useQuery } from '@tanstack/react-query';
import { getIssue, getIssueComments } from '../actions';

export const useIssue = (issueNumber: number) => {
  const issueQuery = useQuery({
    queryKey: ['issues', issueNumber],
    queryFn: () => getIssue(issueNumber),
    staleTime: 1000 * 60, // 1 hora de stale time => no volver a hacer la peticion
    retry: false, // no volver a hacer la peticion si falla

    // INFO: En conclusion me quedo con el spinner de loading,
    // esto dependera de la funcionalidad que se le quiera dar al componente.
  });

  // NOTE: Este quere se ejecuta en paralelo al anterior
  // const commentsQuery = useQuery({
  //   queryKey: ['issues', issueNumber, 'comments'],
  //   queryFn: () => getIssueComments(issueNumber),
  //   staleTime: 1000 * 60, // 1 hora de stale time => no volver a hacer la peticion
  //   // retry: false, // no volver a hacer la peticion si falla
  // });

  const issueNumberData = issueQuery.data?.number ?? 0;

  // NOTE: Este query se ejecuta dependiendo del anterior
  const commentsQuery = useQuery({
    queryKey: ['issues', issueNumberData, 'comments'],
    queryFn: () => getIssueComments(issueNumberData),
    staleTime: 1000 * 60, // 1 hora de stale time => no volver a hacer la peticion
    enabled: issueQuery.data !== undefined, // no volver a hacer la peticion si falla
  });

  return {
    issueQuery,
    commentsQuery,
  };
};
