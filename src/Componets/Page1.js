import React from "react";
import logo from "../assets/logo.PNG";
import img1 from "../assets/img1.PNG";
import img2 from "../assets/img2.PNG";
import img3 from "../assets/img3.PNG";
import img4 from "../assets/img4.PNG";
import righttop from "../assets/righttop.PNG";
import sidebar from "../assets/sidebar.PNG";

function Page1() {
  return (
    <div className="bg-[linear-gradient(#141E30,#243B55)] max-h-full ">
      <div className="flex flex-row">
        <div>
          <img className="h-12 ml-8 mt-4" src={logo} alt="" />
        </div>
        <div className="ml-6 mt-6 text-xl text-white">Ramaera Industries</div>
        <div className="absolute top-0 right-2 text-white mt-12 w-32 mr-4">
          <img src={righttop} alt="image" />
        </div>
      </div>

      <div className="flex flex-row">
        <span className="w-full p-0.5 bg-white mb-2 ml-20"></span>
      </div>
      <div className="ml-72 text-2xl font-poppins">
        <p className="text-white mb-4">Project</p>
      </div>
      <div className="w-60">
        <ul class="flex flex-col py-4 space-y-1 h-screen relative ">
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent "
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Profile</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Project</span>
              {/* <span class="px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-indigo-500 bg-indigo-50 rounded-full">New</span> */}
            </a>
          </li>
          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Finance</span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="relative flex flex-row items-center h-11 focus:outline-none text-white border-l-4 border-transparent"
            >
              <span class="inline-flex justify-center items-center ml-4">
                <svg
                  class="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
              </span>
              <span class="ml-2 text-xl tracking-wide truncate">Support</span>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className="flex mt-10">
               <span className="h-48 p-0.5 bg-white mb-2 ml-2"></span>
              </div>  */}

      <section className="flex container overflow-hidden table-auto ml-32 w-1/2 absolute top-32 md:ml-64 w-1/2 p-6          font-poppins">
        <div className="w-full rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto ">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3">Name</th>
                  <th className="px-4 py-3">About</th>
                  <th className="px-4 py-3">Status</th>
                </tr>
              </thead>
              <tbody className="bg-[linear-gradient(#141E30,#243B55)]">
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={img1}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold text-white">Garam Masala</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    <br /> elit. Vel quaerat pariatur praesentium totam?
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                      Active Bid{" "}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 text-sm border">6/4/2000</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        {/* <img className="object-cover w-full h-full rounded-full" src="" alt="" loading="lazy" /> */}
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold text-black"></p>
                        <p className="text-xs text-white"></p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-md font-semibold border"></td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 text-sm border">6/10/2020</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={img2}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Hotels</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    <br /> elit. Vel quaerat pariatur praesentium totam?
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-white  rounded-sm">
                      {" "}
                      Active Bid
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 text-sm border">6/10/2020</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        {/* <img className="object-cover w-full h-full rounded-full" src="" alt="" loading="lazy" /> */}
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold"></p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold"></td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 border text-sm">6/10/2020</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={img3}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Technology</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    <br /> elit. Vel quaerat pariatur praesentium totam?
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                      Upcoming
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 border text-sm">6/10/2020</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        {/* <img className="object-cover w-full h-full rounded-full" src="" alt="" loading="lazy" /> */}
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold"></p>
                        <p className="text-xs text-white"></p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-md font-semibold"></td>
                  <td className="px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 border text-sm">6/10/2020</td> */}
                </tr>
                <tr className="text-white">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div className="relative w-8 h-8 mr-3 rounded-full">
                        <img
                          className="object-cover w-full h-full rounded-full"
                          src={img4}
                          alt=""
                          loading="lazy"
                        />
                        <div
                          className="absolute inset-0 rounded-full shadow-inner"
                          aria-hidden="true"
                        ></div>
                      </div>
                      <div>
                        <p className="font-semibold">Fmcg</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 border text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing
                    <br /> elit. Vel quaerat pariatur praesentium totam?
                  </td>
                  <td className="md:px-4 py-3 border text-xs">
                    <span className="px-2 py-1 font-semibold leading-tight text-white rounded-sm">
                      {" "}
                      Finished{" "}
                    </span>
                  </td>
                  {/* <td className="px-4 py-3 border text-sm">6/10/2020</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="ml-4">
          <img src={sidebar} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Page1;
