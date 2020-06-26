import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ShareProduct = ({ linkValue, copid, linkCopied }) => {
  return (
    <div className="shareProductDiv">
      <h5>Share : </h5>
      <a
        href={`https://api.whatsapp.com/send?text=${linkValue}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsappShare"
      >
        <i className="fa fa-whatsapp"></i>
      </a>

      <CopyToClipboard text={linkValue} onCopy={() => linkCopied()}>
        <a
          href="/h"
          className="copyLink"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          <i className="fa fa-clone" aria-hidden="true"></i>
        </a>
      </CopyToClipboard>
      {copid && <p className="copiedText">Link Copied!</p>}
    </div>
  );
};

export default ShareProduct;
