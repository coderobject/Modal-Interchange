
const chooseKey=document.getElementById('chooseKey')
const table = document.getElementById('table')

chooseKey.addEventListener('change', chooseKeyFunction)

function chooseKeyFunction(event){
let ionianChords=Tonal.Mode.seventhChords('ionian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[1].cells[i].innerHTML=ionianChords[i-1];
}
let dorianChords=Tonal.Mode.seventhChords('dorian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[2].cells[i].innerHTML=dorianChords[i-1];
}
let phrygianChords=Tonal.Mode.seventhChords('phrygian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[3].cells[i].innerHTML=phrygianChords[i-1];
}
let lydianChords=Tonal.Mode.seventhChords('lydian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[4].cells[i].innerHTML=lydianChords[i-1];
}
let mixolydianChords=Tonal.Mode.seventhChords('mixolydian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[5].cells[i].innerHTML=mixolydianChords[i-1];
}
let aeolianChords=Tonal.Mode.seventhChords('aeolian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[6].cells[i].innerHTML=aeolianChords[i-1];
}
let locrianChords=Tonal.Mode.seventhChords('locrian', event.target.value)
for (let i=1;i<8;i++){
    table.rows[7].cells[i].innerHTML=locrianChords[i-1];
}
let harmonicMinorChords=Tonal.Key.minorKey(event.target.value).harmonic.chords
for (let i=1;i<8;i++){
    table.rows[8].cells[i].innerHTML=harmonicMinorChords[i-1];
}

let melodicMinorChords=Tonal.Key.minorKey(event.target.value).melodic.chords
for (let i=1;i<8;i++){
    table.rows[9].cells[i].innerHTML=melodicMinorChords[i-1];
}
}

