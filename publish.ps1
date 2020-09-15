Set-Location ./docs
Remove-Item index.html
Remove-Item 404.html
Remove-Item -r assets,catovis,pg,column,tag,pict
Set-Location ../
Copy-Item -r ./output/* ./docs/
Write-Host "Publish files are prepared. Now to git push"