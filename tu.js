// // main div

// //fname
// var label=createlabels("label","for","firstname","First Name");
// var br1=createlinebreak("br");
// var input=createinput("input","type","name","id","firstname");
// var br2=createlinebreak("br");

// //mname
// var label1=createlabels("label","for","middlename","Middle Name");
// var br3=createlinebreak("br");
// var input1=createinput("input","type","name","id","middlename");
// var br4=createlinebreak("br");

// //lname
// var label2=createlabels("label","for","lastname","Last Name");
// var br5=createlinebreak("br");
// var input2=createinput("input","type","name","id","lastname");
// var br6=createlinebreak("br");

// //phonenumber
// var phonenumber=createlabels("label","for","phonenumber","Phone Number");
// var br7=createlinebreak("br");
// var ph=createinput("input","type","number","id","phonenumber");
// var br8=createlinebreak("br");


// document.body.append(label,br1,input,br2,label1,br3,input1,br4,label2,br5,input2,br6,phonenumber,br7,ph,br8);


// function createlabels(tagname,attrname,attrvalue,content){
// var ele=document.createElement(tagname);
// ele.setAttribute(attrname,attrvalue);
// ele.innerHTML=content;
// return ele;
// }
// //it is returning an HTML element
// //<label for="email">Mail</label>

// function createinput(tagname,attrname,attrvalue,attrname1,attrvalue1){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     ele.setAttribute(attrname1,attrvalue1);
//     return ele;
// }
// function createlinebreak(tagname){
// var ele=document.createElement(tagname);
// return ele;
// }
function foo(){
    var res=document.getElementById("firstname").value;
    var res1=document.getElementById("middlename").value;
    var res2=document.getElementById("lastname").value;
    var res3=document.getElementById("phonenumber").value;
     console.log(res,res1,res2,res3);
}