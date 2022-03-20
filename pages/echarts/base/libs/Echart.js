import * as echarts from 'echarts';

import './theme-dark'
class Echart {
    constructor(dom_, options_) {
        this.instance = null;
        this.dom = dom_;
        this.options = options_;

        this.init();
    }
    init() {
        this.instance = echarts.init(this.dom, 'theme-dark');
        this.initVo();
        window.onresize = () => {
            this.instance.resize();
        }
    }
    initVo() {
        this.instance.setOption(this.options);
    }
    destroy() {
        if (this.instance) {
            this.instance.dispose();
            this.instance = null;
        }
    }
}
export default Echart;