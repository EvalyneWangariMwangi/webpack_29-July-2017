require("./custom.js");
require("!style-loader!css-loader!./style.css");
document.write("Webpack bundles up all your resources");
document.write(require("./custom.js"));