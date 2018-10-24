# Score – An NBA Player Strength Visualization Dashboard
The National Basketball Association (NBA) is a men's professional basketball league in North America; composed of 30 teams (29 in the United States and 1 in Canada). It is widely considered to be the premier men's professional basketball league in the world.[Wikipedia](https://en.wikipedia.org/wiki/National_Basketball_Association)

Here in this project, I created a dashboard to visualize each indicidual player's shot data using React, d3 and Ant Design.   
With the help of [d3 shot chart](https://github.com/mamcmanus/d3-shotchart), I could use different filters and themes to provide more customized visualization options. Finally, I developed an autocomplete player search bar to locate a list of players.    


## Shot Chart
Shooting charts can help to identify trends, strengths, weaknesses of each individual player and ultimately to give some insights to improve the team's performance. In the following example, Stephan Curry's stats are fetched from [NBA stats](https://stats.nba.com/) from https://github.com/bttmly/nba. And then with the help of d3, the stats can be visualized in to a chart which shows the all the shots Stephan Curry has made or missed.

![image](https://github.com/seuygr/NBA-web/blob/master/images/Main.png)

## Search Bar
An autocomplete search bar has been provided for users to search for players. For examl=ple, I am looking for "James", and then I can easily find "Lebron James" with an image of him.  

![image](https://github.com/seuygr/NBA-web/blob/master/images/SearchingBar.png)
## Filter and display themems
The count slider controls the filter of the shots. And the radio buttons provide two themes of display, scatter and hexbin. The on-off button controls the detailed information when mouse is over the chart.
![image](https://github.com/seuygr/NBA-web/blob/master/images/PlayerStats.png)
