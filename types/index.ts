type TClass =
  | string
  | string[]
  | Record<string, boolean>
  | Record<string, boolean>[]

export type TClassName = TClass | TClass[]

export interface IBreadcrumb {
  title: string;
  link: string;
}

export interface IResponse<T = unknown> {
  'total': number,
  'per_page': number,
  'current_page': number,
  'last_page': number,
  'next_page_url': string,
  'prev_page_url': string
  data: T[];

}

export interface IBanners<T = unknown> {
  'id': number,
  'title': string,
  'desc': string,
  'url': string,
  'video': string,
  'images': {
    'lg': string,
    'md': string,
    'sm': string
  }
}

[];


export interface IProject<T = unknown> {
  'id': number,
  'title': string,
  description: string
  'info': string,
  'stock': string,
  'images': {
    'lg': string,
    'md': string,
    'sm': string
  }[]
}