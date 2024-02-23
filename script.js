function criarQuadrado() {
    var quadradao = document.getElementById("quadradao");
    for (let coluna = 0; coluna < 3; coluna++) {
        for (let linha = 0; linha < 3; linha++) {
            var quadradoNormal = document.createElement("div");
            quadradoNormal.classList.add("repart");
            var selectColor = document.createElement("select")
            var cores = ["Selecione uma cor","red", "green", "blue", "yellow", "black","pink","purple"]
            var inputColor = document.createElement("input")
            inputColor.type = "color"
            var normal = inputColor.value
            for (i = 0; i < cores.length; i++) {
                var optionColor = document.createElement("option")
                optionColor.text = cores[i]
                optionColor.value = cores[i]
                selectColor.appendChild(optionColor)
            }
            selectColor.addEventListener("change", function () {
                quadradoNormal.style.backgroundColor = selectColor.value
            })
  
            quadradoNormal.appendChild(selectColor)
            quadradao.appendChild(quadradoNormal);
        }
    }
    var buttonAplicar = document.getElementById("buttonAplicar")
    buttonAplicar.addEventListener("click", function () {
        var quadrados = document.querySelectorAll(".repart")
        for (i = 0; i < quadrados.length; i++) {
            var quadradoBase = quadrados[i]
            var selectColor = quadradoBase.querySelector("select")
            var cor = selectColor.value
            quadradoBase.style.backgroundColor = cor
        }
    })

    var buttonLimpar = document.getElementById("buttonLimpar")
    buttonLimpar.addEventListener("click",function(){
        var quadrados = document.querySelectorAll(".repart")
        for (i = 0; i < quadrados.length; i++) {
            var quadradoBase = quadrados[i]
            var selectColor = quadradoBase.querySelector("select")
            selectColor.selectedIndex = 0
            quadradoBase.style.backgroundColor = ""
        }
    })
}


window.onload = criarQuadrado
