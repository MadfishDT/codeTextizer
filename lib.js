
function getRandomString(prifix='') {
    let r = Math.random().toString(36).substring(5);
    return prifix + r;
}

function convItToTextCode(variableName,scriptCode, isSingleQ) {
    if(variableName) {
        if( variableName.replace(/\W/,'') != variableName || !variableName ) {
            console.log('The variable name you have chosen is invalid.\nIt may only contain characters a-z, A-Z, 0-9 and _');
            return null;
        }
    }
    var code = scriptCode, tempNm = variableName;
    var fromAr = new Array(/\\/g,/'/g,/"/g,/\r\n/g,/[\r\n]/g,/\t/g,new RegExp('--'+'>','g'),new RegExp('<!'+'--','g'),/\//g), toAr = new Array('\\\\','\\\'','\\\"','\\n','\\n','\\t','--\'+\'>','<!\'+\'--','\\\/');
    for( var x = 0; x < fromAr.length; x++ ) {
        code = code.replace(fromAr[x],toAr[x]);
    }
    var quoteStyle = ( isSingleQ ? '\'' : '\"' );
    if(variableName) {
        code = 'var '+variableName+' = '+quoteStyle+code+quoteStyle+';';
    } else {
        code = quoteStyle+code+quoteStyle+';';
    }
    return code;
}

module.exports = convItToTextCode