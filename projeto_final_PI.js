//1 -  A classe Aluno não é um objeto em si,
//  ela é um modelo que pode ser utilizado para criar objetos Aluno que tenham as mesmas
//  propriedades e métodos definidos na classe.
class Aluno {
  // 2 - O construtor é um método especial de uma classe que é executado automaticamente
  //  quando um novo objeto é criado a partir da classe.
  // Ele é responsável por inicializar o objeto e definir suas propriedades
  constructor(nome, faltas, notas) {
    // 2.1 - Atribui o nome do aluno
    this.nome = nome;
    // 2.2 - Atribui a quantidade de faltas do aluno
    this.faltas = faltas;
    // 2.3 - Atribui a lista de notas do aluno
    this.notas = notas;
  }

  // 3 - Método para calcular a média das notas do aluno
  calcularMedia() {
    // 3.1 - Inicializa a variável soma com zero
    let soma = 0;
    // 3.2 - Percorre a lista de notas do aluno e adiciona o valor de cada nota à soma
    for (let nota of this.notas) {
      soma += nota;
    }
    // 3.3 - nesse caso o valor total das notas que foi armazenado em soma é divido pelo numero de notas presentes dentro do array,
    //que utiliza o this para referenciar a propriedade notas do objeto.
    return soma / this.notas.length;
  }
  // 4 - Método para adicionar uma falta ao aluno
  adicionarFalta() {
    // 4.1 - Incrementa o número de faltas do aluno
    this.faltas++;
  }
}
// 5 - Criação de três objetos da classe Aluno
let aluno1 = new Aluno("Laura", 1, [5, 9, 4]);
let aluno2 = new Aluno("Marcos", 4, [8, 3, 6]);
let aluno3 = new Aluno("Julia", 2, [9, 11, 8]);

// 6 - Definindo o objeto literal curso
let curso = {
  nome: "Programação Imperativa",
  notaDeAprovacao: 6,
  faltasMaximas: 5,
  listaDeEstudantes: [aluno1, aluno2, aluno3],

  // 7 - Método para adicionar um aluno à lista de estudantes
  adicionarAluno(aluno) {
    this.listaDeEstudantes.push(aluno);
  },
  // 8 - Método para verificar se um aluno foi aprovado ou não
  verificarAprovacao(aluno) {
    // 8.1 - Calcula a média das notas do aluno
    const media = aluno.calcularMedia();
    // 8.2 - Obtém o número de faltas do aluno
    const faltas = aluno.faltas;
    // 8.3 - Verifica se o aluno atingiu a nota mínima e não ultrapassou o limite de faltas
    if (faltas === this.faltasMaximas) {
      return media >= this.notaDeAprovacao * 1.1;
    } else {
      return media >= this.notaDeAprovacao && faltas < this.faltasMaximas;
    }
  },
  // 9 - Método para verificar a aprovação de todos os alunos do curso
  verificarAprovacaoTodos() {
    // 9.1 - Cria um array para armazenar os resultados de aprovação
    const resultados = [];
    //9.2 - Em resumo, essa parte do código itera sobre todos os alunos da turma 
    //9.3 - e obtém os resultados da verificação de aprovação de cada um, armazenando-os em um array.
    for (let i = 0; i < this.listaDeEstudantes.length; i++) {
      resultados.push(this.verificarAprovacao(this.listaDeEstudantes[i]));
    }
    return resultados;
  },
};

// Modo de uso para validação:
curso.adicionarAluno(new Aluno("Leonardo", 3, [7, 5, 9]));
console.log(curso.verificarAprovacaoTodos());
