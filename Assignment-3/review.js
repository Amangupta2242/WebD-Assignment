function re()
{
    alert("Reset Done!!");
    return false;
}
function submits()
{
    alert("ji");
    var name=document.getElementById("name").value;
    var mail=document.getElementById("mail").value;
    var phone=document.getElementById("phone").value;
    var review=document.getElementById("review").value;
    var a=0,str="";

    if(name=="")
    {
        str+="No Name !!!!!\n";
        a=1;
    }
    alert("ha ji");
    document.getElementsById("ror").innerHTML=str;
    if(phone.length!=10)
    {
        str+= "Phone no. is not 10 digits !!!!!\n";
        a=1;
    }
    if(mail.length=="")
    {
        str+= "Provide Email !!!!!\n";
        a=1;
    }
    if(review=="")
    {
        str+="Please give Review !!!!!\n";
        a=1;
    }
    if(a==0)
    {
        str+="Submitted Successfully !!!!!";
    }
    alert(str);
return false;
}