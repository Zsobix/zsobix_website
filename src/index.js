let userInput, terminalout;

userInput = document.getElementById("userInput");
terminalout = document.getElementById("terminal");
document.getElementById("keyboard").focus({preventScroll: true});

terminalout.innerHTML = `<h3 class="inter">run "help" to see all available commands</h3>`;
const commandinput = function handleUserInput(input) {
    let output;
    input = input.toLowerCase();
    if (input.length === 0) {
        return;
    };
    if (input === "quit") {
        window.location.href = "https://www.zsobix.xyz/safe"
        return;
    }
    if (Object.keys(COMMANDS).includes(input)) {
        output = COMMANDS[input]
    } else {
        output = `<h3 class="inter">command not found: "${input}"</h3><h3 class="inter">try command "help" to list all commands</h3>`
    }
    terminalout.innerHTML = output;
};

const key = function keyPressed(e) {
    const input = userInput.innerHTML;

    if (e.key === "Enter") {
        commandinput(input)
        userInput.innerHTML = "";
        return;
    }

    if (e.key === "Backspace" && e.key === "Delete" && e.key === "Backspac" && e.keyCode === 8 && e.keyCode === 46) {
        return;
    }

    userInput.innerHTML = input + e.key;
}

const remove = function removekey(e) {
    if (e.key !== "Backspace" && e.key !== "Delete" && e.key !== "Backspac" && e.keyCode !== 8 && e.keyCode !== 46) {
        return;
    }
    userInput.innerHTML = userInput.innerHTML.slice(0, -1)
}
document.addEventListener("keydown", remove)
document.addEventListener("keypress", key)



const COMMANDS = {
    help: `<h3 class="inter">available commands: ['help', 'whoami', 'fastfetch', 'clear', 'pokemon', 'quit']</h3>`,
    whoami: `<h3 class="inter">hi! i'm <div class="popup" onclick="pronunciation()" style="text-decoration: underline;">zsobix<span class="popuptext inter" id="pronunciation">IPA: /ʒobɪks/</span></div>, a software dev, and student from budapest, hungary.</h3><h3 class="inter">i made this website, and <a href="https://www.meglelem.hu">meglelem.hu</a></h3><h3 class="inter">you can contact me at <a href="mailto:index@zsobix.xyz">index@zsobix.xyz</a></h3>`,
    fastfetch: `<h3 class="inter">pc specs:</h3>
            <h3 class="inter">- CPU: AMD Ryzen 5 3600</h3>
            <h3 class="inter">- GPU: AMD Radeon RX 580</h3>
            <div class="popup" onclick="popup1()">
                <h3 class="inter inline">- RAM: Corsair Vengeance PRO 32GB 3000MHz  </h3><i class="fa-solid fa-circle-info" style="font-size: 15px; color: green;"></i>
                <span class="popuptext inter" id="popuptext1">I got this in the middle of the AI RAM shortage! yippeee!!! <i class="fa-solid fa-gun"></i><i class="fa-regular fa-face-grin-beam"></i></span>
            </div>
            <h3 class="inter">- SSD: Kingston NV3 1TB</h3>
            <h3 class="inter">- HDD: WD Blue 1TB</h3>
            <div class="popup" onclick="popup2()">
                <h3 class="inter inline">- OS: Linux  </h3><i class="fa-solid fa-circle-info" style="font-size: 15px; color: green;"></i>
                <span class="popuptext inter" id="popuptext2">I'd just like to interject for a moment. What you're referring to as Linux, is in fact, GNU/Linux, or as I've recently taken to calling it, GNU plus Linux. Linux is not an operating system unto itself, but rather another free component of a fully functioning GNU system made useful by the GNU corelibs, shell utilities and vital system components comprising a full OS as defined by POSIX. Many computer users run a modified version of the GNU system every day, without realizing it. Through a peculiar turn of events, the version of GNU which is widely used today is often called "Linux", and many of its users are not aware that it is basically the GNU system, developed by the GNU Project. There really is a Linux, and these people are using it, but it is just a part of the system they use. Linux is the kernel: the program in the system that allocates the machine's resources to the other programs that you run. The kernel is an essential part of an operating system, but useless by itself; it can only function in the context of a complete operating system. Linux is normally used in combination with the GNU operating system: the whole system is basically GNU with Linux added, or GNU/Linux. All the so-called "Linux" distributions are really distributions of GNU/Linux.</span>
            </div>
            <h3 class="inter">- Distro: Arch Linux</h3>`,
    clear: "",
    pokemon: `<h3 class="inter">my favourite pokemon is snorlax!</h3>`
};




function github() {
    window.location.href = "https://github.com/zsobix"
}

function twitter() {
    window.location.href = "https://twitter.com/zsobix"
}

function email() {
    window.location.href = "mailto:index@zsobix.xyz"
}

function quit() {
    window.location.href = "https://www.zsobix.xyz/safe"
}