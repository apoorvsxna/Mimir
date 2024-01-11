@echo off
title Stop Node.js Server

:: Set the port on which your Node.js server is running
set PORT=3000

:: Find the process ID (PID) of the Node.js server running on the specified port
for /f "tokens=5" %%a in ('netstat -aon ^| find ":%PORT%" ^| find "LISTENING"') do set PID=%%a

:: Check if a process ID was found
if not "%PID%"=="" (
    echo Stopping Node.js server on port %PORT%...
    taskkill /F /PID %PID%
    echo Node.js server stopped successfully.
) else (
    echo No Node.js server found running on port %PORT%.
)