import React from "react";

function FooterBtn(props) {
  const { link, i } = props;
  return (
    <>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button
          className='bg-white flex-col mx-2 my-1 rounded-full px-2 py-2'
          type="button"
        >
          {/* <i className={style}></i> */}
          {i}
        </button>
      </a>
    </>
  );
}

export default FooterBtn;
