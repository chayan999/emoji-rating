
const stersEl = document.querySelectorAll(".fas");
const emojisEl = document.querySelectorAll('.far')
const color = ["red", "orange", "lightblue", "lightgreen", "green"]
stersEl.forEach((ster, index) => {
    ster.addEventListener('click', () => {
        updateRating(index);
    })
});

updateRating(0)
function updateRating(index) {
    stersEl.forEach((ster, inx) => {
        if (inx < index + 1) {
            ster.classList.add("active")
        } else {
            ster.classList.remove("active")
        }
    });

    emojisEl.forEach((emoji) => {
        emoji.style.transform = `translateX(-${index * 50}px)`;
        emoji.style.color = color[index]
    })
};