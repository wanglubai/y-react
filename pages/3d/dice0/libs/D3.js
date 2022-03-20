import * as THREE from 'three';
import GLTFLoader  from "./GLTFLoader"
import RoomEnvironment from './RoomEnvironment.js';
import { TrackballControls } from './TrackballControls.js'

class D3 {
    constructor(conteiner_, url_, succeeCall_, errorCall_) {
        this.conteiner = conteiner_;
        this.succeeCall = succeeCall_;
        this.errorCall = errorCall_;
        this.url = url_;

        this.model = null;
        this.camera = null;
        this.scene = null;
        this.renderer = null;
        this.pointLight = null;
        this.controls = null;
        this.dispose = false;

        this.init();
    }

    async init() {
        const res = await this.load(this.url);

        if (res.s) {
            this.model = res.v.scene;
            const temp = this.model.children[0];
            temp.material.setValues({ color: 0x040305, metalness: .4, roughness: .1 })
            const s = 1.6;
            this.model.scale.set(s, s, s)
            this.model.position.set(0, 0, 0)
        } else {
            this.errorCall_();
            return;
        }

        const w = this.conteiner.offsetWidth;
        const h = this.conteiner.offsetHeight;

        this.camera = new THREE.PerspectiveCamera(30, w / h, 1, 100);
        this.camera.position.set(0, 0, 40);
        this.camera.lookAt(0, 0, 0);

        this.scene = new THREE.Scene;

        this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        this.renderer.setSize(w, h);

        const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
        this.scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

        this.pointLight = new THREE.PointLight(0xfff, 10);

        this.scene.add(this.model);
        this.scene.add(this.pointLight);
        this.scene.add(new THREE.AmbientLight(0xffffff, 3));
        this.conteiner.appendChild(this.renderer.domElement);

        this.controls = new TrackballControls(this.camera, this.renderer.domElement);
        this.controls.noZoom = true;

        if (this.succeeCall) {
            this.succeeCall();
        }

        this.ani();
    }

    ani() {
        if (this.dispose) return;
        this.model.rotation.y += 0.03;
        this.controls.update();
        const [x, y, z] = [...this.camera.position]
        this.pointLight.position.set(x, y + 10, z - 20);
        this.update();
        requestAnimationFrame(() => { this.ani() });
    }

    update() {
        this.renderer.render(this.scene, this.camera)
    }

    load(url_) {
        return new Promise((resolve, reject) => {
            const loader = new GLTFLoader();
            loader.load(url_, (v) => resolve({ s: true, v: v }), (xhr) => console.log(`${(xhr.loaded / xhr.total * 100)}% loaded`), () => resolve({ s: false }))
        })
    }
    destroy() {
        console.log('destroy');

        this.dispose = true;

        if (this.renderer) {
            this.conteiner.removeChild(this.renderer.domElement);
            this.renderer.dispose();
            this.renderer = null;
        }

    }
}
export default D3;