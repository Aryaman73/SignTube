import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button'


function App() {

  // reference: https://mui.com/components/buttons/ "customization"
  // const OrangeButton = styled(Button)({
  //   backgroundColor: 'rgba(255, 178, 79, 1)',
  // })

  const [fileName, setFileName] = useState("sampleAudio.mp3")
  const [text, setText] = useState("Nothing transcribed yet...");

  function handleChange(event) {
    console.log(`Selected file - ${event.target.files[0].name}`);
    setFileName(event.target.files[0].name);
  }

  return (
    <div className="App">
      <div className="recordButton">
        <Button onClick={() => {
          fetch("/run2")
        }}>
          Record
        </Button>
      </div>

      <input type="file" accept="audio/*" onChange={handleChange} />

      <div className="uploadButton">
        <Button onClick={() => {
          console.log("AAHHH", JSON.stringify({filename: fileName}));
          fetch("/upload")
            .then(res => res.json())
            .then(data =>
              {
                console.log("HEY: ", data)
                setText(data["text"])
              })
        }}>
          TRANSCRIBE FILE
        </Button>
      </div>
      <p>
          {text}
      </p>
    </div>
  );
}

export default App;
