import Database from 'better-sqlite3';
 
// O arquivo escola.db será criado na raiz do projeto,
// caso ainda não exista.
const db = new Database('escola.db');
 
db.exec(`
  CREATE TABLE IF NOT EXISTS alunos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT UNIQUE
  );
`);
 
console.log('Banco de dados conectado e tabela verificada!');
export default db;
