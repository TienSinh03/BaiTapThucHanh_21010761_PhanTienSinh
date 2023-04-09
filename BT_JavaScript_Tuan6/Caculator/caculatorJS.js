//taọ sự kiện lắng nghe

var result =  document.getElementById("inputtext");

function calculate(number) {
    // lấy giá trị cộng lên với giá trị có sẵn
    result.value = result.value+number;
}

//eval: dùng để tính toán các biểu thức truyền vào
function Result() {
    try {
         result.value = eval(result.value);
        
    } catch (error) {
        alert("VUi long nhap hop le");
    }
}

//xóa trắng
function Clear(){
    result.value = " ";
}

//xóa 
//substring: tạo ra một chuỗi mới lấy từ vị trí đầu đến vị trí cuối
function DEL(){
    var currentValue = result.value;
    result.value = result.value.substring(0, currentValue.length - 1);
}
