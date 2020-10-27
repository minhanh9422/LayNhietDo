let C= prompt("Nhập nhiệt độ: ")
let Cencius= Number(C)
if (20<= Cencius && Cencius <=100) {
    alert("Nhiệt độ bình thường")
} else {
    if(Cencius >100){
        alert("Yêu cầu giảm nhiệt độ!")
    } 
    if (Cencius <20){
        alert("Yêu cầu tăng nhiệt độ!")
    } 
} 