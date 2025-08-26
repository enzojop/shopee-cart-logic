# 🛒 Carrinho Shopee

## 📋 Descrição
Este projeto implementa a lógica por trás do carrinho de compras da Shopee, demonstrando conceitos avançados de JavaScript moderno e boas práticas de organização de código.

## 🎯 OBJETIVO
Criar um sistema de carrinho de compras funcional que simula o comportamento da plataforma Shopee, incluindo:
- Adição e remoção de itens
- Cálculo automático de subtotais
- Gerenciamento de quantidades
- Cálculo do valor total do carrinho

## 🚀 Funcionalidades Implementadas

### ✨ Gerenciamento de Itens
- **Criação de itens**: Cada item possui nome, preço, quantidade e subtotal calculado automaticamente
- **Estrutura do item**: `{ name, price, quantity, subtotal }`

### 🛍️ Operações do Carrinho
- **Adicionar item**: `addItemToCart(cart, item)`
- **Remover item completo**: `removeItemFromCart(cart, item)`
- **Remover quantidade específica**: `removeOneItemFromCart(cart, item)`
- **Calcular valor total**: `calculateTotalCartValue(cart)`

## 🏗️ Arquitetura e Organização

### 📁 Estrutura de Pastas
```
src/
├── index.js          # Arquivo principal com demonstração das funcionalidades
└── services/         # Pasta contendo a regra de negócio
    ├── cart.js       # Serviços relacionados ao carrinho
    └── item.js       # Serviços relacionados aos itens
```

### 🔧 Pasta Services
A pasta `services` foi criada seguindo boas práticas de organização, onde ficam:
- **Regras de negócio** do projeto
- **Funções exportáveis** para reutilização
- **Separação de responsabilidades** entre diferentes domínios

## 📚 Aprendizados e Tecnologias

### 🔌 ECMAScript Modules (ESM)
Este projeto utiliza **ES Modules**, a forma moderna de trabalhar com módulos em JavaScript:
- **Importação**: `import { createItem } from "./services/item.js"`
- **Exportação**: `export function addItemToCart(userCart, item)`
- **Importação com namespace**: `import * as cartServices from "./services/cart.js"`

### 📖 Documentação Consultada
Para implementar corretamente os ES Modules, foi consultada a documentação oficial do Node.js:
- **[Node.js Modules Documentation](https://nodejs.org/api/modules.html)** - Referência oficial sobre módulos

### 🧩 Modularização
O projeto demonstra excelente **modularização**:
- **Separação de responsabilidades**: Cada arquivo tem uma função específica
- **Reutilização de código**: Funções podem ser importadas em diferentes partes
- **Manutenibilidade**: Código organizado e fácil de manter

## 🚀 Como Executar

### Pré-requisitos
- Node.js versão 14+ (para suporte completo a ES Modules)

### Instalação
```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre na pasta do projeto
cd carrinho_shopee

# Execute o projeto
node src/index.js
```

### Configuração
O projeto já está configurado com `"type": "module"` no `package.json` para habilitar ES Modules.

## 💡 Exemplo de Uso

```javascript
// Criar itens
const item1 = await createItem('Produto A', 10.0, 1);
const item2 = await createItem('Produto B', 20.0, 5);

// Adicionar ao carrinho
await cartServices.addItemToCart(cart, item1);
await cartServices.addItemToCart(cart, item2);

// Calcular total
const total = await cartServices.calculateTotalCartValue(cart);
```

## 🎓 Conhecimentos Aplicados

- ✅ **ES Modules** - Importação e exportação moderna
- ✅ **Async/Await** - Programação assíncrona
- ✅ **Array Methods** - `push()`, `splice()`, `indexOf()`, `reduce()`
- ✅ **Object Destructuring** - Desestruturação de objetos
- ✅ **Arrow Functions** - Funções modernas do ES6+
- ✅ **Template Literals** - Interpolação de strings

## 👨‍💻 Autor
**Enzo** - Desenvolvedor 


---

*Projeto desenvolvido para demonstrar conhecimentos em JavaScript moderno, ES Modules e organização de código.*