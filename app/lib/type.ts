export type Matches = {
  id: string;
  pathname: string;
  data?: unknown;
  params: Record<string, string>;
  handle?: unknown;
};

export type Label = {
  title: string;
  description: string;
};

export type ItemOptions = {
  id?: string;
};

export type Link = Label & {
  url: string;
  icon?: string;
};

export type Image = Label & {
  src: string;
};
export type Logo = Image;
