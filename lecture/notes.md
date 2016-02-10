`tmux` hide status:

```
<prefix> :set -g status
```


`vim` hide status:

```
:set laststatus=0
```

git:

fork
set up `mark` remote

```bash
git remote add mark https://github.com/megesdal/devleague-prep

git pull mark master

git push origin master
# OR
git push
```

Tree #2

functions part2:

higher order functions
anonymous functions
functions as arguments
extension: recursion



functions as values... aka closure
vars that point to function... aka closure


From ~/code directory

```
$ cd ~/code
$ curl http://github.com/git/git/raw/master/contrib/completion/git-completion.bash -O
$ curl http://github.com/git/git/raw/master/contrib/completion/git-prompt.sh -O
```

https://git-scm.com/book/fr/v2/Git-in-Other-Environments-Git-in-Bash

```
open -a "Sublime Text" ~/.bash_profile
```

Then add...

```
source ~/code/git-completion.bash
source ~/code/git-prompt.sh

export CLICOLOR=1
export GIT_PS1_SHOWDIRTYSTATE=1
export PS1='\[\e[0;37m\]\u@\h \[\e[0;32m\]\w\[\e[0;33m\]$(__git_ps1 " (%s)") \[\e[0m\]\n\$ '
```
