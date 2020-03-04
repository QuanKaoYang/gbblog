cd ./docs
rm index.html
rm 404.html
rm -r assets,catovis,pg,column,tag,pict
cd ../
cp -r ./output/* ./docs/
echo "Publish files are prepared. Now to git push"