sequenceDiagram participant browser participant server

browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new-note-spa
activate server
server-->>browser: HTML document
deactivate server

Note right of browser: The browser executes the callback function that renders the notes
