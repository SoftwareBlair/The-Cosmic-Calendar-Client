# The Cosmic Calendar

Please feel free to checkout the live site and share on your favorite social media:
* [thecosmiccalendar.com](http://thecosmiccalendar.com)

## What is the Cosmic Calendar

The Cosmic Calendar is a method to visualize the chronology of the universe, scaling its current age of 13.8 billion years to a single year in order to help intuition in for teaching purposes in science education or popular science.

In this visualization, the Big Bang took place at the beginning of January 1 at midnight, and the current moment maps onto the end of December 31 at midnight. At this scale, there are 437.5 years per second, 1.575 million years per hour, and 37.8 million years per day.

The concept was popularized by [Carl Sagan](https://en.wikipedia.org/wiki/Carl_Sagan) in his book [The Dragons of Eden](https://en.wikipedia.org/wiki/The_Dragons_of_Eden) (1977) and on his television series [Cosmos](https://en.wikipedia.org/wiki/Cosmos:_A_Personal_Voyage) (1980). Sagan goes on to extend the comparison in terms of surface area, explaining that if the Cosmic Calendar is scaled to the size of a football field, then "all of human history would occupy an area the size of his hand".

## What inspired me to build this

One evening I was watching the revamped Cosmos series, staring everyones favorite astrophysicist Neil deGrasse Tyson, and the Cosmic Calendar was talked about in the first episode. The concept sparked my interest so I began going down the rabbit hole of Googling more about it.

After some searching, the best site I found visually was this; [http://palaeos.com/time/cosmic_calendar.html](http://palaeos.com/time/cosmic_calendar.html). All though it is a very informative about this subject, it seemed very uninviting for the average person to try to learn. So this inspired me to create something a little easier on the eyes and had more interactivity so more people could have fun learning this subject.

## How The Cosmic Calendar was built

Other than the obvious TLC, I created this app with a "Full Stack" in mind.  I built a custom API with Node.js, Express, Knex.js, PostgreSQL and deployed it to Heroku. I set up GET routes to retrieve specific information about The Cosmic Calendar, which helped accessing specific information from the front-end.  Currently there are no POST, PUT or DELETE routes as I did not need them for the initial scope of the app, but other possible ideas may require me to set up those routes.

On the front-end I used AngularJS, JavaScript, jQuery, HTML, CSS3, and some Bootstrap to help layout the page.  With AngularJS I set up custom directives to help modularize the application and eliminate completely breaking the app. I also got to enjoy tinkering with the CSS and jQuery to add the animation effects.

## What's next for this The Cosmic Calendar
> * Optimize the app for mobile devices
* Add more animations to enhance the interactive experience
* Build up the custom API I built with more detailed information
* Create an Alexa skill to access the information through your Amazon Echo device


If you would like to see the code for the API, feel free to go [here](https://github.com/brandonb81/The-Cosmic-Calendar-Server).
