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
    pyautogui.click(x=3341, y=739)
    sleep(1)
    pyautogui.click(x=3667, y=844)
    sleep(1)
    pyautogui.click(x=3097, y=731)
    sleep(5)
    pyautogui.click(x=2901, y=855)
    sleep(1)
    pyautogui.click(x=2901, y=855)
    sleep(15*60)
