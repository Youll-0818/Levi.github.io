var posts=["2024/11/08/hello-world/","2024/11/09/浏览器搜索丨高效搜索/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };