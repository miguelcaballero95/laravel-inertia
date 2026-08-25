import { Head, usePage } from "@inertiajs/react";

interface Props {
  username: string;
  frameworks: string[];
}

const Welcome = (props: Props) => {

  const { auth } = usePage().props;

  return (
    <>
      <Head title="Welcome" />
      <h1>Welcome</h1>
      <p>{auth?.user?.name}</p>
      <ul>
        {props.frameworks.map(framework => (
          <li key={framework}>{framework}</li>
        ))}
      </ul>
    </>
  );
}

// Welcome.layout = (page: any) => <Layout>{page}</Layout>;

export default Welcome;