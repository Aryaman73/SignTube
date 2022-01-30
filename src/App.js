import './App.css';
import Button from '@mui/material/Button'

import { useGradientBtnStyles } from '@mui-treasury/styles/button/gradient';


function App() {

  // reference: https://mui.com/components/buttons/ "customization"
  // const OrangeButton = styled(Button)({
  //   backgroundColor: 'rgba(255, 178, 79, 1)',
  // })

  const styles = useGradientBtnStyles();

  return (
    <div className="App">
      <div className="recordButton">
        <Button classes={styles} onClick={() => {
          fetch("/run2")
        }}>
          Record
        </Button>
      </div>
    </div>
  );
}

export default App;
