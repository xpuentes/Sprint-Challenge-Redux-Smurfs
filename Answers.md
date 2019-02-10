1. In your own words, describe actions, reducers and the store and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
- It's known as a 'single source of truth', because it's the singe source of state for the application, unless you are using local state in a component.
- store is the global state in redux
- an action is returned by an action creator to do some kind of action or event
- the reducer is what received the action and returns a new state based on the data that is received

2. What is the difference between Application state and Component state? When would be a good time to use one over the other?
- Application state is global state able to be accessed by any component, component state is only available to the component it's in and the component it is passed to as a prop.

3. Describe redux-thunk, what does it allow us to do? How does it change our action-creators?
- redux-thunk is a middleware that allows us to use AJAX calls in redux. With thunk we have to use dispatch in our actions.
