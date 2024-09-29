// Challenge 3: Net Salary Calculator (Toy Problem)
// Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary. 

// NB: Use KRA, NHIF, and NSSF values provided in the link below.

function claculate_net_salary (basic_salary, benefits){
    //start with finding the gross salary
    const gross_salary = basic_salary + benefits;

    //find the total deductions 
    const payee = calculate_payee(gross_salary);
    const NHIF = calculate_NHIF (gross_salary);
    const NSSF = calculate_NSSF (gross_salary);

    // calculate the net salary
    const net_salary = gross_salary - (payee + NHIF + NSSF);

    
    return {
        gross_salary,
        payee,
        NHIF,
        NSSF,
        net_salary
    };

}

function calculate_payee (gross_salary){
    if (gross_salary <= 24000) 
        return gross_salary * 0.1;
    if (gross_salary <= 32333) 
        return 24000 + (gross_salary - 24000) * 0.15;
    if (gross_salary <= 40000) 
        return 40000 + (gross_salary - 32333) * 0.2;

}

// Calculating NSSF payments
let nssfPayments = 0;
const tierOne = 7000;
const tierTwo = 36000;
if (grossPay <= tierOne){
    nssfPayments = grossPay*(6/100);
}
else if (grossPay <= tierTwo || grossPay >= tierTwo){
    nssfPayments = tierTwo*(6/100);
}

// Calculating NHIF payments
let nhifPayments = 0;
if (grossPay <= 5999){
    nhifPayments = 150;
}

console.log(net_salary);

//t'was quiet challenging to do this one.......got stuck





























