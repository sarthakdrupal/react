import React from 'react';
import {render} from 'react-dom';

const App = function() {
    return <p> Hello React!</p>;
}

render(<App />, document.getElementById("app"));