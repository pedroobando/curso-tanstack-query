import { useQuery } from '@tanstack/react-query';
import { getLabels } from '../actions';
// import { GithubLabel } from '../interfaces';

export const useLabels = () => {
  const labelsQuery = useQuery({
    queryKey: ['react'],
    queryFn: getLabels,
    staleTime: 1000 * 60 * 60, // 1 hora de stale time => no volver a hacer la peticion

    // INFO: En conclusion me quedo con el spinner de loading,
    // esto dependera de la funcionalidad que se le quiera dar al componente.

    // INFO: Esto es para que no se vea el loading spinner
    // ya que el componente LabelPicker tiene un Suspense
    // y si no se pone esto, el loading spinner se veria
    // al hacer la peticion
    // placeholderData: [
    //   {
    //     id: 196858374,
    //     node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
    //     name: 'CLA Signed',
    //     color: 'e7e7e7',
    //     default: false,
    //   } satisfies GithubLabel,

    //   {
    //     id: 710400704,
    //     node_id: 'MDU6TGFiZWw3MTA0MDA3MDQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer',
    //     name: 'Component: Test Renderer',
    //     color: '006b75',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],

    // INFO: Esto precarga de datos que se hace antes de que se haga la peticion
    // y los mantendra por el tiempo que se le indique en el stale time,
    // tampoco se veria el loading spinner
    // initialData: [
    //   {
    //     id: 196858374,
    //     node_id: 'MDU6TGFiZWwxOTY4NTgzNzQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/CLA%20Signed',
    //     name: 'CLA Signed',
    //     color: 'e7e7e7',
    //     default: false,
    //   } satisfies GithubLabel,

    //   {
    //     id: 710400704,
    //     node_id: 'MDU6TGFiZWw3MTA0MDA3MDQ=',
    //     url: 'https://api.github.com/repos/facebook/react/labels/Component:%20Test%20Renderer',
    //     name: 'Component: Test Renderer',
    //     color: '006b75',
    //     default: false,
    //   } satisfies GithubLabel,
    // ],
  });

  return {
    labelsQuery,
  };
};
