function getParagraph1(){
    var inputs=[]
    for(var i = 1 ; i <=6 ; i++)
    {
        inputs.push(document.getElementById("para_input_box_" + i).value);
        document.getElementById("showParagraph1").innerHTML = inputs;
    }
}
function getParagraph2(){
    var inputs2=[]
    for(var j = 1 ; j <=6 ; j++)
    {
        inputs2.push(document.getElementById("para_input_box2_" + j).value);
        document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
    }
}