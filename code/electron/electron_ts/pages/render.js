const btn1 = document.getElementById("btn1");
const btn2  = document.getElementById("btn2");
const btn3  = document.getElementById("btn3");
const input = document.getElementById("input");

btn1.onclick  = () => {
    console.log("Node Version: ", myAPI.nodeVersion);
    alert("Node Version: " + myAPI.nodeVersion);
};

btn2.onclick = () => {
    console.log("Input Value: ", input.value);
    // alert("Input Value: " + input.value);
    myAPI.saveFile(input.value);
};

btn3.onclick = async () => {
    let data = await myAPI.readFile()
    alert(data);
}

window.onload = () => {
    myAPI.getMsg(logMsg)
};

function logMsg(event, str) {
    console.log(event, str);
}