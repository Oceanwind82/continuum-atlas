// Standalone React types - no external dependencies
declare global {
  // React namespace
  namespace React {
    // Core types
    type ReactNode = any
    type ReactElement<P = any, T extends string | JSXElementConstructor<any> = string | JSXElementConstructor<any>> = {
      type: T
      props: P
      key: string | number | null
    }
    
    // Component types
    type FC<P = {}> = FunctionComponent<P>
    type FunctionComponent<P = {}> = (props: P) => ReactElement | null
    
    interface Component<P = {}, S = {}> {
      props: Readonly<P>
      state: Readonly<S>
      render(): ReactNode
    }
    
    // HTML attributes
    interface HTMLAttributes<T = HTMLElement> {
      className?: string
      id?: string
      style?: any
      children?: ReactNode
      [key: string]: any
    }
    
    interface AnchorHTMLAttributes<T = HTMLAnchorElement> extends HTMLAttributes<T> {
      href?: string
      target?: string
      rel?: string
    }
    
    interface Attributes {
      key?: string | number | null
    }
    
    interface ClassAttributes<T> extends Attributes {
      ref?: any
    }
  }
  
  // JSX namespace
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {}
    
    interface ElementClass extends React.Component<any, any> {}
    
    interface ElementAttributesProperty {
      props: {}
    }
    
    interface ElementChildrenAttribute {
      children: {}
    }
    
    interface IntrinsicAttributes extends React.Attributes {}
    
    interface IntrinsicClassAttributes<T> extends React.ClassAttributes<T> {}
    
    interface IntrinsicElements {
      // HTML elements
      div: React.HTMLAttributes<HTMLDivElement>
      span: React.HTMLAttributes<HTMLSpanElement>
      p: React.HTMLAttributes<HTMLParagraphElement>
      h1: React.HTMLAttributes<HTMLHeadingElement>
      h2: React.HTMLAttributes<HTMLHeadingElement>
      h3: React.HTMLAttributes<HTMLHeadingElement>
      h4: React.HTMLAttributes<HTMLHeadingElement>
      h5: React.HTMLAttributes<HTMLHeadingElement>
      h6: React.HTMLAttributes<HTMLHeadingElement>
      a: React.AnchorHTMLAttributes<HTMLAnchorElement>
      ul: React.HTMLAttributes<HTMLUListElement>
      ol: React.HTMLAttributes<HTMLOListElement>
      li: React.HTMLAttributes<HTMLLIElement>
      main: React.HTMLAttributes<HTMLElement>
      section: React.HTMLAttributes<HTMLElement>
      header: React.HTMLAttributes<HTMLElement>
      footer: React.HTMLAttributes<HTMLElement>
      nav: React.HTMLAttributes<HTMLElement>
      html: React.HTMLAttributes<HTMLHtmlElement>
      body: React.HTMLAttributes<HTMLBodyElement>
      strong: React.HTMLAttributes<HTMLElement>
      // Add more as needed
      [elemName: string]: any
    }
  }
  
  // JSX element constructor type
  type JSXElementConstructor<P> = ((props: P) => React.ReactElement | null) | (new (props: P) => React.Component<P, any>)
}

// Module declarations
declare module 'react' {
  export = React
  export as namespace React
}

declare module 'next/link' {
  interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string
    as?: string
    replace?: boolean
    scroll?: boolean
    shallow?: boolean
    passHref?: boolean
    prefetch?: boolean
    locale?: string | false
    children: React.ReactNode
  }
  
  declare const Link: React.FunctionComponent<LinkProps>
  export default Link
}

declare module 'next' {
  export interface Metadata {
    title?: string
    description?: string
    keywords?: string | string[]
    viewport?: string
    [key: string]: any
  }
}

export {}
