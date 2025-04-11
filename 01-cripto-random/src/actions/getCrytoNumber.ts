export const getCryptoNumber = async (): Promise<number> => {
  // throw 'No se pudo obtener el número';

  const resp = await fetch(
    'https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new'
  ).then((resp) => resp.json());

  return Number(resp);
};
