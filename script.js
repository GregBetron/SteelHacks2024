function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev, dropZone) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");

    if (dropZone === 'recycle') {
        recycleFunction();
    } else if (dropZone === 'trash') {
        trashFunction();
    }
}

function recycleFunction() {
    alert("Item Recycled!");
}

function trashFunction() {
    alert("Item Trashed!");
}
