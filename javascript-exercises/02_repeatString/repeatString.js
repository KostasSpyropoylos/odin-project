const repeatString = function(word,num) {
    let appWord= '';
    if(num < 0){
        return 'Error'
    }else{

        for (let i =0; i<num;i++){
            appWord =appWord + word
        }
    }   
        return appWord;
};

// Do not edit below this line
module.exports = repeatString;
