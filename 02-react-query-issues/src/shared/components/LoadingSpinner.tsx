import { FC } from 'react';
import { FiRefreshCcw } from 'react-icons/fi';

export const LoadingSpinner: FC = () => {
  return (
    <div className="loading">
      <div className="flex w-full h-52 items-center justify-center">
        <FiRefreshCcw className="animate-spin text-4xl text-slate-500" />
      </div>
    </div>
  );
};
