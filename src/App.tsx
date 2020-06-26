import React from 'react';
import './App.css';
import InputField from './InputField';
import Filters from './Filters';
import Result from './Result';
import {Box} from "@material-ui/core";

function App () {
        return (
            <Box className="App">
                <InputField />
                <Filters/>
                <Result/>
            </Box>
        );
}

export default App;
