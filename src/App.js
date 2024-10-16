import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import movies from "./movies";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container>
      <Filter />
      <MovieList movies={movies} />
    </Container>
  );
}

export default App;
