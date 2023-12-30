import { Container, Header, Main } from '@prismane/core'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header t={0}>RootLayout</Header>
      <Container id="detail" mx={'auto'} w={'100vw'} h={'96.5vh'}>
        <Outlet />
      </Container>
    </>
  )
}

export default RootLayout
