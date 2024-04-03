echo off
cls

start cmd /k backend.bat
start cmd /k frontend.bat

start http://localhost:5173