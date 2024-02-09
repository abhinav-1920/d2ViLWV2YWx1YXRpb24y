/*
* Numeric Input Component
*   HTML (initial state): <input type="text" class="c-numeric-input" />
*   Requirement:
*   - should only accept numeric value only such as: 1, 1.2, -5, or 1000
*   - if user enters leading zero, or .  when user moves focus away from the input, it should
*     change to correct format:
*       .1 ==> 0.1 and 01 => 1
*   - if user enter invalid character/value, HTML should change to this
*       <input type="text" class="c-numeric-input c-numeric-input--error" />
*       <span class="c-numeric-input__error-msg">invalid input</span>
*   - if user enter valid value and move focus away from the input HTML should change to this:
*       <input type="text" class="c-numeric-input c-numeric-input--valid" />
*   - if user focus on the input or user clear value from the input,
*     HTML should return to initial stage
*
* Lastly, please add some css for c-numeric-input--error and c-numeric-input--valid to show
* red or green border to the input
* */

const NumericInput = {
  init: () => {
    document.querySelectorAll('.c-numeric-input').forEach(elem => {
      elem.addEventListener("blur", function() {
        let value = this.value.trim();
        if (value === '' || isNaN(value)) {
          this.classList.add("c-numeric-input--error");
          this.insertAdjacentHTML("afterend", '<span class="c-numeric-input__error-msg">invalid input</span>');
        } else
         {
          this.classList.remove("c-numeric-input--error");
          this.classList.add("c-numeric-input--valid");
          this.nextElementSibling.innerHTML = "";
          if(value.startsWith(".")) {
            this.value = "0" + value;
          } else if (value.startsWith("0") && !value.includes("."))
           {
            this.value = parseInt(value, 10);
           }
          }
      });

      elem.addEventListener("focus", function() {
        this.classList.remove('c-numeric-input--valid');
        this.classList.remove("c-numeric-input--error");
        this.nextElementSibling.textContent = "";
      });

      elem.addEventListener("input", function() {
        if (this.classList.contains("c-numeric-input--error")) 
        {
          this.classList.remove("c-numeric-input--error");
          this.nextElementSibling.textContent = "";
        }
      });
    });
  }
};
document.addEventListener('DOMContentLoaded', NumericInput.init);
