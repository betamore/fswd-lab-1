
**Purpose:** To run `node` and `npm` on the command line, learn about `git` and TDD, write JavaScript code, and write tests for that code.

**Goal:** By the end of the lab, you will have downloaded the initial project from GitHub with the `git` command, run `npm` multiple different ways, written JavaScript functions and tests using multiple features of the JavaScript language (`var`, `function`, `if`, `else`, `for`, `return`, arrays, and more), and have at least basic working versions of the FizzBuzz and Fibonacci functions.

# Full Stack Web Development - Lab 1
## Testing, FizzBuzz, and Fibonacci

These are *classic* programming interview questions!

We will start by [cloning the repository][cloning] to your own machine.

> _Huh? Cloning? What's that?_

Cloning is the process where the `git` tool makes a copy of the code from GitHub
on your laptop, including the code's history of changes.

> How do I do that?

To start with, open the `Terminal` application on your laptop. Once you have the
terminal window open, you will need to change directories/folders to where you
will create the copy of the code on your machine.

> Where?

I like to set up a special directory on my machine to hold all my programming
projects (`~/Code`, and `~` is short for your home directory, which is where the
`Terminal` usually starts). Run `mkdir Code` at the prompt (`mkdir` = "Make directory").
After you have done that, run `cd Code` to change the working directory of your
shell (the starting location for any command you run). You can verify that it has
been changed by running the `pwd` (print working directory) command.

Then, in your browser, while looking at the [page for the lab repository](http://github.com/betamore/fswd-lab-1), click the green "Clone or download"
button on the right side, make sure "Clone with HTTPS" is displayed in the title
of the popup (or, click "Use HTTPS" in the upper right if it is not), and click
the button to copy the repository url to your clipboard. Back in your terminal
window where you changed the working directory, type `git ` and then paste that
repository url in and hit the `return` key.

You should see something similar to this:

```shell
$ git clone https://github.com/betamore/fswd-lab-1.git
Cloning into 'fswd-lab-1'...
remote: Counting objects: 136, done.
remote: Compressing objects: 100% (12/12), done.
remote: Total 136 (delta 5), reused 15 (delta 5), pack-reused 118
Receiving objects: 100% (136/136), 52.11 KiB | 1.18 MiB/s, done.
Resolving deltas: 100% (53/53), done.
```

Note that the url for the git repository is simply `<url of github page>.git`.

> Now what?

The `git` tool created the `fswd-lab-1` directory inside the working directory of
your terminal. Use the `cd` command again to change the working directory to
`fswd-lab-1` (Hint: `cd fswd-lab-1`). Once inside the directory, if you installed
the `nvm` tool, run `nvm use`.

### Actually working with the code

1. Run `npm install` to install the node modules for the project, then
   `npm test` to run the tests.
2. Everything passes! Grab yourself a cookie; you're all done.
3. Yeah, I was kidding. You're not done at all!
4. Open up `Visual Studio Code` (or your preferred text editor) and look at the files in the
   code. Tests are in the `test/` directory and the function skeletons are in
   the `lib/` directory.
5. The first cases are implemented and tested (`fizzBuzz(0)` and `fib(0)`).
   Start by writing tests for the next case (1) and expand the function to
   handle it correctly.
6. Then 2, then 3, …

[cloning]: https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository#_git_cloning
