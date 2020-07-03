import React, {useEffect} from "react";
import h337 from "heatmap.js";

const Heatmap = () => {

  useEffect(() => {
    var heatmapInstance = h337.create({
      // only container is required, the rest will be defaults
      container: document.querySelector('.App')
    });
    // now generate some random data
    var points = [];
    var max = 0;
    var width = 500;
    var height = 450;
    var len = 450;

    while (len--) {
     var val = Math.floor(Math.random()*100);
     max = Math.max(max, val);
     var point = {
      x: Math.floor(Math.random()*width),
      y: Math.floor(Math.random()*height),
      value: val
     };
     points.push(point);
   }
   // heatmap data format
  var data = {
    max: max,
    data: points
  };
  // if you have a set of datapoints always use setData instead of addData
  // for data initialization
    heatmapInstance.setData(data);
 })



  return (
    <div className="App" style={{color:"black"}}>
      this is a heatmap
    </div>
  );
}

export default Heatmap;
    

