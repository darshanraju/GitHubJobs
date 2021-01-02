import useFetchJobs from "./useFetchJobs";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import JobsPagination from "./JobsPagination";
import Job from "./Job";
import SearchForm from "./SearchForm";

const App = () => {
    const [params, setParams] = useState({});
    const [page, setPage] = useState(1);
    const { loading, error, jobs, hasNextPage } = useFetchJobs(params, page);

    const handleParamsChange = (e) => {
        const param = e.target.name;
        const value = e.target.value;
        setPage(1);
        setParams((prevParams) => {
            return { ...prevParams, [param]: value };
        });
    };
    return (
        <Container className="my-5">
            <h1 className="mb-4">GitHub Jobs</h1>
            <SearchForm params={params} onParamChange={handleParamsChange} />
            <JobsPagination
                page={1}
                setPage={setPage}
                hasNextPage={hasNextPage}
            />
            {loading && <h1>Loading...</h1>}
            {error && <h1>ERROR</h1>}
            {jobs.map((job) => {
                return <Job job={job} key={job.id} />;
            })}
            <JobsPagination
                page={1}
                setPage={setPage}
                hasNextPage={hasNextPage}
            />
        </Container>
    );
};

export default App;
