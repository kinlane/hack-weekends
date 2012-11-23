function dodump(arr,level) {
    var dumped_text = "";
    if(!level) level = 0;
    
    //The padding given at the beginning of the line.
    var level_padding = "";
    for(var j=0;j<level+1;j++) level_padding += "    ";
    
    if(typeof(arr) == 'object') { //Array/Hashes/Objects 
        for(var item in arr) {
            var value = arr[item];
            
            if(typeof(value) == 'object') { //If it is an array,
                dumped_text += level_padding + "'" + item + "' ...\n";
                dumped_text += dump(value,level+1);
            } else {
                dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
            }
        }
    } else { //Stings/Chars/Numbers etc.
        dumped_text = "===>"+arr+"<===("+typeof(arr)+")";
    }
    return dumped_text;
}

function getUrlVar(key){
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search); 
    return result && unescape(result[1]) || ""; 
}   
              
function array2dToJson(a, p, nl) {
  var i, j, s = '{"' + p + '":[';
  nl = nl || '';
  for (i = 0; i < a.length; ++i) {
    s += nl + array1dToJson(a[i]);
    if (i < a.length - 1) {
      s += ',';
    }
  }
  s += nl + ']}';
  return s;
}

function array1dToJson(a, p) {
  var i, s = '[';
  for (i = 0; i < a.length; ++i) {
    if (typeof a[i] == 'string') {
      s += '"' + a[i] + '"';
    }
    else { // assume number type
      s += a[i];
    }
    if (i < a.length - 1) {
      s += ',';
    }
  }
  s += ']';
  if (p) {
    return '{"' + p + '":' + s + '}';
  }
  return s;
}

Array.prototype.sortBy = function( column ) {
    // this refers to the instance of the array class
    this.sort( function( item1 , item2 ) {
        if( item1[column] == item2[column] ) return 0;
        return item1[column] > item2[column];
    } );
}