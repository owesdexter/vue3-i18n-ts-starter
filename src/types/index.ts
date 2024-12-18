export * from './sports'

export type TMeta = {
  title: string
}

export type TRoutesItem = {
  path: string
  name?: string
  meta?: TMeta
  component?: () => Promise<typeof import('*.vue')>
  children?: TRoutesItem[]
}

export type TMenuItem = TMeta & Omit<TRoutesItem, 'children'> & { children?: TMenuItem[] }

export type TBreadcrumbItem = {
  title: string
  name: string
  path: string
  groupTitle?: string
}
