//Bài 1: Tính tiền thuế
console.log("-----Bài 1: Tính tiền thuế-----");
function ex1() {
    var yearIncomes = 960e+6;
    var dependentPerson = 2;
    var taxableIncomes = yearIncomes - 4e+6 - dependentPerson * 16e+5;
    var PIT;

    if (taxableIncomes <= 60e+6) {
        PIT = taxableIncomes * 0.05;
    } else if (taxableIncomes <= 120e+6) {
        PIT = 60e+6 * 0.05 + (taxableIncomes - 60e+6) * 0.1;
    } else if (taxableIncomes <= 210e+6) {
        PIT = 60e+6 * 0.05 + 60e+6 * 0.1 + (taxableIncomes - 120e+6) * 0.15;
    } else if (taxableIncomes <= 384e+6) {
        PIT = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + (taxableIncomes - 210e+6) * 0.2;
    } else if (taxableIncomes <= 624e+6) {
        PIT = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + (taxableIncomes - 384e+6) * 0.25;
    } else if (taxableIncomes <= 960e+6) {
        PIT = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + (taxableIncomes - 624e+6) * 0.3;
    } else {
        PIT = 60e+6 * 0.05 + 60e+6 * 0.1 + 90e+6 * 0.15 + 174e+6 * 0.2 + 240e+6 * 0.25 + 336e+6 * 0.3 + (taxableIncomes - 960e+6) * 0.35;
    }
    console.log("Tổng thuế thu nhập cá nhân là:", new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(PIT));
}
ex1();

//Bài 2: Tính tiền cáp
console.log("-----Bài 2: Tính tiền cáp-----");
function ex2 () {
    var isBusiness = true; // true = Doanh nghiệp, false = nhà dân
    var numOfConnect = 12;
    var invoiceProcessingFee;
    var basicSerFee;
    var premiumChanel = 10;
    var premiumChanelFee;
    var totalFee;

    if (isBusiness) {
        invoiceProcessingFee = 15;
        numOfConnect <= 10 ? basicSerFee = 75 : basicSerFee = 75 + (numOfConnect - 10) * 5;
        premiumChanelFee = premiumChanel * 50;
    } else {
        invoiceProcessingFee = 4.5;
        basicSerFee = 20.5
        premiumChanelFee = premiumChanel * 7.5;
    }

    totalFee = invoiceProcessingFee + basicSerFee + premiumChanelFee;
    console.log("Tổng tiền cáp là:", new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalFee));
}
ex2();