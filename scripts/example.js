var labelType, useGradients, nativeTextSupport, animate;

(function() {
  var ua = navigator.userAgent,
      iStuff = ua.match(/iPhone/i) || ua.match(/iPad/i),
      typeOfCanvas = typeof HTMLCanvasElement,
      nativeCanvasSupport = (typeOfCanvas == 'object' || typeOfCanvas == 'function'),
      textSupport = nativeCanvasSupport 
        && (typeof document.createElement('canvas').getContext('2d').fillText == 'function');
  //I'm setting this based on the fact that ExCanvas provides text support for IE
  //and that as of today iPhone/iPad current text support is lame
  labelType = (!nativeCanvasSupport || (textSupport && !iStuff))? 'Native' : 'HTML';
  nativeTextSupport = labelType == 'Native';
  useGradients = nativeCanvasSupport;
  animate = !(iStuff || !nativeCanvasSupport);
})();

var Log = {
  elem: false,
  write: function(text){
    if (!this.elem) 
      this.elem = document.getElementById('log');
    this.elem.innerHTML = text;
    this.elem.style.left = (500 - this.elem.offsetWidth / 2) + 'px';
  }
};

function init(){

//init data
var json =

//hub
{"id": "100",
"name": "WALMART",

//primary spokes
"children": [

//primary hub
{"id": "2",
"name": "MICHAEL T. DUKE",
"data": {
"relation": "<h2>Michael T. Duke</h2><img src=\"images/anon.png\" width=\"100px\" /><p>Mike Duke is the president and chief executive officer of Wal-Mart Stores, Inc. (Walmart). From 2005 to February 2009, Mike served as vice chairman of the company, with responsibility for Walmart International.</p><p>As CEO, Mike leads a strong management team that is focused on keeping Walmart’s mission of “saving people money so they can live better” relevant to every customer, every day. The company also continues to broaden and accelerate its global efforts on environmental sustainability, responsible sourcing and associate opportunity.</p><p>Since joining Walmart in 1995, Mike has led the logistics, distribution and administration divisions as well as Walmart U.S. As vice chairman, Mike was actively involved in developing and executing corporate strategy. He focused on setting higher standards of excellence for the company’s resources and people — from the redesign of logistics and merchandise distribution systems, to the recruitment of talent, and development of strong teams.</p>"},

//child hub
"children": [
{"id": "3",
"name": "SUSAN CHAMBERS",
"data": {
"relation": "<h2>Susan Chambers</h2><img src=\"http://s3.amazonaws.com/littlesis/images/profile/baf1a6794b82e07166928af4523179a1b979ea91_1245683330.png\" width=\"100px\" /><p>M. Susan Chambers serves as the Executive Vice President of the Global People Division for Wal-Mart Stores, Inc. In that role, she is responsible for managing, attracting and retaining the nation’s largest private workforce. In 2008, she was named to Fortune magazine’s list of the “50 Most Powerful Women in Business.”</p><p>Prior to joining Wal-Mart, Susan worked for 14 years with Hallmark Cards, Inc. She was the Director of Applications Development at Hallmark before beginning her career at Wal-Mart in 1999.</p><p>She was then promoted to the role of Executive Vice President of Risk Management and Benefits Administration, with additional responsibilities in Global Security and Aviation. In 2006, Susan was promoted to her current position as Executive Vice President of the Global People Division.</p><p>She reports directly to Wal-Mart’s CEO Mike Duke. </p>"},
"children": []
}]
},
        
//primary hub
{"id": "2396_14",
"name": "EDUARDO CASTRO-WRIGHT",
"data": {
"relation": "<h2>Eduardo Castro-Wright</h2><img src=\"images/anon.png\" width=\"100px\" /><p>Eduardo Castro-Wright is President and Chief Executive Officer of Wal-Mart Stores, USA. Mr. Castro-Wright joined Wal-Mart in 2001 and worked in Mexico through 2005, first as President and later as Chief Executive Officer of Wal-Mart de Mexico.</p><p>He then joined Wal-Mart in the U.S. as Chief Operating Officer of the Wal-Mart Stores division in early 2005 and was promoted to his current role later that year.</p><p>Previously, he was the President and Chief Executive Officer of Honeywell Transportation and Power Systems Worldwide. Prior to that, he was President of Honeywell Asia/Pacific. He also held several leadership positions at Nabisco, Inc., including President of Nabisco Asia/Pacific, as well as President and Chief Executive Officer of the company's businesses in Venezuela and Mexico. Mr. Castro-Wright is a Director of the Hispanic Scholarship Fund</p>"},

//child hub
"children": [


{"id": "2382_7",
"name": "LEE SCOTT",
"data": {
"relation": "<h2>Lee Scott</h2><img src=\"http://s3.amazonaws.com/littlesis/images/profile/c24151142acb66c3f6978f6320509d55ea92710c_1225933507.png\" width=\"100px\" /><p>Mr. Scott is the President and CEO of Wal-Mart and has served in that position since January 2000.</p><p>Prior to this appointment, he held other positions with Wal-Mart since joining the Company in September 1979, including Vice Chairman and Chief Operating Officer from January 1999 to January 2000, and Executive Vice President and President and CEO, Wal-Mart Stores Division from January 1998 to January 1999.</p><p>He has been a member of the Board since 1999.</p>"},

"children": []
},

//child hub
{"id": "5000",
"name": "THOMAS M. SCHOEWE",
"data": {
"relation": "<h2>Thomas M Schoewe</h2><img src=\"http://s3.amazonaws.com/littlesis/images/profile/91f410ce53d66e2e10f0b3de7b4bd7cbf17527d1_1225943840.png\" width=\"100px\" /><p>Officer of Wal-Mart. Mr. Schoewe is the executive vice president and chief financial officer of Wal-Mart Stores, Inc., where he has served since January 2000.</p><p>Prior to joining Wal-Mart Stores, Mr. Schoewe spent 14 years at Black and Decker Corp., most recently as senior vice president and chief financial officer. Previously, he had a 12-year career with Beatrice Companies, where he was chief financial officer and controller of Beatrice Consumer Durables, Inc.</p><p>A native of the Chicago area, Mr. Schoewe earned a BBA degree in finance from Loyola University of Chicago. He is a member of Financial Executives International and a national trustee of The First Tee.</p>"},
children: []}
]},

//end primary and children
],

//patent node data
data: {relation: "<h2>Wal Mart</h2><img src=\"http://helloladies.com/wp-content/uploads/2011/06/walmart.jpg\" width=\"200px\" /><p>Wal-Mart Stores, Inc. (NYSE: WMT), branded as Walmart since 2008 and Wal-Mart before then, is an American public multinational corporation that runs chains of large discount department stores and warehouse stores. The company is the world's 18th largest public corporation, according to the <a href=\"#\">Forbes Global 2000 list.</a> It is also the biggest private employer in the world with over 2 million employees.</p><p>The company was founded by <a href=\"#\">Sam Walton</a> in 1962, incorporated on October 31, 1969, and publicly traded on the New York Stock Exchange in 1972. It is headquartered in <a href=\"#\">Bentonville, Arkansas</a>.</p><p>The company operates under its own name in the United States, including the 50 states and Puerto Rico. It operates in Mexico as <a href=\"#\">Walmex</a>, in the United Kingdom as <a href=\"#\">Asda</a>, in Japan as <a href=\"#\">Seiyu</a>, and in India as <a href=\"#\">Best Price</a>. It has wholly owned operations in Argentina, Brazil, and Canada.</p>"}

//end
};

    //init RGraph
    var rgraph = new $jit.RGraph({
        //Where to append the visualization
        injectInto: 'infovis',
        //Optional: create a background canvas that plots
        //concentric circles.
        background: {
          CanvasStyles: {
            strokeStyle: '#555'
          }
        },
        //Add navigation capabilities:
        //zooming by scrolling and panning.
        Navigation: {
          enable: true,
          panning: true,
          zooming: 10
        },
        //Set Node and Edge styles.
        Node: {
            color: '#ffffff'
        },
        
        Edge: {
          color: '#FF2400',
          lineWidth:10
        },

        onBeforeCompute: function(node){
            Log.write("centering " + node.name + "...");
            //Add the relation list in the right column.
            //This list is taken from the data property of each JSON node.
            $jit.id('inner-details').innerHTML = node.data.relation;
        },
        
        onAfterCompute: function(){
            Log.write("Completed");
        },
        //Add the name of the node in the correponding label
        //and a click handler to move the graph.
        //This method is called once, on label creation.
        onCreateLabel: function(domElement, node){
            domElement.innerHTML = node.name;
            domElement.onclick = function(){
                rgraph.onClick(node.id);
            };
        },
        //Change some label dom properties.
        //This method is called each time a label is plotted.
        onPlaceLabel: function(domElement, node){
            var style = domElement.style;
            style.display = '';
            style.cursor = 'pointer';

            if (node._depth <= 1) {
                style.fontSize = "20px";
                style.color = "#000000";
            
            } else if(node._depth == 2){
                style.fontSize = "16px";
                style.color = "#788489";
            
            } else {
                style.display = 'none';
            }

            var left = parseInt(style.left);
            var w = domElement.offsetWidth;
            style.left = (left - w / 2) + 'px';
        }
    });
    //load JSON data
    rgraph.loadJSON(json);
    //trigger small animation
    rgraph.graph.eachNode(function(n) {
      var pos = n.getPos();
      pos.setc(-200, -200);
    });
    rgraph.compute('end');
    rgraph.fx.animate({
      modes:['polar'],
      duration: 2000
    });
    //end
    //append information about the root relations in the right column
    $jit.id('inner-details').innerHTML = rgraph.graph.getNode(rgraph.root).data.relation;
}
