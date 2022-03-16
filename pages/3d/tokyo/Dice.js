import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader } from '../libs/jsm/loaders/GLTFLoader';
import { DRACOLoader } from '../libs/jsm/loaders/DRACOLoader.js';
function Dice() {
    const d3 = useRef(null);
    function load() {
        return new Promise((
            resolve, reject
        ) => {
            const dracoLoader = new DRACOLoader();
			dracoLoader.setDecoderPath( './model/gltf/' );

            const loader = new GLTFLoader();
            loader.load(
                './model/LittlestTokyo.glb',
                (gltf) => {
                    resolve(gltf);
                },
                (xhr) => {
                    console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`);
                },
                (error) => {
                    console.error('An error happened', error);
                },
            );
        })
    }
    let camera, scene, renderer, model
    function init3D() {
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.2, 500);
        scene = new THREE.Scene();
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        d3.current.appendChild(renderer.domElement);


        // model.scene.scale.set(0.01, 0.01, 0.01);
        // model.scene.rotation.x = -0.5 * Math.PI;
        // model.scene.position.z = 0.8;
        scene.add(model.scene);
        
        renderer.render(scene, camera);
    }
    useEffect(() => {
        load().then((e) => {
            model = e;
            init3D();
            console.log(e);
        })
    }, []);

    return (<div className="container-3d" ref={d3}></div>)
}
export default Dice;