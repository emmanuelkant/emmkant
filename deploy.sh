echo 'Deleting old public folder'
rm -Rf public/
echo 'Deleting process successful'
echo 'Creating a new hugo site'
hugo -t ananke
echo 'Creating new site process successful'
echo 'Push new site to Github'
cd public/ && git add . && git commit -m "Creating Release" && git push origin master