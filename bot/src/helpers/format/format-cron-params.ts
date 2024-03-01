export const formatCronParams = (cronParams: Record<string, string>) => {
  const paramsArray = Object.values(cronParams);

  return paramsArray.reduce((accumulator, param) => accumulator + ' ' + param);
};
