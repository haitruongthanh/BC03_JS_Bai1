/* Bải 5: Tính tổng 2 ký số

Viết chương trình nhập vào 1 số có 2 chữ số
Tính tổng 2 ký số của số vừa nhập

input
    Nhập số 89

Step
    Đặt biết num chứa giá trị 89
    Đặt biến donVi chứa giá trị ở hàng đơn vị
        donVi = num % 10
    
    Đặt biến chuc chứa giá trị ở hàng chục, và làm tròn xuống giá trị chục
        chuc = Math.floor(num/10)
        
    Đặt biến sum = donVi + chuc

Output
    17
*/

var num = 89;

var donVi = num % 10;
var chuc = Math.floor(num / 10);
var sum = donVi + chuc;
console.log("Tổng của 2 ký số trong số: " + num + " là " + sum);
