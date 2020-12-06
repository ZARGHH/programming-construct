function leapyear(year)
{
return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}
console.log(leapyear(2016)+"2016 is an leap year");
console.log(leapyear(2000)+"2000 is an leap year");
console.log(leapyear(1700)+"1700 is not an leap year");
console.log(leapyear(1800)+"1800 is not an leap year");
console.log(leapyear(100)+"100 is not an leap year");
