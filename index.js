function getFirstSelector(selector) {
  let selecty = document.querySelector(selector)
  return selecty
}

function nestedTarget() {
  let targetLady = document.getElementById('nested').querySelector('div div div div .target')
  return targetLady
}


function increaseRankBy(n) {
  let rankity = document.getElementById('app').querySelectorAll('.ranked-list li')

  for (let i = 0, l = rankity.length; i < l; i++) {
    rankity[i].innerHTML =  parseInt(rankity[i].innerHTML) + n
  }
}

function deepestChild() {
  let node = document.getElementById('grand-node')
  while (node.children.length != 0) {
    node = node.children[0]
  }
  return node
}
