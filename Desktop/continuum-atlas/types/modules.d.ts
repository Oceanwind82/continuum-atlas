// Basic module declarations to avoid TypeScript errors
declare module 'react' {
  export interface ReactNode {}
  export type FC<P = {}> = (props: P) => any
  export function createElement(type: any, props?: any, ...children: any[]): any
  export const Fragment: any
  export = React
  export as namespace React
  
  namespace React {
    type ReactNode = any
    type FC<P = {}> = (props: P) => any
    type ReactElement = any
  }
}

declare module 'next/link' {
  interface LinkProps {
    href: string
    className?: string
    children?: any
    [key: string]: any
  }
  
  function Link(props: LinkProps): any
  export default Link
}

declare module 'next' {
  export interface Metadata {
    title?: string
    description?: string
    [key: string]: any
  }
}
