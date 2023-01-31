# TypeScript-tutorial
**คำศัพท์และตัวย่อ**
- JavaScript = _js_;
- Object Oriented Programming = _OOP_;
- TypeScript = _ts_;
- ECMAScript6  = _ES6_;
- Visual Studio Code = _VSCode_;

## JavaScript
สมัยก่อนจะเรียกว่าเป็นภาษา programming ของฝั่น client-side แต่พอการมาของ node._js_ ตัว _js_ เลยสามารถทำงานฝั่ง server-side ได้ด้วย พอ _js_ เติบโตขึ้นตัว _js_ เริ่มที่จะไม่รองรับ _OOP_ concept ได้ _ts_ เลยเข้ามาช่วยในเรื่องนี้

### Object Oriented Programming
เป็นแนวคิดที่มาช่วยการพัฒนาการเขียนโปรแกรมที่ซับซ้อนได้ ขอไม่ลง detail เพราะมันยาวมาก

## TypeScript
ก่อนจะเขียนเราก็ต้องมาดูข้อดีของมันก่อนจะได้รู้ว่ามันดีจึงต้องเขียนนะ
- _ts_ มี Feature ที่มีประโยชน์อย่าง Code Navigation, Bug Prevention และ Maintainability of Code ไว้ให้แล้ว
- มันรองรับ Static Type Annotation หรือ Static Typing
- นอกจากนี้ยังรองรับ Interfaces, Sub-Interfaces, Classes, Subclasses และ ECMAScript 6 หรือ _ES6_
- มันมาพร้อมกับความสามารถใน Object-Oriented Programming พร้อมทั้งการ Inheritance ของ Private Members และ Interfaces
- มี IDE ให้ใช้อยู่มากมาย
credit: Kanthima Muangsen

### ECMAScript
พอการเขียน code เริ่มบูมขึ้นเราก็อยากจะรู้ว่ามาตรฐานของ code นั้นอยู่ตรงไหน เหมือนเราเริ่มมี community มีประชากรอยู่รวมกันเป็นสังคมก็เลยเกิดสิ่งที่เรียกว่า กฏหมาย จากกฏหมายก็เริ่มเป็นรัฐธรรมนูญขึ้น ECMAScript ก็คือรัฐธรรมนูญ 

### Setting
- VSCode
- Node.js
- npm

## สรุป
ถ้าสรุปในความเข้าใจของผมแบบสั้นๆก็คือ มันคือขั้นพํฒนาการเขียนให้ดีขึ้นจาก _js_ เวลาที่เราทำงานกันเป็นทีมในองค์กร เราจะต้องมาอ่าน code มาเขียน code มาตรวจ code มันก็คล้ายๆก็การเขียนหนังสือ ถ้าเราเขียนไก่เขี่ยมากๆ คนอื่นก็จะอ่านลายมือเราไม่ออก และโครงสร้างของการเขียนถ้าไม่มีก็จะจับต้นชนปลายในแต่ละเรื่องไม่ถูก TypeScript จึงเข้ามาช่วยในเรื่องนี้

Step 1
- ติดตั้ง complier typescript เสียก่อนโดยการพิมพ์คำสั่ง npm install -g typescript
- ทดสอบ hello world ด้วยการสร้างไฟล์ HelloWorld.ts แล้วเขียน code ลงไปจากนั้นใช้คำสั่ง tsc {file-name} จะได้ไฟล์ HelloWorld.js มาแปลว่าสามารถใช้งานตัว complier ได้
- test programe งานขึ้นด้วยการพิมพ์คำสั่ง npm install -g ts-node '@types/node' จากนั้นเวลาจะใช้งานพิมพ์คำสั่ง ts-node {file-name}

## TypeScript Syntax
1. Identifier
- ตั้งชื่อต้องไม่ใช่คำเดียวกับคำที่มีใน Keyword
1.1 Keyword
- break, as, throw, else, case, if, string, get, var, number, instancdeof, typeof, module, type, enum, export, public, private, while, void, finally, for, this, new, null, super, true, false, in, return, static, letm any, extends, interface, function, package, implements, yield, const, new, try, catch, continue, do, switch
- ห้ามตั้งชื่อขึ้นต้นด้วยตัวเลข
- อักษรพิเศษใช้ได้แค่ _ และ $
- Unique ห้ามซ้ำกับตัวแปรอื่นๆ
- Case-sensitive ตัวเล็กตัวใหญ่จะมีผล
- ห้ามเว้น
2. True Indentifier => Google TypeSCript Style Guide
- UpperCamelCase => class, interface, type, enum, decorator, type parameters
- lowerCamelCase => variable, parameter, function, method, property, module alias
- CONSTANT_CASE => global constant values, including enum values
- #indent => private indentifiers are never used
- ใส่ ; จะดีกว่า
3. Comment code
- Single-line => //
- Multi-line => /* */

## Data Types
1. Any
2. Built-in Types เช่น built-in ของ array => array.push("-");
3. User-defined Types
ปล. ใส่ type ระบุให้ชัดเจนดีกว่า

### เกร็ด Scoped Data Types
- const สำหรับข้อมูลที่ไม่มีการแก้ไขใดใด
- let สำหรับข้อมูลที่มีการเปลี่ยนแปลง
- var ควบคุมการเปลี่ยนข้อมูลยาก scoped กว้างเกินไป

Step 2 ลองสร้างไฟล์ DataTypesTest.ts เพื่อดูการทำงานของ data types ต่างๆ
Step 3 ลองสร้างไฟล์ OperatorTest.ts เพื่อดูการทำงานของ operator
Step 4 ลองสร้างไฟล์ ConditionTest.ts เพื่อดูการทำงานของ conditions ต่างๆ
Step 5 ลองสร้างไฟล์ FunctionTest.ts เพื่อลองเขียนการทำงานของ function
Step 6 ลองสร้างไฟล์ OOPTest.ts เพื่อลองเขียนการทำงานของ oop
Step 7 ทดสอบการเรียกใช้ Module โดยการ
 - สร้างไฟล์ ModuleTest.ts สำหรับประกาศ class
 - สร้างไฟล์ App.ts สำหรับเรียกใช้งาน Module ในไฟล์ ModuleTest.ts
 - ในไฟล์ App.ts ให้ทำการ import เรียกใช้ ModuleTest file จากนั้นประกาศค่าแล้วเรียกใช้งาน function ใน class ดู
