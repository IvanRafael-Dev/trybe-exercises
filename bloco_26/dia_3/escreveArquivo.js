const fs = require('fs').promises;

module.exports = { 
  escreveArquivo: async (fileName, content) => {
    try {
      await fs.writeFile(fileName, content, { flag: 'wx'})
      return 'ok';
    } catch (err) {
      return err.message;
    }
  },
};
