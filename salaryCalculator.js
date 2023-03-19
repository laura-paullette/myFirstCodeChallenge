//calculates an individual's Net Salary
//gets input of basic salary and benefits
//calculates net salary, gross salary, net salary, NHIF and NSSF deductions and PAYE



function getSalary(personalRelief, netSalary, totalDeductions, contribitionBenefit, NHIFDeductions, NSSFDeductions, grossSalary, taxableIncome){
    let paye;

    personalRelief = 2400;

    grossSalary = prompt("Enter your salary amount:")

    contribitionBenefit = prompt("Contribution Benefit:")

    NHIFDeductions = prompt("Enter NHIFDeduction:")

    NSSFDeductions = prompt("Enter NSSFDeduction:")  

    //calculating the taxable income

    totalDeductions = (NHIFDeductions + NSSFDeductions + personalRelief + contribitionBenefit);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //calculating monthly PAYE based on a person's income 

    switch(true){
        case (taxableIncome <= 24000):
            paye = taxableIncome * 0.01;
            break;

        case (taxableIncome >= 24001 && taxableIncome <= 32333):
            paye = taxableIncome * 0.25;
            break;

        case (taxableIncome > 32333):
            paye = taxableIncome * 0.30;
            break;  

    }
    //deduction of PAYE to get the netSalary; 
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`your netSalary is ksh: ${netSalary}`)
    

}
getSalary()