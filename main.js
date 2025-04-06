const toTop = document.querySelector(".to-top");
const headings = document.querySelectorAll(".feature-box");
const hero = document.querySelectorAll(".hero-content")
const featureBoxes = document.querySelectorAll('.feature-box');
const importance = document.querySelectorAll('.importance-section');
const countryCards = document.querySelectorAll('.country-card');
const messages = document.querySelectorAll('.messages-section');
const countrySection = document.querySelectorAll('.country-section');
const foot = document.querySelectorAll('footer');
const offsetThreshold = 800;
///
///
window.addEventListener("scroll", () => {
    if (window.pageYOffset > 20) {
        toTop.classList.add("active");
    }else{
        toTop.classList.remove("active");
    }

})
///
///
window.addEventListener("scroll", () => {
    // Iterate through each heading element
    headings.forEach((box, index) => {
        // Calculate the position of each heading plus 500 pixels
        const boxOffset = box.offsetTop + box.offsetHeight + 1;

        // Check if the scroll position is beyond 500 pixels below the heading
        if (window.pageYOffset < boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the heading
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
window.addEventListener("scroll", () => {
    // Set an offset threshold for when to activate each box
    

    // Iterate through each heading element
    importance.forEach((box, index) => {
        // Calculate the position of each heading minus the offset threshold
        const boxOffset = box.offsetTop - offsetThreshold;

        // Check if the scroll position is beyond the threshold and near the element
        if (window.pageYOffset > boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the threshold
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
window.addEventListener("scroll", () => {
    // Set an offset threshold for when to activate each box
    

    // Iterate through each heading element
    messages.forEach((box, index) => {
        // Calculate the position of each heading minus the offset threshold
        const boxOffset = box.offsetTop - offsetThreshold;

        // Check if the scroll position is beyond the threshold and near the element
        if (window.pageYOffset > boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the threshold
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
window.addEventListener("scroll", () => {
    // Set an offset threshold for when to activate each box
    

    // Iterate through each heading element
    countrySection.forEach((box, index) => {
        // Calculate the position of each heading minus the offset threshold
        const boxOffset = box.offsetTop - offsetThreshold;

        // Check if the scroll position is beyond the threshold and near the element
        if (window.pageYOffset > boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the threshold
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
window.addEventListener("scroll", () => {
    // Set an offset threshold for when to activate each box
    

    // Iterate through each heading element
    foot.forEach((box, index) => {
        // Calculate the position of each heading minus the offset threshold
        const boxOffset = box.offsetTop - offsetThreshold;

        // Check if the scroll position is beyond the threshold and near the element
        if (window.pageYOffset > boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the threshold
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
window.addEventListener("scroll", () => {
    // Iterate through each heading element
    hero.forEach((box, index) => {
        // Calculate the position of each heading plus 500 pixels
        const boxOffset = box.offsetTop + box.offsetHeight + 1;

        // Check if the scroll position is beyond 500 pixels below the heading
        if (window.pageYOffset < boxOffset) {
            if (!box.classList.contains('active')) {
                // Add 'active' class and staggered 'show' class if not already present
                box.classList.add("active");
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 100); // Delay for staggered animation effect
            }
        } else {
            // Remove the classes when scrolling above the heading
            box.classList.remove("active");
            box.classList.remove('show');
        }
    });
});
///
///
featureBoxes.forEach((box, index) => {
    setTimeout(() => {
        box.classList.add('show');
    }, index * 200);
});
hero.forEach((box, index) => {
    setTimeout(() => {
        box.classList.add('show');
    }, index * 200);
});
importance.forEach((box, index) => {
    setTimeout(() => {
        box.classList.add('show');
    }, index * 200);
});
messages.forEach((box, index) => {
    setTimeout(() => {
        box.classList.add('show');
    }, index * 200);
});
countrySection.forEach((box, index) => {
    setTimeout(() => {
        box.classList.add('show');
    }, index * 200);
});
///
///
// Reveal country cards with delay
countryCards.forEach((card, index) => {
    setTimeout(() => {
        card.classList.add('show');
    }, index * 150);
});
///
///
const toggleTheme = () => {
    document.body.classList.toggle('dark');
    document.querySelectorAll('header, footer, .other-elements').forEach(el => {
        el.classList.toggle('dark');
    });
}
