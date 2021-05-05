var body = $response.body;
var obj = JSON.parse(body);
obj["ProductId"]="1";
obj["PurchaseDate"]="2021-01-01T01:00:00.000Z";
obj["ExpireDate"]="2049-01-01T01:00:00.000Z";
obj["NeverBeenSubscribed"]=false;
body = JSON.stringify(obj);
$done({body});