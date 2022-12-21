# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is JSX? What is one syntax difference between HTML and JSX?

Your answer: A combination of JS and HTML used in React to facilitate component manipulation. Inline styling is done with two sets of curly braces (style={{ -styles here - }}) since JSX requires the style attribute to be equal to an object, and inside that object, another object containing the styling key-value pairs.

Researched answer: JSX is an extension of JS syntax for React which makes it easier for developers to write code because it is similar to the HTML structure which a lot of developers are familiar with. 

2. What is yarn? What file(s) are modified in a React application when you run the command yarn in your terminal?

Your answer: Yet Another Resource Negotiator (yarn) is a package manager for coding applications. It handles the background processes for installing, handling and managing dependencies.

Researched answer: It is a software packaging manager designed for consistency of code performance, ease of software management via the CLI for removal, installation, updates and configuration. 

3. What is a React component? 

Your answer: A single, reusable code function that returns HTML elements via JSX.

Researched answer: There are 2 types, function and class components. Function components with hooks are preferred in newer versions of React. 

4. What is the difference between state values and props in React?

Your answer: State values are properties of the component they are declared in, they can be variables or functions. These state values can be passed to child components through the use of the keyword props.

Researched answer: State values can be modified only within the component where they are "born," (which causes the component to re-render); therefore, once passed as props, they are read-only to the component to which they are being passed.

5. What is the DOM?

Your answer: Document Object Model is the link between JS code and the UI. It is the visual representation of JS code. It is structured like a tree. User inputs cause the DOM to change which in turn causes JS code to be executed. 

Researched answer: The DOM consists of nodes or objects that programming languages, such as JS, can interact with. The DOM nodes or objects define the structure of the documents as well as the way documents are accessed and manipulated.

6. STRETCH: Which is the difference between a div and a span?

Your answer: Not sure. A div is very common and is not in line, i.e. each div takes up the whole width of the document space. Not sure what a span tag is.

Researched answer: a span tag is an inline container, i.e. only takes up the space necessary and does not start a new line, whereas the div tag is a block-level element, i.e. always starts a new line and takes up the whole width of the container.

## Looking Ahead: Terms for Next Week

1. Object-oriented programming: A style of programming supported by many languages, including JS, in which classes are used over functions. Variables and functions are grouped into a unit known as a class, and these can be accessed through class manipulation. Variables in a class are referred to as properties and functions as methods.  

2. Ruby: An object oriented programming language used mainly for web development and functional programming.

3. Implicit return: There are 2 types of returns for arrow functions in JS: implicit and explicit. Implicit returns ommit the use of the 'return' keyword. Examples of implicit return arrow functions: 
// Single-line
const implicit = (value) => value

// Multi-line
const implicit = (value) => (
  value
)

If an object is returned, the object must be wrapped in parens, e.g.:
const implicit = () => ({ value: 1 })

4. Ruby blocks: One or more lines of code that function as a unit. They are wrapped around do-end keywords when multi-line and curly braces ({}) when in a single line. They can be used as methods are used in JS and can take in methods surrounded by pipes (||), e.g.:
//Single line
["Charlean", "Nicole", "Trisha"].each { |name| puts name }

// Multi-line
["Charlean", "Nicole", "Trisha"].each do |name|
    puts name
end

5. Ruby hashes: Similar to an object in JS, hashes hold key-value pairs in no particular order (order is arbitrary) and their keys and values can both be of any type. 
