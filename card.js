var video={

    poster:"",
    profile:"",
    title :"",
    creater:"",
    views: 17,
    timing: ""

}

var card= document.createElement("div");
card.className="card";


var videoPoster=document.createElement("div");
videoPoster.className="videoPoster";

var videoInfo = document.createElement("div");
videoInfo.className="videoinfo";

card.appendChild(videoPoster);
card.appendChild(videoInfo);


var posterImg = document.createElement("img");
posterImg.src="";
posterImg.height="100%";
posterImg.width="100%";

videoPoster.appendChild(posterImg);
