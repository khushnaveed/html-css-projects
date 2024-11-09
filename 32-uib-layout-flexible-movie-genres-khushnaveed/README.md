# Flexible Movie Genres
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


With this exercise, we will be showing how you can create a flexible layout for a list of categories (in this case, movie genres).

## Tasks

### Task 1

Modify the [index.html](/index.html) file and;

- Create an HTML element with the class `genres`
- Inside, create 6 child HTML elements with the following text and background colors. They should be created in the following order:
  - Action → `rgb(30, 144, 255)`
  - Thriller → `rgb(190, 178, 178)`
  - Comedy → `rgb(255, 214, 30)`
  - Horror → `rgb(0, 0, 0)`
  - Drama → `rgb(169, 169, 169)`
  - Romance → `rgb(255, 0, 0)`
- Give each genre its own CSS class, for example, for "Action" add the class `action`

### Task 2

Modify the [style.css](/style.css) file to apply the following CSS effects;

- Make `.genres` a flex-container
- Each flex-item should have a base width of `200px` and a fixed height of `100px`
- By default, each flex-item should take up all available space
- The text should be centered for each flex-item
- The `romance` section should take up three times as much space as the other sections
- The `comedy` section should take up six times as much space as the other sections

> **Hint**: Consider using `flex-wrap` to achive the last two points

## Reference Image

![Reference Image](/reference.gif)

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Flex Container

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `.genres` should be a flex container |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | Flex container should contain 6 sub-sections |

### Genres Colors

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | Genres should be styled with specified background colors |

### Flex items text alignment

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Each genre's text should be centered |

### Flex items height & width

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status4.svg) | Each flex item should have a width of 200px and a height of 100px |

### Romance section

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status5.svg) | 'Romance' section should take up to 3x as much space as other sections |

### Comedy section

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status6.svg) | 'Comedy' section should take up to 6x as much space as other sections |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=uib-layout-flexible-movie-genres)


[//]: # (autograding info end)