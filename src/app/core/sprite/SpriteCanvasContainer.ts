import SpriteCore from './SpriteCore';
import ISpriteConfig from './ISpriteConfig';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../../globalVariables';

export default class SpriteCanvasContainer extends SpriteCore {
    constructor(config: ISpriteConfig) {
        super(config);
        // @ts-ignore
        this.el.style.width = `${100 / config.grid.width}%`;
        // @ts-ignore
        this.el.style.height = `${100 / config.grid.height}%`;
        // @ts-ignore
        this.el.style.left = `${(100 / CANVAS_WIDTH) * config.grid.x}%`;
        // @ts-ignore
        this.el.style.top = `${(100 / CANVAS_HEIGHT) * config.grid.y}%`;
    }
    appendSprite(sprite:SpriteCore){

    }
}