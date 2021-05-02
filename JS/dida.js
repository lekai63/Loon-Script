var body = $response.body;
var obj = JSON.parse(body);
console.log("before_obj:",obj);
obj["proEndDate"]="2025-01-01T00:00:00.000+0000";
obj["needSubscribe"]=false;
obj["pro"]=true;
body = JSON.stringify(obj);
console.log("after_body:",body);
$done({body});