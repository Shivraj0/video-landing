import './App.css';

const getSessionVideo = () => {  
  const sessionVideoKey = window.sessionStorage.getItem("video")
  
  switch(sessionVideoKey) {
    case "one":
      window.sessionStorage.setItem("video", "two");
      break;

    case "two":
      window.sessionStorage.setItem("video", "three");
      break;

    default:
      window.sessionStorage.setItem("video", "one");
      break;
  }

  return window.sessionStorage.getItem("video");
}

const getNewVideo = () => {
  const videoObject = {
    "one": "video_one.mp4",
    "two": "video_two.mp4",
    "three": "video_three.mp4",
  }

  const videoKey = getSessionVideo();

  return videoObject[videoKey];
}

const VIDEO_SRC = getNewVideo();

function App() {

  return (
    <div className="container">
      <video className="container__video" autoPlay loop muted>
        <source src={VIDEO_SRC} />
        Your browser does not support the video element. Kindly update it to latest version.
      </video>
      <div className="container__text">
          <div className="container__name">Mobile Brands.</div>
          <div className="container__description">
            <ul className="description__list">
              <li>
                Samsung
              </li>
              <li>
                Motorola
              </li>
              <li>
                One Plus
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}

export default App;
