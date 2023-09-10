import React, { useEffect } from 'react';

function ScrollBar() {
  useEffect(() => {
    const progressBar = document.querySelector(".progress-bar");
    let totalPageHeight = document.body.scrollHeight - window.innerHeight;

    window.onscroll = () => {
      let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
      progressBar.style.height = `${newProgressHeight}%`;
      progressBar.style.opacity = `${newProgressHeight}%`;
    };

    return () => {
      // Clean up the scroll event listener when the component unmounts
      window.onscroll = null;
    };
  }, []);

  return (
    <div>
      <div className='fixed top-0 right-0 w-2.5 h-0 opacity-0 linear bg-gradient-to-t from-violet-500 to-red rounded-full progress-bar'></div>
      <div className='fixed top-0 right-0 w-2.5 h-full bg-main-dark opacity-5'></div>
    </div>
  );
}

export default ScrollBar;
