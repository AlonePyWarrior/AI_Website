class Player {
    constructor({ position = { x: 0, y: 0 } }) {
        this.position = position
        this.width = 30
        this.height = 30
        this.waypointIndex = 0
        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }
        this.velocity = {
            x: 0,
            y: 0
        }

        this.speed = 0.3
    }

    draw() {
        ctx.fillStyle = 'orange'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.draw()

        const waypoint = waypoints[this.waypointIndex]
        const yDistance = waypoint.y - this.center.y
        const xDistance = waypoint.x - this.center.x

        const angle = Math.atan2(yDistance, xDistance)

        this.velocity.x = Math.cos(angle)
        this.velocity.y = Math.sin(angle)

        this.position.x += this.velocity.x * this.speed
        this.position.y += this.velocity.y * this.speed

        this.center = {
            x: this.position.x + this.width / 2,
            y: this.position.y + this.height / 2
        }

        if (
            Math.abs(Math.round(this.center.x) - Math.round(waypoint.x)) < 
            Math.abs(this.velocity.x * this.speed) &&
            Math.round(this.center.y) === Math.round(waypoint.y) &&
            // this.waypointIndex < waypoints.length - 1
            this.waypointIndex < 26
        ) {
            
            // Implement a conditional statement here 
            // that only if the user clicks on the button with the id "move_the_yellow"
            // the index will increment

            // Increment the index which means moving to the next cell on the maze
            this.waypointIndex++

            // The Start Point
            if (this.waypointIndex === 2) {
                console.log("Start Point");
                alert("Start Point\nLet's Go!")
            }
            
            // All the decision points
            let numbers = [7, 11, 14, 16]

            // Check for decision points
            if (numbers.includes(this.waypointIndex)) {
                console.log("Decision point");
                alert("Decision point!!!\nClick OK to continue")
            }

            // The End Point
            if (this.waypointIndex === 25) {
                console.log("End Point");
                alert("End Point\nDone")
            }
        }
    }
}