
const chela =["oussema","edam","ayoub","melek","edam"]
counter=0
function previous_fun() {


    document.getElementById(chela[counter]).style.visibility="hidden";
    if(counter==0)
        counter=3;
    else
        counter--;
    document.getElementById(chela[counter]).style.visibility="visible";

}
function next_fun() {


    document.getElementById(chela[counter]).style.visibility="hidden";
    if(counter==3)
        counter=0;
    else
        counter++;
    document.getElementById(chela[counter]).style.visibility="visible";

}
function surprise_fun(){

    let random_num = (Math.floor(Math.random()*4));
    console.log(random_num);
    for (const i in [0,1,2,3]) {
        document.getElementById(chela[i]).style.visibility="hidden";
    }
    document.getElementById(chela[random_num]).style.visibility="visible";

}
