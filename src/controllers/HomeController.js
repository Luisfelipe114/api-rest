import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Luis',
      sobrenome: 'Felipe',
      email: 'cabralluis994@gmail.com',
      idade: 18,
      peso: 90,
      altura: 1.75,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
