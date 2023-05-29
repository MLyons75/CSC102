function strings()
{
    var string1 = document.getElementById("initStr").value;
    var string2 = document.getElementById("sndStr").value;
    alert(initStr);
    alert(sndStr);
    //concatenate a string
    var str3 = string1 + string2;
    
    var rev = str3;
    var splitString = str3.split("");
    alert(splitString);
    var reverseArray = splitString.reverse();
    alert(rev);
    var joinArray = reverseArray.join("");
    alert(joinArray);

    if (joinArray == str3)
    {
        alert("This is a palindrome!")
    }

}
 