import { JSX as StencilJSX } from '@stencil/core'
import { JSXBase as StencilJSXBase } from '@shoelace-style/shoelace/dist/types/stencil-public-runtime'

declare module '@stencil/core' {
  export namespace JSXBase {
    interface HTMLAttributes extends StencilJSXBase.HTMLAttributes {
      // JSX is a global namespace in solid
      children?: JSX.Element
    }
  }
}

declare global {
  export namespace JSX {
    interface IntrinsicElements extends StencilJSX.IntrinsicElements {}
  }
}
