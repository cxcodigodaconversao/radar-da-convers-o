# CXconversão - Radar Comportamental

Sistema de análise comportamental para conversão em calls 1:1 baseado na metodologia DISC.

## ✨ Funcionalidades

- **Radar Comportamental**: 12 indicadores para identificação de perfis DISC
- **Análise em Tempo Real**: Identificação automática dos perfis dominantes
- **Objeções Calibradas**: 36+ respostas personalizadas por perfil comportamental
- **Scripts de Conexão**: Metodologia SPIN completa adaptada por perfil
- **Perguntas Abertas Estratégicas**: 5 perguntas por perfil para quebrar o gelo
- **Social Selling**: Estratégias completas para cada perfil DISC
- **Interface Responsiva**: Funciona perfeitamente em desktop e mobile

## 🎯 Perfis DISC Suportados

- **🟥 Dominante (D)**: Focado em resultados e ROI
- **🟨 Influente (I)**: Conecta com emoção e energia
- **🟩 Estável (S)**: Acolhimento e processo passo a passo
- **🟦 Conforme (C)**: Lógica, dados e validação técnica

## 🚀 Tecnologias

- React 18
- Vite
- CSS moderno
- Netlify (deploy)

## 📋 Instalação e Uso Local

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cxconversao.git
cd cxconversao
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em desenvolvimento:
```bash
npm run dev
```

4. Faça o build para produção:
```bash
npm run build
```

## 🌐 Deploy no Netlify

### Método 1: GitHub + Netlify (Automático)

1. Faça push do código para o GitHub
2. Conecte o repositório no Netlify
3. As configurações do `netlify.toml` são aplicadas automaticamente
4. Deploy automático a cada push

### Método 2: Deploy Manual

1. Execute o build: `npm run build`
2. Faça upload da pasta `dist` no Netlify
3. Configure redirects para SPA se necessário

## 📁 Estrutura do Projeto

```
cxconversao/
├── src/
│   ├── ConvertaVoxApp.jsx    # Componente principal
│   ├── main.jsx              # Entry point
│   └── styles.css            # Estilos globais
├── index.html                # Template HTML
├── package.json              # Dependências
├── vite.config.js           # Configuração do Vite
├── netlify.toml             # Configuração do Netlify
└── README.md                # Este arquivo
```

## 🎨 Como Usar

1. **Marcar Indicadores**: Selecione os sinais comportamentais observados durante a call
2. **Ver Análise**: O sistema identifica automaticamente os perfis DISC dominantes
3. **Escolher Estratégia**: Alterne entre as 4 abas:
   - 💬 **Objeções**: Respostas calibradas para cada objeção comum
   - 📋 **Script de Conexão**: Metodologia SPIN adaptada
   - 🤔 **Perguntas Abertas**: Para quebrar o gelo e criar conexão
   - 📊 **Social Selling**: Estratégias completas para redes sociais
4. **Aplicar Técnicas**: Use as respostas calibradas e metodologia adaptada

## 🔧 Personalização

Para personalizar o sistema:

1. **Adicionar Indicadores**: Edite o array `markers` em `ConvertaVoxApp.jsx`
2. **Modificar Perfis**: Ajuste o objeto `suggestions` com novos scripts/objeções
3. **Alterar Cores**: Modifique as variáveis CSS em `styles.css`
4. **Adicionar Perfis**: Expanda a lógica para novos tipos comportamentais

## 📊 Metodologia

### DISC
- **D** (Dominante): Direto, focado em resultados
- **I** (Influente): Social, otimista, comunicativo  
- **S** (Estável): Paciente, leal, colaborativo
- **C** (Conforme): Analítico, preciso, sistemático

### SPIN Selling
- **S** (Situação): Entender o cenário atual
- **P** (Problema): Identificar dores e obstáculos
- **I** (Implicação): Mostrar consequências da inação
- **N** (Necessidade): Ativar desejo de solução

### Social Selling
- **Estratégia de Aproximação**: Como abordar cada perfil
- **Conteúdo para Engajamento**: Que tipo de posts criar
- **Scripts para DM**: Mensagens personalizadas
- **Timing e Frequência**: Quando e como postar
- **Gatilhos Psicológicos**: O que ativa cada perfil

## 🎯 Novidades da Versão Atual

### ✅ Funcionalidades Implementadas:
- **4 abas completas** por perfil DISC
- **36+ objeções** com perguntas calibradas e respostas adaptadas
- **Scripts SPIN completos** para cada perfil
- **5 perguntas abertas estratégicas** por perfil
- **Social Selling completo** com 5 seções por perfil:
  - Estratégia de Aproximação
  - Conteúdo para Engajamento
  - Scripts para DM
  - Timing e Frequência
  - **Gatilhos Psicológicos** (como solicitado)
- **Interface otimizada** e responsiva

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch para sua feature
3. Fazer commit das mudanças
4. Fazer push para a branch
5. Abrir um Pull Request

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através das issues do GitHub.

---

**CXconversão** - Sistema de Análise Comportamental para Conversão em Calls 1:1

🎯 **Tudo pronto para GitHub + Netlify!**
