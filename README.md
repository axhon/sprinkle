# Sprinkle

Tool built on top of [Ripgrep](https://github.com/BurntSushi/ripgrep) that

- takes in a ripgrep compatible pattern
- takes in a ripgrep compatible location
- optionally, takes in a ripgrep compatible `-t` flag denoting the type of file(s) to search

and outputs

- the filename where the match was found
- the line the match was found
- if a capture group was provided in the pattern, the contents of the capture group
- in the format `path/to/filename:9:captured`
  - where the `path/to/filename` is a relative path
  - where the `9` represents the line number
  - where `captured` is an example of a captured value

# Installation

This project depends on Ripgrep being installed on the machine. See [this](https://github.com/BurntSushi/ripgrep#installation) guide to install ripgrep.

To compile this tool, install [Deno](https://deno.land/manual@v1.36.0/getting_started/installation).
Then, run the command `deno task compile` to build the binary. You will then be able to run the
executable from your terminal by targeting the `./bin/sprinkle` binary.
