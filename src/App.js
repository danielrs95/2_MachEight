import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [response, setResponse] = useState();

  useEffect(() => {
    const axiosReq = async () => {
      const res = await axios.get('https://mach-eight.uc.r.appspot.com/');
      // console.log(res.data.values);
      setResponse(res.data.values);
    };

    axiosReq();
  }, []);

  console.log(response);

  return (
    <div className='App'>
      <header className='App-header'>
        {response[0].first_name}
        <p>Hello World</p>
      </header>
    </div>
  );
}

export default App;
