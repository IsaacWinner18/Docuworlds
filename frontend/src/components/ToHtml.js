import "@fortawesome/fontawesome-free/css/all.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {faLink
  
} from "@fortawesome/free-solid-svg-icons";
library.add(faLink);

const ToHtml = ({ doc }) => {

       // Check if doc is undefined or null
  if (!doc) {
      return null; // or some fallback UI if appropriate
    }
  
    // Check if expected properties (bio, title, url) exist in the doc object
    if (!doc.bio || !doc.title || !doc.url) {
      return null; // or handle the missing properties accordingly
    }


      return (
        <div className="  text-center bg-blue-950 inline-block px-5 pt-4 pb-16 rounded-2xl mb-8  "> 
          <p className=" text-purple-100 text font-sans font-bold text-2xl pb-5 ">{doc.title}</p>
          <p className=" text-purple-300 font-mono text-base pb-2  lg:w-60 md:w-48">{doc.bio}</p>
          <p className="  text-purple-100 bg-blue-500 inline-block py-2 px-6 rounded "> <a href={doc.url}>Visit site <FontAwesomeIcon icon={faLink} /> </a></p>
        </div>
      );
    };
    
    export default ToHtml;
  