<template>
  <div
    style="
      height: 100vh;
      overflow: hidden;
      position: relative;
      width: 100%;
      background-size: cover;
      background-repeat: no-repeat;
      background-image: url('sky.png');
    "
  >
    <div
      style="
        height: 100vh;
        width: 100vw;
        position: absolute;
        top: 0;
        left: 0;
        background-size: cover;
        background-image: url('nightsky.png');
      "
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
    <div
      v-if="!isPlaying"
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      "
    >
      <div style="display: flex; justify-content: center">
        <input type="text" v-model="playerName" />
        <button @click="startGame" :disabled="!playerName">Start</button>
      </div>

      <div style="max-height: 70vh; overflow: auto">
        <table>
          <tr>
            <td>Rank</td>
            <td>Name</td>
            <td>Score</td>
          </tr>
          <tr
            v-for="(score, index) in highscores.sort(
              (a, b) => b.score - a.score
            )"
          >
            <td>{{ index + 1 }}</td>
            <td>{{ score.name }}</td>
            <td>{{ score.score }}</td>
          </tr>
        </table>
      </div>
    </div>
    <div
      style="
        position: absolute;
        top: 15px;
        left: 15px;
        text-shadow: -1px -1px 0px white, 1px 1px 0px white, -1px 1px white,
          1px -1px 0px white;
      "
    >
      <b>{{ score > 0 ? score - 1 : 0 }}</b>
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
    <div
      v-if="apple.x > -30"
      style="
        background-image: url('Verzauberter_goldener_Apfel.webp');
        background-size: contain;
        position: absolute;
        width: 30px;
        height: 30px;
      "
      :style="{ top: apple.y + 'px', left: apple.x + 'px' }"
    ></div>
    <Ground />
  </div>
</template>

<script lang="js">
import Ground from "./components/Ground.vue";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  setDoc,
} from "firebase/firestore";
export default {
  components: {
    Ground,
  },
  data() {
    return {
      isJumping: false,
      isFalling: false,
      isPlaying: false,
      score: 0,
      lastY: 50,
      pressedKeys: {},
      x: window.innerWidth - 100,
      y: 50,
      groundHeight: 50,
      obstacles: [],
      currentTick: 0,
      hp: 3,
      highscores: [],
      playerName:'',
      apple: {x:-50,y:0},
      blockCounter:0,
    };
  },
  async mounted() {
    window.onkeyup = (e) => {
      this.pressedKeys[e.key] = false;
    };
    window.onkeydown = (e) => {
      this.pressedKeys[e.key] = true;
    };
    this.highscores = await this.getEntries()
  },
  computed: {
    speed() {
      return Math.round(this.score / 700 + 2);
    },
  },
  methods: {
    startGame() {
      this.isPlaying = true;
      this.gameloop();
      this.score = 0;
      this.y = 50;
      this.x = window.innerWidth - 100;
      this.hp = 3;
      this.obstacles = [];
      this.blockCounter = 0;
      this.apple = {x:-50,y:0};
    },
    async checkDeath() {
      if (this.y >= window.innerHeight - 100) {
        this.hp--;
        this.y = 100;
      }
      if (this.hp == 0) {
        this.isPlaying = false;
        await this.getEntries();
        if(this.playerName != 'test')this.createEntry(this.playerName,this.score)
      }
    },
    gameloop() {
      let game = setInterval(() => {
        this.checkDeath();
        if (!this.isPlaying) clearInterval(game);
        this.score++;
        if (this.currentTick % Math.round(90 / this.speed + 20) == 0) {
          this.spawnObstacle();
        }
        this.currentTick++;
        this.collectHeart();
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
        if (!this.isJumping) {
          this.moveDown();
        }
        if (this.y == this.lastY) {
          this.isFalling = false;
        }
        this.lastY = this.y;
        this.deleteObstacle();
      }, 1000 / 30);
    },
    collectHeart(){
      if(
        this.x < this.apple.x + 30 &&
        this.x+ 50 > this.apple.x &&
        this.y < this.apple.y + 30 &&
        this.y+ 50 > this.apple.y
      ){
          this.hp +=1;
          this.apple.x = -50
      }
    },
    spawnObstacle() {
      let lastObstacleY = this.obstacles.at(-1)?.y || window.innerHeight - 100
      let newY = lastObstacleY + Math.round(Math.random()*100 - 50)
      const newObstacle = {
        x: window.innerWidth,
        y: newY > window.innerHeight - 100 ? window.innerHeight - 100 : newY < window.innerHeight - 500 ? window.innerHeight - 500 : newY,
        width: 50,
        height: 50,
      };
      this.obstacles.push(newObstacle);
      this.blockCounter++;
      if(this.blockCounter % 15 == 0){
        this.apple.x = newObstacle.x + 10
        this.apple.y = newObstacle.y - 100
      }
    },
    moveObstacle() {
      for (let obstacle of this.obstacles) {
        obstacle.x -= this.speed;
      }
      if(this.apple.x > -50) this.apple.x -= this.speed
    },
    deleteObstacle() {
      this.obstacles = this.obstacles.filter((o) => o.x > -50);
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
    async createEntry(name, score) {
      const id = Math.random().toString().substring(2, 15);
      const highscore = {
        name,
        id,
        score,
      };
      await setDoc(doc(getFirestore(), "Highscores", id), highscore);
      return highscore
    },
    async getEntries() {
      const docs = [];
      const querySnapshot = await getDocs(
      collection(getFirestore(), "Highscores")
      );
      querySnapshot.forEach((doc) => {
        docs.push(doc);
      });
      return docs.map((doc) => doc.data()).map((entry) => ({ ...entry }));
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
