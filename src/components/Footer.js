import React from "react";

const Footer = () => {
  return (
    <footer className="w-full mt-8 bg-gray-200 dark:bg-gray-800 py-4 text-center">
      <div className="text-gray-700 dark:text-gray-300">
        <p>
          Created by
          <span className="animate-pulse">❤️</span> Muhammad Sajid
        </p>
        <div className="flex justify-center mt-2 space-x-4">
          <a
            href="https://sm40.com/sajid09"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            SM40
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Twitter
          </a>

          <a
            href="https://github.com/ReXiOP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-gray-400"
          >
            GitHub
          </a>
        </div>
        <p className="mt-6 text-sm text-gray-400">© 2024 Muhammad Sajid. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
