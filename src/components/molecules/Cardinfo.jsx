function Cardinfo({ data }) {
    const { title, number, icon, id } = data;

    return (
        <>
            <div className="col-span-12 sm:col-span-6 md:col-span-3">
                <div className="flex flex-row  shadow-sm rounded md:p-5 p-1  bg-white backdrop-filter backdrop-blur-lg bg-opacity-20   shadow-lg ">
                    <div className="flex items-center justify-center flex-shrink-0 h-12 w-12 rounded-xl bg-blue-100 text-red-500">
                        {/* Condicion Goes here */}
                        <span className="material-symbols-outlined">
                            bolt
                        </span>
                    </div>
                    <div className="flex flex-col flex-grow ml-4">
                        {/* Muestra el título y el número */}
                        <div className="text-sm text-gray-500">{title}</div>
                        <div className="font-bold text-lg">{number}</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cardinfo;
