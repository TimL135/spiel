<template>
  <div style="height: 100vh; background-color: #00bcd4">
    <div style="position: absolute; top: 15px; left: 15px">{{ score }}</div>
    <div
      class="square"
      :style="{ top: y + 'px', left: x + 'px' }"
      tabindex="0"
    ></div>
    <div
      class="obstacle"
      v-for="(obstacle, index) in obstacles"
      :key="index"
      :style="{ top: obstacle.y + 'px', left: obstacle.x + 'px' }"
    ></div>

    <Ground />
  </div>
</template>

<script>
import Ground from "./components/Ground.vue";
export default {
  components: {
    Ground,
  },
  data() {
    return {
      isJumping: false, // Ob das Quadrat gerade springt oder nicht
      isFalling: false,
      score: 0,
      lastY: window.innerHeight - 50 - 50,
      jumpHeight: 100, // Wie hoch das Quadrat springen soll
      jumpSpeed: 10, // Wie schnell das Quadrat springen soll
      gravity: 5, // Wie schnell das Quadrat fallen soll
      pressedKeys: {},
      x: window.innerWidth - 100,
      y: 50,
      groundHeight: 50,
      obstacles: [],
      currentTick: 0,
    };
  },
  async mounted() {
    window.onkeyup = (e) => {
      this.pressedKeys[e.key] = false;
    };
    window.onkeydown = (e) => {
      this.pressedKeys[e.key] = true;
    };
    this.gameloop();
  },
  methods: {
    gameloop() {
      setInterval(() => {
        this.currentTick++;
        this.score++;
        if (this.currentTick % 60 == 0) {
          this.spawnObstacle();
        }
        this.moveObstacle();
        if (this.pressedKeys["ArrowUp"] && !this.isJumping && !this.isFalling) {
          this.isJumping = true;
          for (let i = 0; i < 10; i++) {
            setTimeout(() => {
              this.moveUp();
            }, 20 * i);
          }
          setTimeout(() => {
            this.isJumping = false;
            this.isFalling = true;
          }, 200);
        }
        if (this.pressedKeys["ArrowDown"]) this.moveDown();
        if (this.pressedKeys["ArrowLeft"]) this.moveLeft();
        if (this.pressedKeys["ArrowRight"]) this.moveRight();
        if (!this.isJumping) {
          this.moveDown();
        }
        if (this.y == this.lastY) {
          this.isFalling = false;
        }
        this.lastY = this.y;
      }, 1000 / 30);
    },
    spawnObstacle() {
      // Erstelle ein neues Hindernisobjekt
      const newObstacle = {
        x: window.innerWidth - 50, // Startposition auf der rechten Seite des Bildschirms
        y: window.innerHeight - 100 - Math.floor(Math.random() * 200), // Zufällige y-Position zwischen 200 und 400
        width: 50,
        height: 50,
      };

      // Füge das Hindernisobjekt der Liste der Hindernisse hinzu
      this.obstacles.push(newObstacle);

      // Inkrementiere den Hindernis-ID-Zähler
      this.obstacleId++;
    },
    moveObstacle() {
      for (let obstacle of this.obstacles) {
        obstacle.x -= 2;
      }
    },
    moveUp() {
      if (
        this.obstacles.every((obstacle) => {
          return !(
            this.x + 50 > obstacle.x &&
            obstacle.x + 50 > this.x &&
            obstacle.y < this.y &&
            obstacle.y + 50 >= this.y
          );
        })
      )
        this.y -= 10;
    },
    moveDown() {
      if (
        this.obstacles.every((obstacle) => {
          return !(
            this.x + 50 > obstacle.x &&
            obstacle.x + 50 > this.x &&
            obstacle.y >= this.y &&
            obstacle.y - 50 <= this.y
          );
        })
      )
        if (this.y < window.innerHeight - this.groundHeight - 50) this.y += 10;
    },
    moveLeft() {
      if (
        this.obstacles.every((obstacle) => {
          return !(
            this.y + 50 > obstacle.y &&
            obstacle.y + 50 > this.y &&
            obstacle.x < this.x &&
            obstacle.x + 50 >= this.x
          );
        })
      )
        this.x -= 10;
    },
    moveRight() {
      if (
        this.obstacles.every((obstacle) => {
          return !(
            this.y + 50 > obstacle.y &&
            obstacle.y + 50 > this.y &&
            obstacle.x >= this.x &&
            obstacle.x - 50 <= this.x
          );
        })
      )
        this.x += 10;
    },
  },
};
</script>

<style>
.square {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(0, 0, 0);
}
.obstacle {
  position: absolute;
  width: 50px;
  height: 50px;
  background-color: rgb(8, 146, 26);
}
body {
  margin: 0;
}
</style>
