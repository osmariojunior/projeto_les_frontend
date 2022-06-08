import React, { useState } from "react";
import Calendar from "../../components/Calendar";

import UserHistory from "../../components/UserHistory";
import ConvertJob from "../../components/ConvertJob";
import Sidebar from "../../components/Sidebar";
import Search from "../../components/Search";

const HomePage = () => {
  const [convertedJobs, setConvertedJobs] = useState([]);


  return (

<main className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-screen overflow-hidden relative">
    <div className="flex items-start justify-between">
        <Sidebar/>
        <div className="flex flex-col w-full pl-0 md:p-4 md:space-y-4">
          <Search/>
          <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
              <div className="flex flex-col flex-wrap sm:flex-row ">
                  <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className="mb-4">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        <div className="flex items-center">
                          < ConvertJob
                            setConvertedJobs={setConvertedJobs}
                            convertedJobs={convertedJobs} />
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className="mb-4">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        <div className="flex items-center">
                          <UserHistory convertedJobs={convertedJobs}/>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 xl:w-1/3">
                    <div className="mb-4">
                      <div className="flex items-center justify-between px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-2xl">
                        <div className="flex items-center">
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full sm:w-1/2 xl:w-1/3">
                      <Calendar/>
                  </div>
              </div>
          </div>
        </div>
        </div>
</main>
  );
};
export default HomePage;
