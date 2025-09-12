import Link from "next/link"
const Login = () => {
  return (
    <div>
      <Link href={'/Login/loginadmin'}>Admin Login</Link> <br />
      <Link href={'/Login/loginuser'}>User Login</Link>
    </div>
  )
}

export default Login
