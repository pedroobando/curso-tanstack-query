FROM node:22-alpine

# Set working directory
RUN mkdir -p /var/www/fake
WORKDIR /var/www/fake


# Copiar el directorio y su contenido
COPY . ./var/www/fake
COPY package.json db.json db-original.json /var/www/fake/

# Instalar dependencias
# Instalar las dependencias usando pnpm
# RUN npm install -g pnpm
RUN npm install

# RUN yarn install --prod
# RUN yarn build


# Dar permiso para ejecutar la applicación
RUN adduser --disabled-password rutauser
RUN chown -R rutauser:rutauser /var/www/fake
USER rutauser

# Limpiar el caché
RUN npm cache clean --force

# Construir la aplicación NestJS
# RUN pnpm run build

# Exponer el puerto en el que la aplicación va a correr
EXPOSE 3100


# Comando para ejecutar la aplicación
CMD ["npm", "run", "start"]


