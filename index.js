var loaderUtils = require("loader-utils");
module.exports = function(source) {
    var start, end;

    this.cacheable && this.cacheable();
    var query = loaderUtils.parseQuery(this.query);
    if(query.disable){
        return source;
    }

    if(this.resourcePath.match(/\.html$/)){
        start = "<![CDATA[\n";
        end = "\n]]>";
    } else if(this.resourcePath.match(/\.coffee/)){
        start = "###\n";
        end = "\n###\n";
    } else {
        start = "/*\n";
        end = "\n*/\n";
    }
    return start + this.resourcePath + end + source;
};

