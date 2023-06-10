import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from "react-share";

import { VscCopy, VscClose } from "react-icons/vsc";
import { BiShareAlt } from "react-icons/bi";
import { MdDone } from "react-icons/md";
import Button from "../button/Button";
import ShareOnSocial from "react-share-on-social";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ShareModal = ({ show, hide }) => {
  const { flashcards } = useSelector((state) => state.flashCardData);

  const { id } = useParams();
  const socialShare = [
    {
      id: 1,
      btn: (
        <FacebookShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
          title="share on facebook"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      ),
    },
    {
      id: 2,
      btn: (
        <LinkedinShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
          title="share on linkedin"
        >
          <LinkedinIcon size={32} round />
        </LinkedinShareButton>
      ),
    },
    {
      id: 3,
      btn: (
        <WhatsappShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
          title="share on whatsapp"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      ),
    },
    {
      id: 4,
      btn: (
        <TwitterShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
          title="share on twitter"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      ),
    },
    {
      id: 5,
      btn: (
        <EmailShareButton
          url={"https://www.example.com"}
          quote={"Dummy text!"}
          hashtag="#muo"
          title="share on email"
        >
          <EmailIcon size={32} round />
        </EmailShareButton>
      ),
    },
  ];
  const [copied, setCopied] = useState(false);

  return (
    <div
      className={`fixed inset-0 w-full h-screen place-items-center bg-gray-500 bg-opacity-60 backdrop-blur-[1px] ${show}`}
    >
      <div className="bg-white p-10 w-96 rounded-md shadow-md relative">
        <div className="absolute top-3 right-3 text-2xl text-gray-500 hover:text-gray-600 transition-all">
          <Button
            type={"button"}
            text={<VscClose />}
            fn={() => {
              hide("hidden");
            }}
          />
        </div>

        <h3 className="font-semibold">Share</h3>
        <div className="flex items-center gap-3 justify-between mt-4 mb-8">
          <div>
            <input
              type="url"
              name="page_url"
              id="page_url"
              disabled
              value={window.location.href}
              className="border-2 border-gray-300 border-dashed px-2 py-1 rounded-md w-60 truncate"
            />
          </div>

          <div>
            <ul className="flex items-center gap-3 text-xl text-gray-500 hover:text-gray-600 transition-all">
              <li>
                <button
                  type="button"
                  title="copy page link"
                  disabled={copied}
                  onClick={() => {
                    setCopied((prev) => !prev);
                    navigator.clipboard.writeText(window.location.href);
                    setTimeout(() => {
                      setCopied((prev) => !prev);
                    }, 1000);
                  }}
                  className="active:bg-blue-200"
                >
                  {copied ? <MdDone /> : <VscCopy />}
                </button>
              </li>
              <li>
                {/* <button> */}
                {flashcards.map((card) => {
                  if (card.id === Number(id)) {
                    return (
                      <ShareOnSocial
                        key={card.id}
                        textToShare={card.groups.groupDesc}
                        link={window.location.href}
                        linkTitle={card.groups.group}
                        linkMetaDesc={card.groups.groupDesc}
                        linkFavicon={"dummy"}
                        noReferer
                      >
                        <button type="button" title="share page link">
                          <BiShareAlt />
                        </button>
                      </ShareOnSocial>
                    );
                  }
                  return null;
                })}
              </li>
            </ul>
          </div>
        </div>

        <ul className="flex items-center gap-4 justify-between flex-wrap">
          {socialShare.map(({ id, btn }) => (
            <li key={id}>{btn}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ShareModal;
