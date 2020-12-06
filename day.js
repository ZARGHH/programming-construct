let randomMonth = parseInt(Math.random() * (12 - 6) + 1);
  console.log(randomMonth)
  let randomday = parseInt(Math.random()*(20+1))+11;
  console.log(randomday);
  if(randomMonth>=3&&randomMonth<=5&&randomday>20)
  {
      console.log("Month isd between march20 to june20");
  }else
  {
      console.log("It is not between march20 to june20");
  }

