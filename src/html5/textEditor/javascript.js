// Add Event Listeners for controlling the menus
var fileContainer = document.getElementById('fileContainer');
var helpContainer = document.getElementById('helpContainer');
fileContainer.addEventListener("click", function( event ) { let fileMenu = new mdc.menu.MDCSimpleMenu(document.querySelector('#fileMenu'));fileMenu.open = true; });
helpContainer.addEventListener("click", function( event ) { let helpMenu = new mdc.menu.MDCSimpleMenu(document.querySelector('#helpMenu'));helpMenu.open = true; });

sessionStorage.setItem('openDocument', null);

function openDialog(type) {
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#' + type + 'Dialog'));
    dialog.show();
}

function saveFile() {
    var fileName = document.getElementById('saveAsName').value;
    var text = document.querySelector('textarea').value;
    if (localStorage.getItem('writerTest') == undefined) {
        var documents = [{"title":fileName,"document":text}];
        localStorage.setItem('writerTest', JSON.stringify(documents))
    } else {
        var documents = JSON.parse(localStorage.getItem("writerTest"));
        var validName = true;
        var i = 0;
        while (i < documents.length) {
            if (documents[i].title == fileName) {
                var validName = false;
            }
            i++;
        }
        if (!validName) {
            showPopup('Save Failed.', 'A file with that name already exists.');
            console.log('name already used');
        } else {
            console.log('Valid Name!');
            documents.push({"title":fileName,"document":text});
            sessionStorage.setItem('openDocument', documents.length-1);
            var openDocumentName = documents[sessionStorage.getItem('openDocument')].title;
            localStorage.setItem('writerTest', JSON.stringify(documents));
        }
    }
}

function showPopup(title, body) {
    document.querySelector('#blankDialog-label').innerHTML = title;
    document.querySelector('#blankDialog-description').innerHTML = body;
    openDialog('blank');
}

function openOpenDialog() {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    if (documents == null) {
        showPopup('You Don\'t Have any Documents','Try creating some first.');
    } else {
        calculateFileList();
        openDialog('open');
    }
}
function calculateFileList() {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    var i = 0;
    $('#fileList').empty();
    while (i < documents.length) {
        $('#fileList').append('<li class="mdc-list-item" style="cursor:pointer;" onclick="openFile(' + i + ')"><i class="mdc-list-item__start-detail material-icons" aria-hidden="true">insert_drive_file</i>' + documents[i].title +'<a onclick="deleteFile(' + i + ')" class="mdc-list-item__end-detail material-icons"aria-label="Delete" title="Delete">delete</a></li>');
        i++;
    };
}

function openFile(i) {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    if (sessionStorage.getItem('openDocument') == 'null') {
        console.log('unsaved file');
    } else {
        if (confirm('Would you like to save your changes to ' + documents[sessionStorage.getItem('openDocument')].title + '?')) {
            saveSmpFile();
        }
    }
    sessionStorage.setItem('openDocument', i);
    var openDocumentName = documents[i].title;
    var currentFile = documents[i];
    document.querySelector('textarea').value = currentFile.document;
    var dialog = new mdc.dialog.MDCDialog(document.querySelector('#openDialog'));
    dialog.close();
}

function deleteFile(i) {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    var currentFile = documents[i];
    if (confirm('Are you sure you want to delete ' + currentFile.title + '?')) {
        documents.splice(i, 1);
        localStorage.setItem('writerTest', JSON.stringify(documents));
        var dialog = new mdc.dialog.MDCDialog(document.querySelector('#openDialog'));
        calculateFileList();
        sessionStorage.setItem('openDocument', null);
        document.querySelector('textarea').value = null;
    }
}

function saveSmpFile() {
    if (sessionStorage.getItem('openDocument') == 'null') {
        openDialog('saveAs');
    } else {
        var documents = JSON.parse(localStorage.getItem("writerTest"));
        documents[sessionStorage.getItem('openDocument')].document = document.querySelector('textarea').value;
        localStorage.setItem('writerTest', JSON.stringify(documents));
        showPopup('Saved.','Your changes have been saved.');
    }
}

function newFile() {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    if (sessionStorage.getItem('openDocument') != 'null') {
        if (confirm('Would you like to save your changes to ' + documents[sessionStorage.getItem('openDocument')].title + '?')) {
            saveSmpFile();
        }
    };
    sessionStorage.setItem('openDocument', null);
    document.querySelector('textarea').value = null;
}

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function downloadFile() {
    var documents = JSON.parse(localStorage.getItem("writerTest"));
    var fileType = document.querySelector('#downloadTypeSelector').value;
    var fileBody = document.querySelector('textarea').value;
    download("file." + fileType, fileBody);
}