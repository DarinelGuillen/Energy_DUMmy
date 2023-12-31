import React, { useContext } from "react";
import UserContext from "../../contexts/UserContext.js";
function Holy() {
    const { User, setUser } = useContext(UserContext);

    return (
        <>
            <div className="p-2 flex flex-col h-1/2 justify-between w-full  "
                onClick={(e) => {
                    setUser((prevUser) => ({
                        leftColumn: true,
                        rightColumn: true
                    }));
                }}
            >

                <div className="flex grow items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                    <p>Something happened that you should know about.</p>
                </div>
                <div className="bg-red-100 grow border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Holy smokes!</strong>
                    <span className="block sm:inline">Something seriously bad happened.</span>

                </div>

                <div className="bg-indigo-900  grow text-center py-4 lg:px-4">
                    <div className="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
                        <span className="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">Fix</span>
                        <span className="font-semibold mr-2 text-left flex-auto">Click here to fix the problem</span>
                        <svg className="fill-current opacity-75 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" /></svg>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Holy;