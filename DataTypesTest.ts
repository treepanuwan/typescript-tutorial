const fixed_name  = "fixed";
const fixed_array: number[] = [1,2,3];
var globle_change_data: boolean = true;

function DataTypesTest() {
    
    if(globle_change_data) {
        let answer: boolean = true;
        console.log(answer);
        console.log(globle_change_data);
    }
    globle_change_data = false;
    //console.log(answer);
    console.log(globle_change_data);
}
DataTypesTest();
console.log(fixed_array);
console.log(fixed_array.pop());
// -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
// TypeScript => Tuple เป็น Array ที่สามารถมีหลาย type ได้
let employee: [number, string, boolean][] = [[1,"AAA",true],[2,"BBB",false]];
console.log(employee);
employee.push([3,"CCC",true]);
console.log(employee.find(t => t[1] == "BBB"));
// Enum
enum Status {
    WaitForApprove = 0,
    Approve = 1,
    Cancel = 2
}
console.log(Status.Approve);