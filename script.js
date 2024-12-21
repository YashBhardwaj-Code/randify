const btn = document.getElementById("randbtn");
const num = document.getElementById("num");
const numMaker = document.getElementById("num-maker");
const maxNum = document.getElementById("max-num");
const minNum = document.getElementById("min-num");
const error = document.getElementById("error");
const history = document.getElementById("history");
let max = 0;
let min = 0;

btn.addEventListener("click", () => {
    
    max = Number(maxNum.value);
    min = Number(minNum.value);

    if (max === 0 || min === 0 || max < 0 || min < 0) {
        error.innerHTML = "Please Enter A Valid Maxiumum And Minimum Number To Proceed."

        setTimeout(() => {
            error.innerHTML = "";
        }, 2300)
    } else {
        let randNum = Math.floor(Math.random() * (max - min + 1) + min);

        num.innerHTML = randNum;
    
        num.style.display = "inline-block";
        numMaker.style.display = "inline-block";
        history.style.display = "inline-block";

        if (history.children.length > 0) {
            const comma = document.createElement("span");
            comma.textContent = ", ";
            history.appendChild(comma);
        }

        const historyText = document.createElement("h1");
        historyText.className = "msg";
        historyText.textContent = String(randNum);
        history.appendChild(historyText);

        const content = history.innerText;

        history.addEventListener("click", () => {
            navigator.clipboard.writeText(content)
            .then(() => {
                error.innerHTML = "Copied Roll History To Clipboard!"

                setTimeout(() => {
                    error.innerHTML = "";
                }, 2300)
            });
        })

    }
})
