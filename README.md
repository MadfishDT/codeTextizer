# codeTextizer
convert text to string is recognized in codes
**'code' for you -> var text = 'this is \'code\' for you'**

**install**
-
```
npm inatall code-textizer
```

**support features:**
-
* text convert to string 
* string can be recognize in javascript, typescript, c# code
* support API
* support CLI

**dependency:**
-
* nodejs 6.x higher
* npm:
    * path
    * fs

**command line**
-

>node textizer input={inputfilePath} out={outputFilePath} vn={valuableName} quote={quote}

* input : input file path to convert, ex) c:/test.js
    ```
    function getRandomString(prifix='') {
    let r = Math.random().toString(36).substring(5);
    return prifix + r;
    }
    ```
* out : out file path ex) c:/out.js
    ```
    var code = 'function getRandomString(prifix=\'\') {
    let r = Math.random().toString(36).substring(5);
    return prifix + r;
    }'
    ```
* vn(optional) : valuableName to assing string vlaues, if ignore this param, textizer make string only code
    ```
    var valuableName = '
    ```
* quote: use single quote or double quote, default single quote

**APIS**
-
* codeTextizer Support API
    * convert({valuableName}, {convertBuffer}, {isSingleQuote})
        * ValuableName: optional, if you want code string like 'var code = '\n const fs=require('fs') ......', 'var code =' is attached
        * converBuffer: code strings
        * isSingleQuite: ture use ', false use "
```
const convert = require('codeTextizer');
let codeText = convert('codes', fs.readFileSync('test.js'), true );
.
.
.
OUTPUT
codes = '\nrequire = (\'fs\') ...............'
