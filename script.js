// Задача 1:
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  alert(`Сумма зарплат: ${sum}`); 


  
// Задача 2:
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "number") {
            obj[key] *= 2; 
        }
    }
}

multiplyNumeric(menu);

alert(JSON.stringify(menu, null, 2));


// задача 3:
let calculator = {
    read() {
        this.a = +prompt("Введите первое число:", 0); 
        this.b = +prompt("Введите второе число:", 0); 
    },

    sum() {
        return this.a + this.b;
    },

    mul() {
        return this.a * this.b;
    }
};

calculator.read();

alert("Сумма: " + calculator.sum());
alert("Произведение: " + calculator.mul());



// Задача 4:
function extractCurrencyValue(str) {
    return +str.slice(1);
}

let value = extractCurrencyValue("$120");
alert(`${value}`);



// Задача 5:
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(user => user.name);

alert(names);

//Задача 6:

function getAverageAge(users) {
    let totalAge = users.reduce((sum, user) => sum + user.age, 0);
    return totalAge / users.length;
}

alert(getAverageAge(users).toFixed(2)); 



