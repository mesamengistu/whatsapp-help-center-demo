import { FiCopy } from "react-icons/fi";
const Header = () => {
  return (
    <div className="row">
      <div className="col-12" style={{ position: "relative" }}>
        <div className="offset-1">
          <h3 style={{ display: "inline" }} className="justify-content-center ">
            How to log in and out
          </h3>
          <label style={{ position: "absolute", right: "90px" }}>
            <FiCopy style={{ fontSize: "30px" }} />
          </label>
        </div>
      </div>
      <div className="operatin-system mt-3 row ">
        <div
          className="col-12 pb-4"
          style={{ borderBottom: "3px solid rgb(240, 242, 245)" }}
        >
          <button className=" offset-1 btn btn-lg col-3   ">
            Web and Desktop
          </button>
          <button className="btn btn-lg col-3    ">Windows</button>
        </div>
      </div>
    </div>
  );
};
export default Header;
