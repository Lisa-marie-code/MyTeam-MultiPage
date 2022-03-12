function showModal() {
    document.getElementById("overlay").style.display = "block";
}
function closeModal() {
    document.getElementById("overlay").style.display = "none";
}
var directors= [];
var dirform = document.getElementById('director-form');

dirform.addEventListener('submit', (event) => {
    event.preventDefault() // tprevents the form from autosubmittimg

    var dirphoto = document.getElementById('photo').value.split('\\')[2];
    var dirpos = document.getElementById('postion').value;
    var dirname = document.getElementById('name').value;

    // console.log(dirpos + " " + dirname);

    var newdirector = {
        name: dirname,
        position: dirpos,
        photo: dirphoto
    };
    directors.push(newdirector);
    console.log(newdirector);
    console.log(directors);
    document.getElementById("overlay").style.display = "none";

    document.getElementById('photo').value = '';
    document.getElementById('postion').value = '';
    document.getElementById('name').value = '';

    var dirTable = document.getElementById('tbl-directors');
    let tblRow
    for (i = 0; i < directors.length; i++){
        tblRow = `
            <tr>
                <td><img src= 'assets/${directors[i].photo}' /></td>
                <td>${directors[i].name}</td>
                <td>${directors[i].position}</td>
            </tr>
                

    `;
    } 
    
    dirTable.innerHTML += tblRow;

});

// body.onload = function(){
//     var dirTable = document.getElementById('tbl-directors');
//     let tblRow
//     for (i = 0; i < directors.length; i++){
//         tblRow = `
//             <tr>
//                 <td><img src= 'assets/${directors[i].photo}' /></td>
//                 <td>${directors[i].name}</td>
//                 <td>${directors[i].position}</td>
//             </tr>
                

//     `;
//     } 
    
//     dirTable.innerHTML += tblRow;
// }