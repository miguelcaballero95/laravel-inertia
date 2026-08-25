import { Head, Link, router } from "@inertiajs/react";
import { debounce } from 'es-toolkit/function';
import { useState } from "react";

interface Props {
  time: string;
  users: any;
  search?: string;
  can: {
    createUser: boolean;
  }
}

export default function Users(props: Props) {

  const [search, setSearch] = useState(props.search || '');

  const debounceFunc = debounce((value) => {
    router.get('/users', { search: value }, { preserveState: true, replace: true });
  }, 500);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
    debounceFunc(e.target.value);
  };

  return (
    <>
      <Head title="Users" />
      <h1>Users</h1>
      {
        props.can.createUser && (
          <Link href="/users/create" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">Create new user</Link>
        )
      }
      <input
        type="text"
        value={search}
        onChange={handleSearch}
        placeholder="Search users..."
        className="border border-gray-300 rounded px-2 py-1 mb-4"
      />
      <p>{search}</p>
      <ul>
        {
          props.users.data.map((user: any) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
      <div className="flex gap-2">
        {
          props.users.links.map((link: any, index: number) => {
            if (link.url) {
              return (
                <Link className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600" key={index} href={link.url ? link.url : '#'}>
                  {link.label}
                </Link>
              )
            }

            return <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded">{link.label}</span>
          })
        }
      </div>
      <div className="mt-4">
        <p>Current time: {props.time}</p>
        <Link href="/users" preserveScroll>Refresh</Link>
      </div>
    </>
  )
}
