import React, { useEffect, useRef } from "react";
import * as THREE from 'three';
import { GLTFLoader } from '../libs/jsm/loaders/GLTFLoader';
import { OrbitControls } from "../libs/jsm/controls/OrbitControls"

import './Dice.less'
function Dice(prpos) {
    let camera, scene, renderer, model, url, z
    url = prpos.url || './model/dice/scene.gltf';
    z = prpos.z || 10;
    const d3 = useRef(null);
    function load() {
        return new Promise((
            resolve, reject
        ) => {
            const loader = new GLTFLoader();
            loader.load(
                url,
                // './model/girl/scene.gltf',
                // './model/dice/scene.gltf',
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

    function init3D() {

        const w = d3.current.offsetWidth;
        const h = d3.current.offsetHeight;
        console.log(w, h);
        camera = new THREE.PerspectiveCamera(70, w / h, .5, 1000);
        camera.position.set(0, 0, z)

        scene = new THREE.Scene();
        scene.add(model);

        const light = new THREE.AmbientLight(0xffffff); // soft white light
        scene.add(light);

        const light1 = new THREE.PointLight(0xffffff, 1, 100);
        light1.position.set(0, 0, 10);
        scene.add(light1);


        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);

        d3.current.appendChild(renderer.domElement);

        renderer.render(scene, camera);

        let orbit = new OrbitControls(camera, renderer.domElement);
        orbit.enableZoom = false;
        let orbit1 = new OrbitControls(light1, renderer.domElement);
        orbit1.enableZoom = false;

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
            model.scale.set(1, 1, 1)
            init3D();
        })
    }, []);

    return (<div className="container-3d" ref={d3}></div>)
}
export default Dice;