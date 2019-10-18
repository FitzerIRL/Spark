var appBundle = (function () {
    'use strict';

    let def = {
        x: 50,
        y: 50,
        vertical_space: 30,
        text: {
            fontFace: 'RobotoRegular',
            fontSize: 36,
            text: 'The quick brown fox jumps over the lazy dog.',
            longText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            textColor: 0xffff00ff,
            wordWrapWidth: 800,
            maxLines: 2,
        }
    };

    let Defaults = {
        get: function (prop) {
            let val = JSON.parse(JSON.stringify(def));
            if (!prop) {
                return val;
            }
            let keys = prop.split('.');
            for (let i in keys) {
                if (typeof (val[keys[i]]) == 'undefined') {
                    return undefined;
                }
                val = val[keys[i]];
            }
            return val;
        },
        applyToText: function (obj, props) {
            for (let i in props) {
                let prop = props[i];
                if (typeof (def.text[prop]) != 'undefined' && def.text[prop] !== false) {
                    obj.text[prop] = def.text[prop];
                }
            }
            return obj;
        }
    };

    let max_lines_suffix = [
        false, // attribute will not be set
        null,  // attribute will be set to "null"
        '',
        '...',
        '>>>'
    ];

    let def$1 = Defaults.get(),
        space = def$1.vertical_space || 30,
        x = def$1.x,
        y = def$1.y,
        template = {};

    for (let i in max_lines_suffix)
    {
        let tpl = {
            x: x,
            y: y,
            text: {
                text: def$1.text.longText
            }
        };

        if (max_lines_suffix[i] !== false)
        {
            tpl.text.maxLinesSuffix = max_lines_suffix[i];
        }

        template['Text_' + i] = Defaults.applyToText(tpl, [
            'fontFace',
            'fontSize',
            'textColor',
            'wordWrapWidth',
            'maxLines'
        ]);

        y += (def$1.text.fontSize || space) * (def$1.text.maxLines || 5) + space;
    }

    /*
    import test_template from './import/text-cut-e-x.js';
    import test_template from './import/text-cut-e-y.js';
    import test_template from './import/text-cut-s-e-x.js';
    import test_template from './import/text-cut-s-e-y.js';
    import test_template from './import/text-cut-s-x.js';
    import test_template from './import/text-cut-s-y.js';
    import test_template from './import/text-font-face.js';
    import test_template from './import/text-font-size.js';
    import test_template from './import/text-font-style.js';
    import test_template from './import/text-line-height.js';
    import test_template from './import/text-max-lines.js';
    import test_template from './import/text-max-lines-suffix.js';
    import test_template from './import/text-offset-x.js';
    import test_template from './import/text-offset-y.js';
    import test_template from './import/text-padding-left.js';
    import test_template from './import/text-padding-right.js';
    import test_template from './import/text-text-align.js';
    import test_template from './import/text-text-baseline.js';
    import test_template from './import/text-text-color.js';
    import test_template from './import/text-word-wrap-width.js';
    import test_template from './import/text-padding-offset-cut-max-lines.js';
    */

    class MyApp extends ux.App {
        static getFonts() {
            return [
                {family: 'RobotoRegular', url: MyApp.getPath('fonts/Roboto-Regular.ttf'), descriptors: {}}
                , {family: 'RobotoItalic', url: MyApp.getPath('fonts/Roboto-Italic.ttf'), descriptors: {}}
                , {family: 'RobotoBold', url: MyApp.getPath('fonts/Roboto-Bold.ttf'), descriptors: {}}
                , {family: 'IndieFlower', url: MyApp.getPath('fonts/IndieFlower.ttf'), descriptors: {}}
            ];
        }

        static _template() {
            return {
                BackgroundImage: {src: MyApp.getPath('bg-grayscale-1080p.png')},
                Test: template
            };
        }
    }

    MyApp.COLORS = {
        BACKGROUND: 0xff282e32
    };

    return MyApp;

}());
