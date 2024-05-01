
function create(e){
    e.preventDefault()
    let textarea = document.getElementById("textarea").value
    let result = textarea.split(" ").length
    
    let lengthi = document.getElementById("lengthi")
    let words = document.getElementById("words-l")

    lengthi.innerHTML = `${result} `
    words.style.display = "flex"
}