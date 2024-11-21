
const pato = document.querySelector('#pato')
const frase = document.querySelector('#resul')
const body = document.querySelector('#body')
const hora = document.querySelector('.hora')


setInterval(() => {

  
  const horas = new Date();
  hora.innerHTML = horas.getHours() + ':' + horas.getMinutes() + ":" + horas.getSeconds()


  if(horas.getHours() >= 18 || horas.getHours() <= 5){
    body.classList.add('noite')
    frase.classList.add('white')
    hora.classList.add('white')
  }
  else{
      body.classList.add('dia')
  }
  
  
}, 1000);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  

  const frasePato = [

    '“ Sou um pato filósofo, o que significa que penso, logo… fico com fome. ”',
    '“ Por que o pato atravessou a lagoa? Para encontrar uma filosofia mais profunda... ou talvez só migalhas melhores. ”',
    '“ Quem nunca tentou conversar com um cisne arrogante não sabe o que é uma crise existencial. ”',
    '“ O segredo da felicidade? Ficar sempre perto do pato que consegue o pão. ”',
    '“ Dizem que não se deve contar com ovos antes de chocarem, mas e quanto a contar migalhas antes de serem roubadas? ”',
    '“ Nada é certo na vida, exceto que um pato faminto sempre encontrará uma forma de roubar seu lanche. ”',
    '“ Alguns buscam a iluminação, eu busco... pão de queijo. A filosofia é relativa.',
    '“ A maior lição da vida é simples: nunca confie no pato que promete dividir o pão. ”',
    '“ Se a vida te der limões, ignore-os. Limões não são comestíveis para patos. Espere por pão. ”',
    '“ Alguns acham que patos são superficiais. Mas isso é porque nunca filosofaram sobre quantas migalhas cabem num bico. ”',
    "“ A sabedoria vem com a idade, mas o pão sempre desaparece na hora errada. ”",
    "“ Se não puder voar alto, pelo menos nade com estilo... ou com um pouco de drama. ”",
    "“ Dizem que o universo é vasto e misterioso, mas eu só quero saber onde escondem o pão. ”",
    "“ A grama é sempre mais verde do outro lado da lagoa, mas será que lá tem pão? ”",
    "“ A arte de flutuar com graça é 80% calma e 20% fingir que não estamos com fome. ”",
    "“ Nem todos os patos que vagam estão perdidos... alguns só seguem o cheiro de comida. ”",
    "“ Minha filosofia é simples: se o pão cair, é destino. Se não cair, é pura maldade. ”",
    "“ Penso, logo bato as asas... mas só se for para impressionar um grupo de patos curiosos. ”",
    "“ O universo é cheio de mistérios, mas o maior de todos é: quem comeu o último pedaço de pão? ”",
    "“ Alguns buscam o sentido da vida, eu busco o sentido do próximo piquenique. ”",
    "“ Se a vida te der um lago, nade nele. Mas se te der pão... faça um banquete aquático! ”",
    "“ Um pato sem pão é como uma filosofia sem propósito: um pouco triste e muito perdido. ”",
    "“ Contemple a serenidade da água, mas esteja pronto para um caos total quando o pão aparecer. ”",
    "“ Medite profundamente, mas mantenha um olho aberto para o lanche inesperado. ”",
    "“ Se o céu está azul e o pão está à vista, então o universo está alinhado. ”",
    "“ Ninguém é perfeito. Nem mesmo um pato filósofo com migalhas no bico. ”",
    "“ A existência pode ser confusa, mas o pão é uma certeza eterna... até alguém comer. ”",
    "“ Quem disse que o silêncio é de ouro nunca ouviu o som de pão caindo na água. ”",
    "“ A vida é cheia de perguntas sem resposta, como: por que o pão sempre cai longe? ”",
    "“ Mergulhar em busca de respostas filosóficas é ótimo, mas mergulhar por pão é melhor. ”"
]



pato.addEventListener('click', ()=>{
    frase.innerHTML = frasePato[getRandomInt(0,frasePato.length)]
})