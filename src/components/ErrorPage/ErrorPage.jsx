import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3>Page not found</h3>
                    <p>go back to previous page</p>
                    <Link to="/"><button>Go Back</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;