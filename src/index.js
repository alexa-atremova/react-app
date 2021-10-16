import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import state from './redux/state';
import {rerenderTree} from './render';


rerenderTree(state);

