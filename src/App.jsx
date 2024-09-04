
import React, { useState } from "react";

const App = () => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([]);

  const addImage = () => {
    setImages([...images, `image${images.length + 1}`]);
  };

  return (
    <>
      <div className="flex min-h-screen bg-gray-800 text-white">
        {/* Empty Left Half */}
        <div className="w-1/2 hidden lg:block"></div>

        {/* Right Half */}
        <div className="w-full lg:w-1/2 p-4 ">
          {/* First Widget */}
          <div className="bg-gray-900 p-4 rounded-lg mb-4 shadow-black shadow-md drop-shadow-lg">
            <div className="flex bg-black p-2  justify-between rounded-3xl ">
              <button
                className={`px-4 py-2  rounded-3xl ${
                  activeTab === "about" ? "bg-gray-900 shadow-black shadow-md" : ""
                }`}
                onClick={() => setActiveTab("about")}
              >
                About Me
              </button>
              <button
                className={`px-4 py-2 rounded-3xl ${
                  activeTab === "experiences" ? "bg-gray-900 " : ""
                }`}
                onClick={() => setActiveTab("experiences")}
              >
                Experiences
              </button>
              <button
                className={`px-4 py-2 rounded-3xl ${
                  activeTab === "recommended" ? "bg-gray-900" : ""
                }`}
                onClick={() => setActiveTab("recommended")}
              >
                Recommended
              </button>
            </div>
            <div className="mt-4">
              {activeTab === "about" && (
                <p>Hello! I'm Dave, your sales rep here...
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda illo voluptatibus unde natus! Officia enim ducimus soluta, exercitationem aliquam sapiente praesentium perspiciatis ut sed fuga.
                </p>
              )}
              {activeTab === "experiences" && <p>Here are my experiences...</p>}
              {activeTab === "recommended" && (
                <p>Here are some recommendations...</p>
              )}
            </div>
          </div>
          
          <div className="bg-gray-600 h-1 ">_____________________________________________________________________________________________________________________________________________</div>

          {/* Gallery Widget */}
          <div className="bg-gray-900 overflow-hidden  p-4 rounded-lg shadow-black shadow-md drop-shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg" > <button className="bg-black px-6 py-3 rounded-2xl "> Gallery</button></h2>
              <div className="">
              <button
                className="bg-gray-700 px-4 py-2 rounded-2xl hover:bg-black"
                onClick={addImage}
              >
                + Add Image
              </button>

              <button  className="px-4 ml-3 mr-3 bg-gray-950 h-11 rounded-3xl shadow-black shadow-md drop-shadow-lg">left</button>
              <button className="mr-14 px-4 ml-3 bg-gray-950 h-11 rounded-3xl  shadow-black shadow-md drop-shadow-lg">right</button>
              </div>
            </div>
          
            <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div key={index} className="bg-gray-700 h-60 w-72 rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
