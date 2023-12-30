import { Center } from '@prismane/core'
import { Login } from '../components/Login'

const HomePage = () => {
  return (
    <Center
      m={0}
      w={'100vw'}
      h={'100vh'}
      bg={(theme) => (theme.mode === 'dark' ? ['base', 600] : ['base', 200])}
    >
      <Login />
    </Center>
  )
}

export default HomePage
