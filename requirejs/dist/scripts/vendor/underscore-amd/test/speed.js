(function(){var e=[];for(var t=0;t<1e3;t++)e.push(t);var n=_.map(e,function(e){return{num:e}}),r=_.sortBy(e,function(){return Math.random()}),i=_.map(_.range(100),function(){return _.range(1e3)});JSLitmus.test("_.each()",function(){var t=[];return _.each(e,function(e){t.push(e*2)}),t}),JSLitmus.test("_(list).each()",function(){var t=[];return _(e).each(function(e){t.push(e*2)}),t}),JSLitmus.test("jQuery.each()",function(){var t=[];return jQuery.each(e,function(){t.push(this*2)}),t}),JSLitmus.test("_.map()",function(){return _.map(n,function(e){return e.num})}),JSLitmus.test("jQuery.map()",function(){return jQuery.map(n,function(e){return e.num})}),JSLitmus.test("_.pluck()",function(){return _.pluck(n,"num")}),JSLitmus.test("_.uniq()",function(){return _.uniq(r)}),JSLitmus.test("_.uniq() (sorted)",function(){return _.uniq(e,!0)}),JSLitmus.test("_.sortBy()",function(){return _.sortBy(e,function(e){return-e})}),JSLitmus.test("_.isEqual()",function(){return _.isEqual(e,r)}),JSLitmus.test("_.keys()",function(){return _.keys(n)}),JSLitmus.test("_.values()",function(){return _.values(n)}),JSLitmus.test("_.intersection()",function(){return _.intersection(e,r)}),JSLitmus.test("_.range()",function(){return _.range(1e3)}),JSLitmus.test("_.flatten()",function(){return _.flatten(i)})})();