import { FC } from 'react';
import { GithubIssue, GithubState } from '../interfaces';
import { IssueItem } from './IssueItem';

interface PropsIssue {
  issues: GithubIssue[];
  activeState: GithubState;
  onStateChange: (state: GithubState) => void;
}
export const IssueList: FC<PropsIssue> = ({
  issues,
  activeState,
  onStateChange,
}) => {
  return (
    <>
      {/* Botones de All, Open, Closed */}
      <div className="flex gap-4">
        <button
          onClick={() => onStateChange(GithubState.All)}
          className={`btn ${activeState === GithubState.All ? 'active' : ''} `}
        >
          All
        </button>
        <button
          onClick={() => onStateChange(GithubState.Open)}
          className={`btn ${activeState === GithubState.Open ? 'active' : ''}`}
        >
          Open
        </button>
        <button
          onClick={() => onStateChange(GithubState.Closed)}
          className={`btn ${
            activeState === GithubState.Closed ? 'active' : ''
          }`}
        >
          Closed
        </button>
      </div>

      {/* Lista de issues */}
      <div className="mt-4">
        {issues?.map((issue) => (
          <IssueItem key={issue.id} issues={issue} />
        ))}

        {/* <IssueItem /> */}

        {/* [1, 2, 3].map((issue) => (
          <IssueItem key={issue} />
        ))} */}
      </div>
    </>
  );
};
