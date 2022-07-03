    function news() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var newsfeed = JSON.parse(this.responseText);
      document.getElementById("news").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "https://launcher.xsolla.com/projects/e6f08bc8-d32a-495b-85d9-9244fc003ff9/news?locale=en&region=us&game_id=12933&show_drafts=false&show_unpublished=false&date_from=1490895164&limit=20", false);
  xhttp.send();
};
