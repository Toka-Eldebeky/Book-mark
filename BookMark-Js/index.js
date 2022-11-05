var nameInput = document.getElementById('nameInput');
var linkInput = document.getElementById('linkInput');
// document.getElementById('bookMarkData').innerHTML = localStorage.getItem('addBookMark');
var bookMarkList = [];

function addBookMark() {


    var bookMark = {
        name: nameInput.value,
        link: linkInput.value
    }

    bookMarkList.push(bookMark);
    showBookMarks()
    localStorage.setItem('allMarks', JSON.stringify(bookMarkList))
    clear();
    console.log(bookMarkList);


}

function clear() {

    nameInput.value = ""
    linkInput.value = ""

}

if (localStorage.getItem('allMarks') != null) {
    bookMarkList = JSON.parse(localStorage.getItem('allMarks'));
    showBookMarks()
}

function showBookMarks() {
    var listData = ""
    for (var i = 0; i < bookMarkList.length; i++) {
        listData += ` 
          <div class=" back-color row d-flex   container  px-5 mx-auto py-5 my-3 "> <h3 class=" px-5 col-5">` + bookMarkList[i].name + `</h3>
                    <div class=" px-5 col-6">
                        <a class="btn btn-info mx-2" href="` + bookMarkList[i].link + ` " target="_blank ">Visit</a>
                        <button 
                        onclick="deleteBookMark(` + i + `);" type="button " class="btn btn-danger mx-2">Delete</button>
                    </div>
                    </div>`


    }
    document.getElementById('bookMarkData').innerHTML = listData
    console.log(listData);

}

function deleteBookMark(deletedItem) {
    bookMarkList.splice(deletedItem, 1)
    localStorage.setItem('allMarks', JSON.stringify(bookMarkList))
    showBookMarks()

}