import Layout from "../components/Layout";

const Home = () => {
  return (
    <main className="h-full w-full">
      <Layout />
      <div className="flex flex-col justify-center h-[100vh] p-10">
        <p className="big-title">Reverie Complex©</p>
        <p className="w-1/2 mb-[25vh]">
          New York-based studio where art and technology converge to create
          inspiring and captivating immersive experiences. We are fervently
          dedicated to crafting a new dimension of artistic expression by
          seamlessly merging the realms of creativity and innovation.
        </p>
      </div>
    </main>
  );
};

export default Home;
