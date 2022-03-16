import React from 'react';
import ReactDOM from 'react-dom';
import Dice from './Dice'
ReactDOM.render(
    <div>
        <Dice url={'./model/dice/scene.gltf'} z={5}/>
        <Dice url={'./model/dice_with_heart/scene.gltf'} z={16}/>
    </div>,
    document.getElementById('root')
);

