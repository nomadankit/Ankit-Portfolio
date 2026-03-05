@echo off
git add .
git commit -m "Update: %date% %time%"
git push origin main
echo ---
echo [KING COMMAND SUCCESSFUL]
echo Your Antigravity Site is now updating on Vercel.
pause