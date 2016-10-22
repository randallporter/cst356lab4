function submit() {

    var elements = document.getElementById("mainForm").elements;
    var obj = {};
    for (var i = 0 ; i < elements.length ; i++) {
        var item = elements.item(i);
        if (item.value == '') {
            alert(item.name + ' is required!');
            return false;
        }
        obj[item.name] = item.value;
    }

    document.getElementById("divResults").innerHTML = JSON.stringify(obj);
}