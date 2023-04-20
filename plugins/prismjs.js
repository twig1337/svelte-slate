import 'prismjs';
import 'prismjs/components/prism-core.min.js';
export const languages = {
    markup: { name: 'Markup', loader: () => import('prismjs/components/prism-markup.min.js') },
    css: { name: 'CSS', loader: () => import('prismjs/components/prism-css.min.js') },
    clike: { name: 'C-like', loader: () => import('prismjs/components/prism-clike.min.js') },
    javascript: {
        name: 'JavaScript',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-javascript.min.js'))
    },
    abap: { name: 'ABAP', loader: () => import('prismjs/components/prism-abap.min.js') },
    abnf: { name: 'ABNF', loader: () => import('prismjs/components/prism-abnf.min.js') },
    actionscript: {
        name: 'ActionScript',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-actionscript.min.js'))
    },
    ada: { name: 'Ada', loader: () => import('prismjs/components/prism-ada.min.js') },
    agda: { name: 'Agda', loader: () => import('prismjs/components/prism-agda.min.js') },
    al: { name: 'AL', loader: () => import('prismjs/components/prism-al.min.js') },
    antlr4: { name: 'ANTLR4', loader: () => import('prismjs/components/prism-antlr4.min.js') },
    apacheconf: {
        name: 'Apache Configuration',
        loader: () => import('prismjs/components/prism-apacheconf.min.js')
    },
    sql: { name: 'SQL', loader: () => import('prismjs/components/prism-sql.min.js') },
    apex: {
        name: 'Apex',
        loader: () => Promise.all([
            import('prismjs/components/prism-clike.min.js'),
            import('prismjs/components/prism-sql.min.js')
        ]).then(() => import('prismjs/components/prism-apex.min.js'))
    },
    apl: { name: 'APL', loader: () => import('prismjs/components/prism-apl.min.js') },
    applescript: {
        name: 'AppleScript',
        loader: () => import('prismjs/components/prism-applescript.min.js')
    },
    aql: { name: 'AQL', loader: () => import('prismjs/components/prism-aql.min.js') },
    c: {
        name: 'C',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-c.min.js'))
    },
    cpp: {
        name: 'C++',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-cpp.min.js'))
    },
    arduino: {
        name: 'Arduino',
        loader: () => import('prismjs/components/prism-cpp.min.js').then(() => import('prismjs/components/prism-arduino.min.js'))
    },
    arff: { name: 'ARFF', loader: () => import('prismjs/components/prism-arff.min.js') },
    armasm: { name: 'ARM Assembly', loader: () => import('prismjs/components/prism-armasm.min.js') },
    arturo: { name: 'Arturo', loader: () => import('prismjs/components/prism-arturo.min.js') },
    asciidoc: { name: 'AsciiDoc', loader: () => import('prismjs/components/prism-asciidoc.min.js') },
    csharp: {
        name: 'C#',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-csharp.min.js'))
    },
    aspnet: {
        name: 'ASP.NET (C#)',
        loader: () => Promise.all([
            import('prismjs/components/prism-markup.min.js'),
            import('prismjs/components/prism-csharp.min.js')
        ]).then(() => import('prismjs/components/prism-aspnet.min.js'))
    },
    asm6502: {
        name: '6502 Assembly',
        loader: () => import('prismjs/components/prism-asm6502.min.js')
    },
    asmatmel: {
        name: 'Atmel AVR Assembly',
        loader: () => import('prismjs/components/prism-asmatmel.min.js')
    },
    autohotkey: {
        name: 'AutoHotkey',
        loader: () => import('prismjs/components/prism-autohotkey.min.js')
    },
    autoit: { name: 'AutoIt', loader: () => import('prismjs/components/prism-autoit.min.js') },
    avisynth: { name: 'AviSynth', loader: () => import('prismjs/components/prism-avisynth.min.js') },
    'avro-idl': {
        name: 'Avro IDL',
        loader: () => import('prismjs/components/prism-avro-idl.min.js')
    },
    awk: { name: 'AWK', loader: () => import('prismjs/components/prism-awk.min.js') },
    bash: { name: 'Bash', loader: () => import('prismjs/components/prism-bash.min.js') },
    basic: { name: 'BASIC', loader: () => import('prismjs/components/prism-basic.min.js') },
    batch: { name: 'Batch', loader: () => import('prismjs/components/prism-batch.min.js') },
    bbcode: { name: 'BBcode', loader: () => import('prismjs/components/prism-bbcode.min.js') },
    bbj: { name: 'BBj', loader: () => import('prismjs/components/prism-bbj.min.js') },
    bicep: { name: 'Bicep', loader: () => import('prismjs/components/prism-bicep.min.js') },
    birb: {
        name: 'Birb',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-birb.min.js'))
    },
    bison: {
        name: 'Bison',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-bison.min.js'))
    },
    bnf: { name: 'BNF', loader: () => import('prismjs/components/prism-bnf.min.js') },
    bqn: { name: 'BQN', loader: () => import('prismjs/components/prism-bqn.min.js') },
    brainfuck: {
        name: 'Brainfuck',
        loader: () => import('prismjs/components/prism-brainfuck.min.js')
    },
    brightscript: {
        name: 'BrightScript',
        loader: () => import('prismjs/components/prism-brightscript.min.js')
    },
    bro: { name: 'Bro', loader: () => import('prismjs/components/prism-bro.min.js') },
    bsl: { name: 'BSL (1C:Enterprise)', loader: () => import('prismjs/components/prism-bsl.min.js') },
    cfscript: {
        name: 'CFScript',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-cfscript.min.js'))
    },
    chaiscript: {
        name: 'ChaiScript',
        loader: () => Promise.all([
            import('prismjs/components/prism-clike.min.js'),
            import('prismjs/components/prism-cpp.min.js')
        ]).then(() => import('prismjs/components/prism-chaiscript.min.js'))
    },
    cil: { name: 'CIL', loader: () => import('prismjs/components/prism-cil.min.js') },
    cilkc: {
        name: 'Cilk/C',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-cilkc.min.js'))
    },
    cilkcpp: {
        name: 'Cilk/C++',
        loader: () => import('prismjs/components/prism-cpp.min.js').then(() => import('prismjs/components/prism-cilkcpp.min.js'))
    },
    clojure: { name: 'Clojure', loader: () => import('prismjs/components/prism-clojure.min.js') },
    cmake: { name: 'CMake', loader: () => import('prismjs/components/prism-cmake.min.js') },
    cobol: { name: 'COBOL', loader: () => import('prismjs/components/prism-cobol.min.js') },
    coffeescript: {
        name: 'CoffeeScript',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-coffeescript.min.js'))
    },
    concurnas: {
        name: 'Concurnas',
        loader: () => import('prismjs/components/prism-concurnas.min.js')
    },
    csp: {
        name: 'Content-Security-Policy',
        loader: () => import('prismjs/components/prism-csp.min.js')
    },
    cooklang: { name: 'Cooklang', loader: () => import('prismjs/components/prism-cooklang.min.js') },
    coq: { name: 'Coq', loader: () => import('prismjs/components/prism-coq.min.js') },
    ruby: {
        name: 'Ruby',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-ruby.min.js'))
    },
    crystal: {
        name: 'Crystal',
        loader: () => import('prismjs/components/prism-ruby.min.js').then(() => import('prismjs/components/prism-crystal.min.js'))
    },
    'css-extras': {
        name: 'CSS Extras',
        loader: () => import('prismjs/components/prism-css.min.js').then(() => import('prismjs/components/prism-css-extras.min.js'))
    },
    csv: { name: 'CSV', loader: () => import('prismjs/components/prism-csv.min.js') },
    cue: { name: 'CUE', loader: () => import('prismjs/components/prism-cue.min.js') },
    cypher: { name: 'Cypher', loader: () => import('prismjs/components/prism-cypher.min.js') },
    d: {
        name: 'D',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-d.min.js'))
    },
    dart: {
        name: 'Dart',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-dart.min.js'))
    },
    dataweave: {
        name: 'DataWeave',
        loader: () => import('prismjs/components/prism-dataweave.min.js')
    },
    dax: { name: 'DAX', loader: () => import('prismjs/components/prism-dax.min.js') },
    dhall: { name: 'Dhall', loader: () => import('prismjs/components/prism-dhall.min.js') },
    diff: { name: 'Diff', loader: () => import('prismjs/components/prism-diff.min.js') },
    'markup-templating': {
        name: 'Markup templating',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-markup-templating.min.js'))
    },
    django: {
        name: 'Django/Jinja2',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-django.min.js'))
    },
    'dns-zone-file': {
        name: 'DNS zone file',
        loader: () => import('prismjs/components/prism-dns-zone-file.min.js')
    },
    docker: { name: 'Docker', loader: () => import('prismjs/components/prism-docker.min.js') },
    dot: { name: 'DOT (Graphviz)', loader: () => import('prismjs/components/prism-dot.min.js') },
    ebnf: { name: 'EBNF', loader: () => import('prismjs/components/prism-ebnf.min.js') },
    editorconfig: {
        name: 'EditorConfig',
        loader: () => import('prismjs/components/prism-editorconfig.min.js')
    },
    eiffel: { name: 'Eiffel', loader: () => import('prismjs/components/prism-eiffel.min.js') },
    ejs: {
        name: 'EJS',
        loader: () => Promise.all([
            import('prismjs/components/prism-javascript.min.js'),
            import('prismjs/components/prism-markup-templating.min.js')
        ]).then(() => import('prismjs/components/prism-ejs.min.js'))
    },
    elixir: { name: 'Elixir', loader: () => import('prismjs/components/prism-elixir.min.js') },
    elm: { name: 'Elm', loader: () => import('prismjs/components/prism-elm.min.js') },
    lua: { name: 'Lua', loader: () => import('prismjs/components/prism-lua.min.js') },
    etlua: {
        name: 'Embedded Lua templating',
        loader: () => Promise.all([
            import('prismjs/components/prism-lua.min.js'),
            import('prismjs/components/prism-markup-templating.min.js')
        ]).then(() => import('prismjs/components/prism-etlua.min.js'))
    },
    erb: {
        name: 'ERB',
        loader: () => Promise.all([
            import('prismjs/components/prism-ruby.min.js'),
            import('prismjs/components/prism-markup-templating.min.js')
        ]).then(() => import('prismjs/components/prism-erb.min.js'))
    },
    erlang: { name: 'Erlang', loader: () => import('prismjs/components/prism-erlang.min.js') },
    'excel-formula': {
        name: 'Excel Formula',
        loader: () => import('prismjs/components/prism-excel-formula.min.js')
    },
    fsharp: {
        name: 'F#',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-fsharp.min.js'))
    },
    factor: { name: 'Factor', loader: () => import('prismjs/components/prism-factor.min.js') },
    false: { name: 'False', loader: () => import('prismjs/components/prism-false.min.js') },
    'firestore-security-rules': {
        name: 'Firestore security rules',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-firestore-security-rules.min.js'))
    },
    flow: {
        name: 'Flow',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-flow.min.js'))
    },
    fortran: { name: 'Fortran', loader: () => import('prismjs/components/prism-fortran.min.js') },
    ftl: {
        name: 'FreeMarker Template Language',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-ftl.min.js'))
    },
    gml: {
        name: 'GameMaker Language',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-gml.min.js'))
    },
    gap: { name: 'GAP (CAS)', loader: () => import('prismjs/components/prism-gap.min.js') },
    gcode: { name: 'G-code', loader: () => import('prismjs/components/prism-gcode.min.js') },
    gdscript: { name: 'GDScript', loader: () => import('prismjs/components/prism-gdscript.min.js') },
    gedcom: { name: 'GEDCOM', loader: () => import('prismjs/components/prism-gedcom.min.js') },
    gettext: { name: 'gettext', loader: () => import('prismjs/components/prism-gettext.min.js') },
    gherkin: { name: 'Gherkin', loader: () => import('prismjs/components/prism-gherkin.min.js') },
    git: { name: 'Git', loader: () => import('prismjs/components/prism-git.min.js') },
    glsl: {
        name: 'GLSL',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-glsl.min.js'))
    },
    gn: { name: 'GN', loader: () => import('prismjs/components/prism-gn.min.js') },
    'linker-script': {
        name: 'GNU Linker Script',
        loader: () => import('prismjs/components/prism-linker-script.min.js')
    },
    go: {
        name: 'Go',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-go.min.js'))
    },
    'go-module': {
        name: 'Go module',
        loader: () => import('prismjs/components/prism-go-module.min.js')
    },
    gradle: {
        name: 'Gradle',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-gradle.min.js'))
    },
    graphql: { name: 'GraphQL', loader: () => import('prismjs/components/prism-graphql.min.js') },
    groovy: {
        name: 'Groovy',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-groovy.min.js'))
    },
    haml: {
        name: 'Haml',
        loader: () => import('prismjs/components/prism-ruby.min.js').then(() => import('prismjs/components/prism-haml.min.js'))
    },
    handlebars: {
        name: 'Handlebars',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-handlebars.min.js'))
    },
    haskell: { name: 'Haskell', loader: () => import('prismjs/components/prism-haskell.min.js') },
    haxe: {
        name: 'Haxe',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-haxe.min.js'))
    },
    hcl: { name: 'HCL', loader: () => import('prismjs/components/prism-hcl.min.js') },
    hlsl: {
        name: 'HLSL',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-hlsl.min.js'))
    },
    hoon: { name: 'Hoon', loader: () => import('prismjs/components/prism-hoon.min.js') },
    http: { name: 'HTTP', loader: () => import('prismjs/components/prism-http.min.js') },
    hpkp: {
        name: 'HTTP Public-Key-Pins',
        loader: () => import('prismjs/components/prism-hpkp.min.js')
    },
    hsts: {
        name: 'HTTP Strict-Transport-Security',
        loader: () => import('prismjs/components/prism-hsts.min.js')
    },
    ichigojam: {
        name: 'IchigoJam',
        loader: () => import('prismjs/components/prism-ichigojam.min.js')
    },
    icon: { name: 'Icon', loader: () => import('prismjs/components/prism-icon.min.js') },
    'icu-message-format': {
        name: 'ICU Message Format',
        loader: () => import('prismjs/components/prism-icu-message-format.min.js')
    },
    idris: {
        name: 'Idris',
        loader: () => import('prismjs/components/prism-haskell.min.js').then(() => import('prismjs/components/prism-idris.min.js'))
    },
    ignore: { name: '.ignore', loader: () => import('prismjs/components/prism-ignore.min.js') },
    inform7: { name: 'Inform 7', loader: () => import('prismjs/components/prism-inform7.min.js') },
    ini: { name: 'Ini', loader: () => import('prismjs/components/prism-ini.min.js') },
    io: { name: 'Io', loader: () => import('prismjs/components/prism-io.min.js') },
    j: { name: 'J', loader: () => import('prismjs/components/prism-j.min.js') },
    java: {
        name: 'Java',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-java.min.js'))
    },
    javadoclike: {
        name: 'JavaDoc-like',
        loader: () => import('prismjs/components/prism-javadoclike.min.js')
    },
    javadoc: {
        name: 'JavaDoc',
        loader: () => Promise.all([
            import('prismjs/components/prism-markup.min.js'),
            import('prismjs/components/prism-java.min.js'),
            import('prismjs/components/prism-javadoclike.min.js')
        ]).then(() => import('prismjs/components/prism-javadoc.min.js'))
    },
    javastacktrace: {
        name: 'Java stack trace',
        loader: () => import('prismjs/components/prism-javastacktrace.min.js')
    },
    jexl: { name: 'Jexl', loader: () => import('prismjs/components/prism-jexl.min.js') },
    jolie: {
        name: 'Jolie',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-jolie.min.js'))
    },
    jq: { name: 'JQ', loader: () => import('prismjs/components/prism-jq.min.js') },
    typescript: {
        name: 'TypeScript',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-typescript.min.js'))
    },
    jsdoc: {
        name: 'JSDoc',
        loader: () => Promise.all([
            import('prismjs/components/prism-javascript.min.js'),
            import('prismjs/components/prism-javadoclike.min.js'),
            import('prismjs/components/prism-typescript.min.js')
        ]).then(() => import('prismjs/components/prism-jsdoc.min.js'))
    },
    'js-extras': {
        name: 'JS Extras',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-js-extras.min.js'))
    },
    json: { name: 'JSON', loader: () => import('prismjs/components/prism-json.min.js') },
    json5: {
        name: 'JSON5',
        loader: () => import('prismjs/components/prism-json.min.js').then(() => import('prismjs/components/prism-json5.min.js'))
    },
    jsonp: {
        name: 'JSONP',
        loader: () => import('prismjs/components/prism-json.min.js').then(() => import('prismjs/components/prism-jsonp.min.js'))
    },
    jsstacktrace: {
        name: 'JS stack trace',
        loader: () => import('prismjs/components/prism-jsstacktrace.min.js')
    },
    'js-templates': {
        name: 'JS Templates',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-js-templates.min.js'))
    },
    julia: { name: 'Julia', loader: () => import('prismjs/components/prism-julia.min.js') },
    keepalived: {
        name: 'Keepalived Configure',
        loader: () => import('prismjs/components/prism-keepalived.min.js')
    },
    keyman: { name: 'Keyman', loader: () => import('prismjs/components/prism-keyman.min.js') },
    kotlin: {
        name: 'Kotlin',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-kotlin.min.js'))
    },
    kumir: { name: 'KuMir (КуМир)', loader: () => import('prismjs/components/prism-kumir.min.js') },
    kusto: { name: 'Kusto', loader: () => import('prismjs/components/prism-kusto.min.js') },
    latex: { name: 'LaTeX', loader: () => import('prismjs/components/prism-latex.min.js') },
    php: {
        name: 'PHP',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-php.min.js'))
    },
    latte: {
        name: 'Latte',
        loader: () => Promise.all([
            import('prismjs/components/prism-clike.min.js'),
            import('prismjs/components/prism-markup-templating.min.js'),
            import('prismjs/components/prism-php.min.js')
        ]).then(() => import('prismjs/components/prism-latte.min.js'))
    },
    less: {
        name: 'Less',
        loader: () => import('prismjs/components/prism-css.min.js').then(() => import('prismjs/components/prism-less.min.js'))
    },
    scheme: { name: 'Scheme', loader: () => import('prismjs/components/prism-scheme.min.js') },
    lilypond: {
        name: 'LilyPond',
        loader: () => import('prismjs/components/prism-scheme.min.js').then(() => import('prismjs/components/prism-lilypond.min.js'))
    },
    liquid: {
        name: 'Liquid',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-liquid.min.js'))
    },
    lisp: { name: 'Lisp', loader: () => import('prismjs/components/prism-lisp.min.js') },
    livescript: {
        name: 'LiveScript',
        loader: () => import('prismjs/components/prism-livescript.min.js')
    },
    llvm: { name: 'LLVM IR', loader: () => import('prismjs/components/prism-llvm.min.js') },
    log: { name: 'Log file', loader: () => import('prismjs/components/prism-log.min.js') },
    lolcode: { name: 'LOLCODE', loader: () => import('prismjs/components/prism-lolcode.min.js') },
    magma: { name: 'Magma (CAS)', loader: () => import('prismjs/components/prism-magma.min.js') },
    makefile: { name: 'Makefile', loader: () => import('prismjs/components/prism-makefile.min.js') },
    markdown: {
        name: 'Markdown',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-markdown.min.js'))
    },
    mata: { name: 'Mata', loader: () => import('prismjs/components/prism-mata.min.js') },
    matlab: { name: 'MATLAB', loader: () => import('prismjs/components/prism-matlab.min.js') },
    maxscript: {
        name: 'MAXScript',
        loader: () => import('prismjs/components/prism-maxscript.min.js')
    },
    mel: { name: 'MEL', loader: () => import('prismjs/components/prism-mel.min.js') },
    mermaid: { name: 'Mermaid', loader: () => import('prismjs/components/prism-mermaid.min.js') },
    metafont: { name: 'METAFONT', loader: () => import('prismjs/components/prism-metafont.min.js') },
    mizar: { name: 'Mizar', loader: () => import('prismjs/components/prism-mizar.min.js') },
    mongodb: {
        name: 'MongoDB',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-mongodb.min.js'))
    },
    monkey: { name: 'Monkey', loader: () => import('prismjs/components/prism-monkey.min.js') },
    moonscript: {
        name: 'MoonScript',
        loader: () => import('prismjs/components/prism-moonscript.min.js')
    },
    n1ql: { name: 'N1QL', loader: () => import('prismjs/components/prism-n1ql.min.js') },
    n4js: {
        name: 'N4JS',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-n4js.min.js'))
    },
    'nand2tetris-hdl': {
        name: 'Nand To Tetris HDL',
        loader: () => import('prismjs/components/prism-nand2tetris-hdl.min.js')
    },
    naniscript: {
        name: 'Naninovel Script',
        loader: () => import('prismjs/components/prism-naniscript.min.js')
    },
    nasm: { name: 'NASM', loader: () => import('prismjs/components/prism-nasm.min.js') },
    neon: { name: 'NEON', loader: () => import('prismjs/components/prism-neon.min.js') },
    nevod: { name: 'Nevod', loader: () => import('prismjs/components/prism-nevod.min.js') },
    nginx: { name: 'nginx', loader: () => import('prismjs/components/prism-nginx.min.js') },
    nim: { name: 'Nim', loader: () => import('prismjs/components/prism-nim.min.js') },
    nix: { name: 'Nix', loader: () => import('prismjs/components/prism-nix.min.js') },
    nsis: { name: 'NSIS', loader: () => import('prismjs/components/prism-nsis.min.js') },
    objectivec: {
        name: 'Objective-C',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-objectivec.min.js'))
    },
    ocaml: { name: 'OCaml', loader: () => import('prismjs/components/prism-ocaml.min.js') },
    odin: { name: 'Odin', loader: () => import('prismjs/components/prism-odin.min.js') },
    opencl: {
        name: 'OpenCL',
        loader: () => import('prismjs/components/prism-c.min.js').then(() => import('prismjs/components/prism-opencl.min.js'))
    },
    openqasm: { name: 'OpenQasm', loader: () => import('prismjs/components/prism-openqasm.min.js') },
    oz: { name: 'Oz', loader: () => import('prismjs/components/prism-oz.min.js') },
    parigp: { name: 'PARI/GP', loader: () => import('prismjs/components/prism-parigp.min.js') },
    parser: {
        name: 'Parser',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-parser.min.js'))
    },
    pascal: { name: 'Pascal', loader: () => import('prismjs/components/prism-pascal.min.js') },
    pascaligo: {
        name: 'Pascaligo',
        loader: () => import('prismjs/components/prism-pascaligo.min.js')
    },
    psl: {
        name: 'PATROL Scripting Language',
        loader: () => import('prismjs/components/prism-psl.min.js')
    },
    pcaxis: { name: 'PC-Axis', loader: () => import('prismjs/components/prism-pcaxis.min.js') },
    peoplecode: {
        name: 'PeopleCode',
        loader: () => import('prismjs/components/prism-peoplecode.min.js')
    },
    perl: { name: 'Perl', loader: () => import('prismjs/components/prism-perl.min.js') },
    phpdoc: {
        name: 'PHPDoc',
        loader: () => Promise.all([
            import('prismjs/components/prism-php.min.js'),
            import('prismjs/components/prism-javadoclike.min.js')
        ]).then(() => import('prismjs/components/prism-phpdoc.min.js'))
    },
    'php-extras': {
        name: 'PHP Extras',
        loader: () => import('prismjs/components/prism-php.min.js').then(() => import('prismjs/components/prism-php-extras.min.js'))
    },
    'plant-uml': {
        name: 'PlantUML',
        loader: () => import('prismjs/components/prism-plant-uml.min.js')
    },
    plsql: {
        name: 'PL/SQL',
        loader: () => import('prismjs/components/prism-sql.min.js').then(() => import('prismjs/components/prism-plsql.min.js'))
    },
    powerquery: {
        name: 'PowerQuery',
        loader: () => import('prismjs/components/prism-powerquery.min.js')
    },
    powershell: {
        name: 'PowerShell',
        loader: () => import('prismjs/components/prism-powershell.min.js')
    },
    processing: {
        name: 'Processing',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-processing.min.js'))
    },
    prolog: { name: 'Prolog', loader: () => import('prismjs/components/prism-prolog.min.js') },
    promql: { name: 'PromQL', loader: () => import('prismjs/components/prism-promql.min.js') },
    properties: {
        name: '.properties',
        loader: () => import('prismjs/components/prism-properties.min.js')
    },
    protobuf: {
        name: 'Protocol Buffers',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-protobuf.min.js'))
    },
    pug: {
        name: 'Pug',
        loader: () => Promise.all([
            import('prismjs/components/prism-markup.min.js'),
            import('prismjs/components/prism-javascript.min.js')
        ]).then(() => import('prismjs/components/prism-pug.min.js'))
    },
    puppet: { name: 'Puppet', loader: () => import('prismjs/components/prism-puppet.min.js') },
    pure: { name: 'Pure', loader: () => import('prismjs/components/prism-pure.min.js') },
    purebasic: {
        name: 'PureBasic',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-purebasic.min.js'))
    },
    purescript: {
        name: 'PureScript',
        loader: () => import('prismjs/components/prism-haskell.min.js').then(() => import('prismjs/components/prism-purescript.min.js'))
    },
    python: { name: 'Python', loader: () => import('prismjs/components/prism-python.min.js') },
    qsharp: {
        name: 'Q#',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-qsharp.min.js'))
    },
    q: { name: 'Q (kdb+ database)', loader: () => import('prismjs/components/prism-q.min.js') },
    qml: {
        name: 'QML',
        loader: () => import('prismjs/components/prism-javascript.min.js').then(() => import('prismjs/components/prism-qml.min.js'))
    },
    qore: {
        name: 'Qore',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-qore.min.js'))
    },
    r: { name: 'R', loader: () => import('prismjs/components/prism-r.min.js') },
    racket: {
        name: 'Racket',
        loader: () => import('prismjs/components/prism-scheme.min.js').then(() => import('prismjs/components/prism-racket.min.js'))
    },
    cshtml: {
        name: 'Razor C#',
        loader: () => Promise.all([
            import('prismjs/components/prism-markup.min.js'),
            import('prismjs/components/prism-csharp.min.js')
        ]).then(() => import('prismjs/components/prism-cshtml.min.js'))
    },
    jsx: {
        name: 'React JSX',
        loader: () => Promise.all([
            import('prismjs/components/prism-markup.min.js'),
            import('prismjs/components/prism-javascript.min.js')
        ]).then(() => import('prismjs/components/prism-jsx.min.js'))
    },
    tsx: {
        name: 'React TSX',
        loader: () => Promise.all([
            import('prismjs/components/prism-jsx.min.js'),
            import('prismjs/components/prism-typescript.min.js')
        ]).then(() => import('prismjs/components/prism-tsx.min.js'))
    },
    reason: {
        name: 'Reason',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-reason.min.js'))
    },
    regex: { name: 'Regex', loader: () => import('prismjs/components/prism-regex.min.js') },
    rego: { name: 'Rego', loader: () => import('prismjs/components/prism-rego.min.js') },
    renpy: { name: "Ren'py", loader: () => import('prismjs/components/prism-renpy.min.js') },
    rescript: { name: 'ReScript', loader: () => import('prismjs/components/prism-rescript.min.js') },
    rest: {
        name: 'reST (reStructuredText)',
        loader: () => import('prismjs/components/prism-rest.min.js')
    },
    rip: { name: 'Rip', loader: () => import('prismjs/components/prism-rip.min.js') },
    roboconf: { name: 'Roboconf', loader: () => import('prismjs/components/prism-roboconf.min.js') },
    robotframework: {
        name: 'Robot Framework',
        loader: () => import('prismjs/components/prism-robotframework.min.js')
    },
    rust: { name: 'Rust', loader: () => import('prismjs/components/prism-rust.min.js') },
    sas: { name: 'SAS', loader: () => import('prismjs/components/prism-sas.min.js') },
    sass: {
        name: 'Sass (Sass)',
        loader: () => import('prismjs/components/prism-css.min.js').then(() => import('prismjs/components/prism-sass.min.js'))
    },
    scss: {
        name: 'Sass (SCSS)',
        loader: () => import('prismjs/components/prism-css.min.js').then(() => import('prismjs/components/prism-scss.min.js'))
    },
    scala: {
        name: 'Scala',
        loader: () => import('prismjs/components/prism-java.min.js').then(() => import('prismjs/components/prism-scala.min.js'))
    },
    'shell-session': {
        name: 'Shell session',
        loader: () => import('prismjs/components/prism-bash.min.js').then(() => import('prismjs/components/prism-shell-session.min.js'))
    },
    smali: { name: 'Smali', loader: () => import('prismjs/components/prism-smali.min.js') },
    smalltalk: {
        name: 'Smalltalk',
        loader: () => import('prismjs/components/prism-smalltalk.min.js')
    },
    smarty: {
        name: 'Smarty',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-smarty.min.js'))
    },
    sml: { name: 'SML', loader: () => import('prismjs/components/prism-sml.min.js') },
    solidity: {
        name: 'Solidity (Ethereum)',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-solidity.min.js'))
    },
    'solution-file': {
        name: 'Solution file',
        loader: () => import('prismjs/components/prism-solution-file.min.js')
    },
    soy: {
        name: 'Soy (Closure Template)',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-soy.min.js'))
    },
    turtle: { name: 'Turtle', loader: () => import('prismjs/components/prism-turtle.min.js') },
    sparql: {
        name: 'SPARQL',
        loader: () => import('prismjs/components/prism-turtle.min.js').then(() => import('prismjs/components/prism-sparql.min.js'))
    },
    'splunk-spl': {
        name: 'Splunk SPL',
        loader: () => import('prismjs/components/prism-splunk-spl.min.js')
    },
    sqf: {
        name: 'SQF: Status Quo Function (Arma 3)',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-sqf.min.js'))
    },
    squirrel: {
        name: 'Squirrel',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-squirrel.min.js'))
    },
    stan: { name: 'Stan', loader: () => import('prismjs/components/prism-stan.min.js') },
    stata: {
        name: 'Stata Ado',
        loader: () => Promise.all([
            import('prismjs/components/prism-mata.min.js'),
            import('prismjs/components/prism-java.min.js'),
            import('prismjs/components/prism-python.min.js')
        ]).then(() => import('prismjs/components/prism-stata.min.js'))
    },
    iecst: {
        name: 'Structured Text (IEC 61131-3)',
        loader: () => import('prismjs/components/prism-iecst.min.js')
    },
    stylus: { name: 'Stylus', loader: () => import('prismjs/components/prism-stylus.min.js') },
    supercollider: {
        name: 'SuperCollider',
        loader: () => import('prismjs/components/prism-supercollider.min.js')
    },
    swift: { name: 'Swift', loader: () => import('prismjs/components/prism-swift.min.js') },
    systemd: {
        name: 'Systemd configuration file',
        loader: () => import('prismjs/components/prism-systemd.min.js')
    },
    't4-templating': {
        name: 'T4 templating',
        loader: () => import('prismjs/components/prism-t4-templating.min.js')
    },
    't4-cs': {
        name: 'T4 Text Templates (C#)',
        loader: () => Promise.all([
            import('prismjs/components/prism-t4-templating.min.js'),
            import('prismjs/components/prism-csharp.min.js')
        ]).then(() => import('prismjs/components/prism-t4-cs.min.js'))
    },
    vbnet: {
        name: 'VB.Net',
        loader: () => import('prismjs/components/prism-basic.min.js').then(() => import('prismjs/components/prism-vbnet.min.js'))
    },
    't4-vb': {
        name: 'T4 Text Templates (VB)',
        loader: () => Promise.all([
            import('prismjs/components/prism-t4-templating.min.js'),
            import('prismjs/components/prism-vbnet.min.js')
        ]).then(() => import('prismjs/components/prism-t4-vb.min.js'))
    },
    yaml: { name: 'YAML', loader: () => import('prismjs/components/prism-yaml.min.js') },
    tap: {
        name: 'TAP',
        loader: () => import('prismjs/components/prism-yaml.min.js').then(() => import('prismjs/components/prism-tap.min.js'))
    },
    tcl: { name: 'Tcl', loader: () => import('prismjs/components/prism-tcl.min.js') },
    tt2: {
        name: 'Template Toolkit 2',
        loader: () => Promise.all([
            import('prismjs/components/prism-clike.min.js'),
            import('prismjs/components/prism-markup-templating.min.js')
        ]).then(() => import('prismjs/components/prism-tt2.min.js'))
    },
    textile: {
        name: 'Textile',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-textile.min.js'))
    },
    toml: { name: 'TOML', loader: () => import('prismjs/components/prism-toml.min.js') },
    tremor: { name: 'Tremor', loader: () => import('prismjs/components/prism-tremor.min.js') },
    twig: {
        name: 'Twig',
        loader: () => import('prismjs/components/prism-markup-templating.min.js').then(() => import('prismjs/components/prism-twig.min.js'))
    },
    typoscript: {
        name: 'TypoScript',
        loader: () => import('prismjs/components/prism-typoscript.min.js')
    },
    unrealscript: {
        name: 'UnrealScript',
        loader: () => import('prismjs/components/prism-unrealscript.min.js')
    },
    uorazor: {
        name: 'UO Razor Script',
        loader: () => import('prismjs/components/prism-uorazor.min.js')
    },
    uri: { name: 'URI', loader: () => import('prismjs/components/prism-uri.min.js') },
    v: {
        name: 'V',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-v.min.js'))
    },
    vala: {
        name: 'Vala',
        loader: () => import('prismjs/components/prism-clike.min.js').then(() => import('prismjs/components/prism-vala.min.js'))
    },
    velocity: {
        name: 'Velocity',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-velocity.min.js'))
    },
    verilog: { name: 'Verilog', loader: () => import('prismjs/components/prism-verilog.min.js') },
    vhdl: { name: 'VHDL', loader: () => import('prismjs/components/prism-vhdl.min.js') },
    vim: { name: 'vim', loader: () => import('prismjs/components/prism-vim.min.js') },
    'visual-basic': {
        name: 'Visual Basic',
        loader: () => import('prismjs/components/prism-visual-basic.min.js')
    },
    warpscript: {
        name: 'WarpScript',
        loader: () => import('prismjs/components/prism-warpscript.min.js')
    },
    wasm: { name: 'WebAssembly', loader: () => import('prismjs/components/prism-wasm.min.js') },
    'web-idl': { name: 'Web IDL', loader: () => import('prismjs/components/prism-web-idl.min.js') },
    wgsl: { name: 'WGSL', loader: () => import('prismjs/components/prism-wgsl.min.js') },
    wiki: {
        name: 'Wiki markup',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-wiki.min.js'))
    },
    wolfram: {
        name: 'Wolfram language',
        loader: () => import('prismjs/components/prism-wolfram.min.js')
    },
    wren: { name: 'Wren', loader: () => import('prismjs/components/prism-wren.min.js') },
    xeora: {
        name: 'Xeora',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-xeora.min.js'))
    },
    'xml-doc': {
        name: 'XML doc (.net)',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-xml-doc.min.js'))
    },
    xojo: { name: 'Xojo (REALbasic)', loader: () => import('prismjs/components/prism-xojo.min.js') },
    xquery: {
        name: 'XQuery',
        loader: () => import('prismjs/components/prism-markup.min.js').then(() => import('prismjs/components/prism-xquery.min.js'))
    },
    yang: { name: 'YANG', loader: () => import('prismjs/components/prism-yang.min.js') },
    zig: { name: 'Zig', loader: () => import('prismjs/components/prism-zig.min.js') }
};
