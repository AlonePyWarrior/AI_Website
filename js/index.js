const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 768
canvas.height = 448

ctx.fillStyle = 'white'
ctx.fillRect(0, 0, canvas.width, canvas.height)

const image = new Image()
image.onload = () => {
    animate()


}
image.src = 'img\\new_map.png'


const player = new Player({ position: { x: waypoints[0].x, y: waypoints[0].y } })

function animate() {
    requestAnimationFrame(animate)

    ctx.drawImage(image, 0, 0)
    player.update()
}

