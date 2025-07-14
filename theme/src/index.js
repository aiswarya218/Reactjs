import React from 'raect';
import ReactDOM from 'react-dom';
import App from './App';

ImageTrack('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});