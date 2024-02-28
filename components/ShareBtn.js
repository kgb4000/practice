import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
} from 'react-share'

const ShareBtn = ({ shareLink }) => {
  return (
    <>
      <div className="px-4">
        <div className="flex flex-row my-10 justify-center">
          <div className="mx-2 text-md border-2 border-blue-800 bg-blue-800 text-white">
            <div href={shareLink}>
              <div className="w-32 py-2 text-center">Facebook</div>
            </div>
          </div>
          <div className="mx-2 text-md border-2">
            <div url={shareLink}>
              <div className="w-32 py-2 text-center">Email</div>
            </div>
          </div>
          <div className="mx-2 text-md border-2 border-blue-400 bg-blue-400 text-white">
            <div url={shareLink}>
              <div className="w-32 py-2 text-center">Twitter</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShareBtn
