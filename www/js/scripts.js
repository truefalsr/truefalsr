tf = {

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
});