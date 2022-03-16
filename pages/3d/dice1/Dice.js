import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader } from '../libs/jsm/loaders/GLTFLoader';
import { OrbitControls } from "../libs/jsm/controls/OrbitControls"

import './Dice.less'
function Dice() {
    const d3 = useRef(null);
    function load() {
        return new Promise((
            resolve, reject
        ) => {
            const loader = new GLTFLoader();
            loader.load(
                './model/girl/scene.gltf',
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
        const w = d3.current.offsetWidth;
        const h = d3.current.offsetHeight;
        console.log(w,h);
        camera = new THREE.PerspectiveCamera(70, w / h, 1, 1000);
        camera.position.set(200, 0, 250)

        scene = new THREE.Scene();
        scene.add(model);


        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);

        d3.current.appendChild(renderer.domElement);

        renderer.render(scene, camera);

        let orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableZoom = false;

        animate();
    }
    function animate() {
        requestAnimationFrame(animate);
        // model.rotation.x =100;
        model.rotation.y += 0.01;

        renderer.render(scene, camera);
    }
    useEffect(() => {
        load().then((e) => {
            model = e.scene;
            init3D();
        })
    }, []);

    return (<div className="container-3d" ref={d3}></div>)
}
export default Dice;