class Footer extends HTMLElement {
    constructor(path) {
        super();
        this.path = path;
        console.log(path)
    }
    connectedCallback(path) {
        console.log(path);
        this.innerHTML = `
            <div class="social">
                <ul>
                <li>
                    <a href="https://www.instagram.com/debsociiit/" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/instagram.svg" alt="Instagram logo" class="icon" id="insta">
                    </a>
                </li>
                <li>
                    <a href="https://discord.gg/kn5WYETMrz" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/discord.svg" alt="Discord logo" class="icon">
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/groups/iiithdebsoc/" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/facebook.svg" alt="Facebook logo" class="icon">
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCSGcMVGE1BtaC5BLAGERquA" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/youtube.svg" alt="Youtube logo" class="icon">
                    </a>
                </li>
                <li>
                    <a href="mailto:debsoc@students.iiit.ac.in" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/email.svg" alt="Email logo" class="icon">
                    </a>
                </li>
                <li>
                    <a href="https://forms.office.com/r/eMzTnpWW9t" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/feedback.svg" alt="Feedback form logo" class="icon">
                    </a>
                </li>
                <li>
                    <a href="https://github.com/debsociiit" target="_blank" rel="noopener noreferrer">
                    <img src="../resources/Social/github.svg" alt="Github logo" class="icon" id="github">
                    </a>
                </li>
                </ul>
            </div>
        `;
    }
}

customElements.define("foo-ter", Footer);