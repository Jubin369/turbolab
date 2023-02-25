import { useQuery } from "@apollo/client";
import { GET_ALL_CHARACTERS } from "../queries";
import Card from "./Card";

const Characters = () => {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 3 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <>
      <header></header>
      <div className="row">
        {data?.characters?.results.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </>
  );
};

export default Characters;
