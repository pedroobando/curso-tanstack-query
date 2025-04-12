import { NavLink } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { FiInfo, FiMessageSquare, FiCheckCircle } from 'react-icons/fi';

import { GithubIssue, GithubState } from '../interfaces';
import { getIssue, getIssueComments } from '../actions';
import { timeSince } from '../../helpers';

interface IssueItemProps {
  issues: GithubIssue;
}

export const IssueItem = ({ issues }: IssueItemProps) => {
  const queryClient = useQueryClient();

  // INFO : Realiza una pre-carga de la data con una llamada al getIssue
  const prefetchData = () => {
    queryClient.prefetchQuery({
      queryKey: ['issues', issues.number],
      queryFn: () => getIssue(issues.number),
      staleTime: 1000 * 60 * 5, // 5 minutes
    });

    queryClient.prefetchQuery({
      queryKey: ['issues', issues.number, 'comments'],
      queryFn: () => getIssueComments(issues.number),
      staleTime: 1000 * 60 * 5, // 5 minutes
    });
  };

  //INFO: Realiza una pre-carga de la data con una llamada al getIssue
  const presetData = () => {
    queryClient.setQueryData(['issues', issues.number], issues, {
      updatedAt: Date.now() + 1000 * 60 * 1, // 1 minutes
    });
  };

  //

  return (
    <div
      onMouseEnter={presetData}
      // onMouseEnter={prefetchData}
      className="animate-fadeIn flex items-center px-2 py-3 mb-5 border rounded-md bg-slate-900 hover:bg-slate-800"
    >
      {/* Icons */}
      {issues.state === GithubState.Open ? (
        <FiInfo size={30} color="red" className="min-w-10" />
      ) : (
        <FiCheckCircle size={30} color="green" className="min-w-10" />
      )}
      {/* <FiInfo size={30} color="red" className="min-w-10" />
      <FiCheckCircle size={30} color="green" /> */}

      <div className="flex flex-col flex-grow px-2">
        <NavLink
          to={`/issues/issue/${issues.number}`}
          className="hover:underline hover:text-blue-500"
        >
          {/* onClick={() => navigate(`/issues/issue/123`)} */}
          {/* <span>Suggestion:</span> */}
          <span className="ml-2">{issues.title}</span>
          {/* why not make accessing and changing the state possible globally? */}
        </NavLink>
        <span className="text-gray-500">
          #{issues.number} opened {timeSince(issues.created_at)} ago by{' '}
          <span className="font-bold">{issues.user.login}</span>
        </span>

        <div className="flex flex-wrap mt-1">
          {issues.labels.map((label) => (
            <span
              key={label.id}
              className="text-sm px-2 py-1 rounded-3xl mr-2 text-white"
              style={{
                border: `1px solid #${label.color}`,
              }}
            >
              {label.name}
            </span>
          ))}
        </div>
      </div>

      <img
        src={issues.user.avatar_url}
        alt="User Avatar"
        className="w-8 h-8 rounded-full"
      />
      <div className="flex flex-col mx-2 items-center">
        <FiMessageSquare size={30} className="min-w-5" color="gray" />
        <span className="px-4 text-gray-400">{issues.comments}</span>
      </div>
    </div>
  );
};
