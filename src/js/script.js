
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
    "“ Mergulhar em busca de respostas filosóficas é ótimo, mas mergulhar por pão é melhor. ”",
    "Se o lago da vida secar, sempre haverá uma poça para refletir.",
    "Patos não julgam a profundidade do lago, apenas mergulham.",
    "Dizem que sou cabeça dura, mas é só meu bico analisando a lógica.",
    "A vida é como um pão jogado na água: é melhor ser rápido ou fica mole demais.",
    "Ninguém entende minhas opiniões porque eu sempre dou de bico nelas.",
    "Nem todo pato é filósofo, mas todo filósofo deveria saber nadar.",
    "Nadar contra a corrente é cansativo, mas o horizonte é mais bonito.",
    "Na dúvida, fique em silêncio... ou apenas grasne.",
    "Parece que estou à deriva, mas meu rumo é definido pelo vento e pela intuição.",
    "A chuva é um problema para alguns, mas para mim, é só uma ducha grátis.",
    "Se você jogar pedras no lago, cuidado com os círculos que cria.",
    "O pato que não voa é o primeiro a rir das alturas.",
    "Patos entendem: a superfície pode estar calma, mas as patas estão sempre trabalhando.",
    "A maior reflexão do pato está no espelho da água.",
    "Nem toda poça é profunda, mas toda água reflete algo.",
    "Prefiro ser o pato que observa do que o pato que é observado.",
    "A vida é uma lagoa: tranquila até jogarem um pão.",
    "Quando não entendo, dou de bico. Quando entendo, grasno.",
    "Um lago é só um oceano em miniatura, assim como uma ideia é um pensamento em formação.",
    "Se a grama é mais verde do outro lado, veja se é porque o pato já não passou por ali.",
    "O pato que nada na lama sabe que a sujeira é temporária.",
    "A filosofia do pato: nadar, voar, e nunca subestimar um pedaço de pão.",
    "As penas podem molhar, mas minha alma sempre seca ao sol.",
    "O silêncio do pato é mais profundo que o grasnar do ganso.",
    "Patos não discutem com o vento; eles apenas ajustam as asas.",
    "O pato preguiçoso é aquele que deixa o rio levá-lo onde quiser.",
    "Voar é fácil; o difícil é decidir onde pousar.",
    "Nem todo pato filosofa, mas todo pato pensa enquanto boia.",
    "A lagoa está sempre cheia de lições, basta saber nadar nelas.",
    "Um pato fora d'água ainda é um pato, mas está longe de ser feliz.",
    "Ganso que se acha esperto sempre leva um bico de resposta.",
    "Entre o grasnar e o silêncio, existe uma sabedoria submersa.",
    "O lago é meu escritório, mas o céu é meu plano de carreira.",
    "Quem nada no raso nunca sente a emoção da profundidade.",
    "Um pato na chuva não reclama, ele apenas dança.",
    "A liberdade de voar só tem graça quando você sabe para onde ir.",
    "A melhor filosofia é simples: nade quando há água, voe quando há céu.",
    "Quando o pão é pouco, os patos aprendem a dividir... ou não.",
    "A maior ambição de um pato é um dia virar um cisne, mas eu gosto de ser eu mesmo.",
    "O pato na lagoa vê o peixe como vizinho, não como concorrente.",
    "Quem olha para baixo só vê a água; quem olha para cima vê o céu.",
    "Um pato sábio sabe que até o barro pode ser útil para construir um ninho.",
    "Pato que filosofa demais corre o risco de esquecer de nadar.",
    "A vida é mais leve quando você flutua.",
    "Quem não aprende a nadar no raso nunca vai encarar o profundo.",
    "Meu bico fala muito, mas minhas asas sempre apontam o caminho certo.",
    "Quando o vento sopra, o pato voa; quando o vento para, ele reflete.",
    "O maior mistério do lago é o que acontece debaixo d'água.",
    "Não importa quantos patos estejam no lago, sempre há espaço para mais um.",
    "Patos não guardam rancor; eles simplesmente nadam para outro lado.",
    "Se a água está fria, mergulhe rápido e acostume-se.",
    "A filosofia começa onde o grasnar termina.",
    "O lago é pequeno, mas meus sonhos são grandes.",
    "Quem não sabe nadar sempre acha que o pato é mágico.",
    "Ninguém valoriza o vento até precisar dele para voar.",
    "Não sou pato de um lago só, gosto de explorar.",
    "A grama do outro lado pode ser mais verde, mas e a vista do meu lado?",
    "Às vezes é melhor deixar o pão afundar e seguir em frente.",
    "O pato que voa sozinho aprende a confiar no vento.",
    "Meu bico pode parecer duro, mas é apenas minha forma de pensar.",
    "Quem nunca nadou na tempestade não conhece a força de suas asas.",
    "A profundidade de um pato não está no lago, mas em seu silêncio.",
    "Pato que não sai da água nunca verá a beleza do céu.",
    "O reflexo na água é o espelho mais honesto que existe.",
    "A vida é um voo: curta, mas cheia de paisagens.",
    "A tempestade assusta, mas também ensina a nadar melhor.",
    "Patos não competem com gansos; eles apenas seguem seu próprio ritmo.",
    "A melhor filosofia é viver leve como uma pena.",
    "Se não quiser ouvir um grasnar, não provoque um pato.",
    "O lago calmo não faz o pato sábio.",
    "Nadar é fácil, o difícil é manter a calma na correnteza.",
    "Patos têm paciência: esperam até a água trazer o que procuram.",
    "A vida pode ser um mar de incertezas, mas eu prefiro chamá-la de lago de possibilidades.",
    "A cada mergulho, descubro mais sobre mim mesmo.",
    "O que define um pato não é o tamanho da asa, mas a coragem de voar.",
    "Quem vê de fora só enxerga a superfície; só quem mergulha entende o lago.",
    "Se você jogar migalhas, eu pego; mas se jogar dúvidas, eu reflito.",
    "Um pato de asas abertas está sempre pronto para mudar.",
    "Nem toda reflexão precisa de palavras; às vezes, basta um mergulho.",
    "O pato na água parece tranquilo, mas a mente dele está a mil.",
    "A correnteza só é um problema para quem esquece de nadar.",
    "Voar não é fugir, é apenas mudar de perspectiva.",
    "Patos não precisam de mapas; eles seguem o instinto e o vento.",
    "O pato que filosofa sabe que até o pão velho tem valor.",
    "Se a água está turva, espere; a calma sempre revela a verdade.",
    "Patos podem parecer simples, mas por dentro somos complexos como o próprio lago.",
    "Grasnamos alto porque a filosofia precisa ser ouvida.",
    "A maior sabedoria é saber quando voar e quando nadar.",
    "O pato solitário é aquele que aprende mais sobre si mesmo.",
    "Pessoas veem o lago; eu vejo um universo de possibilidades.",
    "Nunca subestime um pato: ele sempre tem um plano sob as asas.",
    "A vida é cheia de pão e pedras; cabe ao pato escolher o que pegar.",
    "A água pode refletir o céu, mas o pato reflete a vida.",
    "Quem nunca nadou na lama não sabe o valor da água limpa.",
    "O pato que se perde no voo sempre encontra outro lago.",
    "A asa que não bate não sente a força do vento.",
    "Meu bico pode ser duro, mas minha mente é flexível.",
    "Na dúvida entre nadar ou voar, escolha os dois.",
    "Não existe dia ruim para quem aprecia a simplicidade do lago.",
    "O pato que não tenta voar nunca descobre o céu.",
    "Às vezes, o melhor conselho é apenas boiar e observar.",
    "A água fria ensina mais do que o sol quente.",
    "Nadar sozinho é bom, mas voar em bando é especial.",
    "Um pato que filosofa nunca fica entediado no lago."
]



pato.addEventListener('click', ()=>{
    frase.innerHTML = frasePato[getRandomInt(0,frasePato.length)]
})
