let cargoHold = ['Топливо', 'Кислород', 'Провизия', 'Кристаллы', 'Инструменты'];
cargoHold.forEach(item => {
    console.log(`Груз проверен: `, item); 
    if (item === 'Кристаллы') {
        console.log('Обнаружен ценный груз!');
    }
});

let removedCargo = cargoHold.pop()
console.log('Разгружен последний отсек: ', removedCargo); 

let scienceCargo = cargoHold.slice(1, 4);
console.log('Груз для исследований:', scienceCargo);
console.log('грузовой отсек:', cargoHold);

cargoHold.splice(1, 2)
console.log('грузовой отсек после атаки пиратов:', cargoHold)

cargoHold.splice(1, 0, 'Золото', 'Детектор лжи')
console.log('грузовой отсек с контрабандой:', cargoHold)
