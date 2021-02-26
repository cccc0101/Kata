const sphereVolume = (radius)=>{return 4/3*Math.PI*radius **3}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = (radius, height) =>{ return 1/3*Math.PI*radius**2 *height
  // And here!
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = (height, width, depth) =>{ return height* width* depth
  // Probably here too!
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  let totalVolume = 0;
  for (shape of solids){
    shape.type === "sphere" ? totalVolume += sphereVolume(shape.radius) : totalVolume +=0;
    shape.type === "cone" ? totalVolume += coneVolume(shape.radius, shape.height) : totalVolume +=0;
    shape.type === "prism" ? totalVolume += prismVolume(shape.height, shape.width, shapr.depth) : totalVolume +=0;

    }
    return totalVolume
  }


const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);