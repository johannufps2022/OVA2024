from flask import Flask, render_template, request, redirect, url_for, flash
import psycopg2
from flask_login import LoginManager, UserMixin, login_user, login_required, logout_user, current_user
import os

app = Flask(__name__)

# Configurar el secreto de la sesión
app.secret_key = os.urandom(24)

# Configurar login manager
login_manager = LoginManager()
login_manager.init_app(app)

# Configuración de la base de datos PostgreSQL
DB_HOST = "localhost" 
DB_NAME = "OVA"  
DB_USER = "postgres"  
DB_PASS = "jaNUary2002"  

def get_db_connection():
    conn = psycopg2.connect(host=DB_HOST, database=DB_NAME, user=DB_USER, password=DB_PASS)
    return conn

# Clase para el usuario (Flask-Login)
class User(UserMixin):
    def __init__(self, id, codigo, nombre, correo):
        self.id = id
        self.codigo = codigo
        self.nombre = nombre
        self.correo = correo

# Cargar el usuario desde la base de datos por su ID
@login_manager.user_loader
def load_user(user_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM usuario WHERE codigo = %s", (user_id,))
    user = cursor.fetchone()
    conn.close()
    
    if user:
        return User(id=user[0], codigo=user[0], nombre=user[1], correo=user[2]) 
    return None

@app.route('/')
def login():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM usuario;') 
    posts = cursor.fetchall()
    cursor.close()
    conn.close()
    return render_template('login.html')

# Logout
@app.route('/salir')
@login_required
def salir():
    logout_user()  # Cierra la sesión del usuario actual.
    return render_template('login.html') 

# Página de inicio
@app.route('/inicio', methods=['GET', 'POST'])
def inicio():
    if request.method == 'POST':
        correo = request.form['email']
        contrasena = request.form['password']
        
        # Conectar a la base de datos y verificar las credenciales
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM usuario WHERE email = %s", (correo,))
        user = cursor.fetchone()
        conn.close()
        
        if user and user[3] == contrasena:  
            user_obj = User(id=user[0], codigo=user[0], nombre=user[1], correo=user[2])
            login_user(user_obj)
            return render_template('home.html')
        else:
            flash('Correo o contraseña incorrectos')
    
    return render_template('login.html')

# registrar usuario
@app.route('/add', methods=['POST'])
def add_post():
    if request.method == 'POST':
        # Recoger datos del formulario
        name = request.form['name']
        codigo = request.form['codigo']
        email = request.form['email']
        password = request.form['password']
        
        # Conexión a la base de datos
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute('INSERT INTO usuario (codigo, nombre, email, contra) VALUES (%s, %s, %s, %s);', (codigo, name,email, password))
        conn.commit()
        cursor.close()
        conn.close()

        return render_template('login.html')


@app.route('/registro')
def registro():
    return render_template('registro.html')

@app.route('/home')
def home():
    return render_template('home.html')

@app.route('/usuario')
def usuario():
    return render_template('usuario.html', nombre=current_user.nombre, correo=current_user.correo, codigo=current_user.codigo)

@app.route('/nivel1_1')
def nivel1_1():
    return render_template('nivel1_1.html')

@app.route('/nivel1_2')
def nivel1_2():
    return render_template('nivel1_2.html')

@app.route('/nivel1_3')
def nivel1_3():
    return render_template('nivel1_3.html')

@app.route('/nivel1_4')
def nivel1_4():
    return render_template('nivel1_4.html')

@app.route('/nivel1_5')
def nivel1_5():
    return render_template('nivel1_5.html')

@app.route('/nivel1_6')
def nivel1_6():
    return render_template('nivel1_6.html')

@app.route('/nivel1_7')
def nivel1_7():
    return render_template('nivel1_7.html')

@app.route('/nivel1_8')
def nivel1_8():
    return render_template('nivel1_8.html')

@app.route('/nivel1_9')
def nivel1_9():
    return render_template('nivel1_9.html')

@app.route('/examen_1')
def examen_1():
    return render_template('examen_nivel_1.html')

if __name__ == '__main__':
    app.run(debug=True)
