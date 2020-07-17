# React Duplicate Filter

This is a single page React app that filters out "fuzzy duplicate" JSON objects in an array from a CSV file.

It turns a CSV file into client readable text (to avoid using node.js) and then parses it into JSON.
The filter takes the data and compares it to itself looking for "fuzzy duplicates." It checks this
by comparing each instance to the replicated array and checking for a Levenshtein distance comparison of 1
or less.

This Levenshtein distance was decided due to the nature of the original list; most of the duplicates were already pretty close. This variable can also be changed as well as the type of algorithmic fuzzy comparison.

A duplicate is found if it meets this condition and it is also NOT itself. The duplicate array
and filtered array and displayed as well once the filter occurs.

The filter also has the option of checking each key, value pair of each instance; this was also deemed unnecessary as all the duplicates were found using only the last_name key.

The filter succeeds in filtering the advanced CSV list as it shows every ID number in order, omitting ID 29 as it did not originally exist.

-Anthony Vigliotta
