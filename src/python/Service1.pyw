import sys
import pyautogui
from time import sleep
from tendo import singleton
import os

print(os.getpid())
sys.stdout.flush()
me = singleton.SingleInstance()
while True:
    pyautogui.click(x=3161, y=739)
    sleep(1)
    sleep(15*60)
