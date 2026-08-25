import { Link, usePage } from "@inertiajs/react"

export const Nav = () => {

  const { component } = usePage();



  return (
    <ul>
      <li>
        <Link href="/" className={component === 'welcome' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>Home</Link>
      </li>
      <li>
        <Link href="/users" className={component === 'users' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>Users</Link>
      </li>
      <li>
        <Link href="/settings" className={component === 'settings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}>Settings</Link>
      </li>
      <li>
        <Link
          className="bg-blue-500 text-white cursor-pointer px-2 rounded-xl"
          href="/logout"
          method="post"
          as="button" >
          Logout
        </Link>
      </li>
    </ul >
  )
}