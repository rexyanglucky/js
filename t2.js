function cx(tree) {
  const que = [tree];
  const result = [];
  while (que.length) {
    const tempsize = que.length;
    const tempReuslt = [];
    for (let k = 0; k < tempsize; k++) {
     const node = que.shift();
      tempReuslt.push(node.val);
      if (node.left) {
        que.push(node.left);
      }
      if (node.right) {
        que.push(node.right);
      }
    }
    result.push(tempReuslt);
  }
  return result;
}
