$(document).ready(function(){
    setInterval(fetchData,1000);
});

function fetchData(){
    const url = "https://kelompok2-gmedia.herokuapp.com/tampil1";
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        const tbody = $("#data-ins");
        tbody.html("");
        data.map((map)=>{
            insertData(map,tbody);
        });
        $("#myTable").DataTable();
    })
    .catch(function(err){
        console.log("error",err);
    });
}

function insertData(map,tbody)
{
    var {id,currentac,currentdc,voltageac,voltagedc,time} = map;
    const dataIns = `
        <tr>
            <td>${id}</td>
            <td>${currentac}</td>
            <td>${currentdc}</td>
            <td>${voltageac}</td>
            <td>${voltagedc}</td>
            <td>${time}</td>
        </tr>
    `
    tbody.append(dataIns);
}
