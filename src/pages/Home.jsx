import { useSelector } from "react-redux";

const Home = () => {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      {currentUser ? (
        <div></div>
      ) : (
        <div className="space-y-3 max-w-[500px]">
          <h1 className="text-2xl">
            WordKeep - service where you can keep, learn, share and repeat.
          </h1>
          <p>
            Make easier your learning with us. We want to suggest you the useful
            tools, which can save a time.
          </p>
        </div>
      )}
    </div>
  );
};

export default Home;
