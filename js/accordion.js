
var accordion = document.getElementsByClassName('accordion');
//mám viacero akordeonov, potrebujem nimi prejsť
for(a of accordion){
    a.addEventListener("click",function(){
      //this hovorí doslova tomuto, po ktorom práve klikáš daj class active
      this.classList.toggle('active');
    })
  }
  document.addEventListener("DOMContentLoaded", function () {
    const data = {
        "questions": [
            {
                "question": "AKo sa máš?",
                "answer": "DOBRE"
            },
            {
                "question": "Je martin chudý?",
                "answer": "Definitívne áno"
            },
            {
                "question": "žije alex v maďarsku?",
                "answer": "Hej"
            }
        ]
    };

    const accordionContainers = document.getElementsByClassName("accordion");
    
    for (const accordionContainer of accordionContainers) {
        data.questions.forEach((item) => {
            const itemElement = document.createElement("div");
            itemElement.classList.add("accordion-item");
            
            itemElement.innerHTML = `
                <button class="accordion-button">${item.question}</button>
                <div class="accordion-answer" style="display: none;">${item.answer}</div>
            `;
            
            accordionContainer.appendChild(itemElement);
        });
    }
    
    var accordions = document.getElementsByClassName('accordion-button');
    for (let a of accordions) {
        a.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            let isVisible = answer.style.display === "block";
            
            document.querySelectorAll(".accordion-answer").forEach(el => el.style.display = "none");
            
            answer.style.display = isVisible ? "none" : "block";
        });
    }
});
