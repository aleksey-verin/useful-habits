import { ModeToggle } from '@/components/mode-toggle'
import { Button } from '@/components/ui/button'
import { ButtonWithIcon } from '@/components/ui/button-with-icon'

const Login = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <ButtonWithIcon />
      <ModeToggle />
    </div>
  )
}

export default Login
