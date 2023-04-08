import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

function Item(prop) {
  const { setCommitData, setLoading, setErrorMessenger } =
    useContext(AppContext);
  const repos = prop.reposData;
  const navigate = useNavigate();
  const handleViewCommit = () => {
    navigate("/commit");
    setLoading(true);
    setErrorMessenger(null);
    axios
      .get(`${repos.commits}`)
      .then((res) => {
        return res.data;
      })
      .then((dataList) => {
        let result = [];
        let flag = 0;
        for (const data of dataList) {
          let obj = {};
          obj.commitID = data.sha;
          obj.author = data.commit.author;
          obj.commitMessage = data.commit.message;
          obj.url = data.html_url;
          result.push(obj);
          if(flag === 9) {
            break;
          }
          flag++;
        }
        setCommitData(result);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessenger(error.message);
        setLoading(false);
      });
  };
  return (
    <div className="flex flex-col min-h-[200px] ml-5 mb-5 cursor-pointer shadow-sm shadow-black rounded-lg overflow-hidden">
      <div className="flex items-center mb-2 bg-purple-600 text-white p-3 ">
        <img
          className="w-[60px] h-[60px] rounded-2xl"
          src={repos.owner.avatar_url}
          alt=""
        />
        <div className="flex flex-col ml-5 ">
          <div className="text-lg font-bold h-[30px] overflow-scroll overflow-y-auto overflow-x-hidden">{repos.owner.login}</div>
          <div className="text-sm h-[30px] w-[150px] overflow-scroll overflow-y-auto overflow-x-hidden">{repos.nameRepos}</div>
        </div>
      </div>
      <div className="mb-2 px-3">
      {/*  */}
        <div className="italic h-[50px] overflow-scroll overflow-x-hidden overflow-y-auto">{repos.describe}</div>
      </div>
      <div className="flex justify-between text-sm italic px-3">
        <div
          className="flex items-center text-blue-500 underline decoration-blue-500"
          onClick={handleViewCommit}
        >
          <span>View commit</span>
        </div>
        <div className="flex flex-col">
          <span>{repos.stars} Stars</span>
          <span>{repos.stars} Issues</span>
        </div>
      </div>
    </div>
  );
}

export default Item;
