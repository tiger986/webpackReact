let fetchData = (url, method, mode, headers, body, callback) => {
  fetch(url, {method: method,mode: mode, headers: headers, body: body})
    	.then(response => response.json())
    	.then(res => {
      		callback(res)
    	})
    	.catch(err => {
          console.log(err)
     })
}

export default fetchData

/*需要传参时要同时传入headers:
1.参数为对象时要JSON.stringify(参数),同时headers为{"Accept": "application/json", "Content-Type": "application/json"}
2.参数为字符串时,headers为{"Content-type": "application/x-www-form-urlencoded;charset=UTF-8}*/
