const texto = ' um curto texto para testar a busca de palavra pela expressao regular, palavra teste novamente'

const texto2 = 'esta é uma paaaaaalavraaaa de teste, para exemplos de quantificadores'

const arquivos = [
  "foto.JPEG",
  "foto2.png",
  "foto3.PNG",
  "foto4.jpeg",
  "foto5.jpeg",
  "foto5.jpg"
]


const html = "<p> ola mundo </p>, <a> link para o meu site </a>"


const alfabeto = " abcdefghijklmnopqrstuvwxyz 1234567890 @%%#$%|¡¾"

const cpfs = `
  os cpf são:
  222.333.444-88
  145.256.265-94
  457.541.548-95
`;

const ips = `
  0.0.0.0

  192.168.0.25

  10.10.5.12

  255.255.255.255
`;
module.exports = {
    texto,
    texto2,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips
}

