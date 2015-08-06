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

// Solution- use DOM API for doing
function printList(inputs) {
  // define adjs for recording parents and their children
  var adjs = {};
  var i, p, c, n;
  // iterate through each input
  for (i = 0; i < inputs.length; i++) {
    // if the node exists, then push the child to this parent's children
    if (adjs[inputs[i][0]]) {
      adjs[inputs[i][0]].push(inputs[i][1]);
    } else {
      // if the node doesn't exists, then store the child in an array (initiate)
      adjs[inputs[i][0]] = [inputs[i][1]];
    }
  }
  // console.table(adjs);
  // define nodes for the DOM tree structure
  var nodes = {};
  // for every parent in our adjs object
  for (p in adjs) {
    // create or return the DOM node
    var parent = getNode(p);
    // iterate through this parent's children
    for (c = 0; c < adjs[p].length; c++) {
      // create or return the child node
      var child = getNode(adjs[p][c]);
      // append the child to parent
      parent.appendChild(child);
    }
  }
  // console.log(nodes);
  // find the root's node by searching all the nodes we created
  for (n in nodes) {
    // if the node doesn't have parentElement, then it's the root
    if (!nodes[n].parentElement) {
      // print out the parent's outerHTML for all the nodes nested inside
      console.log(nodes[n].outerHTML);
    }
  }
  // helper function to create or get node
  function getNode(n) {
    // if node exists, then just return the node
    if (nodes[n]) return nodes[n];
    // if the node didn't exist before
    else {
      // create the node using createElement function, and update that in nodes' object
      nodes[n] = document.createElement(n);
      // return the node
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
