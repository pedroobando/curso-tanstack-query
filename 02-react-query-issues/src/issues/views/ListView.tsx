import { IssueList } from '../components/IssueList';
import { LabelPicker } from '../components/LabelPicker';
import { useIssues } from '../hooks';
import { LoadingSpinner } from '../../shared';
import { useState } from 'react';
import { GithubState } from '../interfaces';

export const ListView = () => {
  const [state, setState] = useState<GithubState>(GithubState.All);
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);

  const { issuesQuery } = useIssues({ state, selectedLabel });
  const issues = issuesQuery.data ?? [];

  const handleStateChange = (newState: GithubState) => {
    setState(newState);
  };

  const onSelectedLabel = (label: string) => {
    console.log(label);
    if (selectedLabel.includes(label)) {
      setSelectedLabel(selectedLabel.filter((l) => l !== label));
    } else {
      setSelectedLabel([...selectedLabel, label]);
    }

    console.log(selectedLabel);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 mt-5">
      <div className="col-span-1 sm:col-span-2">
        {issuesQuery.isLoading ? (
          <LoadingSpinner />
        ) : (
          <IssueList
            issues={issues}
            onStateChange={handleStateChange}
            activeState={state}
          />
        )}
      </div>
      <div className="col-span-1 px-2">
        <LabelPicker
          onSelectedLabel={onSelectedLabel}
          selectedLabel={selectedLabel}
        />
      </div>
    </div>
  );
};
