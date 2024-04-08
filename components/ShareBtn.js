'use client'

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'

const ShareBtn = ({ shareLink }) => {
  return (
    <>
      <div className="px-8 pt-2">
        <div className="flex flex-row my-4 justify-center">
          <div className="mx-1 text-md border-2 border-blue-800 bg-blue-800 text-white">
            <FacebookShareButton url={shareLink}>
              <div className="w-[100px] h-[40px] text-center flex justify-center items-center self-center">
                Facebook
              </div>
            </FacebookShareButton>
          </div>
          <div className="mx-1 text-md border-2">
            <EmailShareButton url={shareLink}>
              <div className="w-[100px] h-[40px] text-center flex justify-center items-center self-center">
                Email
              </div>
            </EmailShareButton>
          </div>
          <div className="mx-1 text-md border-2 border-blue-400 bg-blue-400 text-white">
            <TwitterShareButton url={shareLink}>
              <div className="w-[100px] h-[40px] text-center flex justify-center items-center self-center">
                Twitter
              </div>
            </TwitterShareButton>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareBtn
