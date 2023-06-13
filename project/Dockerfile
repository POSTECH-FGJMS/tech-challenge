FROM node:18-alpine

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o package.json e o package-lock.json (se você estiver usando npm)
COPY package.json package-lock.json ./

# Instalar as dependências
RUN npm install

# Copiar o código da aplicação para o diretório de trabalho
COPY . .

# Compilar o código TypeScript para JavaScript
RUN npm run build

# Expor a porta em que a aplicação vai rodar
EXPOSE 8080

# Comando para iniciar a aplicação
CMD ["node", "dist/index.js"]