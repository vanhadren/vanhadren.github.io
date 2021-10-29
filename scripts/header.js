class MyHeader extends HTMLElement 
{
    connectedCallback()
    {
        this.innerHTML =
        `
            <header>
                <nav>
                    <a href="index.html">index</a>
                    ||
                    <a href="introduction.html">introduction</a>
                    ||
                    <a href="tables.html">tables</a>
                    ||
                    <a href="forms.html">form</a>
                    ||
                    <a href="website_evaluations.html">Website Evaluations</a>
                    ||
                    <a href="brand-tyrannical-rottweiler.html">TryanicalRots</a>
                    ||
                    <a href="first-scripts.html">Scripts</a>
                    ||
                    <a href="nameThePolygon.html">NameThePolygon</a>
                    ||
                    <a href="calculator_try.html">CalcTry</a>
                    ||
                    <a href="calculator.html">Calculator</a>
                    ||
                    <a href="arrays.html">Arrays</a>
                    ||
                    <a href="Rogers-Activity_Accessibility.html">Accessibility Acitvity</a>
                    ||
                    <a href="Slideshow.html">slideShow</a>
                    ||
                    <a href="stuff/CRAPPY page ','.htm">CRAPPY page</a>
                </nav>
            </header>
        `
            
        
    }
}

customElements.define('myHeader', MyHeader)

