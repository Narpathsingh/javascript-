 let initial = document.getElementById("count");
    // console.log(initial);
    let saveEL = document.getElementById('save-el')
    let Message = document.getElementById('message')
    let Clear = document.getElementById('clear')
    let count = 0;
    function increment() {
        count = count + 1;
        initial.innerText = count
        // console.log(count)
    }

    function decrement() {
        count = count - 1;
        initial.innerText = count;
        // console.log(count)
    }
    function save() {
        let countstr = count + " - "
        saveEL.textContent += countstr;
        initial.textContent = 0;
        count = 0;
    }
    function reload() {
        location.reload();
    }
