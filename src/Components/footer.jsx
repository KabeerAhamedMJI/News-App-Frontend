import React from 'react';

function Footer(props) {
  try {
    return (
      <footer className="foot text-white">
        <div className="container items-center justify-center mx-auto bg-transparent-600 md:py-4">
          <div className="flex flex-col items-center justify-center mb-1">
            <ul className="list-none hidden md:flex md:flex-row">
              <li className="mb-2 md:mb-0 md:mr-4"><a href="/" className="text-white">Top News</a></li>
              <li className="mb-2 md:mb-0 md:mr-4"><a href="/about" className="text-white">Technology</a></li>
              <li className="mb-2 md:mb-0 md:mr-4"><a href="/articles" className="text-white">Life Styles</a></li>
              <li className="mb-2 md:mb-0 md:mr-4"><a href="/" className="text-white">Sports</a></li>
              <li className="mb-2 md:mb-0 md:mr-4"><a href="/" className="text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div className="flex justify-center  mb-2 mt-2 md:px-4">
            <a href="#" className="text-white mx-2">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-white mx-2">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center py-2 bg-gray-800">
          <div className="container mx-auto text-white">
            &copy; 2024 NewsToday.com. All rights reserved.
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error("Error rendering Footer:", error);
    return null;
  }
}

export default Footer;
