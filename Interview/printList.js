// print a list of categories and sub-categories given an array of tuples
// print that in the DOM as nested lists

/*
  Input:
    [['parent', 'child'],['child','grandChild'],['parent','secondChild'], ['secondChild','secondgrandChild']]

  Output:
  <parent>
    <child>
      <grandChild></grandChild>
    </child>
    <secondChild>
      <secondGrandChild></secondGrandChild>
    </secondChild>
  </parent>
*/

function printList(inputs) {
  var adjs = {};
  var i, p, c, n;
  for (i = 0; i < inputs.length; i++) {
    if (adjs[inputs[i][0]]) {
      adjs[inputs[i][0]].push(inputs[i][1]);
    } else {
      adjs[inputs[i][0]] = [inputs[i][1]];
    }
  }

  console.table(adjs);
  var nodes = {};
  for (p in adjs) {
    var parent = getNode(p);
    for (c = 0; c < adjs[p].length; c++) {
      var child = getNode(adjs[p][c]);
      parent.appendChild(child);
    }
  }
  console.log(nodes);
  for (n in nodes) {
    if (!nodes[n].parentElement) {
      console.log(nodes[n].outerHTML);
    }
  }

  function getNode(n) {
    if (nodes[n]) return nodes[n];
    else {
        nodes[n] = document.createElement(n);
        return nodes[n];
    }
  }
}

printList([
    ['parent', 'child'],
    ['child', 'grandChild'],
    ['parent', 'secondChild'],
    ['secondChild', 'secondgrandChild']
]);
