const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {

  const token = req.headers['x-access-token']; //  eu que determino o nome do token que será utilizado para armazenar a autorização
  if (!token) {
    return res.status(401).json({ auth: false, message: 'Não foi encontrado o header x-access-token' });
  }

  jwt.verify(token, 'letscode', function (err, decoded) {
    // função de callback para validar a verificação do token
    if (err) {
      console.error(err)
      return res.status(500).json({ auth: false, message: 'Falha ao atenticar o Token' });
    }

    // se tudo estiver ok, salva no request para uso posterior
    console.log(decoded)
    req.email = decoded.userData.email;
    // Função de middleware para seguir após a finalização dessa função
    // Seguir com a execução de quem acionou
    next();
  });
}