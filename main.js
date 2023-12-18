document.getElementById("commentForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var author = document.getElementById("author").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;
    
    
    if (author === "" || email === "" || comment === "") {
        showModal("Ошибка", "Все поля должны быть заполнены");
        return;
    }
    
    showModal("Успех", "Ваш комментарий принят. После проверки он будет опубликован на сайте.");
});

function showModal(title, text) {
    var modal = document.getElementById("modal");
    var modalText = document.getElementById("modalText");
    modalText.innerHTML = "<h2>" + title + "</h2><p>" + text + "</p>";
    modal.style.display = "block";
    
    var close = document.getElementsByClassName("close")[0];
    close.onclick = function() {
        modal.style.display = "none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}