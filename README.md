# API REST - Servicios

Una API REST construida con **Node.js**, **Express** y **MongoDB** para gestionar servicios.


## 🚀 Instalación

### Requisitos Previos
- **Node.js** 
- **npm**
- **MongoDB**
- **Git**

### Pasos

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/zahirRC28/trabajo-crear-api.git
   cd trabajo-crear-api
   ```

2. **Instalar las dependencias**
   ```bash
   npm install -y
   ```

3. **Dependencias principales instaladas:**
   - `express` - Framework web
   - `mongoose` - ODM para MongoDB
   - `dotenv` - Gestión de variables de entorno
   - `daemon` - Reinicio automático del servidor(instalar si no lo tiene global)

---

## 🔧 Variables de Entorno

1. **RENOMBRA archivo `.env.template` en `.env`** 
2. **Configurar las siguientes variables:**
   ```env
   PORT=3000
   DB_URI=mongodb+srv://admin:123456ABC@cluster0.4xuulno.mongodb.net/api-servicios?appName=Cluster0
   ```

### Explicación:
- **PORT** - Puerto donde corre el servidor (default: 3000)
- **DB_URI** - Conexión a MongoDB Atlas o local

---

## 💻 Cómo Levantar el Proyecto Localmente

1. **Asegúrate de tener el archivo `.env` configurado**

2. **Levanta el servidor:**
   ```bash
   npm run dev
   ```

3. **Verifica la conexión:**
   ```
   Servidor activo en 3000
   Conexion con la base de datos exitosa
   ```

4. **El servidor está listo en:**
   ```
   http://localhost:3000
   ```
---

## 📡 Endpoints

### Base URL (Local)
```
PUEDES PROBAR LOS ENDPOINTS EN EL EXPORT QUE TE ADJUNTE EN LA CARPETA POSTMAN
```

## 🌐 Despliegue en Render

```
Aqui tienes el enlace del despliege:
https://trabajo-crear-api.onrender.com/api/v1/servicios

```


**Autor:** zahirRC28  
**Repositorio:** [trabajo-crear-api](https://github.com/zahirRC28/trabajo-crear-api)
