import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import Item from "./Item";
import Loading from "../Loading";
import Error from "../Error";

function Commit() {
  const { commitData, loading, errorMessenger } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center mt-8 box-border">
      <div className="text-lx font-bold">TOP LATEST COMMIT</div>

      {loading && <Loading></Loading>}
      {!loading && errorMessenger && <Error />}
      {!loading && !errorMessenger && (
        <div className=" w-[1000px] h-[580px] mt-8 overflow-scroll overflow-x-hidden overflow-y-auto">
          <div className="grid grid-rows-1 grid-cols-12 text-lg font-semibold ">
            <div className="col-span-4 text-left  p-2 px-2">
              Author
            </div>
            <div className="col-span-6 text-left  p-2 px-2">
              Commit
            </div>
            <div className="text-left col-span-2  p-2 px-2"></div>
          </div>
          {commitData &&
            commitData.map((commit) => {
              return <Item key={commit.commitID} commit={commit}></Item>;
            })}
        </div>
      )}
    </div>
  );
}

export default Commit;
