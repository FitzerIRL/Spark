export default class MyApp extends ux.App {
    static _template() {
        return {
            BackgroundImage: { src: MyApp.getPath("background.png")},
            MainImage: { src: MyApp.getPath("rockies.jpeg")},
            Text: {color: 0xff00B74F, text: {text: "Hello World"}},
            Circle: {src: MyApp.getPath("rockies.jpeg"), color: 0xFFAAAAAA, quadList: {mode: 0}, pivot: 0, scale: 1, w: 1280, h: 720}
        };
    }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
