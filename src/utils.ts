export enum Color {
  Green = '#00BC63',
  Orange = '#FF7518',
  White = '#EFF0F0',
  Black = '#262C34',
  LightBlack = '#353C44',
}

export const searchUrl = 'https://us-central1-rarbg-d56e1.cloudfunctions.net/search';

export const bytesToSize = (bytes: number) => {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  if (bytes <= 0) return 'n/a';
  const i = Math.floor(Math.log(Math.abs(bytes)) / Math.log(1024));
  if (i === 0) return `${bytes} ${sizes[i]})`;
  return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`;
};
