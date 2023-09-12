import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-[100vw] flex p-10 fixed z-[99999]">
        <div
          id="left"
          onClick={() => {
            navigate("/");
          }}
        >
          <div>logo</div>
        </div>
        <div id="right" className="flex gap-10 justify-end w-full z-[99999]">
          <div
            onClick={() => {
              navigate("/work");
            }}
          >
            Work
          </div>
          <div
            onClick={() => {
              navigate("/about");
            }}
          >
            About
          </div>
          <div
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact
          </div>
        </div>
      </div>

      <div className="w-[100vw] flex justify-between p-10 fixed bottom-0 z-[99999]">
        <p className="">....something important</p>
        <p className="">and even more important</p>
      </div>
    </>
  );
};

export default Footer;
