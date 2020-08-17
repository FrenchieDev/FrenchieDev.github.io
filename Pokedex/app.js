let screen = document.getElementById("screen");
let info = document.getElementById("info");
let animated = document.getElementById("animated");
const crossUp = document.getElementById("crossTop");
const crossRight = document.getElementById("crossRight");
const crossDown = document.getElementById("crossBottom");
const crossLeft = document.getElementById("crossLeft");
let actualPokemon = -1;
const pokeList = [];

const getPokemon = async () => {
  try {
    for (let i = 1; i <= 150; i++) {
      const fetchPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${i}`
      );
      const pokeInfo = await fetchPokemon.json();
      const pokemon = {
        id: pokeInfo.id,
        name: pokeInfo.name,
        image: `https://pokeres.bastionbot.org/images/pokemon/${pokeInfo.id}.png`,
        animated: `https://projectpokemon.org/images/normal-sprite/${pokeInfo.name}.gif`,
        type: pokeInfo.types.map((type) => type.type.name),
        moves: pokeInfo.moves.map((move) => move.move.name),
        stats: pokeInfo.stats.map((stat) => {
          return { name: stat.stat.name, value: stat.base_stat };
        }),
      };
      if (pokemon.id === 122) {
        pokemon.animated = `https://projectpokemon.org/images/normal-sprite/mr.mime.gif`;
      } else if (pokemon.id === 32) {
        pokemon.animated = `https://projectpokemon.org/images/normal-sprite/nidoran_m.gif`;
      } else if (pokemon.id === 29) {
        pokemon.animated = `https://projectpokemon.org/images/normal-sprite/nidoran_f.gif`;
      }
      pokeList.push(pokemon);
    }
    console.log(pokeList);
  } catch (error) {
    console.log("The pokemon run away");
  }
};

function selectedPokemon(e) {
  crossUp.onclick = function (e) {
    if (actualPokemon < 150) {
      actualPokemon++;
      showPokemon(actualPokemon);
    }
  };
  crossRight.onclick = function (e) {
    if (actualPokemon < 150) {
      actualPokemon = actualPokemon + 10;
    } else if (actualPokemon > 150) {
      actualPokemon = 150;
      showPokemon(actualPokemon);
    }
    showPokemon(actualPokemon);
  };
  crossDown.onclick = function (e) {
    if (actualPokemon > -1) {
      actualPokemon--;
      showPokemon(actualPokemon);
    }
  };
  crossLeft.onclick = function (e) {
    if (actualPokemon > -1) {
      actualPokemon = actualPokemon - 10;
    } else if (actualPokemon < -1) {
      actualPokemon = 0;
      showPokemon(actualPokemon);
    }
    showPokemon(actualPokemon);
  };
}
selectedPokemon();

function showPokemon(pokemon) {
  if (pokeList[pokemon].id < 9) {
    info.innerHTML =
      "#00" + pokeList[pokemon].id + " " + pokeList[pokemon].name;
  } else if (pokeList[pokemon].id < 100 && pokeList[pokemon].id > 9) {
    info.innerHTML = "#0" + pokeList[pokemon].id + " " + pokeList[pokemon].name;
  } else {
    info.innerHTML = "#" + pokeList[pokemon].id + " " + pokeList[pokemon].name;
  }
  const types = pokeList[pokemon].type;
  screen.className = `${types[0]}`;
  screen.innerHTML = `<img class="pokesnap" src='${pokeList[pokemon].image}'>`;
  animated.className = `${types[0]}`;
  animated.innerHTML = `<img class='animatedpoke' src='${pokeList[pokemon].animated}'>`;
}
getPokemon();
document.addEventListener("keydown", keyboardPress);
function keyboardPress(e) {
  e.preventDefault();
  switch (e.keyCode) {
    case 38: //Up
      if (actualPokemon < 150) {
        actualPokemon++;
        showPokemon(actualPokemon);
      }
      break;
    case 37: //Left
      if (actualPokemon > -1) {
        actualPokemon = actualPokemon - 10;
      } else if (actualPokemon < -1) {
        actualPokemon = 0;
      }
      showPokemon(actualPokemon);
      break;
    case 40: //Down
      if (actualPokemon > -1) {
        actualPokemon--;
        showPokemon(actualPokemon);
      }
      break;
    case 39: //Right
      if (actualPokemon < 150) {
        actualPokemon = actualPokemon + 10;
      } else if (actualPokemon > 150) {
        actualPokemon = 150;
      }
      showPokemon(actualPokemon);
      break;
      break;
  }
}
