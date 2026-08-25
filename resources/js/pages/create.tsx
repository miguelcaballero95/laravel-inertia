import { Form } from "@inertiajs/react";

export default function Create() {

  return (
    <div>
      <h1>Create new user</h1>
      <Form action="/users" method="POST" className="max-w-md mx-auto mt-6">
        {
          ({ errors, processing }) => (
            <>
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 uppercase font-bold text-sm text-gray-700">
                  Name
                </label>
                <input type="text" name="name" id="name" className="border border-gray-400 p-2 w-full" />
                {
                  errors.name && <p className="text-red-500 text-sm">{errors.name}</p>
                }
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 uppercase font-bold text-sm text-gray-700">
                  Email
                </label>
                <input type="email" name="email" id="email" className="border border-gray-400 p-2 w-full" />
                {
                  errors.email && <p className="text-red-500 text-sm">{errors.email}</p>
                }
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block mb-2 uppercase font-bold text-sm text-gray-700">
                  Password
                </label>
                <input type="password" name="password" id="password" className="border border-gray-400 p-2 w-full" />
                {
                  errors.password && <p className="text-red-500 text-sm">{errors.password}</p>
                }
              </div>
              <div className="mb-6">
                <button disabled={processing} type="submit" className="bg-blue-400 text-white rounded py-2 px-4 hover:bg-blue-500">
                  Submit
                </button>
              </div>
            </>
          )
        }

      </Form>
    </div>
  )
}
