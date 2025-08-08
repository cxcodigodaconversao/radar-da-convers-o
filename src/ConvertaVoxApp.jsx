import React, { useState } from 'react';

const markers = [
  { label: "Fala rápida e direta", profile: "D" },
  { label: "Fala animada e com histórias", profile: "I" },
  { label: "Fala pausada e cuidadosa", profile: "S" },
  { label: "Fala técnica e analítica", profile: "C" },
  { label: "Tom de voz firme e decidido", profile: "D" },
  { label: "Tom de voz expressivo e emocional", profile: "I" },
  { label: "Tom de voz suave e estável", profile: "S" },
  { label: "Tom de voz neutro e racional", profile: "C" },
  { label: "Olhar direto e assertivo", profile: "D" },
  { label: "Sorriso, contato visual constante", profile: "I" },
  { label: "Expressão calma, receptiva", profile: "S" },
  { label: "Expressão séria, analítica", profile: "C" }
];

const suggestions = {
  D: {
    label: "🟥 Perfil Dominante",
    approach: "🎯 Seja direto, foque em resultado e ROI",
    trigger: "🔥 Resultados tangíveis, liderança, ganho de tempo",
    script: {
      objetivo: {
        caracteristicas: "Pessoa prática, impaciente e direta.",
        busca: "resultado, ganho de tempo, autoridade e impacto direto",
        evita: "conversa fiada, detalhes excessivos e falta de foco",
        foco: "Isso me dá resultado? Quanto eu ganho? Em quanto tempo?"
      },
      abertura: {
        titulo: "ABERTURA RÁPIDA (CONEXÃO)",
        script: "Oi [Nome], tudo certo? Vamos direto ao ponto: essa conversa é pra identificar se o que temos aqui pode gerar retorno pra você. Fechado?",
        gatilhos: "Controle, autoridade, ROI"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "entender rapidamente o cenário atual com foco em números e alavancas de resultado",
          perguntas: [
            "Hoje, qual canal ou estratégia mais te traz faturamento?",
            "Quanto você fatura por mês atualmente com isso?",
            "Você quer crescer quanto nos próximos 90 dias?"
          ],
          gatilhos: "Clareza, foco, metas, ROI"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "expor os obstáculos que impedem performance máxima",
          perguntas: [
            "O que exatamente está te travando de bater esse número?",
            "Já tentou resolver isso como antes? O que não funcionou?",
            "E o que mais te incomoda em relação a isso hoje?"
          ],
          gatilhos: "Urgência, dor clara, frustração, desafio"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "mostrar as consequências da inação com foco em perda de dinheiro, tempo ou autoridade",
          perguntas: [
            "Se isso continuar assim, quanto você estima que perde por mês?",
            "Já parou pra calcular o impacto disso no seu resultado final?",
            "O que você deixaria de conquistar se seguir nesse ritmo?"
          ],
          gatilhos: "Custo da inação, urgência, ROI negativo"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE DE SOLUÇÃO (SPIN: N)",
          objetivo: "ativar o desejo de solução eficaz e direta",
          perguntas: [
            "Se eu te mostrasse uma estratégia com ROI em 30 dias, que elimina esses travamentos, faria sentido pra você?",
            "Qual o cenário ideal pra você nos próximos 60 dias? Se a gente traçar um plano objetivo, te interessa executar com foco?"
          ],
          gatilhos: "Ganho rápido, execução, clareza de solução"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO MÉTODO",
        script: "Olhando o que você compartilhou, o método que a gente trabalha tem foco exatamente nisso: acelerar resultado, com estrutura direta. O que mais tem dado retorno pra perfis como o seu é [exemplo de caso real com ROI].",
        gatilhos: "Prova, autoridade, resultado financeiro"
      },
      chamada: {
        titulo: "CHAMADA PRA AÇÃO",
        script: "Quer seguir nessa linha e ver o plano de ação mais direto pra você bater essa meta em até 30 dias?"
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO (FECHAMENTO PARCIAL)",
        script: "Se fizer sentido, já te coloco no radar do time pra próxima fase. Posso te passar os próximos passos agora?"
      }
    },
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que exatamente você tentou e que te fez perder tempo sem retorno?",
        response: "Você é alguém que já sabe o que não funciona. Agora precisa de algo que funcione — simples assim. Aqui, a diferença está na execução com método. Posso te mostrar resultados concretos de quem também já estava no limite e virou o jogo em semanas."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "O que exatamente faria você ter certeza de que isso funciona pra você?",
        response: "Se você quer evolução real e resultado com clareza, sim, serve pra você. O método se adapta a quem executa com foco. Posso te mostrar casos de quem chegou aqui com o mesmo perfil que o seu — e dobrou o resultado com precisão."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "Em quanto tempo você espera ver um retorno visível? Isso te ajudaria a decidir?",
        response: "Se você aplica com consistência, os primeiros resultados vêm em 30 dias — reais, mensuráveis. Já vi casos que dobraram faturamento em 21 dias. Posso te mostrar. Mas não é fórmula mágica — é execução com método."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Se esse investimento voltasse pra você em dobro, faria sentido agora?",
        response: "A pergunta certa não é quanto custa — mas quanto você já perdeu por não resolver isso. O que você decide aqui vira retorno, não é gasto. Te mostro como clientes no seu perfil recuperaram o investimento em semanas."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "O que está te tomando mais tempo hoje — e que já deveria estar resolvido?",
        response: "Exatamente por estar sem tempo é que você precisa resolver isso agora. Esse método te devolve tempo — não exige mais. Posso te mostrar como ele elimina tarefas inúteis e foca no que gera retorno direto."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "O que exatamente seu parceiro(a) precisa entender pra te apoiar nessa decisão?",
        response: "Claro. Se quiser, posso te ajudar com os argumentos estratégicos pra essa conversa. Isso impacta os dois — e você vai estar levando clareza, resultado e direção."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Você já superou desafios antes. O que torna esse diferente pra você duvidar da sua capacidade?",
        response: "Você já passou por coisas muito maiores. Aqui, você só precisa executar com direção. E essa direção eu te dou. Posso te mostrar o plano, os dados e os checkpoints que garantem o resultado — se você fizer, funciona."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "O que você costuma fazer quando algo sai diferente do esperado — você ajusta ou abandona?",
        response: "Se você fizer, dá certo. O único erro real é parar. Aqui, você não segue sozinho — tem acompanhamento pra corrigir rota e ir até o fim. Posso te mostrar casos em que o ajuste foi o diferencial pro resultado."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Se eu te mostrasse casos de pessoas que aplicaram com intensidade e venceram, isso bastaria como prova?",
        response: "Se você aplicar, funciona. Quem executa colhe. E eu te acompanho pra garantir que você tenha o plano, o ritmo e os ajustes certos. Posso te mostrar casos reais — mas a diferença está na execução."
      }
    ]
  },
  I: {
    label: "🟨 Perfil Influente",
    approach: "🎯 Conecte com emoção e energia positiva",
    trigger: "🔥 Pertencimento, apoio, entusiasmo, reconhecimento",
    script: {
      objetivo: {
        caracteristicas: "Pessoa carismática, criativa, expressiva e guiada por emoções, reconhecimento e conexão humana.",
        busca: "pertencimento, ser ouvido, leveza no processo, reconhecimento",
        evita: "conversas técnicas, frieza, falta de empatia, ambientes sem energia",
        foco: "Conexão emocional e reconhecimento"
      },
      abertura: {
        titulo: "ABERTURA (WARM-UP + CONEXÃO)",
        script: "Oi [Nome]! Que bom falar com você! Primeira coisa: adorei sua energia, já deu pra sentir que vai ser uma conversa incrível. De onde você tá falando agora? Me conta um pouco de como está o seu dia. Vi no seu Insta que você é super envolvido com [tema que ele posta]… muito massa isso!",
        tecnica: "Técnica FORM (Família, Ocupação, Recreação, Motivação)",
        gatilhos: "Apreciação, emoção, espelhamento"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "mapear o momento atual de forma leve e emocionalmente engajada",
          perguntas: [
            "Como tem sido sua rotina hoje? Tem conseguido curtir o que faz?",
            "Hoje, o que te deixa mais animado no seu negócio?",
            "E o que tá te dando mais dor de cabeça? Aquela parte que você adoraria delegar ou melhorar…"
          ],
          gatilhos: "Emoção, validação, leveza"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "explorar dificuldades sem parecer confronto — com empatia e espaço para desabafo",
          perguntas: [
            "Já teve aquele momento em que você deu tudo de si… mas parece que não foi reconhecido? Como você lidou com isso?",
            "O que mais tem te travado quando você sente que podia estar indo além?"
          ],
          gatilhos: "Pertencimento, escuta ativa, reconhecimento da jornada"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "trazer as consequências de forma suave, emocional e relacional",
          perguntas: [
            "E como você se sente quando dá o seu melhor e ainda assim parece que não está fluindo?",
            "Já parou pra pensar no quanto isso te desanima — até mesmo em momentos que você sabe que é bom no que faz?"
          ],
          gatilhos: "Empatia, dor emocional, motivação interna"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE DE SOLUÇÃO (SPIN: N)",
          objetivo: "criar uma visão emocional positiva de futuro e ativar o desejo de pertencer a algo maior",
          perguntas: [
            "Se você tivesse hoje uma estrutura leve, com apoio real, onde você pudesse focar no que ama fazer… como isso mudaria sua energia?",
            "E se você fizesse parte de uma comunidade onde todo mundo se apoia, vibra junto e cresce junto? Isso faria diferença pra você?"
          ],
          gatilhos: "Comunidade, apoio, projeção de futuro, emoção positiva"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO MÉTODO",
        script: "Você tem um brilho quando fala, e é nítido que você tem muito valor pra entregar. O que a gente faz aqui é te ajudar a canalizar isso pra gerar resultado — com leveza, com estrutura, mas sem te engessar. E o melhor: com gente que vibra junto contigo.",
        gatilhos: "Pertencimento, reconhecimento, esperança, inspiração"
      },
      chamada: {
        titulo: "CHAMADA PRA AÇÃO",
        script: "Vamos juntos construir esse próximo passo? Quero muito te ver voando com o que você já tem de melhor."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO (FECHAMENTO PARCIAL)",
        script: "Se fizer sentido pra você, já te coloco em contato com nosso time pra organizar o plano de ação. Pode ser?"
      }
    },
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que você sentiu quando percebeu que aquilo que tentou não funcionou?",
        response: "Você já deu tudo de si — e isso é admirável. Mas você não precisa seguir sozinho(a). Aqui, você vai ter um ambiente leve, de apoio real, onde você se sente escutado e parte de algo maior. Posso te apresentar histórias de pessoas como você que voltaram a acreditar."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "O que você gostaria de sentir pra ter certeza de que está no lugar certo?",
        response: "Ninguém começa pronto — você só precisa estar disposto a viver algo novo com apoio. Aqui, você vai ter espaço, acolhimento e troca. E vai se surpreender com a leveza de se sentir parte de algo que realmente te fortalece."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "O que faria você sentir que já está avançando nos primeiros dias?",
        response: "Logo nos primeiros dias, você já sente mais clareza, direção e apoio — e isso já muda o seu jogo. Quando você começa a se ver com novas possibilidades, o resultado vem de dentro pra fora."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Como seria sair desse ciclo e respirar de novo, com leveza?",
        response: "Você merece sair desse sufoco. Já vi pessoas no limite financeiro mudarem tudo porque encontraram apoio real. A gente te ajuda a construir um caminho viável — e você não precisa passar por isso sozinho(a)."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Como seria ter tempo pra você, com leveza, sem precisar abrir mão dos seus sonhos?",
        response: "Acredite: esse processo é justamente pra quem quer parar de correr e começar a viver com mais leveza. É sobre criar tempo pra você, com organização e liberdade. E você não precisa fazer isso sozinho."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "Como você gostaria que essa conversa acontecesse pra que ambos se sentissem confiantes?",
        response: "Totalmente compreensível. Posso te mandar um resumo leve, claro, com carinho — assim você apresenta com tranquilidade. Inclusive, se quiser, posso estar disponível pra responder dúvidas juntos."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "O que faria você acreditar mais em si mesmo(a) agora?",
        response: "Nem todo mundo começa acreditando — mas com o apoio certo, você se surpreende com o que é capaz. Aqui você vai se sentir escutado(a), apoiado(a) e valorizado(a). E quando isso acontece, você flui."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Como você se sente quando erra algo que acreditava? Você costuma se cobrar muito?",
        response: "Você não precisa acertar tudo de primeira. Ninguém acerta. Mas o importante é não fazer isso sozinho(a). Aqui tem suporte real, encorajamento e espaço pra crescer mesmo quando parece que falhou."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Você se sentiria mais confiante sabendo que vai ter alguém do seu lado durante o processo todo?",
        response: "O que eu te garanto é apoio, escuta e um caminho possível — com leveza, sem cobrança, e com presença real. E quando você tem isso, a coisa flui. Os resultados vêm como consequência."
      }
    ]
  },
  S: {
    label: "🟩 Perfil Estável",
    approach: "🎯 Acolha, ofereça passo a passo e segurança",
    trigger: "🔥 Segurança, suporte, constância, processo claro",
    script: {
      objetivo: {
        caracteristicas: "Pessoa leal, gentil, colaborativa, com foco em segurança, previsibilidade e ambiente harmonioso.",
        busca: "apoio, passo a passo claro, estrutura confiável, relacionamento de confiança",
        evita: "pressão, mudanças bruscas, decisões rápidas, ambiente agressivo",
        foco: "Segurança e estabilidade no processo"
      },
      abertura: {
        titulo: "ABERTURA ACOLHEDORA (CONEXÃO)",
        script: "Oi [Nome], tudo bem? Fico feliz que a gente esteja conversando hoje, a ideia aqui é te escutar com calma e construir algo que realmente funcione pra você, sem pressa. De onde você está falando agora? Consegue conversar com tranquilidade? A ideia não é te vender nada agora, tá? Quero primeiro entender o que você precisa, se fizer sentido, a gente constrói junto. Pode ser assim?",
        gatilhos: "Segurança, tranquilidade, confiança, ritmo respeitado"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "entender com cuidado o cenário atual, respeitando o ritmo da pessoa",
          perguntas: [
            "Como está sua rotina hoje? Está conseguindo conciliar tudo bem?",
            "O que na sua operação ou rotina você sente que está fluindo bem?",
            "E o que você gostaria que estivesse mais organizado ou mais leve?"
          ],
          gatilhos: "Acolhimento, escuta ativa, estrutura"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "levantar os pontos de insatisfação com empatia e foco em soluções práticas",
          perguntas: [
            "Teve alguma experiência anterior que te deixou inseguro ou frustrado em tentar resolver isso?",
            "Você já tentou algo pra ajustar esse ponto? Como foi essa experiência?",
            "O que tem te travado de colocar as mudanças em prática hoje?"
          ],
          gatilhos: "Confiança, cuidado, validação emocional"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "mostrar com leveza as consequências de seguir sem resolver os desafios",
          perguntas: [
            "Se as coisas seguirem do jeito que estão, o que você sente que pode acontecer a médio prazo?",
            "E isso pode te trazer alguma preocupação no dia a dia?",
            "Como isso impacta sua tranquilidade ou sua confiança no processo?"
          ],
          gatilhos: "Consciência emocional, antecipação de risco, segurança"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE DE SOLUÇÃO (SPIN: N)",
          objetivo: "ativar o desejo por uma solução segura, confiável e que acompanhe o ritmo da pessoa",
          perguntas: [
            "Se existisse um plano bem definido, com apoio do início ao fim, isso te traria mais segurança?",
            "Se você tivesse um acompanhamento leve, com alguém te orientando passo a passo, te daria mais tranquilidade de executar?"
          ],
          gatilhos: "Apoio, passo a passo, estrutura, segurança emocional"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO MÉTODO",
        script: "Aqui a gente faz diferente: criamos um plano junto com você, respeitando seu ritmo, com acompanhamento real, de perto. É um processo estruturado, sem pressão — e que funciona justamente por ser contínuo.",
        gatilhos: "Clareza de processo, cuidado, apoio contínuo, previsibilidade"
      },
      chamada: {
        titulo: "CHAMADA PRA AÇÃO",
        script: "Se for o momento certo, posso te mostrar como seria esse plano na prática, sem pressa. Posso seguir?"
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO (FECHAMENTO PARCIAL)",
        script: "Podemos agendar um próximo passo pra te mostrar esse caminho com mais calma, tudo bem assim pra você?"
      }
    },
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "O que mais te incomodou nas soluções anteriores? Foi o jeito como foi conduzido?",
        response: "Esse sentimento de frustração é mais comum do que parece. É por isso que aqui o processo é construído passo a passo, com acompanhamento de perto e no seu ritmo. A gente não impõe, a gente constrói junto. Se quiser, te mostro como adaptamos tudo à sua realidade."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "O que te faria se sentir mais seguro(a) de que isso pode funcionar pra você?",
        response: "Esse processo foi pensado pra funcionar com calma e constância. Não é sobre mudar tudo de uma vez — é sobre encaixar, passo a passo, no que já funciona na sua vida. A gente caminha junto com você, sem pressa e com solidez."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "Você prefere um resultado rápido ou sustentável, mesmo que leve um pouco mais de tempo?",
        response: "Você vai sentir progresso gradual. Não colocamos pressão — colocamos estrutura. É um processo que respeita seu tempo e te leva com segurança. A constância gera o resultado certo."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Se a gente encaixasse isso na sua realidade atual, com segurança, faria sentido pra você agora?",
        response: "Entendo você. Já vimos isso muitas vezes. E é por isso que temos formas acessíveis e planejadas de entrar com leveza. A ideia não é te sobrecarregar — é construir com firmeza, no seu ritmo."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Se pudéssemos encaixar isso de forma leve na sua rotina, sem atrapalhar o que já funciona, faria sentido?",
        response: "Você não precisa se atropelar. Esse processo respeita seu tempo. A gente vai com leveza, adaptando à sua rotina — sem pressão. E o progresso vem de forma constante, sem causar caos."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "O que te ajudaria a se sentir mais seguro(a) nessa conversa com seu parceiro(a)?",
        response: "Faz todo sentido. Essa decisão é importante, e eu posso te ajudar a organizar os pontos com calma. Se quiser, podemos até montar essa escolha juntos, respeitando o tempo de vocês dois."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Se você tivesse alguém do seu lado durante o processo, isso te faria se sentir mais confiante?",
        response: "Você não vai estar sozinho(a). E com cada pequeno avanço, sua confiança cresce. O método é passo a passo, com acompanhamento constante. Juntos, a gente constrói o seu ritmo de vitória."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Se tivesse certeza de que, mesmo se errar, vai ter suporte pra corrigir, isso te traria mais tranquilidade?",
        response: "Essa dúvida é válida — e prevista. O processo aqui é construído com acompanhamento contínuo. Mesmo que você erre, a gente ajusta junto. Não tem quebra, não tem abandono. É passo a passo, com segurança."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Se soubesse que vai ter estrutura e acompanhamento constantes, isso traria mais confiança?",
        response: "Você vai ter estrutura, segurança e presença em cada passo. Não é mágica, é constância. E isso a gente cuida junto — com calma, sem te deixar sozinho(a). O processo foi feito pra sustentar, não pra pressionar."
      }
    ]
  },
  C: {
    label: "🟦 Perfil Conforme",
    approach: "🎯 Traga lógica, processo e prova social",
    trigger: "🔥 Dados, método validado, clareza técnica",
    script: {
      objetivo: {
        caracteristicas: "Pessoa analítica, lógica, objetiva, exigente e crítica.",
        busca: "dados concretos, processo validado, prova técnica, autonomia com segurança",
        evita: "exageros, emoções exageradas, pressão, informação vaga",
        foco: "Análise e validação baseada em dados"
      },
      abertura: {
        titulo: "ABERTURA CLARA E OBJETIVA",
        script: "Olá [Nome], tudo bem? Obrigado por estar aqui. Meu objetivo com essa conversa é entender o seu cenário atual e, com base em dados e evidências, te apresentar uma solução, se fizer sentido. Posso conduzir dessa forma? Você tem um tempo reservado para essa conversa? Assim posso respeitar seu planejamento.",
        gatilhos: "Autonomia, lógica, clareza, respeito ao tempo"
      },
      spin: {
        situacao: {
          titulo: "PERGUNTAS DE SITUAÇÃO (SPIN: S)",
          objetivo: "compreender o funcionamento atual com foco em fatos, processos e números",
          perguntas: [
            "Como está estruturada sua rotina de trabalho hoje? Você tem processos bem definidos?",
            "Atualmente, como você mede o desempenho do seu negócio? Há métricas que acompanha de forma regular?",
            "O que está funcionando dentro das expectativas e o que tem ficado aquém?"
          ],
          gatilhos: "Racionalidade, processo, métricas"
        },
        problema: {
          titulo: "PERGUNTAS DE PROBLEMA (SPIN: P)",
          objetivo: "identificar os pontos críticos e falhas de processo com clareza e método",
          perguntas: [
            "Quais pontos você identificou como gargalos operacionais ou estratégicos?",
            "Você já implementou alguma solução? Qual foi o critério de escolha e qual foi o resultado mensurável?",
            "Quais são hoje os maiores riscos ou vulnerabilidades que você identifica no seu processo?"
          ],
          gatilhos: "Lógica, controle, melhoria contínua"
        },
        implicacao: {
          titulo: "PERGUNTAS DE IMPLICAÇÃO (SPIN: I)",
          objetivo: "evidenciar com precisão os impactos negativos da situação atual",
          perguntas: [
            "Se esses pontos permanecerem sem ajustes, quais prejuízos você projeta nos próximos meses?",
            "Essas falhas podem comprometer indicadores como lucratividade, produtividade ou previsibilidade?",
            "Você já analisou o impacto financeiro da ineficiência nesses pontos?"
          ],
          gatilhos: "Prevenção, consequência lógica, risco calculado"
        },
        necessidade: {
          titulo: "PERGUNTAS DE NECESSIDADE DE SOLUÇÃO (SPIN: N)",
          objetivo: "despertar o desejo por uma solução técnica, embasada e mensurável",
          perguntas: [
            "Se fosse possível ter um plano estruturado com critérios objetivos, você gostaria de avaliar?",
            "Se eu te apresentar uma solução validada, com dados, benchmarks e estudos de caso semelhantes ao seu, faria sentido analisar juntos?"
          ],
          gatilhos: "Validação, lógica, método, benchmark"
        }
      },
      apresentacao: {
        titulo: "APRESENTAÇÃO DO MÉTODO",
        script: "Pelo que você descreveu, o cenário exige uma solução com foco em eficiência, estrutura e resultado mensurável. O método que aplicamos é baseado em dados, possui etapas validadas e já foi utilizado com perfis similares ao seu, com melhoria comprovada em [exemplo técnico].",
        gatilhos: "Comparação técnica, prova social com lógica, benchmarks"
      },
      chamada: {
        titulo: "CHAMADA PRA AÇÃO",
        script: "Queremos seguir com você dentro de um plano baseado em diagnóstico, e não achismo. Se quiser, posso te mostrar agora a estrutura completa e as etapas seguintes."
      },
      encaminhamento: {
        titulo: "ENCAMINHAMENTO (FECHAMENTO PARCIAL)",
        script: "Podemos seguir com o próximo passo e te enviar o detalhamento técnico do processo para análise com calma. Você prefere isso por e-mail ou quer que eu te apresente por aqui mesmo?"
      }
    },
    objections: [
      {
        title: "❌ Já tentei de tudo e nada funciona",
        question: "Você conseguiria me detalhar o que tentou antes, pra eu entender onde exatamente falhou?",
        response: "Faz sentido essa dúvida. A maioria das abordagens não parte de dados nem se adapta ao seu perfil. Tenho um comparativo com os principais erros que levam à frustração e o porquê esse método tem taxa de resultado acima da média. Posso te mostrar com clareza."
      },
      {
        title: "❌ Mas será que isso serve pra mim?",
        question: "Quer que eu te mostre casos reais de perfis como o seu que aplicaram e tiveram resultado mensurável?",
        response: "Entendo sua dúvida. Posso te mostrar análises de pessoas com o mesmo perfil — inclusive como aplicaram o método, os ajustes feitos e os resultados exatos. Isso te dá clareza pra decidir com confiança, sem achismo."
      },
      {
        title: "❌ Quanto tempo leva pra dar resultado?",
        question: "Quer que eu te mostre um cronograma médio com as etapas e o tempo de impacto por perfil?",
        response: "Posso te apresentar um cronograma baseado em dados reais, com variação por perfil comportamental. Tem gente que vê impacto em 2 semanas, outros em 45 dias — tudo depende da aplicação. E temos como monitorar juntos."
      },
      {
        title: "❌ Eu não tenho dinheiro",
        question: "Quer que eu te mostre uma simulação de ROI com projeção de tempo e comparativo de investimento?",
        response: "Faz sentido querer clareza. Posso te mostrar números reais de retorno, com projeções e formas inteligentes de parcelamento. Assim, você toma sua decisão com base em lógica, não pressão."
      },
      {
        title: "❌ Não tenho tempo pra isso agora",
        question: "Quer que eu te mostre um cronograma prático com carga horária e resultados por etapa?",
        response: "Entendo sua preocupação. Posso te apresentar o cronograma real do processo, com estimativa por etapa, tempo médio de aplicação e como otimizar sua agenda. Assim você decide com clareza e segurança."
      },
      {
        title: "❌ Preciso conversar com meu parceiro(a) antes",
        question: "Quer que eu te envie um documento com os principais pontos, dados e condições pra você apresentar com clareza?",
        response: "Sem problema. Tenho um material completo com todos os dados, benefícios, condições e retorno esperado. Assim, você pode mostrar com lógica e segurança — sem parecer que está 'vendendo a ideia'."
      },
      {
        title: "❌ Não sei se eu vou conseguir",
        question: "Você teria mais confiança se soubesse exatamente o passo a passo e tivesse suporte pra cada fase?",
        response: "Totalmente compreensível. Posso te mostrar o mapa do processo, os módulos, os checkpoints e os recursos de apoio. Você vai saber o que fazer, quando e como — com base em dados reais. Assim, você segue com precisão."
      },
      {
        title: "❌ E se eu começar e não der certo?",
        question: "Quer que eu te mostre o plano de contingência e a taxa de sucesso do processo?",
        response: "Isso é totalmente compreensível. Posso te mostrar os dados de taxa de sucesso, os checkpoints, e os ajustes que fazemos se algo não sair como o previsto. Não é tentativa — é processo validado, com plano alternativo."
      },
      {
        title: "❌ Você me garante que vai funcionar?",
        question: "Quer que eu te apresente os dados de aplicação, taxa de sucesso e os fatores que garantem a eficácia do método?",
        response: "Posso te mostrar dados, estudos de caso, taxa de aplicação real e o modelo completo do processo. Não é promessa — é consequência de um método testado, estruturado e com suporte pra cada fase."
      }
    ]
  }
};

