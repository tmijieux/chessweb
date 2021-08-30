(function(){

  const minify = require("html-minifier-terser").minify;
  const fs = require("fs")

  String.prototype.replaceAll = function(from, to) {
    return this.split(from).join(to)
  }
  fs.readFile("../index.html", "utf-8", function(err,data) {
    let d = data
    const q = [
      ["king", "K"],
      ["queen", "Q"],
      ["bishop", "B"],
      ["knight", "N"],
      ["rook", "R"],
      ["pawn", "P"],
      ["empty", "E"],
      ["white", "w"],
      ["black", "b"],

      ["icons/", "i/"],
      ["openPgnFile", "a"],
      ["exportHistoryPgnFile", "b"],
      ["hideAttack", "c"],
      ["showSquareAttackedBy", "d"],
      ["showSquareAttackedByBoth", "e"],
      ["swapBoard", "f"],
      ["reinitBoard", "g"],
      ["moveHistory", "mH"],
      ["piece", "pi"],
      ["promote-dialog", "pd"],
      ["square", "sq"],

      ["player-name","pn"],
      ["\"bottom\"", "\"bo\""],
      ["position-cross", "poc"],
      ["position-dot", "pod"],
      ["basicMoves", "bM"],
      ["basicMove", "bM"],
      ["getElement(", "gE("],
      ["isAttackedBy(", "iab("],
      ["setIsAttackedBy(", "sab("],
      ["checkmate", "cm"],
      ["checked", "ck"],
      ["enPassant", "eP"],
      ["move", "mv"],
      ["remv", "remove"],
      ["dragged", "dg"],
      ["draggablec", "dgb"],
    ];
    q.forEach(([a,b],_) => {
      // console.log("a=",a, " b=",b)
      d = d.replaceAll(a,b)
      console.error("a=",a, " b=",b)
    })

    let result = minify(d, {
      removeAttributeQuotes: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    })

    console.log(result);
  });
})();
