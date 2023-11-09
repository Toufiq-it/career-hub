import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-20">
            <h2 className="text-4xl mb-5">Oooops !!!!</h2>
            <Link to="/">
            <button className="btn">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorPage;