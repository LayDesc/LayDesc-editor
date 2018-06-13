import {Editor} from "./Editor";

export class MonacoInitializer {
    constructor(callbackInitialised: () => void) {

        // require node modules before loader.js comes in
        const path = require('path');

        function uriFromPath(_path: string) {
            let pathName = path.resolve(_path).replace(/\\/g, '/');
            if (pathName.length > 0 && pathName.charAt(0) !== '/') {
                pathName = '/' + pathName;
            }
            return encodeURI('file://' + pathName);
        }

        amdRequire.config({
            baseUrl: uriFromPath(path.join(__dirname, '../../../node_modules/monaco-editor/min'))
        });

        // workaround monaco-css not understanding the environment
        (self as selfMonaco).module = undefined;
        // workaround monaco-typescript not understanding the environment
        (self as selfMonaco).process.browser = true;


        amdRequire(['vs/editor/editor.main'], callbackInitialised);
    }
}

declare const amdRequire: any;

declare interface selfMonaco extends Window {
    module: undefined;
    process: {
        browser: boolean,
    }

}