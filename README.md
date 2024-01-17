# Gumroad Engineering Challenge

The new functionality I built for the Engineering Challenge is _Written Reviews_.
- Reasoning: it is the most requested feature Gumroad is still missing (see [here](https://gumroad.nolt.io/top))

## How it works

1. Go to the [write review product](https://gumroad-write-review.vercel.app/) and "log in" by using just a username. The password field does not matter.
2. Give it a star & write a comment
3. Repeat with as many users as you want
   - to log out: the functionality is hidden under _Here is the Zoom link!_. Just click on it.
5. Go to the [see review product page](https://gumroad-see-review.vercel.app/) and here you will see all the reviews

## Repos
1. [write review](https://github.com/Coreeze/gumroad-write-review) - ReactJS, Formik + Yup (for forms), Redux, MUI
2. [see reviews](https://github.com/Coreeze/gumroad-see-review) - ReactJS, MUI
3. [server](https://github.com/Coreeze/gumroad-server) - NodeJS, MongoDB + Mongoose

## Tech Stack
ReactJS, NodeJS, MongoDB + Mongoose
Redux, Formik + Yup (for forms), MUI

## What I would have done better
1. This is just an MVP. A clear missing addition is the _See all reviews_ functionality
2. All pages are be mobile responsive, but I did no extensive checks.
3. On the _See reviews_ page, I did not implement the black lines of the grid separating the blocks.

## What I learned
1. Gumroad was built very efficiently & focused on what matters: the front-end is simple, not overcomplicated.
   - This was an important lesson for me. PMF matters, not the tech stack.
