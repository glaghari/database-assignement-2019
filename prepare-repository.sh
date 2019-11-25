#! /bin/bash


doDirectory() {
 rm -rf submissions
 mkdir submissions
}

doReadMe() {
    echo "## Submissions" > README.md
    ls -p submissions | grep -v / | sed 's/\(.*\)/- [\1](\/submissions\/\1)/' >> README.md
    printf "\n\n### Top 5 contributors\n\n" >> README.md
    echo "| Seat      | # Commits |" >> README.md
    echo "| --------- | ----------|" >> README.md
    ls -l submissions/processed/ | tr -s " " " " | cut -d " " -f 2,9 | sort -t' ' -nrk1 | head -10 | awk '{ print "| " $2 "  | " $1 " |"}' | column -t >> README.md
}


doDirectory

while IFS=',' read -r -a commit || [ -n "$commit" ]; do # || [ -n "$commit" ] is for last line without newline
    timestamp=${commit[0]}
    if [ "$timestamp" = "Timestamp" ]; then
       continue
    fi
    
    seat=$(echo ${commit[2]} | sed 's/"//g' | sed 's/-/\//g' | sed 's/\\/\//g' | sed 's/2[kK0]18\/*//' | sed 's/\//-/g' | tr [:upper:] [:lower:])
    fiddle=${commit[4]//[$'\t\r\n ']}

    fiddlehash=$(echo $fiddle | sed 's/^.*=\(.*\)/\1/')
    mdfiddle=$(echo $fiddle | sed 's/?/markdown?/')
    
    echo "processing $fiddlehash for $seat"

    mkdir -p "submissions/processed/$seat"
    mdfile="submissions/processed/$seat/$fiddlehash.md"
    mdfilelink="[Fiddle File](processed/$seat/$fiddlehash.md)"

    if [ -e "$mdfile" ] ; then
        # Duplicate submission, ignore
        continue
    fi

    echo "# [Back to main](https://github.com/glaghari/database-assignement-2019)" > $mdfile
    phantomjs dload.js $mdfiddle >> $mdfile
    
    
    file="submissions/$seat.md"
    
    if [ ! -e "$file" ] ; then
        echo "# [Back to main](https://github.com/glaghari/database-assignement-2019)" > $file
        echo "|Submission Time stamp          | Interactive Link                                                                              | Resolved report                                                                              |" >> $file
        echo "| ----------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |" >> $file
    fi

    if [ -e "$file" ] ; then
        echo "| $timestamp | [Fiddle Link]($fiddle) | $mdfilelink |" >> $file
    fi
done < "DB-Assignment-2019.csv"

doReadMe
