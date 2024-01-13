import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="absolute w-fit -translate-x-1/2 -translate-y-1/2 left-1/3 top-1/3 space-y-4 pl-5">
      <h1 className="text-4xl">404 error</h1>
      <p className="text-lg">The page you are looking for can not found.</p>
      <Link to="/" className="btn inline-flex items-center gap-[6px]">
        Go Home
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[19px] h-[19px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
          />
        </svg>
      </Link>
    </div>
  );
};

export default NotFound;
