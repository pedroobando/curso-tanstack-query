export const sleep = (ms: number) =>
  new Promise((r) => setTimeout(() => r(true), ms));
