# About
This is the repository for [RealKotlin.com](https://www.realkotlin.com)

## Contact
- [Twitter](https://twitter.com/marcos_placona)
- [Github](https://github.com/mplacona)
- [Blog](https://www.placona.co.uk)

## Running with Docker
Dependencies can be a pain, but luckily Docker makes it way easier to run. From the folder you've cloned the project run the following terminal command providing you have Docker already installed:

```
export JEKYLL_VERSION=3.7.3 \
  docker run --rm \
  --volume="$PWD:/srv/jekyll" \
  -p 4003:4003 \
  -it jekyll/jekyll:$JEKYLL_VERSION \
  jekyll serve --watch --incremental --verbose --trace
```
 
Now just go to [http://127.0.0.1:4003](http://127.0.0.1:4003).

## Running Locally - AKA the hard way
1. Clone this repository.
2. [Install Jekyll](https://jekyllrb.com/docs/installation/) if you don't already have it.
3. Run the project from your terminal by issuing `jekyll serve --watch --incremental --verbose --trace`
4. Head to [http://localhost:4003](http://localhost:4003)

## Contributing
I would ❤️  some contributions from other authors here. Just follow these steps

Posts are automatically generated after each example in [RealKotlinTips](https://github.com/mplacona/RealKotlinTips), which then gets converted into markdown using the metadata added in JavaDocs style at the top of each file.

Check out the [contribution section](https://github.com/mplacona/RealKotlinTips#contributing) in that project to learn more.