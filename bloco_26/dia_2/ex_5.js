const fs = require('fs').promises;

async function readAndWriteThemAll() {
  const arrayStrings = ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'];
  const arrayDePromises = arrayStrings.map((string, index) =>
    fs.writeFile(`file${index + 1}.txt`, string, 'utf-8')
  );
  const arquivos = [
    './file1.txt',
    './file2.txt',
    './file3.txt',
    './file4.txt',
    './file5.txt',
  ]

  const arrayDeContents = await Promise.all(arquivos.map((file) => fs.readFile(file, 'utf-8')))
  const newContents = arrayDeContents.join(' ');
  await fs.writeFile('./fileAll.txt', newContents, 'utf-8')
}

readAndWriteThemAll();

// 1 - Crie uma função que lê e escreve vários arquivos ao mesmo tempo.
// 2 - Utilize o Promise.all para manipular vários arquivos ao mesmo tempo.
// 3 - Dado o seguinte array de strings: ['Finalmente', 'estou', 'usando', 'Promise.all', '!!!'] Faça com que sua função crie um arquivo contendo cada string, sendo o nome de cada arquivo igual a file<index + 1>.txt . Por exemplo, para a string "Finalmente", o nome do arquivo é file1.txt .
// 4 - Programe sua função para que ela faça a leitura de todos os arquivos criados no item anterior, armazene essa informação e escreva em um arquivo chamado fileAll.txt . O conteúdo do arquivo fileAll.txt deverá ser Finalmente estou usando Promise.all !!! .
