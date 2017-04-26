tf = {
  nextChallenge: function() {
    var codeElement = document.getElementById('tf-code');
    codeElement.innerText = this.challenges[Math.floor(Math.random()*this.challenges.length)];
    hljs.highlightBlock(codeElement);
  },
  challenges: [
      "<?php\n$a = true;\n\n"+
      "if (true !== $a) {",
      "<?php\n$b = null;",
      "<?php\ndefine('SEVEN', 7);"
  ]
};
document.addEventListener("DOMContentLoaded", function(event) {
    document.onkeydown = function(e) {
        switch (e.which) {
            case 37:
                tf.nextChallenge();
                break;
            case 39:
                tf.nextChallenge();
                break
        }
    }
    hljs.highlightBlock(document.getElementById('tf-code'));
});