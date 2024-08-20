// Two Teams Koalas and Dolphins 
// Team wins when one of the teams average is higher than other team a >= 2 * b

const average = (a, b, c) => (a + b + c) /3;

  let KoalasAvg = average(55,66,77);
  let DolphinsAvg = average(11,22,33);

function checker(koa,dol){
    if(koa >= 2 * dol){
        console.log(`Koalas wins ${koa} vs. ${dol}`);
    }
    else if(dol >= 2 * koa){
        console.log(`Dolphins wins ${dol} vs. ${koa}`);
    }
    else{
        console.log("No Team Wins");
    }
}

checker(KoalasAvg,DolphinsAvg);