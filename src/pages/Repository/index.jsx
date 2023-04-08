import { useContext,} from "react";
import Item from "./Item";
import { AppContext } from "../../context/AppContext";
import Loading from "../Loading";
import Error from "../Error";

function Repository() {
  const { reposData, loading, errorMessenger } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center mt-5 ">
      <div className="text-2xl font-semibold mb-5">Repository </div>
      {loading && <Loading></Loading>}
      {!loading && errorMessenger && <Error/>}
      {!loading && !errorMessenger && reposData.length <= 8 ? (
        <div className="w-[900px] h-[610px] pt-2 grid gap-4 grid-rows-3 grid-cols-3 overflow-scroll overflow-x-hidden overflow-y-auto px-3 pb-1">
          {reposData.map((data) => {
            return <Item key={data.nameRepos} reposData={data}></Item>;
          })}
        </div>
      ) : (
        <div className="w-[900px] h-[610px] pt-2 grid gap-4 grid-flow-row grid-cols-3 overflow-scroll overflow-x-hidden overflow-y-auto px-3 pb-1">
          {reposData.map((data) => {
            return <Item key={data.nameRepos} reposData={data}></Item>;
          })}
        </div>
      )}
      {/* <div className="w-[1300px] h-[610px] pt-2 grid gap-4 grid-flow-3 grid-cols-4 overflow-scroll overflow-x-hidden overflow-y-auto px-3 pb-1">
        {reposData.map((data) => {
          return <Item key={data.nameRepos} reposData={data}></Item>;
        })}
      </div> */}
    </div>
  );
}

export default Repository;
