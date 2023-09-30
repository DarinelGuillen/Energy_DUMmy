import Chartmini from "../atoms/Chartmini";

function List() {
  return (
    <div className="flex justify-center items-center h-full pt-5">
      <div className="w-[98%] h-[98%] md:w-[95%] lg:w-11/12 lg:text-lg text-left text-[--white] ">
        <div className="border-b-2 border-[--Lines] rounded-lg bg-white-200 hover:bg-gray-200 flex h-auto h-auto ">
          <div className="flex w-full">
            <div scope="row" className="grow font-medium">
              Apple Msgsdgs
              <br />
              vdfgsvdv
            </div>
            <div className="flex p-1 h-auto w-auto overflow-hidden grow-0">
                <Chartmini />
            </div>
            <div className="grow">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;
