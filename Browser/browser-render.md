# Browser render


1. HTML content => Parse DOM => create JS object (Node) Example: 
**HTMLDivElement** inherits **Node** class
2. Fetch external resources:
   - CSS: load **block parsing HTML** 
   - JS:
      - default block parsing the HTML
      - add **defer**: the execution of the file will be delayed until the parsing of the document is complete, they will be executed in the order that they were discovered in the HTML.
      - add **async**: the file will be executed as soon as it loads, which could be during or after the parsing process, and therefore the order in which async scripts are executed cannot be guaranteed.
    - to be downloaded early in the rendering process, a link tag with rel="preload" can be used.
3. Create **DOM Tree** of Nodes, **DOM is a high-level Web API**
4. CSS content => add **user agent stylesheet** => add default value as specified by the **W3C CSS** => **CSSOM (CSS Object Model)**
5. Execute the JS
6. **Render Tree**: combining **DOM** and **CSSOM** trees together.
7. **Layout operation**: 
   - Creates the layout of each individual Render-Tree node. 
   - The layout consists of the size of each node in pixels and where (position) it will be printed on the screen.
8. Paint operation: 
    - Create layers for each element of Render-tree
    - Combine them and draw them on the screen
9. Compositing operation: layers are sent to GPU to finally draw it on the screen.
10. All of the above processes are done using **Browser Engine**:
   - Safari =>  Webkit
   - ...


