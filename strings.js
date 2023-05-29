//Strings
function strings()
{
    //input for the first string
    var string1 = document.getElementById("initStr").value;
    //input for the second string
    var string2 = document.getElementById("sndStr").value;
    //lets us know if putting in any info is working
    alert(initStr);
    //lets us know if putting in any info is working
    alert(sndStr);
    //concatenate a string
    var str3 = string1 + string2;
    //reverses string one and string 2
    var rev = str3;
    //splits the string
    var splitString = str3.split("");
    //alerts us if the string has been split
    alert(splitString);
    //reverses the string one and string 2... I used RacecaR to get RacecaR
    var reverseArray = splitString.reverse();
    alert(rev);
    //This joined my reverse splitString so that RacecaR was spelled the same backward
    var joinArray = reverseArray.join("");
    //this alert let me know if my code worked
    alert(joinArray);

    if (joinArray == str3)

    {
        //This alert let me know if I was successful
        alert("This is a palindrome!")
    }

}
 