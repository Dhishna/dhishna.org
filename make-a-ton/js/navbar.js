

previd = "navhome";
function makeactive(id) {
    var NAME = document.getElementById(id);
    NAME.className="active"
    var NAME = document.getElementById(previd);
    NAME.className=" ";
    previd = id
}