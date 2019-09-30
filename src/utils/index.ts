export enum Color {
  Green = '#00BC63',
  Orange = '#FF7518',
  VeryDarkGrey = '#222222',
  DarkGrey = '#2D2D2D',
  MediumGrey = '#464545',
  LightGrey = '#CCCCCC',
}

export const bytesToSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes === 0) return 'n/a';
  const i = parseInt(Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024)), 10);
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
}