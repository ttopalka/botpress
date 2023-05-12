import subprocess

def install_dependencies():
    subprocess.run(['pip', 'install', '-r', 'requirements.txt'])

install_dependencies()
import subprocess

def start_rasa_nlu():
    subprocess.run(['rasa', 'run', '-m', 'path/to/your/model'])

start_rasa_nlu()