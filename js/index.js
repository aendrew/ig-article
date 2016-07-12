import * as riot from 'riot/riot+compiler';
export default function igArticle(){};

igArticle.init = function() {
  console.dir(riot)
  riot.compile(function() {
    var tags = riot.mount('*')
  })
}
