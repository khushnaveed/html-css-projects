# Exploring the CSS Cascade

This exercise consists of a series of CSS cascade and inheritance puzzles.

## Tasks

### Task 1

Open [task_1.html](./task_1.html)

- Don't edit the `<style>` element!
- Edit the **HTML** so that the inner box is square and has a `hotpink` background color with a dashed `lightblue` border

### Task 2

Open [task_2.html](./task_2.html)

- Don't edit the `<style>` element!
- Edit the **HTML** so that the box has a `hotpink` background color

### Task 3

Open [task_3.html](./task_3.html)

Answer the following questions directly here in the README:

- Why is the `<span>` element text bold?
- Answer: `<span> element is placed within the <main> element and <main> element is css styled with the font-weight: bold property which also automatically applied on the <span> element making it bold.`
<hr>

- Why is the `<h2>` and `<p>` element text red?
- Answer: `<h2> and <p> elements are placed within <main> element and <main> element has been styled with the color: red.`
<hr>

- Why is the `<span>` element text not red?
- Answer: `Span element has css styling with the color blue not color red. `
<hr>

- Why don't `<h2>`, `<p>` and `<span>` each have a border?
- Answer: `<h2>, <p> and <span> each don't have a border as they are placed within the main section which has been styled with border.`
<hr>

- If you uncomment line 17, why does the `<span>` stay blue?
- Answer: `<span> stayed blue beacuse it has been styled individualy and the changes will imply on it.`
<hr>

- If you uncomment line 18, why does the `<span>` turn green?
- Answer: `<span> element turned green because of the '!important' declaration as it is used to increase the priority of a particular style rule, overriding other styles that may conflict with it.`
<hr>


### Task 4

Open [task_4.html](task_4.html)

- Don't edit the **HTML** file at all!
- Create and edit `task_4.css` so that each time the word **Cucumbers** appears on the page, it has the font color `greenyellow`
- All other words must have the font color `palegoldenrod`

### Task 5

Open [task5.html](task_5.html)

This one is nearly identical to task 4! The instructions are the same, but _there is_ something different this time... 🤫

- Don't edit the **HTML** file at all!
- Create and edit `task_5.css` so that each time the word **Cucumbers** appears on the page it has the font color `greenyellow`
- All other words must have the font color `palegoldenrod`

> Hint: Compare the HTML with `task_4.html` to see what has changed!
