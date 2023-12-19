import "./App.css";
import { Button } from "./components/Button.jsx";
import { Alert } from "./components/Alert.jsx";
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
        <Alert textAlert="This is error alert box" />
        <Alert textAlert="This is warning alert box" />
        <Alert textAlert="This is info alert box" />
        <Alert textAlert="This is success alert box" />
      </div>
    </div>
  );
}

export default App;
