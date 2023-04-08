import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import User from "./User";
import axios from "axios";
import Loading from "../Loading";
import Error from "../Error";

function Home() {
  const navigate = useNavigate();
  const {
    userData,
    setUserData,
    setReposData,
    loading,
    setLoading,
    setCommitData,
    errorMessenger,
    setErrorMessenger,
  } = useContext(AppContext);
  const inputData = useRef("");
  const handleSearchEvent = () => {
    setLoading(true);
    setErrorMessenger(null);
    setReposData([]);
    setCommitData([]);
    axios
      .get(`https://api.github.com/search/users?q=${inputData.current.value}`)
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        const itemList = data.items;
        const tem = []
        for (const item of itemList) {
          let obj = {
            username: item.login,
            img: item.avatar_url,
            repos: item.repos_url,
          };
          tem.push(obj)
        }
        setUserData(tem);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessenger(error.message);
        setLoading(false);
      });
  };
  const handleViewRepos = (repos) => {
    navigate("/repository");
    setReposData([]);
    setCommitData([]);
    setLoading(true);
    setErrorMessenger(null);
    axios
      .get(`${repos}`)
      .then((res) => {
        return res.data;
      })
      .then((dataList) => {
        console.log(dataList);
        let result = [];
        for (const data of dataList) {
          let obj = {};
          obj.owner = data.owner;
          obj.nameRepos = data.name;
          obj.describe = data.description;
          obj.stars = data.stargazers_count;
          obj.issues = data.open_issues_count;
          obj.commits = data.commits_url.slice(0, -6);
          result.push(obj);
        }
        setReposData(result);
        setLoading(false);
      })
      .catch((error) => {
        setErrorMessenger(error.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="text-xl flex justify-center mt-32">
        <input
          ref={inputData}
          type="text"
          placeholder="User Name"
          maxLength={80}
          className="outline-none w-[500px] border border-black pl-3 py-2 rounded-lg"
        />
        <button
          onClick={handleSearchEvent}
          className="bg-[#c874b2] text-white px-5 ml-2 rounded-lg"
        >
          Search
        </button>
      </div>

      <div className="w-[600px] h-[450px] overflow-scroll overflow-y-auto overflow-x-hidden mt-8">
        {loading && <Loading></Loading>}
        {!loading && errorMessenger && <Error />}
        {userData &&
          !loading &&
          !errorMessenger &&
          userData.map((data) => {
            return (
              <User
                key={data.username}
                userData={data}
                handleViewRepos={handleViewRepos}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
