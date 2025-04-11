import { useQuery } from '@tanstack/react-query';

interface randomParam {
  queryKey: string[];
  queryFn: () => Promise<number>;
}

export const useRandom = (param: randomParam) => {
  const randomQuery = useQuery({
    queryKey: [...param.queryKey],
    queryFn: param.queryFn,
    // staleTime: 1000 * 6,
    // retry: false,
    // refetchOnWindowFocus: false,
  });

  return { randomQuery };
};
