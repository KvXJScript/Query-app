# Url Query Component

This is the simple app which allows the user to check if the desired URL is available to get the data from

I've added mentioned libraries: 
- react-hook-form [It offers a simple yet very efficient and plain way to handle the forms in react components, it also optimizes the performance by reducing the number of re-renders and is easily compatible with yup validation]
- react-toastify [for beautiful and very simply accessible toast pop-ups]
- react-query [in my opinion one of the best approaches to get the data from the desired urls, it reduces boilerplate, "kills" the idea of useEffect fetching, reduces re-renders, is plain and simple, has built-in cache and many, many more]
- Yup [for error handling, it is one of the most widespread used libraries for validation. It is compatible with the most usable form libraries such as react-hook-form and formik and is very simple to manage in later development]
- tailwind [very easy, plain and most importantly fast way to develop new components]

# Assumptions

My main goal was to use the newest technology possible that is stable, has massive amount of "developer friendliness" and is ready and compatible with fast growing apps.
I am a big supporter of tailwind, especially in well organized and structured projects. It makes truly magic with Atomic design components [not used in this app for lack of time, more in what should be improved in my opinion section]
I wanted to leave the project as "future-proff" as possible and make it in the proper way, thank to that if we are ever going to add new stuff, we have applied basic standards and solutions to begin with.

# What would I change / improve

For sure I'd make sure to properly structure the rest of the project, create directory tree, add translations with i18n, create custom hook section for useQuery calls, create initial data setup for future pages with reducers that manage those pages if necessary.
I'd create additional UI data points with tailwind such as colors, paddings, sizes etc. to make sure the project is held in the theme, I'd add multiple standalone components which matches perfectly with tailwind atomic design.
At the end I'd make sure to create utils, global variables, env handling, react-query initial hook helper to allow the future development to be as easy as possible and the most important thing at the end would've been to talk with people that I am working on this project with about their ideas / concepts and suggestions