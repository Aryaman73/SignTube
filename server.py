from flask import Flask
import subprocess
# import testPythonScriptNoFunc

# Extra imports for python script
import mediapipe as mp
import cv2
import numpy as np
import os

import matplotlib
matplotlib.use('Agg')
from matplotlib import pyplot as plt

import time
from cv2 import VideoCapture
from cv2 import waitKey
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.callbacks import TensorBoard

app = Flask(__name__)

# Routes
# @app.route("/members")
# def members():
#     return {"members": ["lol"]}

# @app.route('/runme')
# def runme():
#     file = open(r'testPythonScript.py', 'r').read()
#     return exec(file)

@app.route('/run2')
def run2():
    subprocess.run(['python3', 'testPythonScriptNoFunc.py'])

if __name__ == "__main__":
    app.run(debug=True)