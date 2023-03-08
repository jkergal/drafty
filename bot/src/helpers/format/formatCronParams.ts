export const formatCronParams = (cronParams: { [key: string]: string }) => {
  const paramsArray = Object.values(cronParams);

  return paramsArray.reduce((accumulator, param) => accumulator + ' ' + param);
};
