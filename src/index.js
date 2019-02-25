module.exports = function check(str, bracketsConfig) {
  let temporaryArray=[];
    for(let i=0;i<str.length;++i)
    {
        for(let j=0;j<bracketsConfig.length;++j)
        {
            if(str[i]===bracketsConfig[j][0])
            {
                if(str[i]===bracketsConfig[j][1]&&temporaryArray.indexOf(str[i])===-1) {
                  temporaryArray.unshift(str[i]);
                    break;
                }
                else if(str[i]!==bracketsConfig[j][1])
                {
                  temporaryArray.unshift(str[i]);
                    break;
                }
            }
           if(str[i]===bracketsConfig[j][1]) {

                if (temporaryArray.length === 0 || temporaryArray[0] !== bracketsConfig[j][0]&&temporaryArray[0]!==bracketsConfig[j][1]) {
                    return false;
                }
                temporaryArray.shift();
                break;
            }

            }
    }
    if(temporaryArray.length===0)
    {
        return true;
    }
    return false;
}
