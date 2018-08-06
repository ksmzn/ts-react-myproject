import * as React from 'react'

interface Props {
  children: React.ReactNode
}

const Layout = (props: Props) => {
  const { children } = props
  return <React.Fragment>{children}</React.Fragment>
}

export default Layout
