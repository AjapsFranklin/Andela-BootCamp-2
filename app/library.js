function words(mySentence){

    if(typeof(mySentence)!= "string")
        return "invalid input"

    var myString = []
    var finalString=mySentence;


    
    finalString= finalString.replace("\t", " ")
    finalString= finalString.replace("'\s'", " ")
    finalString= finalString.replace("\n", " ")
    
    myString = finalString.split(" ")
    var resultA={};
    for(i=0; i<myString.length; i++)
        if(!(myString[i].match("^$")) )
            resultA[myString[i]] = 0

    for(i=0; i<myString.length; i++)
        if(!(myString[i].match("^$"))){
            var hold = Number(resultA[myString[i]])
            resultA[myString[i]]=hold+1
    }

//var finalResult = JSON.stringify(resultA)
    return JSON.stringify(resultA)
}



module.exports = {
    words : words,
    //reverseString : reverseString
}