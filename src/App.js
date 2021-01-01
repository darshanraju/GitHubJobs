import useFetchJobs from "./useFetchJobs";
import { Container } from 'react-bootstrap'


const App = () => {
  const { loading, error, jobs } = useFetchJobs()
   
  return (
    <Container>
      {loading && <h1>Loading...</h1>}
      {error && <h1>ERROR</h1>}
      {jobs && <h1>{jobs.length}</h1>}
    </Container>
    );
}

export default App;
