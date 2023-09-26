import Chartmini from "../atoms/Chartmini";

function List() {
  return (
    <div className="flex justify-center items-center h-full pt-5">
      <div className="w-full h-[98%] md:w-5/6 lg:w-11/12 lg:text-lg text-left text-[--white]">
              <div className="border-b-2 border-[--Lines] rounded-lg bg-green-200 hover:bg-gray-500 flex h-40 ">
          <div className="flex w-full">
            <div scope="row" className="grow font-medium">
              Apple Msgsdgs
              <br />
              vdfgsvdv
            </div>
            <div className="flex bg-red-500 p-1 h-auto w-[80%]">
              <div className=" grow-0">
                <Chartmini />
              </div>
            </div>
            <div className="grow-0">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
