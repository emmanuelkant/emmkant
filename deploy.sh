echo 'Creating a new hugo site'
hugo -t ananke
echo 'Creating new site process successful'
echo 'Push new site to Github'
git add . && git commit -m "Creating New Release" && git push origin master