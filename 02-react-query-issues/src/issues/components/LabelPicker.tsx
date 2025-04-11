import { FC } from 'react';
import { LoadingSpinner } from '../../shared';
import { useLabels } from '../hooks';

interface LabelProps {
  selectedLabel: string[];
  onSelectedLabel: (label: string) => void;
}

export const LabelPicker: FC<LabelProps> = ({
  selectedLabel,
  onSelectedLabel,
}) => {
  const { labelsQuery } = useLabels();

  if (labelsQuery.isLoading) {
    return (
      <div className="flex items-center justify-center h-52">
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <>
      {/* <Suspense fallback={<LoadingSpinner />}> */}
      <section className="px-2 flex flex-wrap items-center gap-2 ">
        {labelsQuery.data?.map((label) => (
          <span
            key={label.id}
            onClick={() => onSelectedLabel(label.name)}
            className={`animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white ${
              selectedLabel.includes(label.name) ? 'selected-label' : ''
            }`}
            // className="animate-fadeIn px-2 py-1 rounded-full text-xs font-semibold hover:bg-slate-800 cursor-pointer text-white"
            style={{
              border: `1px solid #${label.color}`,
            }}
          >
            {label.name}
          </span>
        ))}
      </section>
      {/* </Suspense> */}
    </>
  );
};
