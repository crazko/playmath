function factorial(num) {
  if (num < 0) return -1;
  else if (num == 0) return 1;
  else {
    return num * factorial(num - 1);
  }
}

module.exports = (ctx) => {
  ctx.onInitialize(() => {
    ctx.update({
      factorial,
    });
  });

  // The application has mounted in the browser,
  // the window object is available
  ctx.onMount(() => {});

  // An update has been triggered,
  // arguments contain only modified data
  ctx.onUpdate((newData) => {});
};
