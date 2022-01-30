import './Main.css';
import Button from '@mui/material/Button'


function Main() {

  // reference: https://mui.com/components/buttons/ "customization"
  // const OrangeButton = styled(Button)({
  //   backgroundColor: 'rgba(255, 178, 79, 1)',
  // })

  return (
    <div className="Main">
      <div className="recordButton">
        <Button onClick={() => {
          fetch("/run2")
        }}>
          Record
        </Button>
      </div>
    </div>
  );
}



export default Main;