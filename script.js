var interval = setInterval(fetchData,1000);

function fetchData(){
    const url = "https://kelompok2-gmedia.herokuapp.com/tampil1";
    fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        const tbody = document.getElementById('data-ins');
        tbody.innerHTML = '';
        data.map((map)=>{
            insertData(map,tbody);
        });
    })
    .catch(function(err){
        console.log("error",err);
    });
}

function insertData(map,tbody)
{
    var {id,currentac,currentdc,voltageac,voltagedc,time} = map;

    var newRow = document.createElement('tr');
    var newData1 = document.createElement('td');
    var newData2 = document.createElement('td');
    var newData3 = document.createElement('td');
    var newData4 = document.createElement('td');
    var newData5 = document.createElement('td');
    var newData6 = document.createElement('td');

    newData1.innerHTML = id;
    newData2.innerHTML = currentac;
    newData3.innerHTML = currentdc;
    newData4.innerHTML = voltageac;
    newData5.innerHTML = voltagedc;
    newData6.innerHTML = time;

    newRow.appendChild(newData1);
    newRow.appendChild(newData2);
    newRow.appendChild(newData3);
    newRow.appendChild(newData4);
    newRow.appendChild(newData5);
    newRow.appendChild(newData6);
    
    tbody.appendChild(newRow);
}
