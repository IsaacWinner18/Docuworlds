import { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faChevronDown,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import ToHtml from "./ToHtml";
import '../App.css'

// Add the solid icons to the library
library.add(faBars);

const Header = () => {

  const [menu, setMenu] = useState(false);

  const Menufunc = () => {
    setMenu(!menu);
  };

useEffect(() => {
  const handleResize = () => {
    // Check if the screen width is below a certain threshold (e.g., 1024 pixels)
    const isSmallScreen = window.innerWidth <= 1024;

    // Set menu state based on the screen size
    setMenu(isSmallScreen);
    // Set other states as needed for small screens
  };

  // Initial check on mount
  handleResize();

  // Attach the event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup the event listener on component unmount
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const handleSelectTab = (tab) => {
    setSelectedTab(tab);
  };

  const [showFrontend, setShowFrontend] = useState(false);
  const frontendFun = () => {
    setShowFrontend(!showFrontend);
  };

  const [showBackend, setShowBackend] = useState(false);
  const Backend = () => {
    setShowBackend(!showBackend);
  };

  const [showCyber, setShowCyber] = useState(false);
  const Cyber = () => {
    setShowCyber(!showCyber);
  };

  const [showBlockChain, setShowBlockChain] = useState(false);
  const BlockChain = () => {
    setShowBlockChain(!showBlockChain);
  };

  const [selectedTab, setSelectedTab] = useState("HTML");
  const [documents, setDocuments] = useState(null);

  useEffect(() => {
    const fetchDocu = async () => {
      try {
        const response = await fetch("https://docuarea.vercel.app/");
        // https://docuarea.vercel.app/
        if (response.ok) {
          const json = await response.json();
          setDocuments(json);
          console.log(json);
        } else {
          console.error("Failed to fetch documents");
        }
      } catch (error) {
        console.error("Error fetching documents:", error);
      }
    };

    fetchDocu();
  }, []);

  return (
    <div>
      <div className="flex">
        <div>
          <div className={` overlay bg-blue-950 w-80 pl-5 ${menu ? 'hidden' : 'block'}`}>
            <h1 className=" text-white text-3xl pb-5 "> 𝗗𝗼𝗰𝘂𝗔𝗿𝗲𝗮 </h1>
            <div className="flex gap-4">
              <input
                type="text"
                className=" text-white pl-3 bg-transparent outline-none border-2 border-blue-600 border-dotted rounded"
              />
              <div className="bg-blue-500 text-white px-5 py-3 rounded">
                <FontAwesomeIcon icon={faSearch} />
              </div>
            </div>

            <div className="pt-10 cursor-pointer">
              <ul className="text-purple-300 font-bold text-xl pb-16 " >
                <li className="pb-8">
                  {" "}
                  <span onClick={frontendFun}>
                    {" "}
                    FRONTEND{" "}
                    <FontAwesomeIcon
                      className="absolute left-64"
                      icon={faChevronDown}
                    />{" "}
                  </span>
                  <ul
                    className={`${
                      showFrontend ? "flex" : "hidden"
                    } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                  >
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { handleSelectTab("HTML"); Menufunc()}}
                      // onClick={Menufunc}
                    >
                      {" "}
                      HTML{" "}
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { Menufunc(); handleSelectTab("CSS")}}
                    >
                      CSS
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { Menufunc(); handleSelectTab("JS")}}
                    >
                      JAVASCRIPT
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { Menufunc(); handleSelectTab("REACT")}}
                    >
                      REACT
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { Menufunc(); handleSelectTab("TAILWIND")}}
                    >
                      TAILWIND
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => { Menufunc(); handleSelectTab("MATERIAL")}}
                    >
                      MATERIAL UI
                    </li>
                  </ul>
                </li>
                <li className=" pb-8 ">
                  {" "}
                  <span onClick={Backend}>
                    BACKEND{" "}
                    <FontAwesomeIcon
                      className="absolute left-64"
                      icon={faChevronDown}
                    />{" "}
                  </span>
                  <ul
                    className={`${
                      showBackend ? "flex" : "hidden"
                    } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                  >
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("NODE")}
                    >
                      NODE JS
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("PYTHON")}
                    >
                      PYTHON
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("JAVA")}
                    >
                      JAVA
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("PHP")}
                    >
                      PHP
                    </li>
                  </ul>
                </li>
                <li className="pb-8 ">
                  {" "}
                  <span onClick={Cyber}>
                    {" "}
                    CYBER SECURITY{" "}
                    <FontAwesomeIcon
                      className="absolute left-64"
                      icon={faChevronDown}
                    />{" "}
                  </span>
                  <ul
                    className={`${
                      showCyber ? "flex" : "hidden"
                    } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                  >
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("NETWORK")}
                    >
                      NETWORK SECURITY
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("CLOUD")}
                    >
                      CLOUD SECURITY
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("PENETRATION")}
                    >
                      PENETRATION TESTING
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("VULNERABILITY")}
                    >
                      VULNERABILITY MANAGEMENT
                    </li>
                  </ul>
                </li>
                <li className="pb-8 ">
                  {" "}
                  <span onClick={BlockChain}>
                    {" "}
                    BLOCKCHAIN{" "}
                    <FontAwesomeIcon
                      className="absolute left-64"
                      icon={faChevronDown}
                    />{" "}
                  </span>
                  <ul
                    className={`${
                      showBlockChain ? "flex" : "hidden"
                    } flex-col gap-4 font-bold text-gray-400   text-base pl-10 py-5`}
                  >
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("CRYPTO")}
                    >
                      CRYPTOCURRENCIES
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("SMART")}
                    >
                      SMART CONTRACTS
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("DECENTRALIZED")}
                    >
                      DECENTRALIZED FINANCE (DeFi)
                    </li>
                    <li
                      className="hover:text-violet-600"
                      onClick={() => handleSelectTab("SERVICE")}
                    >
                      BLOCKCHAIN AS A SERVICE (BaaS)
                    </li>
                  </ul>
                </li>
                <li
                  className="pb-8 hover:text-violet-600"
                  onClick={() => handleSelectTab("AL")}
                >
                  {" "}
                  AI{" "}
                </li>
                <li
                  className="pb-8 hover:text-violet-600"
                  onClick={() => handleSelectTab("ML")}
                >
                  {" "}
                  ML{" "}
                </li>
                <li
                  className="pb-8 hover:text-violet-600"
                  onClick={() => handleSelectTab("VR")}
                >
                  {" "}
                  VR{" "}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-blue-900 flex-1 ">

         

          <div className="flex justify-between bg-blue-800 m-0 pt-3 px-5">
            <div className=" text-white text-3xl pb-5 block lg:hidden "> 𝗗𝗼𝗰𝘂𝗔𝗿𝗲𝗮 </div>

            <div onClick={Menufunc} className=" bar flex justify-end text-white text-3xl">
              <FontAwesomeIcon icon={faBars} />
            </div>

          </div>
          <div className="pl-2 pr-2 pt-1 lg:pt-10 mt-5">
            {documents && documents.length > 0 && (
              <p key={documents[2]._id}>
                {selectedTab === "HTML" && (
                  <div>
                    <ToHtml doc={documents[26]} />{" "}
                    <ToHtml doc={documents[23]} />{" "}
                    <ToHtml doc={documents[22]} />{" "}
                  </div>
                )}
                {selectedTab === "CSS" && (
                  <div>
                    <ToHtml doc={documents[25]} />{" "}
                    <ToHtml doc={documents[19]} />{" "}
                    <ToHtml doc={documents[18]} />{" "}
                  </div>
                )}
                {selectedTab === "JS" && (
                  <div>
                    <ToHtml doc={documents[24]} />{" "}
                    <ToHtml doc={documents[21]} />{" "}
                    <ToHtml doc={documents[20]} />{" "}
                  </div>
                )}
                {selectedTab === "REACT" && (
                  <div>
                    <ToHtml doc={documents[17]} />
                  </div>
                )}
                {selectedTab === "TAILWIND" && (
                  <div>
                    <ToHtml doc={documents[16]} />
                  </div>
                )}
                {selectedTab === "MATERIAL" && (
                  <div>
                    <ToHtml doc={documents[15]} />
                  </div>
                )}
                {selectedTab === "NODE" && (
                  <div>
                    <ToHtml doc={documents[14]} />
                  </div>
                )}
                {selectedTab === "PYTHON" && (
                  <div>
                    <ToHtml doc={documents[13]} />
                  </div>
                )}
                {selectedTab === "JAVA" && (
                  <div>
                    <ToHtml doc={documents[12]} />
                  </div>
                )}
                {selectedTab === "PHP" && (
                  <div>
                    <ToHtml doc={documents[11]} />
                  </div>
                )}
                {selectedTab === "NETWORK" && (
                  <div>
                    <ToHtml doc={documents[10]} />
                  </div>
                )}
                {selectedTab === "CLOUD" && (
                  <div>
                    <ToHtml doc={documents[9]} />
                  </div>
                )}
                {selectedTab === "PENETRATION" && (
                  <div>
                    <ToHtml doc={documents[8]} />
                  </div>
                )}
                {selectedTab === "VULNERABILITY" && (
                  <div>
                    <ToHtml doc={documents[7]} />
                  </div>
                )}

                {selectedTab === "CRYPTO" && (
                  <div>
                    <ToHtml doc={documents[6]} />
                  </div>
                )}
                {selectedTab === "SMART" && (
                  <div>
                    <ToHtml doc={documents[5]} />
                  </div>
                )}
                {selectedTab === "DECENTRALIZED" && (
                  <div>
                    <ToHtml doc={documents[4]} />
                  </div>
                )}
                {selectedTab === "SERVICE" && (
                  <div>
                    <ToHtml doc={documents[3]} />
                  </div>
                )}
                {selectedTab === "SERVICE" && (
                  <div>
                    <ToHtml doc={documents[2]} />
                  </div>
                )}
                {selectedTab === "ML" && (
                  <div>
                    <ToHtml doc={documents[1]} />
                  </div>
                )}
                {selectedTab === "VR" && (
                  <div>
                    <ToHtml doc={documents[0]} />
                  </div>
                )}
                {/* Add other conditions for different tabs if needed */}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
