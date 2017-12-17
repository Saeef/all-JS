# twitter bootstrap
- html, css and js framework for developing responsive, mobile first projects on the 
  web.
- made mostly of css of classes
- Mobile first == plan mobile from the start
  * css framework either yours or bootstrap, should be mobile ready

### bootstrap grid systems basics

```
  <div class="container">
    <div class="row">
      <div class="col-md-4">Col 1</div>
        ...
    </div>
  </div>


```

or 


```
  <header class="container">
    <nav class="row">
      <div class="col-md-4">Col 1</div>
        ...
    </nav>
  </header>

```

<hr/>

- bootstrap grid must always be inside of a container wrapper
- container class options:
  + container (pre-determined fixed widths at different breakpoints)
  + container-fluid. (100% width of the browser and provides consistent padding)

- row class creates horizontal groups of columns
  + columns collapse and interact with each other as a group, but independently
    for columns in another row
  + row also creates a negative margin to counteract the padding that the container
    class setup  


<kbd>negative row margin</kbd>
![](images/negativeRowMargin.png)

<hr/>

<kbd>bootstrap fix</kbd>
<br/>
![](images/bootstrapfix.png)



### bootstrap columns

- every single column in bootstrap is defined using this template:

```
   col-SIZE-SPAN
```

#### size: 
- screen width range identifier
- xs,sm,md,lg
ex:

```
 if set lg 1200px,other columns below that width will collapse

```
#### span
- how many columns element should span
- values: 1 through 12








# @media Queries & Responsive Layout

ex:

```
/* Media Query Syntax */

@media (max-width:767px) {
   p {
    color:blue;
  }
}
```
- each media feature (resolves to true or false)

```
  @media (max-width:800px) {...}

  @media (min-width:800px) {...}

  @media (orientation: portrait) {...}

  @media screen {...}

  @media print {...}

```

## devices with width within a range

```
 @media (min-width:768px) and (max-width:991px) {...}

```

## comma between media queries becomes an ***OR***

```
 /* any device who's width is no larger than 767px or devices who's width no smaller than
    992px
 */
 @media (max-width: 767px), (min-width:992px) {...}

```

## Media Query Common Approach

- base styles

```
/************* base styles *********/
 p1 {color: blue;}
 .container {
   display:block;
   background:gray;
   width:300px;
   height:300px;
 }

 p2 {color: blue;}
 .container {
   display:block;
   background:gray;
   width:50px;
   height:50px;
 }

```

- and media queries

```
/******************* large devices only ****************/
@media (min-width:1200px) {
 
 ...
}

/************* medium devices only **********************/

@media (min-width:992px) and (max-width:1199px) {
 
 ...
}

```

## 12-column Grid Responsive Layout

<kbd>responsive layout grid</kbd>

1 column => 100%/12 = 8.33% * (number of columns)

![](images/responsivelayout.png)

<br/>

<kbd>nested grids</kbd>

```
       4      4      4

      6 6   4 4 4   6 6
```

![](images/nestedgrids.png)






























