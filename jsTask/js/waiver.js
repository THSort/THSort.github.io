const addOneThirdClassToFigures = () => {
    var figures = document.querySelectorAll("figure");
    figures.forEach((figure) => {
      figure.classList.add("one-third");
  
      figure.addEventListener("dblclick", () => {
        if (figure === figures[4]) {
          figure.style.visibility = "hidden";
        }
      });
    });
}

const handleFifthFigureDoubleClick = () => {
    var figures = document.querySelectorAll("figure");
    figures.forEach((figure) => {  
      figure.addEventListener("dblclick", () => {
        if (figure === figures[4]) {
          figure.style.visibility = "hidden";
        }
      });
    });
}

const handleFooterClick = () => {
    var footer = document.querySelector("footer");
    footer.addEventListener("click", () => {
      footer.style.display = "none";
    });
}

const handleFirstFigureMouseEvents = () => {
    var firstFigureCaption = document.querySelector("figure:first-of-type figcaption");
    var originalFont = window.getComputedStyle(firstFigureCaption).fontFamily;

    firstFigureCaption.addEventListener("mouseenter", () => {
        firstFigureCaption.style.fontFamily = "cursive";
    });

    firstFigureCaption.addEventListener("mouseleave", () => {
        firstFigureCaption.style.fontFamily = originalFont;
    });
}

const handleFirstFigureFocusEvents = () => {
    var firstFigureCaption = document.querySelector("figure:first-of-type figcaption");

    firstFigureCaption.setAttribute("tabindex", "0");

    firstFigureCaption.addEventListener("focus", () => {
        firstFigureCaption.style.fontFamily = "cursive";
    });

    firstFigureCaption.addEventListener("blur", () => {
        firstFigureCaption.style.fontFamily = "Times";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // problem 1
    addOneThirdClassToFigures(); 

    // problem 2
    handleFifthFigureDoubleClick();

    // problem 3
    handleFooterClick(); 

    // problem 4
    handleFirstFigureMouseEvents(); 

    // problem 5
    handleFirstFigureFocusEvents(); 
  });
  
