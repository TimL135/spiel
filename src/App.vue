<template>
  <div
    style="
      height: 100vh;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('sky.png');
    "
  >
    <div
      style="height: 100vh; width:100vw;position:absolute:top:0;left:0; background-size: cover; background-image: url('nightsky.png'); "
      :style="`opacity:${
        currentTick % 2000 < 900
          ? 0
          : currentTick % 2000 < 1000
          ? ((currentTick % 2000) - 900) / 100
          : currentTick % 2000 < 1900
          ? 1
          : 1 - ((currentTick % 2000) - 1900) / 100
      }`"
      :class="'nightbg'"
    ></div>
    <button
      v-if="!isPlaying"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: greenyellow;
        border: none;
        padding: 7px;
      "
      @click="startGame"
    >
      Start
    </button>
    <div
      style="
        position: absolute;
        top: 15px;
        left: 15px;
        text-shadow: -1px -1px 0px white, 1px 1px 0px white, -1px 1px white,
          1px -1px 0px white;
      "
    >
      <b>{{ score }}</b>
    </div>
    <div
      style="
        position: absolute;
        top: 15px;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
      "
    >
      <div
        v-for="n in hp"
        style="
          background-image: url('heart.png');
          width: 50px;
          height: 50px;
          background-size: contain;
        "
      ></div>
    </div>
    <div
      class="square"
      :style="{ top: y + 'px', left: x + 'px' }"
      style="background-image: url('steve.png')"
      tabindex="0"
    ></div>
    <div
      class="obstacle"
      v-for="(obstacle, index) in obstacles"
      :key="index"
      :style="{ top: obstacle.y + 'px', left: obstacle.x + 'px' }"
      style="background-image: url('gras.jpg')"
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
      isPlaying: false,
      score: 0,
      lastY: 50,
      jumpHeight: 100, // Wie hoch das Quadrat springen soll
      jumpSpeed: 10, // Wie schnell das Quadrat springen soll
      gravity: 5, // Wie schnell das Quadrat fallen soll
      pressedKeys: {},
      x: window.innerWidth - 100,
      y: 50,
      groundHeight: 50,
      obstacles: [],
      currentTick: 0,
      hp: 3,
    };
  },
  async mounted() {
    window.onkeyup = (e) => {
      this.pressedKeys[e.key] = false;
    };
    window.onkeydown = (e) => {
      this.pressedKeys[e.key] = true;
    };
  },
  computed: {
    speed() {
      return Math.round(this.score / 1000 + 2);
    },
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.gameloop();
      this.score = 0;
      this.y = 50;
      this.hp = 3;
    },
    checkDeath() {
      if (this.y >= window.innerHeight - 100) {
        // this.hp--;
        this.y = 100;
      }
      if (this.hp == 0) this.isPlaying = false;
    },
    gameloop() {
      let game = setInterval(() => {
        this.checkDeath();
        if (!this.isPlaying) clearInterval(game);
        this.currentTick++;
        this.score++;
        if (this.currentTick % Math.round(90 / this.speed + 20) == 0) {
          this.spawnObstacle();
        }
        this.moveObstacle();
        if (this.pressedKeys["ArrowUp"] && !this.isJumping && !this.isFalling) {
          this.isJumping = true;
          for (let i = 0; i < 15; i++) {
            setTimeout(() => {
              this.moveUp();
            }, 10 * i);
          }
          setTimeout(() => {
            this.isJumping = false;
            this.isFalling = true;
          }, 200);
        }
        if (this.pressedKeys["ArrowDown"]) this.moveDown();
        if (this.pressedKeys["ArrowLeft"]) this.moveLeft();
        if (this.pressedKeys["ArrowRight"]) this.moveRight();
        // if (!this.isJumping) {
        //   this.moveDown();
        // }
        if (this.y == this.lastY) {
          this.isFalling = false;
        }
        this.lastY = this.y;
        this.deleteObstacle();
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
        obstacle.x -= this.speed;
      }
    },
    deleteObstacle() {
      this.obstacles = this.obstacles.filter((o) => o.x > 0);
    },
    moveUp() {
      if (
        this.obstacles.every((obstacle) => {
          return !(
            this.x + 50 > obstacle.x &&
            obstacle.x + 50 > this.x &&
            obstacle.y < this.y &&
            obstacle.y + 60 >= this.y
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
            obstacle.y - 60 <= this.y
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
            obstacle.x + 60 >= this.x
          );
        }) &&
        this.x > 0
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
            obstacle.x - 60 <= this.x
          );
        }) &&
        this.x + 50 < window.innerWidth
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
  background-size: cover;
}
.obstacle {
  position: absolute;
  width: 50px;
  height: 50px;
  background-size: cover;
}
body {
  margin: 0;
}
</style>
