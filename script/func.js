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

function func2() {


}

function func3() {
    let num = prompt("Please enter 3 digit number")

    num1 = Math.trunc(num / 100);
    num2 = Math.trunc(num / 10) - num1 * 10;
    num3 = num - num1 * 100 - num2 * 10;

    if (num1 == num2 || num1 == num3 || num2 == num3) {
        console.log("This number has repeating digits");
    }
}

function func4() {


}

function func5() {


}

function func6() {



}

function func7() {



}

function func8() {


}

function func9() {


}

function func10() {


}