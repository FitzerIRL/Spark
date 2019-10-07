export default class MyApp extends ux.App {
    static _template() {
        const shared = {
            SpriteQuadList1: {
                id: 0,
                type: lng.SpriteQuadList, 
                isSharable: true,
                src: MyApp.getPath("sprite.png"), 
                w:450, 
                h:450
            },
            SpriteQuadList2: {
               id: 1,
               isSharable: true,
               type: lng.SpriteQuadList, 
               src: MyApp.getPath("rockies.jpeg"), 
               w:450, 
               h:450
           },
        };
        return {
            
            ImageTexture1: { type: lng.ImageTexture,
                quadsList: shared.SpriteQuadList1,
                bottom:0.1, left:0.05, top:80, right:60, x:0, y:0},
            ImageTexture2: { type:lng.ImageTexture, 
                quadsList: shared.SpriteQuadList1, 
                bottom:128, left:0.05, top:215.1, right:84.7, x:0, y:100},
            ImageTexture3: { type:lng.ImageTexture,
                quadsList: shared.SpriteQuadList2, 
                bottom:0.1, left:0.05, top:80, right:60, x:100, y:0},
            ImageTexture4: { type:lng.ImageTexture, 
                quadsList: shared.SpriteQuadList2, 
                bottom:0.1, left:0.05, top:80, right:60, x:100, y:100},
            ImageTexture5: { type:lng.ImageTexture,
                quadsList: shared.SpriteQuadList1, 
                bottom:0.1, left:0.05, top:80, right:60, x:200, y:0},
            ImageTexture6: { type:lng.ImageTexture, 
                quadsList: shared.SpriteQuadList1, 
                bottom:0.1, left:0.05, top:80, right:60, x:200, y:100},
        };
    }
}

MyApp.COLORS = {
    BACKGROUND: 0xff282e32
};
