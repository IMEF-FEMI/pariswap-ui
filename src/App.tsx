import './App.css';
import { useState, ChangeEvent } from 'react';
import Modal from './components/ModalContainer/Modal';

function App() {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState<number | undefined>();

  const handleOpen = () => {
    if (inputValue) {
      setOpen(true);
    } else {
      console.log("Please enter a value");
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(Number(e.target.value));
  }

  return (
    <div className="App">

      <div className="App-content">
        <div className='inputContainer'>
          <input type="number" value={inputValue} onChange={handleChange} className='inputValue' placeholder='Enter the value to place bet' />
        </div>

        <button className='paymentButton' onClick={handleOpen}>
          Make Payment
        </button>

        {open && (
          <Modal setOpen={setOpen} inputValue={inputValue} />
        )}

      </div>
      
    </div>
  );
}

export default App;
