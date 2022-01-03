setInterval(fetchData,1000);

function fetchData(){
    const url = "https://kelompok2-gmedia.herokuapp.com/tampilbaru";
    fetch(url,{mode:'no-cors'})
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        let kel2 = data[0];
        const date = new Date();
        document.getElementById("date-update").innerHTML = `Date Update : ${date.toLocaleTimeString()}`;
        document.getElementById("time-update").innerHTML = `Time Update : ${kel2.time}`;
        document.getElementById("currentac").innerHTML = `Current AC : ${kel2.currentac}`;
        document.getElementById("currentdc").innerHTML = `Current DC : ${kel2.currentdc}`;
        document.getElementById("voltageac").innerHTML = `Voltage AC : ${kel2.voltageac}`;
        document.getElementById("voltagedc").innerHTML = `Voltage DC : ${kel2.voltagedc}`;
    })
    .catch(function(err){
                console.log("error",err);
    });
}
