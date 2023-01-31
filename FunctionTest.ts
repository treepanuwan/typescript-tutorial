function test () {
    console.log("test");
}
test();

//Return
function showName(name: string): string {
    return "My name is " + name;
}
console.log(showName("Mark"));

//Default Value
function showFullName(firstName: string = "Firstname's Empty", lastName:string = "Lastname's Empty") {
    return firstName + lastName;
}
console.log(showFullName());

//Rest Parameter เหมาะสำหรับ sum ข้อมูลโดยใช้ reduce รับค่าแล้วรวมค่า
function sum(a:number,b:number, ...rest: number[]): number {
    return a + b + rest.reduce((a,b) => a + b, 0);
}
console.log("Sum: " + sum(1,2,3,4,5));
