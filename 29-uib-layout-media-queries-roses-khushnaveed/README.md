# Responsive Roses
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


Here we will demonstrate how we can affect a page's content using only media queries.

## Task

For this task you will have to update both the [index.html](/index.html) and [style.css](/style.css) files.

### Requirements

- Build a website that shows different content, depending on the width of the browser (using breakpoints).

- When a breakpoint is active, the content from the other breakpoints should be hidden.

> Use the reference images below as a guide.

#### For screen widths up to 600px

- Has the heading 'Roses are #FF0000'
- Displays the image [images/red-rose.jpg](/images/red-rose.jpg)
- Uses the linear gradient `linear-gradient(140deg, black, red)` for the background

![600px.png](/assets/600px.png)

#### For screen widths between 601px and 900px

- Has the heading 'Violets are #0000FF'
- Displays the image [images/blue-rose.jpg](/images/blue-rose.jpg)
- Uses the linear gradient `linear-gradient(to right, black, blue)` for the background

![600px.png](/assets/601px-900px.png)

#### For screen widths 901px and up

- Has the heading 'All my base, are belong to you'
- Displays the image [images/colorful-rose.jpg](/images/colorful-rose.jpg)
- Uses the linear gradient `linear-gradient(hotpink, #d8eefd)` for the background

![901px.png](/assets/901px.png)

## Bonus Task

Show the images using `<picture>` and `<source>` elements with inline media breakpoints

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Breakpoints - 600px and lower

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `main` tag should have the specified `linear-gradient` on this breakpoint |

### Breakpoints - 601px - 900px

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `main` tag should have the specified `linear-gradient` on this breakpoint |

### Breakpoints - 901px and above

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `main` tag should have the specified `linear-gradient` on this breakpoint |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=uib-layout-media-queries-roses)


[//]: # (autograding info end)