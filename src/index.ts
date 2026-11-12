import db from './database';
 
const tabelas = db.prepare(`
  SELECT name FROM sqlite_master
  WHERE type = 'table'
`).all();
console.log('Tabelas encontradas:', tabelas);

const inserir = db.prepare(
  'INSERT INTO alunos (nome, email) VALUES (?, ?)'
);

inserir.run('Carlos Alberto', 'carlos@gmail.com')

inserir.run('Julia Freitas', 'julia@gmail.com')