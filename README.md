The repository cans sourcecode for [Droidian Documentation page](https://docs.droidian.org/)

The site has been built using hugo.
The instructions to install hugo can be found [here](https://gohugo.io/getting-started/installing)

# Running the hugo server for development
The hugo server can be started locally using the command:

    $ hugo serve -D

> -D flag is provided used to allow draft pages to be included.

The site is up at [http://localhost:1313](http://localhost:1313) by default

## Adding new blog page
A new porting doc page can be added using the CLI using following command :

    $ hugo new porting-guide/<name of the doc>.md

example:

    $ hugo new porting-guide/kernel-compilation.md

