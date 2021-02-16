function getCurrentPrice(stockCode) {
   var url = "http://hq.sinajs.cn/list="+ stockCode;
   $httpClient.get(url,function(error,response,data)
   {
       var StatusCode,ResponseHeaders;
       StatusCode = response.status;
       ResponseHeaders = response.headers;
       console.log("response:\n",response);
       console.log("StatusCode:\n",StatusCode);//400
       console.log("ResponseHeaders:\n",ResponseHeaders);//Object
       console.log("error:\n",error);
       console.log("data:\n",data);
       console.log("dataparse:\n",Json.parse(data));//if data is Json String
       //Loon支持使用Console.log输出调试信息
      var parts = data.split("\"");
      var elements = parts[1].split(",");
      var Title = elements[0]; // 证券名称
      var SubTitle = "当前价"+elements[3]; // 当前价格
      var Content = "买一"+elements[6]+"\n"+"时间"+elements[31]

      $notification.post(Title,SubTitle,Content);

   })
}

const stockNumber = "sh600109";
getCurrentPrice(stockNumber);

/* function Notify_Demo(Title,SubTitle,Content)
{
    var Title,SubTitle,Content;
    TItle = "我是主标题";
    SubTitle  = "我是子标题";
    Content = "我是要推送的内容";
    $notification.post(Title,SubTitle,Content);
}
//Call Function
Notify_Demo() */
