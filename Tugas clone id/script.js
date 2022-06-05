const paragraph = document.getElementById("p1");
const button1 = document.getElementById("button1");
let tempId=1;
button1.onclick=function(){
    const parent = document.getElementById("wrapper");

    let cloneElement=paragraph.cloneNode(true);
    tempId+=1;
    cloneElement.id="p"+tempId;
    parent.append(cloneElement);
}
