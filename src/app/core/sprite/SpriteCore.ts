import ISpriteConfig from './ISpriteConfig';
import {CANVAS_HEIGHT, CANVAS_WIDTH} from '../../globalVariables';

export default class SpriteCore {
    protected el: HTMLElement;
    private defaultTagName: string = 'div';
    protected _x: number = 0;
    protected _y: number = 0;

    constructor(config: ISpriteConfig) {
        this.el = document.createElement(config.tagName || this.defaultTagName);

        if (config.appendToEl) {
            config.appendToEl.appendChild(this.el);
        } else if (config.appendToSelector) {
            // @ts-ignore
            document.querySelector(config.appendToSelector).appendChild(this.el);
        } else {
            throw Error('SpriteCore nothing to append to');
        }

        this.appendStyleAttr(config.style);

        console.log('Init:SpriteCore');
    }

    appendStyleAttr(style: any) {
        for (let i in style) {
            // @ts-ignore
            this.el.style[i] = style[i];
        }
        this.el.style.position = 'absolute';
    }

    translateX(value: number) {
        return `${(100 / CANVAS_WIDTH) * value}%`;
    }

    translateY(value: number) {
        return `${(100 / CANVAS_HEIGHT) * value}%`;
    }

    render() {
        this.el.style.left = this.translateX(this._x);
        this.el.style.top = this.translateY(this._y);
    }

    set x(value: number) {
        this._x = value;
    }

    set y(value: number) {
        this._y = value;
    }

}