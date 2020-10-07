class BMI {
    constructor(height, weight) {
        //create local instances to allow access inside of class
        this.height = height;
        this.weight = weight;
    }

    calculatedBMI(height, weight) {
        //method to calculate BMI
        let bmi = this.weight / (this.height ** 2);
        return bmi;
    }
}//end BMI class

//invoke class
let myBmi = new BMI(2, 90);
let calculatedBMI = myBmi.calculatedBMI();
console.log(calculatedBMI);