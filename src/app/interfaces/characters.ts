export interface ICharacters {
  info: IInfo;
  results: IResults[];
}

export interface IInfo {
  count: number;
  next: string;
  pages: number;
  prev: string;
}

export interface IResults {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: IOrigin;
  location: ILocation;
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface ILocation {
  name: string;
  url: string;
}

export interface IOrigin {
  name: string;
  url: string;
}
