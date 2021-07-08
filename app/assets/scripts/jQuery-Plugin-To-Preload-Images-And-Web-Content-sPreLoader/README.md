# percentage preloader jquery
A percentage preloader with jquery. 
Create a Loading Screen to preloader images and content for you website .

### Live Demo
 - [Percentage preloader Jquery ](http://codepen.io/sifulislam/full/jAZXkz/) 

### Installation

```bash
Add jquery files

<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<script src="js/sPreloader.js"></script>


Add HTML 

<div id="main-preloader" class="main-preloader semi-dark-background">
    <div class="main-preloader-inner center">
        <h1 class="preloader-percentage center">
            <span class="preloader-percentage-text">0</span> <!-- Show Percentage Number -->
            <span class="percentage">%</span>
        </h1>
        <div class="preloader-bar-outer">
            <div class="preloader-bar"></div> <!-- Percentage Precess Bar -->
        </div>
    </div>
</div>

Add custom js 

$('body').jpreLoader({
	preMainSection:     '#main-preloader',
	prePerText:         '.preloader-percentage-text',
	preBar:             '.preloader-bar',
});      

``` 