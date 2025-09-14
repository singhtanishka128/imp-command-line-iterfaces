/********
1. `pwd`: Print Working Directory     $pwd

2. `cd`: Change Directory

Absolute path (/home/tanishka/Desktop) → starts from / (root of the system). Always the full address.
Relative path (Desktop/, ../) → starts from where you currently are.

. (single dot) → current directory
.. (double dots) → parent directory (one level up)

cd ..      # go up one level
cd ../..   # go up two levels

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

3. `ls`: Listing all the files and folders in your current folder.  $ls

4. `mkdir`: Create new folder        $ mkdir test 

`rmdir` folder1 : removes/deletes folder1
Only works if the directory is completely empty.
If there are files inside → it throws an error.

5. `touch`: Create new empty file     $ touch index.js

6. `cat`: Prints contents of the file
    $ cat index.js

7. `vi`: Vim Editor
    $ vi index.text

    Press `i` for insert mode and write anything in your file

    kendall
    kylie
    la
    lv

    Esc + :q! to exit from Vim Editor without saving the file
    Esc + :wq! to exit from Vim Editor with saving the file

8. `mv`: Move the file or folders

    $ mv folder1 folder2
    
mv folder1 folder2 
this cli moves folder1 inside folder2 if folder2 already exists
this cli renames folder1 as folder2 if folder2 does not exist

`rm` index.js : removes/deletes file
rm -rf folderName
Together, it’s basically a “delete everything in sight” nuke button
Careful with rm -rf:
One typo like rm -rf / or rm -rf * → goodbye system
rm -ri folderName
(-i = interactive, asks before deleting each file).

9. `cp`: Copy the files or folders

    $ cp index.js new-folder  copy and paste index.js inside new1 if new1 folder exists/ if new1 doesnt exist,
                               makes a newfile  named new1 with copied contents of index.js

     $ cp -r folder1 folder2   same for folder
    

10. `clear`: Clear the terminal
    $ clear

11. `nvm`: Node Version Manager - Using this you can install node.

12. `npm`: Node Package Manager

    $ npm install express
    $ npm install array

13. `node`: Use to run file.

    $ node index.js    

    


























*/