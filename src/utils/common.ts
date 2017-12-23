var glob = require('glob');

const getFilePathes = function (globPath: string) {
  let pathArr: string[] = [];
  glob.sync(globPath).forEach((path: string) => {
    let tokens = path.match(/\.\/\w+\/([^.]+)/);
    if (tokens && tokens[1]) {
      pathArr.push(tokens[1]);
    }
  });
  return pathArr;
};

export {
  getFilePathes
};
