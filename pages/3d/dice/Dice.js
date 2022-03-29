import React, { useRef, useEffect, useState } from "react";
import * as THREE from 'three';
import { GLTFLoader } from "../libs/jsm/loaders/GLTFLoader"
import { RoomEnvironment } from '../libs/jsm/environments/RoomEnvironment.js';
import { TrackballControls } from '../libs/jsm/controls/TrackballControls'
import './Dice.less'
function load(url_) {
    return new Promise((resolve, reject) => {
        const loader = new GLTFLoader();
        loader.load(url_, (v) => resolve({ s: true, v: v }), (xhr) => console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`), () => resolve({ s: false }))
    })
}

function Dice() {
    const [d3, setD3] = useState(false)
    const [isDestroy, setDestroy] = useState(false);

    const conteiner = useRef(null);

    async function init() {
        const res = await load('./model/dice/dice.gltf');

        let [model, camera, scene, renderer] = [null, null, null, null];

        if (res.s) {
            model = res.v.scene;
            const temp = model.children[0];
            temp.material.setValues({ color: 0x040305, metalness: .4, roughness: .1 })
            const s = 1.2;
            model.scale.set(s, s, s)
            model.position.set(0, 0, 0)
        } else {
            return;
        }

        const w = conteiner.current.offsetWidth;
        const h = conteiner.current.offsetHeight;

        camera = new THREE.PerspectiveCamera(30, w / h, 1, 100);
        camera.position.set(0, 0, 40);
        camera.lookAt(0, 0, 0);

        scene = new THREE.Scene;

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(w, h);

        const pmremGenerator = new THREE.PMREMGenerator(renderer);
        scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

        const pointLight = new THREE.PointLight(0xfff, 10);

        scene.add(model);
        scene.add(pointLight);
        scene.add(new THREE.AmbientLight(0xffffff, 3));
        conteiner.current.appendChild(renderer.domElement);

        let controls = new TrackballControls(camera, renderer.domElement);
        controls.noZoom = true;

        setD3(true);

        const update = () => renderer.render(scene, camera);
        const ani = () => {
            model.rotation.y += 0.03;
            controls && controls.update();

            const [x, y, z] = [...camera.position]
            pointLight.position.set(x, y + 10, z - 20);
            update();
            if (isDestroy) return;
            requestAnimationFrame(ani);
        }
        ani();

    }

    useEffect(() => {
        const destroy = init();
        return () => {
            console.log('销毁');
            setDestroy(true);
        }
    }, [])

    return (<div className="dice">
        <div className="dice-conteiner" ref={conteiner}></div>
        {d3 ? null : <div className="dice-default">default</div>}
    </div>)
}
export default Dice;