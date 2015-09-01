let kuromoji = require('kuromoji');
let _ = require('lodash-node');

const DIC_URL = 'node_modules/kuromoji/dist/dict/';

let hoge = (targetText) => {
  kuromoji.builder({ dicPath: DIC_URL }).build((err, _tokenizer) => {
    let tokenizer = _tokenizer;
    let tokens = tokenizer.tokenize(targetText);

    _.each(tokens, (targetToken) => {
      console.log(targetToken.surface_form);
    });
  });
};

hoge('すごく、お肉が食べたいです。');