export default function CXconversão() {
  const [selected, setSelected] = useState([]);
  const [expandedProfiles, setExpandedProfiles] = useState([]);
  const [expandedObjections, setExpandedObjections] = useState({});
  const [expandedScripts, setExpandedScripts] = useState({});
  const [viewMode, setViewMode] = useState({}); // 'objections' or 'scripts'

  const handleCheck = (label, profile) => {
    const exists = selected.find((s) => s.label === label);
    setSelected(exists ? selected.filter((s) => s.label !== label) : [...selected, { label, profile }]);
  };

  const toggleExpand = (profile) => {
    setExpandedProfiles((prev) =>
      prev.includes(profile) ? prev.filter((p) => p !== profile) : [...prev, profile]
    );
    // Set default view mode to objections when first expanding
    if (!expandedProfiles.includes(profile) && !viewMode[profile]) {
      setViewMode(prev => ({ ...prev, [profile]: 'objections' }));
    }
  };

  const toggleViewMode = (profile, mode) => {
    setViewMode(prev => ({ ...prev, [profile]: mode }));
  };

  const toggleObjection = (profile, index) => {
    const key = `${profile}-${index}`;
    setExpandedObjections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleScript = (profile, section) => {
    const key = `${profile}-${section}`;
    setExpandedScripts(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const profileCount = selected.reduce((acc, cur) => {
    acc[cur.profile] = (acc[cur.profile] || 0) + 1;
    return acc;
  }, {});

  const sortedProfiles = Object.keys(profileCount).sort((a, b) => profileCount[b] - profileCount[a]);

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem',
      backgroundColor: '#0c121c',
      color: 'white',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      minHeight: '100vh'
    }}>
      <div style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        marginBottom: '0.5rem',
        color: '#d2bc8f'
      }}>
        CXconversão
      </div>
      <p style={{
        textAlign: 'center',
        color: '#888',
        fontSize: '1.2rem',
        marginBottom: '2rem'
      }}>
        Radar Comportamental em Calls 1:1
      </p>

      {/* Marcadores de Observação */}
      <div style={{
        background: '#1a2332',
        border: '1px solid #333',
        borderRadius: '10px',
        padding: '1.5rem',
        marginBottom: '1.5rem',
        transition: 'all 0.3s ease'
      }}>
        <h2 style={{ color: '#d2bc8f' }}>Marque os sinais observados durante a call:</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '0.5rem',
          marginTop: '1rem'
        }}>
          {markers.map((item, index) => (
            <label key={index} style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.5rem',
              borderRadius: '6px',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease'
            }}>
              <input
                type="checkbox"
                onChange={() => handleCheck(item.label, item.profile)}
                checked={selected.some((s) => s.label === item.label)}
                style={{
                  width: '18px',
                  height: '18px',
                  marginRight: '0.75rem',
                  accentColor: '#d2bc8f'
                }}
              />
              {item.label}
            </label>
          ))}
        </div>
      </div>

      {/* Análise de Perfis */}
      {sortedProfiles.length > 0 && (
        <div>
          <h2 style={{textAlign: 'center', marginBottom: '2rem'}}>
            🎯 Análise de Perfil Comportamental
          </h2>
          
          {sortedProfiles.map((profileKey) => {
            const suggestion = suggestions[profileKey];
            const count = profileCount[profileKey];
            
            return (
              <div key={profileKey} style={{
                background: '#1a2332',
                border: '1px solid #333',
                borderLeft: profileKey === 'D' ? '4px solid #ff6b6b' :
                           profileKey === 'I' ? '4px solid #ffd43b' :
                           profileKey === 'S' ? '4px solid #51cf66' :
                           '4px solid #339af0',
                borderRadius: '10px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ color: '#d2bc8f', margin: '0 0 0.5rem 0' }}>
                      {suggestion.label} ({count} indicadores)
                    </h2>
                    <p>{suggestion.approach}</p>
                    <p>{suggestion.trigger}</p>
                  </div>
                  <div style={{display: 'flex', gap: '0.5rem', flexDirection: 'column'}}>
                    <button onClick={() => toggleExpand(profileKey)} style={{
                      background: '#d2bc8f',
                      color: '#0c121c',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      whiteSpace: 'nowrap'
                    }}>
                      {expandedProfiles.includes(profileKey) ? 'Ocultar Conteúdo' : 'Ver Conteúdo'}
                    </button>
                  </div>
                </div>
                
                {expandedProfiles.includes(profileKey) && (
                  <div style={{marginTop: '1.5rem'}}>
                    {/* Botões para alternar entre Objeções e Scripts */}
                    <div style={{display: 'flex', gap: '1rem', marginBottom: '1.5rem'}}>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'objections')}
                        style={{
                          background: viewMode[profileKey] === 'objections' || !viewMode[profileKey] ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'objections' || !viewMode[profileKey] ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        💬 Objeções
                      </button>
                      <button 
                        onClick={() => toggleViewMode(profileKey, 'scripts')}
                        style={{
                          background: viewMode[profileKey] === 'scripts' ? '#d2bc8f' : '#666',
                          color: viewMode[profileKey] === 'scripts' ? '#0c121c' : 'white',
                          border: 'none',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '8px',
                          fontWeight: 'bold',
                          cursor: 'pointer',
                          transition: 'all 0.3s ease'
                        }}
                      >
                        📋 Script de Conexão
                      </button>
                    </div>

                    {/* Seção de Objeções */}
                    {(viewMode[profileKey] === 'objections' || !viewMode[profileKey]) && (
                      <div>
                        <h3>💬 Objeções e Respostas Calibradas:</h3>
                        {suggestion.objections.map((objection, index) => (
                          <div key={index} style={{
                            background: '#2a3441',
                            border: '1px solid #444',
                            borderRadius: '8px',
                            padding: '1rem',
                            marginBottom: '1rem'
                          }}>
                            <div 
                              onClick={() => toggleObjection(profileKey, index)}
                              style={{
                                cursor: 'pointer', 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center',
                                color: '#ff6b6b',
                                fontWeight: 'bold',
                                marginBottom: '0.5rem'
                              }}
                            >
                              <span>{objection.title}</span>
                              <span>{expandedObjections[`${profileKey}-${index}`] ? '▼' : '▶'}</span>
                            </div>
                            
                            {expandedObjections[`${profileKey}-${index}`] && (
                              <div style={{marginTop: '1rem'}}>
                                <div style={{
                                  background: '#1a2332',
                                  borderLeft: '4px solid #4dabf7',
                                  padding: '0.75rem',
                                  margin: '0.5rem 0',
                                  borderRadius: '0 6px 6px 0'
                                }}>
                                  <div style={{ color: '#4dabf7', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    💬 Pergunta Calibrada:
                                  </div>
                                  <em>"{objection.question}"</em>
                                </div>
                                <div style={{
                                  background: '#1a2332',
                                  borderLeft: '4px solid #51cf66',
                                  padding: '0.75rem',
                                  margin: '0.5rem 0',
                                  borderRadius: '0 6px 6px 0'
                                }}>
                                  <div style={{ color: '#51cf66', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                                    💡 Resposta Adaptada:
                                  </div>
                                  "{objection.response}"
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Seção de Scripts */}
                    {viewMode[profileKey] === 'scripts' && (
                      <div>
                        <h3>📋 Script de Conexão e Diagnóstico:</h3>
                        
                        {/* Objetivo do Perfil */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'objetivo')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🎯 OBJETIVO DO PERFIL</strong></span>
                            <span>{expandedScripts[`${profileKey}-objetivo`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-objetivo`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Características:</strong> {suggestion.script.objetivo.caracteristicas}</p>
                              <p><strong>Busca:</strong> {suggestion.script.objetivo.busca}</p>
                              <p><strong>Evita:</strong> {suggestion.script.objetivo.evita}</p>
                              <p><strong>Foco:</strong> {suggestion.script.objetivo.foco}</p>
                            </div>
                          )}
                        </div>

                        {/* Abertura */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'abertura')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🚀 {suggestion.script.abertura.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-abertura`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-abertura`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px', marginBottom: '1rem'}}>
                                <strong>Script:</strong><br />
                                <em>"{suggestion.script.abertura.script}"</em>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.abertura.gatilhos}</p>
                              {suggestion.script.abertura.tecnica && (
                                <p><strong>🧠 Técnica:</strong> {suggestion.script.abertura.tecnica}</p>
                              )}
                            </div>
                          )}
                        </div>

                        {/* SPIN - Situação */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'situacao')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>📊 {suggestion.script.spin.situacao.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-situacao`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-situacao`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Objetivo:</strong> {suggestion.script.spin.situacao.objetivo}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Perguntas:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.script.spin.situacao.perguntas.map((pergunta, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      <em>"{pergunta}"</em>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.spin.situacao.gatilhos}</p>
                            </div>
                          )}
                        </div>

                        {/* SPIN - Problema */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'problema')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>❗ {suggestion.script.spin.problema.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-problema`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-problema`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Objetivo:</strong> {suggestion.script.spin.problema.objetivo}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Perguntas:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.script.spin.problema.perguntas.map((pergunta, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      <em>"{pergunta}"</em>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.spin.problema.gatilhos}</p>
                            </div>
                          )}
                        </div>

                        {/* SPIN - Implicação */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'implicacao')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>⚠️ {suggestion.script.spin.implicacao.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-implicacao`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-implicacao`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Objetivo:</strong> {suggestion.script.spin.implicacao.objetivo}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Perguntas:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.script.spin.implicacao.perguntas.map((pergunta, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      <em>"{pergunta}"</em>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.spin.implicacao.gatilhos}</p>
                            </div>
                          )}
                        </div>

                        {/* SPIN - Necessidade */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'necessidade')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>✅ {suggestion.script.spin.necessidade.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-necessidade`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-necessidade`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <p><strong>Objetivo:</strong> {suggestion.script.spin.necessidade.objetivo}</p>
                              <div style={{marginTop: '1rem'}}>
                                <strong>Perguntas:</strong>
                                <ul style={{marginTop: '0.5rem'}}>
                                  {suggestion.script.spin.necessidade.perguntas.map((pergunta, idx) => (
                                    <li key={idx} style={{marginBottom: '0.5rem'}}>
                                      <em>"{pergunta}"</em>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.spin.necessidade.gatilhos}</p>
                            </div>
                          )}
                        </div>

                        {/* Apresentação do Método */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'apresentacao')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>💡 {suggestion.script.apresentacao.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-apresentacao`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-apresentacao`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px', marginBottom: '1rem'}}>
                                <strong>Script:</strong><br />
                                <em>"{suggestion.script.apresentacao.script}"</em>
                              </div>
                              <p><strong>🎯 Gatilhos:</strong> {suggestion.script.apresentacao.gatilhos}</p>
                            </div>
                          )}
                        </div>

                        {/* Chamada para Ação */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'chamada')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🎯 {suggestion.script.chamada.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-chamada`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-chamada`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px'}}>
                                <strong>Script:</strong><br />
                                <em>"{suggestion.script.chamada.script}"</em>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Encaminhamento */}
                        <div style={{
                          background: '#1a2332',
                          border: '1px solid #444',
                          borderRadius: '8px',
                          padding: '1rem',
                          marginBottom: '1rem'
                        }}>
                          <div 
                            onClick={() => toggleScript(profileKey, 'encaminhamento')}
                            style={{
                              cursor: 'pointer', 
                              display: 'flex', 
                              justifyContent: 'space-between', 
                              alignItems: 'center',
                              color: '#d2bc8f',
                              fontWeight: 'bold',
                              marginBottom: '0.5rem'
                            }}
                          >
                            <span><strong>🔄 {suggestion.script.encaminhamento.titulo}</strong></span>
                            <span>{expandedScripts[`${profileKey}-encaminhamento`] ? '▼' : '▶'}</span>
                          </div>
                          
                          {expandedScripts[`${profileKey}-encaminhamento`] && (
                            <div style={{marginTop: '1rem', padding: '1rem', background: '#2a3441', borderRadius: '8px'}}>
                              <div style={{background: '#1a2332', padding: '1rem', borderRadius: '6px'}}>
                                <strong>Script:</strong><br />
                                <em>"{suggestion.script.encaminhamento.script}"</em>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Estado inicial */}
      {sortedProfiles.length === 0 && (
        <div style={{
          textAlign: 'center',
          padding: '3rem',
          color: '#888',
          background: '#1a2332',
          borderRadius: '10px',
          border: '2px dashed #444'
        }}>
          <h2>Análise em Tempo Real</h2>
          <p>Marque os sinais comportamentais observados para receber as estratégias de conversão personalizadas.</p>
        </div>
      )}

      {/* Rodapé */}
      <div style={{marginTop: '2rem', textAlign: 'center'}}>
        <p style={{color: '#888', fontSize: '0.9rem'}}>
          CXconversão - Sistema de Análise Comportamental para Conversão em Calls
        </p>
      </div>
    </div>
  );
}
