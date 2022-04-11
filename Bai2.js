/* Bài 2: Tính giá trị trung bình

Viết chương trình nhập vào 5 số thực
Tính ra giá trị trung bình của 5 số thực này và xuất ra màn hình
__________________________________________________________


Input
    Nhập 5 số: 3, 5, 7, 9, 11

Step
    Tạo 5 biến a, b, c, d, e lần lượt lưu 5 số 3, 5, 7, 9, 11
    Tạo biến sum bằng tổng của a, b, c, d, e
    Tạo biến avg là giá trị trung bình của 5 số, avg = sum/5

Output
    avg = 7;
*/

var a, b, c, d, e;
a = 3;
b = 5;
c = 7;
d = 9;
e = 11;
var sum = a + b + c + d + e;
var avg = sum / 5;
console.log(
  "Trung bình của 5 số " +
    a +
    ", " +
    b +
    ", " +
    c +
    ", " +
    d +
    ", " +
    e +
    " là: " +
    avg
);
