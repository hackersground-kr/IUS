import React from 'react'

import styles from "./UtilButton.module.css";

function UtilButton({ auth, setPageId, pageId }) {
  const clickListener = (e) => {
    if (auth) {
      if (pageId === "form") {
        setPageId("main");
      }
      else {
        setPageId("form");
      }
    }
    else {
      if (pageId === "auth") {
        // setPageId((prev) => prev);
        setPageId("main")
      }
      else {
        setPageId("auth");
      }
    }
  }

  return (
    <div className={styles.iconContainer} onClick={clickListener}>
      {
        auth ?
          <svg width="40" height="40" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M27.0834 14.5833H22.9167V22.9167H14.5834V27.0833H22.9167V35.4167H27.0834V27.0833H35.4167V22.9167H27.0834V14.5833ZM25 4.16666C13.5 4.16666 4.16669 13.5 4.16669 25C4.16669 36.5 13.5 45.8333 25 45.8333C36.5 45.8333 45.8334 36.5 45.8334 25C45.8334 13.5 36.5 4.16666 25 4.16666ZM25 41.6667C15.8125 41.6667 8.33335 34.1875 8.33335 25C8.33335 15.8125 15.8125 8.33332 25 8.33332C34.1875 8.33332 41.6667 15.8125 41.6667 25C41.6667 34.1875 34.1875 41.6667 25 41.6667Z" fill="white"/>
          </svg>
        :
        <svg className={styles.authIcon} width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.1357 18.4143C28.2457 18.4143 29.3082 18.5729 30.3072 18.8741V16.8286C30.3072 15.0843 28.88 13.6571 27.1357 13.6571H25.55V10.4857C25.55 6.10914 21.998 2.55714 17.6214 2.55714C13.2449 2.55714 9.69287 6.10914 9.69287 10.4857V13.6571H8.10716C6.36287 13.6571 4.93573 15.0843 4.93573 16.8286V32.6857C4.93573 34.43 6.36287 35.8571 8.10716 35.8571H18.0337C16.781 34.0653 16.0357 31.877 16.0357 29.5143C16.0357 23.3776 20.999 18.4143 27.1357 18.4143ZM12.7057 10.4857C12.7057 7.77414 14.9099 5.57 17.6214 5.57C20.333 5.57 22.5372 7.77414 22.5372 10.4857V13.6571H12.7057V10.4857Z" fill="white"/>
          <path d="M27.1357 21.5857C22.7592 21.5857 19.2072 25.1377 19.2072 29.5143C19.2072 33.8909 22.7592 37.4429 27.1357 37.4429C31.5123 37.4429 35.0643 33.8909 35.0643 29.5143C35.0643 25.1377 31.5123 21.5857 27.1357 21.5857ZM27.1357 24.7571C28.4519 24.7571 29.5143 25.8196 29.5143 27.1357C29.5143 28.4519 28.4519 29.5143 27.1357 29.5143C25.8196 29.5143 24.7572 28.4519 24.7572 27.1357C24.7572 25.8196 25.8196 24.7571 27.1357 24.7571ZM27.1357 34.2714C25.5024 34.2714 24.0594 33.4469 23.2032 32.1783C24.3607 31.5123 25.6927 31.1 27.1357 31.1C28.5787 31.1 29.9107 31.5123 31.0683 32.1783C30.212 33.4469 28.769 34.2714 27.1357 34.2714Z" fill="white"/>
        </svg>  
          
      }
    </div>
  )
}

export default UtilButton