import Search from "./search";
import Body from "./body";
const SearchBody = () => {
  return (
    <>
      <div className="row">
        <div className="col-lg-11 offset-lg-1">
          <h4 className="mt-3"> How can we help you? </h4>
          <Search />
        </div>
        <div className="col-lg-12">
          <Body />
        </div>
      </div>
    </>
  );
};
export default SearchBody;
