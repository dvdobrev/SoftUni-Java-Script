function lockedProfile() {
    document.getElementById("main").addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON"){
            let profile = e.target.parentNode
            let isLocked = profile
            .querySelector("input[type=radio]:checked").value === "lock";

        if (isLocked) {
            return;
        }

        let div = profile.querySelector("div");
        let isVisible = div.style.display === "block";
        div.style.display = isVisible ? "none" : "block";
        e.target.textContent = !isVisible ? "Hide it" : "Show more";
        }
    })
}