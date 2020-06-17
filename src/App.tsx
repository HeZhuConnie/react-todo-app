import React from 'react';
import './App.css';
import InputField from './InputField';
import Filters from './Filters';
import Result from './Result';

function App () {
        return (
            <div className="App">
                <InputField />
                <Filters/>
                <Result/>
            </div>
        );
}

export default App;
