function () {
  var movieLists = [
            {
                name: "Instant Queue",
                videos : [
                    {
                        "id": 70111470,
                        "title": "Die Hard",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 654356453,
                        "title": "Bad Boys",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }
                            
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            },
            {
                name: "New Releases",
                videos: [
                    {
                        "id": 65432445,
                        "title": "The Chamber",
                        "boxarts": [
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 4.0,
                        "bookmark": []
                    },
                    {
                        "id": 675465,
                        "title": "Fracture",
                        "boxarts": [
                            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                        ],
                        "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                        "rating": 5.0,
                        "bookmark": [{ id:432534, time:65876586 }]
                    }
                ]
            }
        ];

  // return [{"id": , "title":  , "boxarts": url }]

  return movieLists.map(function (movieList) {
    return movieList.videos.map(function (video) {
      return video.boxarts.filter(function (boxart) {
        return boxart.width === 150;
      })
      .map(function (boxart) {
              return {
                id: video.id,
                title: video.title,
                boxart: boxart.url
              };
      })  
    }).mergeAll();  
  }).mergeAll();        

  // create helper function to make the above easier.
  // implement: flatMap() (map followed by mergeAll)

  Array.prototype.flatMap - function(projectionFunction) {
    return this.map(function(item) {
      return projectionFunction(item);
    }).mergeAll();
  };

  var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];

  // collect all words for each language
  var allWords = [0,1,2].flatMap(function (word) {
    return spanishFrenchEnglishWords[word]; 
  });


  // using flatMap to return object 
  return movieLists.flatMap(function (movieList) {
    return movieList.videos.flatMap(function(video){
      return video.boxarts.filter(function(boxart){
          return boxart.width === 150; 
        })
        .map(function(boxart) {
          return {id: video.id, title: video.title, boxart: boxart.url }
        })
    })
  });   

};












