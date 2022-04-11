/* Bài 4: Tính diện tích, chu vi hình chữ nhật.

Viết chương trình nhập vào 2 chiều dài và chiều rộng của hình chữ nhật.
Tính và xuất ra diện tích và chu vi của hình chữ nhật đó.

Input
    Chiều dài: 5, chiều rộng: 4

Step
    Đăt biến chieuDai và chieuRong lưu thông tin tương ứng của chiều dài và chiều rộng
    Đặt biến: dienTich = chieuDai * chieuRong
    Đặt biến: chuVi = (chieuRong + chieuDai) * 2

Output
    dienTich = 20
    chuVi = 18

*/

var chieuDai = 5;
var chieuRong = 4;
var dienTich = chieuDai * chieuRong;
var chuVi = (chieuRong + chieuDai) * 2;

console.log(
  "Diện tích của hình chữ nhật có chiều dài " +
    chieuDai +
    " và chiều rộng " +
    chieuRong +
    " là: " +
    dienTich
);
console.log(
  "Chu vi của hình chữ nhật có chiều dài " +
    chieuDai +
    " và chiều rộng " +
    chieuRong +
    " là: " +
    chuVi
);
