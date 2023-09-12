import Layout from "../components/Layout";

const Work = () => {
  return (
    <main className="h-full w-full">
      <Layout />
      <div className="grid h-[100vh] p-10">
        {/* <p className="big-title mb-[5vh]">Out Work</p> */}

        <div className=" w-[40vw] h-[30vh] work top-[100px] left-[100px]">
          <img src="" alt="" className="work-pic" />
          <p className="work-text">
            this work is amazing you should definitely check it out asap
          </p>
        </div>

        <div className="w-[40vw] h-[30vh] work top-[400px] left-[100px]">
          <img src="" alt="" className="work-pic" />
          <p className="work-text">
            this work is amazing you should definitely check it out asap
          </p>
        </div>

        <div className="w-[40vw] h-[30vh] work top-[700px] left-[100px]">
          <img src="" alt="" className="work-pic" />
          <p className="work-text">
            this work is amazing you should definitely check it out asap
          </p>
        </div>

        <div className="w-[40vw] h-[30vh] work top-[1000px] left-[100px]">
          <img src="" alt="" className="work-pic" />
          <p className="work-text">
            this work is amazing you should definitely check it out asap
          </p>
        </div>
      </div>
    </main>
  );
};
export default Work;
