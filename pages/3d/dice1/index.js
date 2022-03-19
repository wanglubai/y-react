import React from 'react';
import ReactDOM from 'react-dom';
import Dice from './Dice'

import './index.less'
ReactDOM.render(
    <div className='parent'>
        <Dice url={'./model/dice/scene.gltf'} z={5} />
        <Dice url={'./model/dice_with_heart/scene.gltf'} z={16}/>
        <Dice url={'./model/e/scene.gltf'} z={4} />
        <Dice url={'./model/f/scene.gltf'} z={4} />
        <Dice url={'./model/g/scene.gltf'} z={1} s={3}/>
        <Dice url={'./model/h/scene.gltf'} z={10} s={1}/>
    </div>,
    document.getElementById('root')
);

