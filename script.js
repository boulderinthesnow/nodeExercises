var fs = require("fs")
var contents = fs.readFileSync("text.txt")
// for (var i = 2; i < process.argv.length; i++) {
// 	// console.log(process.argv[i]);
// 	// console.log(contents.toString, "contents");
// };


//console.log(contents.toString().split("\n").length - 1)


fs.readFile("text.txt", "utf8", function(err, data) {
	if (err) throw err
	// console.log(data.split("\n").length -1);
})

// console.log("foo")

arr = []
var http = require("http")
http.get("http://omdbapi.com/?i=tt1392190", function(res){
    res.setEncoding("utf8");
    res.on("data", function(data){
        arr.push(data);
        console.log("arr pushed \n");
        console.log(arr);
    })
    console.log("done?")
    res.on("end", function(){
         console.log("ACTUALLY DONE! \n\n")
        http.get("http://omdbapi.com/?i=tt1392190", function(res2){
            res2.setEncoding("utf8");
            res2.on("data", function(data){
                arr.push(data);
                console.log("2nd pushed");
                console.log(arr);
                // res.on("end", function(){
                // 	console.log(arr);
                // })
            })
        })
    })          


});