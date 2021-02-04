import SpriteCore from './core/sprite/SpriteCore';

export default class Init {
    constructor() {
        new SpriteCore({
            appendToSelector: '#app',
            style: {
                position: 'fixed',
                left: '0',
                top: '0',
                width: '100%',
                height: '100%',
                backgroundColor: 'red'
            }
        });
    }
}