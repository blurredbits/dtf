var dtf = {
 saveMetrics: function(metric, value) {
  var x = $(metric);
  if (typeof(metric) !== "string") {
    metric = x[0].id;
    value = 1;
    console.log(metric, value)
  } 
  var img = new Image();
  img.src = "http://localhost:3000/metrics?metric=" + metric + "&value=" + value;
  }  
};