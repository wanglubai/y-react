import React, { useEffect } from "react";
import * as THREE from 'three';

function Child() {
    function init() {
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, .1, 1000)

        var render = new THREE.WebGLRenderer();
        render.setClearColor(0xeeeeee)
        render.setSize(window.innerWidth, window.innerHeight);

        var pG = new THREE.PlaneGeometry(60, 20,4);
        var pm = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        var pl = new THREE.Mesh(pG, pm);
        pl.rotation.x = -0.5 * Math.PI;
        pl.position.set(0, 0, -14);
        scene.add(pl);

        var spg = new THREE.SphereGeometry(4, 20, 20);
        var spm = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true })
        var sp = new THREE.Mesh(spg, spm)
        sp.position.set(0, 0, -14);
        scene.add(sp);

        var axes = new THREE.AxesHelper(20);
        scene.add(axes);

        camera.lookAt(scene.position);
        document.getElementsByTagName('body')[0].appendChild(render.domElement);
        render.render(scene, camera);
    }

    useEffect(() => {
        init();
    }, [])
    return (<></>)
}
export default Child;