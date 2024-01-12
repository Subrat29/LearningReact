import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google baba ke darbar</a>
)

const anotherUser = "subrat";

const ReactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'click me to google anything!', 
    anotherUser
);

ReactDOM.createRoot(document.getElementById('root')).render(
    // <App>It is app</App>
    ReactElement
)
