//MORTAL KOMBAT - 100 Números

// 3,6,9,12 ... MORTAL
//5,10,15,20... KOMBAT
//15,30,45... MORTAL KOMBAT

for (let i = 1; i < 100; i++) {
  if (i % 15 === 0) {
    console.log(`${i} MORTAL KOMBAT`);
  } else if (i % 3 === 0) {
    console.log(`${i} MORTAL`);
  } else if (i % 5 === 0) {
    console.log(`${i} KOMBAT`);
  }
}

let i = 1; //inicializar el While

while (i < 100) {
  if (i % 15 === 0) {
    console.log(`${i} MORTAL KOMBAT`);
  } else if (i % 3 === 0) {
    console.log(`${i} MORTAL`);
  } else if (i % 5 === 0) {
    console.log(`${i} KOMBAT`);
  }

  i++;
}
