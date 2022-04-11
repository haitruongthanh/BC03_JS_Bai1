/* Bài 3: Quy đổi tiền

Giá USD hiện nay đang là 23,500 VND
Viết chương trình quy đổi từ USD sang VND.
Cho người dùng nhập vào số tiền USD.
Tính và xuất ra số tiền sau quy đổi VND.
____________________________________________________

Input 
    Nhập 2 USD

Step
    Tạo biến soTienUSD lưu giá trị USD cần quy đổi
    Tạo biến tuongDuongVND là số tiền VND tương ứng sau quy đổi.
    tuongDuongVND = soTienUSD + 23,500

Output
    47,000


*/

var soTienUSD = 2;
var tuongDuongVND;

tuongDuongVND = soTienUSD * 23500;

console.log(soTienUSD + " USD có giá trị VND tương đương là: " + tuongDuongVND + " VND");
