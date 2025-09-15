# terminal in ubuntu 

alternate ->  windows : cmd.exe or install wsl or git bash


### 1. `pwd`: Print Working Directory     $pwd
(you can see what folder you're in)


### 2. `cd`: Change Directory
(takes you back or forward where you wanna go/navigate)

    Absolute path (/home/tanishka/Desktop) → starts from / (root of the system). Always the full address.
    Relative path (Desktop/, ../) → starts from where you currently are.

    . (single dot) → current directory
    .. (double dots) → parent directory (one level up)

    (how do we go back?)
    cd ..      #one step back
    cd ../..   #two steps back

    / (slash at start) → root directory
    cd /       # jump to system root
    cd /home/tanishka/Desktop   # absolute path

    ~/ (tilde) → home directory of the current user
    cd ~       # goes to /home/tanishka (Linux/macOS)
    cd ~/Desktop   # Desktop inside home

    - (single dash) → previous working directory
    cd -    # jump back to wherever you were before

    cd Desktop/screenshots
    “From where I am right now, go into the folder named Desktop, and then inside it, go into screenshots.”



### 3. `ls`: Listing all the files and folders in your current folder.  $ls

    ls → list files in current folder

    ls -l → detailed list (permissions, size, date)

    ls -l folder1 → detailed list of folder1 contents

    ls -t → sort by latest modified first

    ls -lt → detailed + sorted by latest modified / shows what was last modified with timestamp

    ls -la -> shows the hidden subdirectories

    ls -R → directoryname shows subdirectory

    ls -lR → detailed recursive listing 

    ls -lRa → detailed recursive list including hidden files

    ls -lr → detailed list in reverse order/ shows directory in reverse order of modification

    ls -s → show file sizes (in blocks)

    ls *.json → list only files ending with .json /shows all the json files if present

    ls Zoo* → list files starting with Zoo/ suggests all directories starting with "zoo"

    ls -lR | grep .json → find all .json files recursively (with details)

    ls .. → list contents of parent folder



### 4. `mkdir`: Create new folder        $ mkdir test 

    <!-- Creating one folder/directory at a time -->
        $ mkdir frontend

        <!-- Creating multiple folder/directory at a time -->
        $ mkdir folder1 folder2 folder3

        <!-- Creating Recursively folder/directory -->
        $ mkdir fullstack/frontend/scripts

    mkdir test && cd test : make test folder and enter test

    `rmdir` folder1 : removes/deletes folder1
    Only works if the directory is completely empty.
    If there are files inside → it throws an error.



### 5. `touch`: Create new empty file     $ touch index.js

    <!-- Creating one file at a time -->
    $ touch newFile.js

    <!-- Creating multiple file at a time -->
    $ touch file1 file2 file3

    <!-- Creating Recursively file -->
    $ touch folder1/folder2/mewFile.txt



### 6. `cat` : view, overwrite, append content

    cat index.js view filecontent
    cat > index.js overwrites
    cat >> index.js appends

    ctrl+d to save



### 7. `vi`: Vim Editor
    $ vi index.txt

    Press `i` for insert mode and write anything in your file

    kendall
    kylie
    la
    lv

    Esc + :q! to exit from Vim Editor without saving the file
    Esc + :wq! to exit from Vim Editor with saving the file



### 8. `mv`: Move the file or folders

    $ mv folder1 folder2
        
    mv folder1 folder2 
    this cli moves folder1 inside folder2 if folder2 already exists
    this cli renames folder1 as folder2 if folder2 does not exist

    mv a.js zk-app/frontend/scripts ----> move a.js inside scripts which is inside frontend which is inside zk-app
    mv style.css zk-app/frontend/css/zk.css ----> move style.css inside css folder of frontend of zk-app and rename into zk.css

    `rm` index.js : removes/deletes file
    rm -rf folderName
    Together, it’s basically a “delete everything in sight” nuke button
    Careful with rm -rf:
    One typo like rm -rf / or rm -rf * → goodbye system
    rm -ri folderName
    (-i = interactive, asks before deleting each file).

    rm README.md : delete README.md
    rm -r frontend : delete frontend folder



### 9. `cp`: Copy the files or folders

    $ cp index.js new-folder  copy and paste index.js inside new1 if new1 folder exists/ if new1 doesnt exist,
                               makes a newfile  named new1 with copied contents of index.js

     $ cp -r folder1 folder2   same incase of folders just add -r
    
    cp -r circuits/test contracts   copy test folder from circuits and paste it in contracts folder
    


### 10. `clear`: Clear the terminal
    $ clear  or  ctrl+k


### 11. `nvm`: Node Version Manager - Using this you can install node.

### 12. `npm`: Node Package Manager

    $ npm install express
    $ npm install array

    Desktop npm or Desktop node -> all modules show up

### 13. `node`: Use to run file.

    $ node index.js    



### 14. `chmod` (Change File Permission): Modify the read, write and execute permission of a file.

    ## There are three options for permission groups available to you in Linux. These are

    `users` (u): these permissions will apply to all users, and as a result, they present the greatest security risk and should be assigned with caution.

    `groups` (g): you can assign a group of users specific permissions, which will only impact users within the group.

    `owners` (o): these permissions will only apply to owners and will not affect other groups.


    ## There are three kinds of file permissions in Linux:

    `Read` (r): Allows a user or group to view a file.

    `Write` (w): Permits the user to write or modify a file or directory.

    `Execute` (x): A user or group with execute permissions can execute a file or view a directory.

    $ `chmod ugo+rwx filename` to give read, write, and execute to everyone.
    $ `chmod -R ugo+rwx foldername` to give read, write, and execute to everyone.

    ## Changing Linux permissions in numeric code

    You may need to know how to change permissions in numeric code in Linux, so to do this you use numbers instead of “r”, “w”, or “x”.

    0 = No Permission
    1 = Execute
    2 = Write
    4 = Read

    => Permission numbers are:
    0 = ---
    1 = --x
    2 = -w-
    3 = -wx
    4 = r-
    5 = r-x
    6 = rw-
    7 = rwx

    => For example:
        `chmod 777 filename/foldername` will give read, write, and execute permissions for everyone.

        `chmod 700 filename/foldername` will give read, write, and execute permissions for the user only.

        `chmod 327 filename/foldername` will give write and execute (3) permission for the user, w (2) for the group, and read, write, and execute for the users.
    
For File -->

    Add execute permission for users -->
    $ chmod u+x index.js

    Add write and execute permission for groups -->
    $ chmod g+wx index.js

    Remove execute permission for users -->
    $ chmod u-x index.js

    Add read, write & execute permission for owners -->
    $ chmod o+rwx index.js

    Add read, write & execute permission for all(users, groups & owners) -->
    $ chmod ugo+rwx index.js
    $ chmod 777 index.js

For Folder/Directory -->

    Add execute permission for users -->
    $ chmod -R u+x folderName

    Add write and execute permission for groups -->
    $ chmod -R g+wx folderName

    Remove execute permission for users -->
    $ chmod -R u-x folderName

    Add read, write & execute permission for owners -->
    $ chmod -R o+rwx folderName

    Add read, write & execute permission for all(users, groups & owners) -->
    $ chmod -R ugo+rwx folderName
    $ chmod -R 777 folderName


### 15. `echo`: Display message on terminal.

    $ echo "Hello, World!"
    $ echo $PATH

### 16. `head`: Show the content from top of the file.

    Bydefault show first 10 rows -->
    $ head index.js

    Show first 20 rows -->
    $ head -20 index.js
    ```

### 17. `tail`: Show the content from bottom of the file.

    Bydefault show last 10 rows -->
    $ tail index.js

    Show last 20 rows -->
    $ tail -20 index.js


### 18. `|` (Pipe Operator): Combine multiple command. `command1 | command2` - Whatever output comes from command1 it flows to command2

    gives 5 rows after 15th rows -> show lines 16 to 20 -->
    $ tail -n +15 index.js | head -5  start from 15th line of index.js and give me next 5 rows


### 19. `wc` (Word Count): Shows numbers of lines, words and characters.

    print numbers of lines, words and characters of index.js file -->
    $ wc index.js

### 20. `grep`: Used for matching operations. Print those line which contains particular characters, words, sentences.

    print all line which contains character 'a' -->
    $ grep "a" index.js

    print all line which contains word 'Hello' -->
    $ grep "Hello" index.js

    print all line which contains sentence 'Hi, Everyone!!' -->
    $ grep "Hi, Everyone!!" index.js

    Print all lines which does not contains kenny -->
    $ grep -v "kenny" index.js

    Print before 5 lines, which line contains kenny -->
    $ grep -B 5 "kenny" data.txt

    Print after 5 lines, which line contains kenny -->
    $ grep -A 5 "kenny" data.txt

    Print before and after 5 lines, which line contains kenny -->
    $ grep -C 5 "kenny" data.txt

    print numbers of lines, words and characters of index.js file which contains word "kenny" -->
    $ grep "kenny" index.js | wc

    only occurence of a parthicular word -->
    $ grep "kenny" index.js | wc -l

    Print Occurence Count -->
    $ grep -c "kenny" index.js

    Print Matched Line -->
    $ grep -h "kenny" index.js

    give me all relating to "kenny" as well/"ignore case" -->
    $ grep -hi "kenny" index.js

    Print matched line data after "ignoring case" with line number -->
    $ grep -hin "kenny" index.js

    Print those line which contains word "kenny", but seperate -->
    $ grep -hinw "kenny" index.js

    Print only the matched Part -->
    $ grep -o "kenny" index.js

    For current directory -->
    $ grep -hir "kenny" index.js


### 21. `history`: History of all command that you ran.
    $ history


### 22. `Bash Scripting`: Using Bash Scripting we can Automate our work. It is a language.

    script.sh -->

    #!/bin/bash
    echo "Hello, World!!"
    mkdir automated_dir
    cd automated_dir && touch newFile.txt


### 23. `bash`: Command to run bash scripting file.

    Run the script.sh file - first it will print "Hello, World", then it will create a folder autemated_dir and after that it will move to automated_dir folder and create newFile.txt inside that folder. -->
    $ bash script.sh


### 24. `grep` is great for pattern matching case but `sed` has its substitution properties which makes it stand out
and `awk` being the most powerful tool in the scripting language - lets you do arithmetic operation, comparison, custom fetching of files, etc
suppose i have a file log.txt which has all the logging content including the errors as well.
(log.txt = many "info" + many "errors")

i want to see just the error part->
grep "error" log.txt
=====error========
=====error========
=====error========

i want to get details of logs apart from "info"->
grep -v "info" log.txt
====error=======
======abc======
====error=======

i want to look at line after the occurrence of error / succeeding lines after A->
grep -A 5 error log.txt
====error====
====info====
====error====
====info====

i want to see the lines before error / preceeding lines before B->
grep -B 5 error log.txt
=====info====
=====info====
=====info====
===error===
=====info====
===error===

i want both before(preceeding) and after(succeeding) lines of error->
grep -C 5 error log.txt


### 25. `sed` is a similar text modifying operation
we cant change/modify text with grep
lets first replicate grep operations with sed

i dont want all the lines(-n), just print all the erropr matchings->
sed -n '/error/p' log.txt

i want to replace "error" with "critical"->
sed 's/error/critical/' log.txt
====info===
====info===
====info===
====critical===
====info===
====critical===
====info===

i dont want to make changes to my file, i wanna keep a backup just incase something goes wrong. so create a log.txt backup file 
then make the changes->
sed -ibackup 's/error/critical' log.txt

i want to make changes only in some specific lines. from line 3 to 7 do the changes->
sed '3,7 s/critical/verycritical/' log.txt

### 26. `awk` is considered better than others
print all the criticals->
awk '/critical/{print $0}' log.txt
====critical===
====critical===

i want to substitute/replace critical with error->
awk '{gsub(/critical/,"error")}{print}' log.txt

i want to add "log summary" in the beginning and "end of log summary" at the ending
awk 'BEGIN {print "log summary \n------"}
{print} END {print "------\n end of log summary"}' log.txt

log summary
-----------------
=====info======
=====info======
=====info======
=====error===
=====info======
=====error===
-----------------
end of log summary


i want to cherry pick data. i want to pick first 2 columns of data->
awk '{print $1, $2}' log.txt

specify the de-limiter of your choice then perform the task
de-limiters= whitespace, commas, etc
awk -F "," '{print $1, $2}' log.txt

do bunch of arithetic ops: like count how many times error has occurred/count the occurrence, generally we can do grep do the wc
+ blabla here its pretty simple
look for tyhe occurrence of "info" in my second col of data->
awk '{count[$2]++} END {print count["info"]}' log.txt

i want the timestamps only which are greater than 3 ->
awk '{if($1 > 3){print $0}}' log.txt

timestamp    info        message
    4        error       =======
    5        error       =======
    6        critical    =======






