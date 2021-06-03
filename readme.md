# Sup dude!

## Notes:

### Seconds, modulo and division weirdness

#### ex. 1
![image](https://github.com/ZCroninDev/meditation/blob/main/meditation-app-master/img/img1.png)

Sometimes it's tricky correctly processing 0's and singular digits. In Excel, you usually have to specify a cell needs to format like a 'Number' before it will show 08 instead of 8.
Similarly, JS will never render singular numbers like 02 or 04 instead of 2 or 4. So some simple logic is needed to correctly format. I've thrown in some examples in your project, check it out in app.js

Of note is that this shows up three separate times in the project: The initial render, the first button click timer set, and when the timer winds down to 0:09 etc.

### Minor thoughts

It might be good to throw in simple hover animations (css) for the sunshine and rain buttons for homogenous user feedback. The 2, 5, and 10 minutes buttons have this, might be good to make it the same across all buttons?

It'd be interesting to mess with an opacity fade that takes a long time (1s? 2s?) when you click sunshine or rain to change the background. This would save your awkward jump to the 
next image. Currently it just snaps over

Otherwise I think it looks great! Most of my comments are just polish, so good job!