import Chartmini from "../atoms/Chartmini";

function List() {
  return (
    <div className="flex justify-center items-center h-full pt-5">
      <div className="w-[98%] h-[98%] md:w-[90%] lg:w-11/12 lg:text-lg text-left text-[--white] ">
        <div className="border-b-2 border-[--Lines] rounded-lg hover:bg-gray-700 flex h-auto h-auto ">
          <div className="flex w-full">
            <div scope="row" className="grow font-medium">
              <h1 className="items-center justify-center text-3xl bg-blue-400 h-full">
                Foco 1
              </h1>
            </div>
            <div className="flex p-1 h-auto w-auto overflow-hidden grow-0">
              <Chartmini />
            </div>
            <div className="grow">
              <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </div>
          </div>

        </div>
        <div className="border-b-2 border-[--Lines] rounded-lg bg-white-200 hover:bg-gray-200 flex h-auto h-auto ">
          <div className="flex w-full">
            <div scope="row" className="grow font-medium">
              <h1>

                Clima
              </h1>
              <br />
              {/* here goes de category */}
              RoomDePedro
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
