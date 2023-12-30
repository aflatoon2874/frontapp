// import { useObservable } from '@legendapp/state/react'
import {
  Button,
  Card,
  Flex,
  PasswordField,
  Text,
  TextField,
  fr
} from '@prismane/core'
import { useForm } from '@prismane/core/hooks'
import { required } from '@prismane/core/validators'
import { Form } from 'react-router-dom'

export const Login = () => {
  const { validateForm, register } = useForm({
    fields: {
      username: {
        value: '',
        validators: {
          required: (v: string) => required(v)
        }
      },
      password: {
        value: '',
        validators: {
          required: (v: string) => required(v)
        }
      }
    }
  })

  return (
    <Card>
      <Text as="h2" mb={fr(5)}>
        Login
      </Text>
      <Form
        onSubmit={async (e) => {
          const hasErrors = await validateForm()
          if (hasErrors) {
            e.preventDefault()
            console.log(hasErrors)
          }
        }}
        // onReset={() => {
        //   // setValues("");
        // }}
        method="post"
        action="login"
      >
        <Flex direction="column" gap={fr(4)}>
          <TextField
            name="username"
            placeholder="Enter username or email address"
            label="Username/Email Address:"
            {...register('username')}
          />
          <PasswordField
            name="password"
            placeholder="Enter user password"
            label="Password:"
            {...register('password')}
          />
          <Button variant="primary" type="submit" full>
            Login
          </Button>
        </Flex>
      </Form>
      <Flex direction="column" gap={0} mt={fr(2)}>
        <Text ta={'left'}>Forgotten your Password?</Text>
        <Button
          as={'a'}
          variant="text"
          p={0}
          // type="button"
          onClick={() => console.log('forgot password')}
          // full
        >
          Click here to reset.
        </Button>
      </Flex>
    </Card>
  )
}
