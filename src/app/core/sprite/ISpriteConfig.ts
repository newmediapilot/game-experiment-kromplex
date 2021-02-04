export default interface ISpriteConfig {
    tagName?: string;
    appendToSelector?: string;
    appendToEl?: HTMLElement;
    style?: {
        // styles here
    },
    grid?:{
        width:number,
        height:number,
        x:number,
        y:number
    }
}