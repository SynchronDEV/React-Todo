# React-Todo
## Run the project using `npm i && npm start`.

React Todo App made for a weekend test during my studies at &lt;/salt>

The requirements were to build a frontend todo app using React, as well as a few technical specifications to adhere to. These were:

* Keeping the todo-list in a state object
* Use at least 3 levels of components (either class or functional, but ideally top level being class and the rest functional).
* Use props for passing the necessary information to the todo components.
* NOT use React Router, Hooks nor Redux.
* Initial load should load an empty todo. For a future iteration I would change this specification into allowing usage of something like localStorage to locally store the todos
* Certain interaction should mimic a real todo app, such as:

		Submitting a form should make an new item appear in the list

		Each todo should be toggleable between 'done' and 'not done'

		Cards toggled to 'done' should have a remove button added, which onclick removes the item from the view.

		Todos set to done should appear at the bottom of the list. (I solved this using underscore.js)
		
		The original order of the cards must be maintained if a card is toggled to 'done', and then back again (also solved using underscore.js)
		
		
CSS was not a focus of this project, rather the correct implementation of the application using React was asked for.

With my implementation, I managed to pass the test with a green score and received very positive feedback.

## Image:
![Image1](/ReactTodo.png)
