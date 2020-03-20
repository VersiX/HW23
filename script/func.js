// Запросить у пользователя его возраст и определить, кем он является: 
// ребенком (0–2), 
// подростком (12–18), 
// взрослым (18_60) или 
// пенсионером (60– ...).

function func1() {
    let age = prompt("What is your age");

    if (age < 3) {
        console.log("You are baby");

    }
    else if (age > 13 && age <= 18) {
        console.log("You are teen");
    }
    else if (age > 18 && age < 60) {
        console.log("You are adult");
    }
    else if (age >= 60) {
        console.log("You are senior");
    }
    else {
        console.log("You are unknown");
    }

}

// Запросить у пользователя число от 0 до 9 и вывести ему спецсимвол, 
// который расположен на этой клавише (1–!, 2–@, 3–# и т. д).

function func2() {
    let digit = prompt("Please enter single digit");

    switch (Number(digit)) {
        case 1:
            console.log("!");
            break;

        case 2:
            console.log("@");
            break;

        case 3:
            console.log("#");
            break;

        case 4:
            console.log("$");
            break;

        case 5:
            console.log("%");
            break;
        case 6:
            console.log("^");
            break;

        case 7:
            console.log("&");
            break;

        case 8:
            console.log("*");
            break;

        case 9:
            console.log("(");
            break;

        case 0:
            console.log(")");
            break;

        default:
            console.log("Wrong value");
            break;
    }


}

// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

function func3() {
    let num = prompt("Please enter 3 digit number")

    num1 = Math.trunc(num / 100);
    num2 = Math.trunc(num / 10) - num1 * 10;
    num3 = num - num1 * 100 - num2 * 10;

    if (num1 == num2 || num1 == num3 || num2 == num3) {
        console.log("This number has repeating digits");
    }
    else {
        console.log("This number doesn't have repeating digits");
    }
}

// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

function isLeap(year) {
    if ((!(year % 400)) || (!(year % 4) && (year % 100))) {
        return true;
    }
    else {
        return false;
    }
}

function func4() {
    let year = prompt("Please enter year");

    if (isLeap(year)) {
        console.log("This is a leap year");
    }
    else {
        console.log("This is not a leap year");
    }

}

// Запросить у пользователя пятиразрядное число и определить, является ли оно палиндромом.

function func5() {
    let number = prompt("Please enter 5 digit number:");
    number = "" + number;


    if ((number[0] == number[4]) && (number[1] == number[3])) {
        console.log("This is a palindrome");
    }
    else {
        console.log("This is NOT a palindrome");
    }

}

// Написать конвертор валют. 
// Пользователь вводит количество USD, 
// выбирает, в какую валюту хочет перевести EUR, UAN или AZN, 
// и получает в ответ соответствующую сумму.

function func6() {
    const EURrate = 0.93;
    const AZNrate = 1.7;
    const UAHrate = 27.93;

    let sum = prompt("Please enter sum:");

    let currency = prompt("Please select currency:\n 1 - EUR\n 2 - UAH\n 3 - AZN\n");

    switch (Number(currency)) {
        case 1:
            console.log(sum + " USD = " + (sum * EURrate) + " EUR");
            break;

        case 2:
            console.log(sum + " USD = " + (sum * UAHrate) + " UAH");
            break;

        case 3:
            console.log(sum + " USD = " + (sum * AZNrate) + " AZN");
            break;

        default:
            console.log("no matching currency");
            break;
    }


}

// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой: 
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

function func7() {
    let subtotal = prompt("Please enter sum of your purchases:");

    switch (true) {
        case (subtotal >= 200) && (subtotal < 300):
            console.log("You have 3% discount. Total price is " + (subtotal - (subtotal * 3 / 100)));
            break;


        case (subtotal >= 300) && (subtotal < 500):
            console.log("You have 5% discount. Total price is " + (subtotal - (subtotal * 5 / 100)));
            break;

        case (subtotal >= 500):
            console.log("You have 7% discount. Total price is " + (subtotal - (subtotal * 7 / 100)));
            break;

        default:
            console.log("You have no discount. Total price is " + subtotal);
            break;
    }

}

// Запросить у пользователя длину окружности и периметр квадрата. 
// Определить, может ли такая окружность поместиться в указанный квадрат.

function func8() {
    let circleLength = prompt("Please enter circle length:");
    let squarePerimetr = prompt("Please enter square length:");

    if ((squarePerimetr / 4) >= ((circleLength) / Math.PI)) {
        console.log("The circle can fit inside the square");
    }
    else {
        console.log("The circle can't fit inside the square");
    }
}

// Задать пользователю 3 вопроса, в каждом вопросе по 3 варианта ответа. 
// За каждый правильный ответ начисляется 2 балла. 
// После вопросов выведите пользователю количество набранных баллов.

function func9() {
    let score = 0;

    if (prompt("Who is the best programmer?\n1 - Bill Gates\n2 - Linus Torvalds\n3 - Yura") == 3) {
        score += 2;
    }

    if (prompt("What is more powerfull weapon?\n1 - trebuchet\n2 - catapult\n3 - ballista") == 1) {
        score += 2;
    }

    if (prompt("Who would win?\n1 - crocodile\n2 - bear\n3 - lion") == 2) {
        score += 2;
    }

    console.log("Your score is " + score);
    switch (score) {
        case 0:
            console.log("You're dumb as box of rocks!");
            break;
        case 2:
            console.log("You could do better");
            break;
        case 4:
            console.log("Almost perfect");
            break;
        case 6:
            console.log("Einstein, is that you?")
            break;
        default:
            break;
    }

}

// Запросить дату (день, месяц, год) и вывести следующую за ней дату. 
// Учтите возможность перехода на следующий месяц, год, а также високосный год.

function printDate(day, mounth, year) {
    console.log(`${day}/${mounth}/${year}`);
}

function func10() {
    let year = prompt("Please enter year");
    let mounth = prompt("Please enter mounth");
    let day = prompt("Please enter day");

    if (day < 28) {
        day++;
        printDate(day, mounth, year);
    }
    else if ((mounth == 4) || (mounth == 6) || (mounth == 9) || (mounth == 11)) {
        if (day <= 29) {
            day++;
            printDate(day, mounth, year);
        }
        else {
            mounth++;
            day = 1;
            printDate(day, mounth, year);
        }
    }
    else if (mounth == 2) {
        if (isLeap(year) && day == 28) {
            day++;
            printDate(day, mounth, year);
        }
        else {
            mounth++;
            day = 1;
            printDate(day, mounth, year);
        }
    }
    else {
        if (day <= 31) {
            day++;
            printDate(day, mounth, year);
        }
        else {
            mounth++;
            day = 1;
            printDate(day, mounth, year);
        }
    }

}