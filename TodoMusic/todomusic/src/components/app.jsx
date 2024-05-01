import { useGetExampleQuery } from "../store/api/api";
import Header from "./header/header";
import Tracks from "./tracks/tracks";
import User from "./user/user";
import Example from "./example/Example";
import CreateExample from "./example/CreateExample";

export function App() {
  const { isLoading, data } = useGetExampleQuery();
  console.log(isLoading, data);
  return (
    <section>
      <User />
      <Header />
      <CreateExample/>
      <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        {isLoading ? (
          <h2>Loading...</h2>
        ) : data ? (
          data.map(ex => <Example key={ex.id} example={ex.name} />)
        ) : (
          <div>Example not found</div>
        )}
      </div>
      <div>
        <Tracks
          track={{
            id: 1,
            name: "First",
          }}
        />
        <Tracks
          track={{
            id: 2,
            name: "Second",
          }}
        />
        <Tracks
          track={{
            id: 3,
            name: "Third",
          }}
        />
      </div>
    </section>
  );
}
