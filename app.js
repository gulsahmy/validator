

function validateID() {
    // Formdan ad ve ID numarası al
    var name = document.getElementById("name").value;
    var idNumber = document.getElementById("idNumber").value;

    // Basit bir doğrulama: ID numarasının belirli bir uzunluğa sahip olması
    if(idNumber.length == 11) {
        document.getElementById("result").innerHTML = name + ", ID'niz başarıyla doğrulandı.";
    } else {
        document.getElementById("result").innerHTML = "Geçersiz ID numarası, lütfen tekrar deneyin.";
    }
}