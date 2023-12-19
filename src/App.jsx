import "./App.css";
import { Button } from "./components/Button.jsx";
import { Alert } from "./components/Alert.jsx";
import frown from "./assets/frown.svg";
import alertTriangle from "./assets/alert-triangle.svg";
import alertCircle from "./assets/alert-circle.svg";
import checkCircle from "./assets/check-circle.svg";
function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        <Button />
        <Button color="#07A4E8" />
        <Button color="#DE5753" />
        <Button color="#26B795" />
      </div>
      <hr />
      <div className="alert-components-section">
        <Alert alertColor="#F9C8C8" alertImage={frown} textAlert="This is error alert box" />
        <Alert alertColor="#F9D9C8" alertImage={alertTriangle} textAlert="This is warning alert box" />
        <Alert alertColor="#F9EBC8" alertImage={alertCircle} textAlert="This is info alert box" />
        <Alert alertColor="#CEF7CD" alertImage={checkCircle} textAlert="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
