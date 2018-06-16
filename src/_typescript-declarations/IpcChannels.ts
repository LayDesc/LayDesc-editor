/// <reference path="../../static/layDesc.d.ts" />

import {IDocumentData} from "document/IDocumentData";

export namespace IpcChannels {
    export enum WindowMain {
        RENDERER = "FROM_MAIN_RENDERER",
        JS_GENERATED = "JS_GENERATED",
    }
    export interface JS_GENERATED_data {
        0: string,
    }

    export enum WindowGenerator {
        DOC_GENERATED = "DOC_GENERATED",
    }
    export interface DOC_GENERATED_data {
        docName: string,
        value: IDocumentData,
    }

    export enum WindowRenderer {
    }

    export enum ElectronNode {
        RENDERER = "FROM_APP_RENDERER",
        EMIT_JS_GENERATED = "EMIT_JS_GENERATED",
    }
}
