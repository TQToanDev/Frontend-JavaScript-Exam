function User(prop) {
  const handleViewRepos = prop.handleViewRepos;
  const userData = prop.userData;
  return (
    <div className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <img
          className="w-[80px] rounded-2xl"
          src={userData.img}
          alt=""
        />
        <span className="ml-5 text-xl">{userData.username}</span>
      </div>
      <div>
        <span
          className="bg-[#c874b2] cursor-pointer text-white px-2 py-1 rounded-lg"
          onClick={()=>{handleViewRepos(userData.repos)}}
        >
          View Repos
        </span>
      </div>
    </div>
  );
}

export default User;
