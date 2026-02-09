const area = document.getElementById("laceArea")
const card = document.getElementById("idCard")
const lace = document.getElementById("lace")

let isDragging = false
let startX = 0
let startY = 0
let currentX = 0
let currentY = 0
let velocityX = 0
let velocityY = 0

area.addEventListener("mousedown", (e) => {
    isDragging = true
    startX = e.clientX - currentX
    startY = e.clientY - currentY
    area.style.cursor = "grabbing"
})

document.addEventListener("mousemove", (e) => {
    if (!isDragging) return

    currentX = e.clientX - startX
    currentY = Math.max(e.clientY - startY, 0)

    velocityX = currentX * 0.15
    velocityY = currentY * 0.15

    card.style.transform = `
        translate(${currentX}px, ${currentY}px)
        rotate(${velocityX * 0.05}deg)
    `

    lace.style.transform = `
        scaleY(${1 + currentY / 120})
    `
})

document.addEventListener("mouseup", () => {
    if (!isDragging) return
    isDragging = false
    area.style.cursor = "grab"

    // SPRING BACK
    card.style.transition = "transform 0.6s cubic-bezier(.17,.89,.32,1.49)"
    lace.style.transition = "transform 0.6s cubic-bezier(.17,.89,.32,1.49)"

    card.style.transform = "translate(0px,0px) rotate(0deg)"
    lace.style.transform = "scaleY(1)"

    setTimeout(() => {
        card.style.transition = "transform 0.15s linear"
        lace.style.transition = "transform 0.15s linear"
        currentX = 0
        currentY = 0
    }, 600)

    // FALL DOWN
    card.style.transition = "transform 0.9s cubic-bezier(.17,.89,.32,1.49), opacity 0.6s"
    lace.style.transition = "transform 0.9s cubic-bezier(.17,.89,.32,1.49)"

    card.style.transform = "translateY(0)"
    card.style.opacity = "1"
    lace.style.transform = "scaleY(1.2)"

    // SMALL BOUNCE BACK
    setTimeout(() => {
        card.style.transition = "transform 0.4s ease-out"
        lace.style.transition = "transform 0.4s ease-out"

        lace.style.transform = "scaleY(1)"
    }, 900)
})

document.querySelectorAll('.counter').forEach(counter => {
    let current = 0
    const target = parseInt(counter.dataset.target)
    const speed = 40

    const update = () => {
        if (current < target) {
            current++
            counter.textContent = current
            setTimeout(update, speed)
        } else {
            counter.textContent = `+${target}`
        }
    }

    update()
})

