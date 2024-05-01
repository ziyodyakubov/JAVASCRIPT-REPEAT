function create(e){
    console.log(e.target[0].value)
    e.preventDefault()
    let resultcr = document.getElementById("result-card")

    let widthcr = e.target[0].value
    let heightcr = e.target[1].value
    let radiuscr = e.target[2].value
    let colorcr = e.target[3].value

    resultcr.style.width = `${widthcr}px`
    resultcr.style.height = `${heightcr}px`
    resultcr.style.backgroundColor = colorcr
    resultcr.style.borderRadius = `${radiuscr}px`
}