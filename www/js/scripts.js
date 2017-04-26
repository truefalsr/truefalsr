tf = {
  nextChallenge: function() {

  },
  challenges: [
      '<?php $a = true;',
      '<?php $b = null;'
  ]
};
document.addEventListener("DOMContentLoaded", function(event) {
    document.onkeydown = function(e) {
        switch (e.which) {
            case 37:
                document.getElementById('leftBtn').click();
                break;
            case 39:
                document.getElementById('rightBtn').click();
                break
        }
    }
    hljs.highlightBlock(document.getElementById('tf-code'));
});