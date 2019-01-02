# Shell script to:
# Remove previous build directory
# Copy src into build
# Minify on build up to 3 levels deep

rm -rf ./build/
mkdir ./build/
cp -r ./src/ ./build/

for file in ./build/*.js; do
    uglifyjs "$file" --stats -cm -o "$file"
    echo minified: "$file"
done

for file in ./build/**/*.js; do
    uglifyjs "$file" --stats -cm -o "$file"
    echo minified: "$file"
done

for file in ./build/**/**/*.js; do
    uglifyjs "$file" --stats -cm -o "$file"
    echo minified: "$file"
done

for file in ./build/**/**/**/*.js; do
    uglifyjs "$file" --stats -cm -o "$file"
    echo minified: "$file"
done


# # Before executing this file, run:
# sudo chmod +x minify-js.sh
# npm i -g uglify-js

# # Note: check if the /**/ syntax for recursive subdirectories
# # works in your shell. Tested on zsh.
