import { useFetchUsersQuery } from "./store/users/users-api-slice";

function App() {
  const { data = [], error, isLoading } = useFetchUsersQuery("");

  return (
    <>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ul>
          {data?.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default App;
