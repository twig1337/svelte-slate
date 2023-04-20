import { SvelteComponentTyped } from "svelte";
import type { IBaseElement } from './Element.svelte';
import type { ISvelteEditor } from '../withSvelte';
export declare const LANGUAGE_CONTEXT_KEY: import("../utils").IContextKey<"false" | "q" | "ruby" | "gettext" | "nginx" | "vim" | "markup" | "css" | "clike" | "javascript" | "abap" | "abnf" | "actionscript" | "ada" | "agda" | "al" | "antlr4" | "apacheconf" | "sql" | "apex" | "apl" | "applescript" | "aql" | "c" | "cpp" | "arduino" | "arff" | "armasm" | "arturo" | "asciidoc" | "csharp" | "aspnet" | "asm6502" | "asmatmel" | "autohotkey" | "autoit" | "avisynth" | "avro-idl" | "awk" | "bash" | "basic" | "batch" | "bbcode" | "bbj" | "bicep" | "birb" | "bison" | "bnf" | "bqn" | "brainfuck" | "brightscript" | "bro" | "bsl" | "cfscript" | "chaiscript" | "cil" | "cilkc" | "cilkcpp" | "clojure" | "cmake" | "cobol" | "coffeescript" | "concurnas" | "csp" | "cooklang" | "coq" | "crystal" | "css-extras" | "csv" | "cue" | "cypher" | "d" | "dart" | "dataweave" | "dax" | "dhall" | "diff" | "markup-templating" | "django" | "dns-zone-file" | "docker" | "dot" | "ebnf" | "editorconfig" | "eiffel" | "ejs" | "elixir" | "elm" | "lua" | "etlua" | "erb" | "erlang" | "excel-formula" | "fsharp" | "factor" | "firestore-security-rules" | "flow" | "fortran" | "ftl" | "gml" | "gap" | "gcode" | "gdscript" | "gedcom" | "gherkin" | "git" | "glsl" | "gn" | "linker-script" | "go" | "go-module" | "gradle" | "graphql" | "groovy" | "haml" | "handlebars" | "haskell" | "haxe" | "hcl" | "hlsl" | "hoon" | "http" | "hpkp" | "hsts" | "ichigojam" | "icon" | "icu-message-format" | "idris" | "ignore" | "inform7" | "ini" | "io" | "j" | "java" | "javadoclike" | "javadoc" | "javastacktrace" | "jexl" | "jolie" | "jq" | "typescript" | "jsdoc" | "js-extras" | "json" | "json5" | "jsonp" | "jsstacktrace" | "js-templates" | "julia" | "keepalived" | "keyman" | "kotlin" | "kumir" | "kusto" | "latex" | "php" | "latte" | "less" | "scheme" | "lilypond" | "liquid" | "lisp" | "livescript" | "llvm" | "log" | "lolcode" | "magma" | "makefile" | "markdown" | "mata" | "matlab" | "maxscript" | "mel" | "mermaid" | "metafont" | "mizar" | "mongodb" | "monkey" | "moonscript" | "n1ql" | "n4js" | "nand2tetris-hdl" | "naniscript" | "nasm" | "neon" | "nevod" | "nim" | "nix" | "nsis" | "objectivec" | "ocaml" | "odin" | "opencl" | "openqasm" | "oz" | "parigp" | "parser" | "pascal" | "pascaligo" | "psl" | "pcaxis" | "peoplecode" | "perl" | "phpdoc" | "php-extras" | "plant-uml" | "plsql" | "powerquery" | "powershell" | "processing" | "prolog" | "promql" | "properties" | "protobuf" | "pug" | "puppet" | "pure" | "purebasic" | "purescript" | "python" | "qsharp" | "qml" | "qore" | "r" | "racket" | "cshtml" | "jsx" | "tsx" | "reason" | "regex" | "rego" | "renpy" | "rescript" | "rest" | "rip" | "roboconf" | "robotframework" | "rust" | "sas" | "sass" | "scss" | "scala" | "shell-session" | "smali" | "smalltalk" | "smarty" | "sml" | "solidity" | "solution-file" | "soy" | "turtle" | "sparql" | "splunk-spl" | "sqf" | "squirrel" | "stan" | "stata" | "iecst" | "stylus" | "supercollider" | "swift" | "systemd" | "t4-templating" | "t4-cs" | "vbnet" | "t4-vb" | "yaml" | "tap" | "tcl" | "tt2" | "textile" | "toml" | "tremor" | "twig" | "typoscript" | "unrealscript" | "uorazor" | "uri" | "v" | "vala" | "velocity" | "verilog" | "vhdl" | "visual-basic" | "warpscript" | "wasm" | "web-idl" | "wgsl" | "wiki" | "wolfram" | "wren" | "xeora" | "xml-doc" | "xojo" | "xquery" | "yang" | "zig">;
export declare const CODE_TYPE: string;
export declare function getLanguageContext(): import("svelte/store").Writable<"false" | "q" | "ruby" | "gettext" | "nginx" | "vim" | "markup" | "css" | "clike" | "javascript" | "abap" | "abnf" | "actionscript" | "ada" | "agda" | "al" | "antlr4" | "apacheconf" | "sql" | "apex" | "apl" | "applescript" | "aql" | "c" | "cpp" | "arduino" | "arff" | "armasm" | "arturo" | "asciidoc" | "csharp" | "aspnet" | "asm6502" | "asmatmel" | "autohotkey" | "autoit" | "avisynth" | "avro-idl" | "awk" | "bash" | "basic" | "batch" | "bbcode" | "bbj" | "bicep" | "birb" | "bison" | "bnf" | "bqn" | "brainfuck" | "brightscript" | "bro" | "bsl" | "cfscript" | "chaiscript" | "cil" | "cilkc" | "cilkcpp" | "clojure" | "cmake" | "cobol" | "coffeescript" | "concurnas" | "csp" | "cooklang" | "coq" | "crystal" | "css-extras" | "csv" | "cue" | "cypher" | "d" | "dart" | "dataweave" | "dax" | "dhall" | "diff" | "markup-templating" | "django" | "dns-zone-file" | "docker" | "dot" | "ebnf" | "editorconfig" | "eiffel" | "ejs" | "elixir" | "elm" | "lua" | "etlua" | "erb" | "erlang" | "excel-formula" | "fsharp" | "factor" | "firestore-security-rules" | "flow" | "fortran" | "ftl" | "gml" | "gap" | "gcode" | "gdscript" | "gedcom" | "gherkin" | "git" | "glsl" | "gn" | "linker-script" | "go" | "go-module" | "gradle" | "graphql" | "groovy" | "haml" | "handlebars" | "haskell" | "haxe" | "hcl" | "hlsl" | "hoon" | "http" | "hpkp" | "hsts" | "ichigojam" | "icon" | "icu-message-format" | "idris" | "ignore" | "inform7" | "ini" | "io" | "j" | "java" | "javadoclike" | "javadoc" | "javastacktrace" | "jexl" | "jolie" | "jq" | "typescript" | "jsdoc" | "js-extras" | "json" | "json5" | "jsonp" | "jsstacktrace" | "js-templates" | "julia" | "keepalived" | "keyman" | "kotlin" | "kumir" | "kusto" | "latex" | "php" | "latte" | "less" | "scheme" | "lilypond" | "liquid" | "lisp" | "livescript" | "llvm" | "log" | "lolcode" | "magma" | "makefile" | "markdown" | "mata" | "matlab" | "maxscript" | "mel" | "mermaid" | "metafont" | "mizar" | "mongodb" | "monkey" | "moonscript" | "n1ql" | "n4js" | "nand2tetris-hdl" | "naniscript" | "nasm" | "neon" | "nevod" | "nim" | "nix" | "nsis" | "objectivec" | "ocaml" | "odin" | "opencl" | "openqasm" | "oz" | "parigp" | "parser" | "pascal" | "pascaligo" | "psl" | "pcaxis" | "peoplecode" | "perl" | "phpdoc" | "php-extras" | "plant-uml" | "plsql" | "powerquery" | "powershell" | "processing" | "prolog" | "promql" | "properties" | "protobuf" | "pug" | "puppet" | "pure" | "purebasic" | "purescript" | "python" | "qsharp" | "qml" | "qore" | "r" | "racket" | "cshtml" | "jsx" | "tsx" | "reason" | "regex" | "rego" | "renpy" | "rescript" | "rest" | "rip" | "roboconf" | "robotframework" | "rust" | "sas" | "sass" | "scss" | "scala" | "shell-session" | "smali" | "smalltalk" | "smarty" | "sml" | "solidity" | "solution-file" | "soy" | "turtle" | "sparql" | "splunk-spl" | "sqf" | "squirrel" | "stan" | "stata" | "iecst" | "stylus" | "supercollider" | "swift" | "systemd" | "t4-templating" | "t4-cs" | "vbnet" | "t4-vb" | "yaml" | "tap" | "tcl" | "tt2" | "textile" | "toml" | "tremor" | "twig" | "typoscript" | "unrealscript" | "uorazor" | "uri" | "v" | "vala" | "velocity" | "verilog" | "vhdl" | "visual-basic" | "warpscript" | "wasm" | "web-idl" | "wgsl" | "wiki" | "wolfram" | "wren" | "xeora" | "xml-doc" | "xojo" | "xquery" | "yang" | "zig">;
export interface ICodeElement extends IBaseElement {
    type: 'code';
    language: string;
    maxHeight?: number;
    children: Array<ICodeEditorElement>;
}
export declare function isCodeElement(element: IBaseElement): element is ICodeElement;
export declare function withCode<T extends ISvelteEditor = ISvelteEditor>(editor: T): T;
export declare function insertCode(editor: Editor): void;
import { Editor } from 'slate';
import { type ICodeEditorElement } from './CodeEditorElement.svelte';
declare const __propDef: {
    props: {
        element: ICodeElement;
        isInline: boolean;
        isVoid: boolean;
        contenteditable: boolean;
        ref?: HTMLElement | undefined;
        dir?: 'rtl' | 'ltr' | undefined;
    };
    events: {
        mousedown: MouseEvent;
        touchstart: TouchEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type CodeElementProps = typeof __propDef.props;
export type CodeElementEvents = typeof __propDef.events;
export type CodeElementSlots = typeof __propDef.slots;
export default class CodeElement extends SvelteComponentTyped<CodeElementProps, CodeElementEvents, CodeElementSlots> {
}
export {};
