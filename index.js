// code your solution here
function superbowlWin(array){
    const find = array.find(element => element.result === "W");
    if(find === undefined){
      return undefined;
    }else{
      return find.year;
    };
  };
