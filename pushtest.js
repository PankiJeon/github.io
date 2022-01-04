
var btn_push = document.getElementById('btn_push');


btn_push.addEventListener('click', function(){
    console.log('click button')
    var system_id = document.getElementById('system_id').value;
    fetch("https://t-enervu.lg-solar.com:4443/tqs/relay", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "x-api-key" : "abcdefghijklmnopqrstuvwxyz",
            "x-message-id" : "pushtesthtml",
            "x-service-phase" : "ST",
            "x-enervu-service" : "solar",
            "Connection" : "keep-alive"
        },
        body: JSON.stringify({
    "msgid" : "12345",
    "time" : "2021-12-31",
    "cmdlist" : [
        {
            "cmd" : "testSolarThinqAPI",
            "deviceId" : system_id,
            "option" : "push",
            "data" : {}
        }
    ]
}),
    }).then((response) => console.log(response));
    
    alert('Hello'+system_id);
})

