declare global {
  namespace JSX {
    interface Element {
      type: any
      props: any
      key: any
    }
    interface ElementClass {
      render(): JSX.Element | null
    }
    interface ElementAttributesProperty {
      props: {}
    }
    interface ElementChildrenAttribute {
      children: {}
    }
    interface IntrinsicAttributes {
      key?: string | number | null
    }
    interface IntrinsicClassAttributes<T> {
      ref?: any
    }
    interface IntrinsicElements {
      [elemName: string]: any
    }
  }
  
  // Basic React types
  namespace React {
    type ReactNode = any
    type FC<P = {}> = (props: P) => JSX.Element | null
    type ReactElement = JSX.Element
    interface Component<P = {}, S = {}> {
      props: P
      state: S
    }
  }
}

export {}
