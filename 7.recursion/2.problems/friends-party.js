/*
    Friends' Party!
        Given n friends, each one can remain single or can be paired up with some other friend. 
        Each friend can be paired only once. Find out the total number of ways in which friends 
        can remain single or can be paired up.
    
    Input Format
        In the function an integer N is passed as parameter.

    Output Format
        Return an integer representing the total no. of ways

    Sample Input
        3
    Sample Output
        4
    Explanation
        {1}, {2}, {3} : all single
        {1}, {2,3} : 2 and 3 paired but 1 is single.
        {1,2}, {3} : 1 and 2 are paired but 3 is single.
        {1,3}, {2} : 1 and 3 are paired but 2 is single.

    Note that {1,2} and {2,1} are considered same.
*/

// Think by your own and try to come up with logic
function friendsParty(n){
    if(n==1 || n==2){
        return n;
    }
    return friendsParty(n-1) + n-1 * friendsParty(n-2);
}