function Item(prop) {
  const commit = prop.commit;
  
  const handleDetails = ()=>{
    window.open(commit.url, "_blank")
  }
  return (
    <div className="grid grid-rows-1 grid-cols-12 text-black bg-purple-300 mb-4 rounded-xl">
      <div className="col-span-4 flex flex-col p-2 px-2 overflow-hidden">
        <span>{commit.author.name}</span>
        <span>{commit.author.email}</span>
        <span>{commit.author.date}</span>
      </div>
      <div className="col-span-6 flex flex-col justify-center items-start p-2 px-1 overflow-scroll overflow-x-hidden overflow-y-auto">
        <span className="overflow-hidden mb-1">ID: {commit.commitID}</span>
        <span>Message: {commit.commitMessage}</span>
      </div>
      <div className="col-span-2 flex justify-center items-center ">
        <div className="cursor-pointer bg-white text-black px-2 py-1 rounded-lg text-center" onClick={handleDetails}>
          View Details
        </div>
      </div>
    </div>
  );
}

export default Item;
