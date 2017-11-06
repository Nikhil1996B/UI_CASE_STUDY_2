
var input;//variable to store 

var recColor = "#21F7F3";
//var canvas = document.createElement('canvas');

var c = document.getElementById("canvas");

var ctx = c.getContext("2d");

//canvas coordinate for rectangle formation
var x = 120;
var y = 20;
var z = y;

//Dynamically change the height and width of rectangle with respect to the input form user form
var width = 150;
var height = 100;
var changeColor="#FFC0CB";
var select="1"; 

//function to count the rectangle count 
function RecCount() {

    input = document.getElementById("rec").value;

}

function blurFunction() {
    //alert("hello");
    //alert(input);

}

//Function to draw rectangle inside canvas
function Rectangle() {

    for (i = 0; i < input; i++) {
        /*var canvas = document.getElementById("canvas");*/


        ctx.fillStyle = recColor;
        ctx.fillRect(x, y, width, height);

        y += 120;
        z = y;
        //code to randomly generate the color for recangle
        var letters = '0123456789ABCDEF';
        var color = '#';
        var arr = [];
        for (var j = 0; j < 6; j++) {
            color += letters[Math.floor(Math.random() * 16)];
            recColor = color;
            arr[i] = color;
        }

    }

    //alert(arr[i-1]);    

}

//function to remove the current rectangle
function deleteRectangle() {
    //alert("hi");
    select = document.getElementById("sel").value;
    x=120;
    y=20;
    if(select == "1"){
        //alert(recColor);
        x=120;
        y=20;
    ctx.clearRect(x,y, width, height);
    }
    else if(select == "2"){
        //alert(recColor);
        y+=120;
        ctx.clearRect(x,y,width,height);
    }
    else if(select == "3"){
        //alert(recColor);
        y+=240;
        ctx.clearRect(x,y, width, height);
    }


}

//function to display the block form
function editFunction() {
    document.getElementById("myDIV").style.display = "block";
}

//function to edit properties of the rectangular list
function editProp() {
    width = document.getElementById("width").value;
    height = document.getElementById("height").value;
    changeColor = document.getElementById("changeColor").value;
    alert(changeColor);
    select = document.getElementById("sel").value;
    
    //recColor = stringToColour(changeColor);
    
    //remove the current rectangle canvas and follow with the edit Rectangle printing
    changeCol();
  //  deleteRectangle();
    printEditedRec();
}

//function to print an edited recatangles
function printEditedRec() {
   
    x=120;
    y=20;
    if(select == "1"){
        //alert(recColor);
        x=120;
        y=20;
    ctx.fillStyle = recColor;
    ctx.fillRect(x, y, width, height);
    }
    else if(select == "2"){
        //alert(recColor);
        y+=120;
      ctx.fillStyle = recColor;
      ctx.fillRect(x, y, width, height);
    }
    else if(select == "3"){
        //alert(recColor);
        y+=240;
      ctx.fillStyle = recColor;
      ctx.fillRect(x, y, width, height);
    }
}

  //function to chang ethe color of rectangle based on form entered color
  function changeCol(){
        switch(changeColor){
            case "blue": 
            recColor = "#0080ff";
            break;
            case "Green":
            recColor = "#00ff00";
            break;
            case "Yellow":
            recColor = "#ffff00";
            break;
            case  "Pink":
            recColor = "#ff00ff";
            break;
            case "Black":
            recColor = "#000000";
            break;
            case "White":
            recColor = "#ffffff";
            case "Orange":
            recColor="#ff8000";
            break;
            case "Red":
            recColor="#ff0000";
            break;
            case "Purple":
            recColor="#bf00ff";
            break;
        }
  }