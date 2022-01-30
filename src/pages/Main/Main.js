import { useState } from 'react';
import './Main.css';
import Input from '@mui/material/Input';


function Main() {

  // reference: https://mui.com/components/buttons/ "customization"

  const [fileName, setFileName] = useState("sampleAudio.mp3")
  const [text, setText] = useState("Nothing transcribed yet...");

  function handleChange(event) {
    console.log(`Selected file - ${event.target.files[0].name}`);
    setFileName(event.target.files[0].name);
  }


  return (
    <div>
      <div class="header">
        <h2>SignTube</h2>
      </div>
      <div className="Main">
        <div className="leftHalf">
          <h2 class="subheading"> Sign to Text</h2>
          <div className="recordButton">
            <button
              className="input-btn"
              onClick={() => {
                fetch("/run2")
              }}>
              Record
            </button>
          </div>
          <p class="transcription" s>
            This will open a separate window. Press 'q' to quit.
          </p>
        </div>

        <div className="rightHalf">
          <h2 class="subheading"> Text to Sign</h2>
          <div className="fileInput">
            <Input type="file" accept="audio/*" onChange={handleChange} />
          </div>

          <div className="uploadButton">
            <button
              className="input-btn"
              onClick={() => {
                setText("Loading text...")
                fetch("/upload")
                  .then(res => res.json())
                  .then(data => {
                    console.log("HEY: ", data)
                    setText(data["text"])
                  })
              }}>
              Transcribe MP3 File
            </button>
          </div>
          <p class="transcription" s>
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}



export default Main;