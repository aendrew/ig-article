<onward-journey>
  <div id="container"></div>

  <script src="text/javascript">
  if (opts.uuid) {
    fetch('https://ft-ig-onwardjourney.herokuapp.com/list/' + opts.uuid + '?limit=2&type=html')
      .then(function(res){
        return res.text();
      })
      .then(function(html){
        this.root.innerHTML = html;
      }.bind(this));
  }
  </script>
</onward-journey>
