function msalary(salary,rent, allowance,relief){
     this.salary = salary;
     this.rent = rent;
     this.allowance = allowance;
     this.relief = relief
     
}
let user = "Brown";
const kevin= new msalary(50000,20000,10000,5000);
console.log("**********************************************************************");

console.log("   NAME        SALARY        RENT        ALLOWANCE        RELIEF     ");
console.log(`   ${user}        ${kevin.salary}      ${kevin.rent}             ${kevin.allowance}        ${kevin.relief}   `);


console.log("**********************************************************************");