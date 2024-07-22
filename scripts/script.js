$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#navbarv1beforescroll').addClass('hidden');
            $('#navbarv2afterscroll').removeClass('hidden');
        } else {
            $('#navbarv2afterscroll').addClass('hidden');
            $('#navbarv1beforescroll').removeClass('hidden');
        }
    });

    const IconsList = [
        { icon: '<i class="fas fa-search"></i>', title: 'Search for matches', desc: 'Search and filter millions of products and supplier offerings to find matching ones for your business', image: 'img/1_TYzgeVaCL0q5ZdFAZ-6cfQ.jpg' },
        { icon: '<i class="fas fa-check"></i>', title: 'Identify the right one', desc: 'Make informed decisions to select the ideal products and suppliers for your business.', image: 'img/hire-the-right-employee.jpg' },
        { icon: '<i class="fas fa-arrows-alt-v"></i>', title: 'Pay with confidence', desc: 'Ensure secure and reliable payment processes for your transactions.', image: 'img/online-payment-companies.webp' },
        { icon: '<i class="fas fa-globe"></i>', title: 'Fulfill with transparency', desc: 'Maintain clear and transparent fulfillment processes to build trust with your partners.', image: 'img/a-financial-business-transaction-between-two-people-free-photo.jpg' },
        { icon: '<i class="fas fa-user-cog"></i>', title: 'Manage with ease', desc: 'Simplify and streamline your business management for efficient operations.', image: 'img/online-colleges-leadership-degree-blog2-1900x900.jpg' }
    ];
  
    let activeIndex = 0;

    // Populate icons dynamically
    IconsList.forEach((icon, index) => {
        const isActive = index === activeIndex;
        const iconHTML = `
        <div class="flex items-center gap-3 cursor-pointer" onclick="handleIconClick(${index})">
            <button class="rounded-full p-2 w-12 text-lg relative mt-1 border ${isActive ? 'text-blue-600 bg-blue-200' : 'text-gray-600 bg-white'}">${icon.icon}</button>
            <div class="flex-1">
                <h2 class="font-semibold pb-1 ${isActive ? 'text-lg' : 'text-md'}">${icon.title}</h2>
                <p class="text-sm ${isActive ? 'block' : 'hidden'}">${icon.desc}</p>
            </div>
        </div>
        `;
        $('#icons-container').append(iconHTML);
    });

    // Initial image load
    $('#active-image').attr('src', IconsList[activeIndex].image).attr('alt', IconsList[activeIndex].title);

    // Handle icon click
    window.handleIconClick = function(index) {
        activeIndex = index;
        $('#active-image').attr('src', IconsList[index].image).attr('alt', IconsList[index].title);
        updateIconStyles();
    };

    // Update icon styles based on active index
    function updateIconStyles() {
        $('#icons-container button').each(function(index) {
            if (index === activeIndex) {
                $(this).removeClass('text-gray-600 bg-white').addClass('text-blue-600 bg-blue-200');
            } else {
                $(this).removeClass('text-blue-600 bg-blue-200').addClass('text-gray-600 bg-white');
            }
        });
        $('#icons-container p').each(function(index) {
            if (index === activeIndex) {
                $(this).removeClass('hidden').addClass('block');
            } else {
                $(this).removeClass('block').addClass('hidden');
            }
        });
        $('#icons-container h2').each(function(index) {
            if (index === activeIndex) {
                $(this).removeClass('text-md').addClass('text-lg');
            } else {
                $(this).removeClass('text-lg').addClass('text-md');
            }
        });
    }

    // $('#categoriesLink, #categoriesHeaderSection').hover(
    //     function() {
    //         $('#categoriesHeaderSection').removeClass('hidden');
    //     },
    //     function() {
    //         if (!$('#categoriesLink').is(':hover') && !$('#categoriesHeaderSection').is(':hover')) {
    //             $('#categoriesHeaderSection').addClass('hidden');
    //         }
    //     }
    // );

    $('#categoriesLink').hover(
        function() {
            $('#categoriesHeaderSection').stop(true, true).fadeIn().removeClass('hidden');
        }
    );

    $('#categoriesHeaderSection').hover(
        function() {
            $(this).stop(true, true).fadeIn().removeClass('hidden');
        }
    );

    // Handle mouseleave events to fade out categoriesHeaderSection
    $('#categoriesHeaderSection, #categoriesLink').mouseleave(function() {
        if (!$('#categoriesHeaderSection').is(':hover') &&
            !$('#categoriesLink').is(':hover')) {
            $('#categoriesHeaderSection').stop(true, true).fadeOut(function() {
                $(this).addClass('hidden');
            });
        }
    });

    // Adding classes based on hover state of navbarHeader
    $('#navbarHeader').mouseenter(function() {
        $(this).addClass('bg-white text-black').removeClass('text-white');
        $('#logoDark').removeClass('hidden');
        $('#logoWhite').addClass('hidden');
    }).mouseleave(function() {
        if (!$('#categoriesHeaderSection').is(':hover') && !$('#categoriesLink').is(':hover')) {
            $(this).removeClass('bg-white text-black').addClass('text-white');
            $('#logoWhite').removeClass('hidden');
            $('#logoDark').addClass('hidden');
        }
    });

    // Ensure navbarHeader remains styled when categoriesHeaderSection is hovered
    $('#categoriesHeaderSection').mouseenter(function() {
        $('#navbarHeader').addClass('bg-white text-black');
        $('#logoDark').removeClass('hidden');
        $('#logoWhite').addClass('hidden');
    }).mouseleave(function() {
        if (!$('#navbarHeader').is(':hover') && !$('#categoriesLink').is(':hover')) {
            $('#navbarHeader').removeClass('bg-white text-black').addClass('text-white');
            $('#logoWhite').removeClass('hidden');
            $('#logoDark').addClass('hidden');
        }
    });
});

const scrollContainer = document.getElementById('scrollContainer');
const scrollLeftButton = document.getElementById('scrollLeftButton');
const scrollRightButton = document.getElementById('scrollRightButton');
const leftGradient = document.getElementById('leftGradient');
const rightGradient = document.getElementById('rightGradient');

const scrollAmount = 168;

const handleScroll = (direction) => {
    if (direction === 'left') {
        scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
        scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
};

const updateScrollButtons = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
    const isAtStart = scrollLeft <= 0;
    const isAtEnd = scrollLeft >= (scrollWidth - clientWidth);

    scrollLeftButton.classList.toggle('opacity-0', isAtStart);
    scrollLeftButton.classList.toggle('pointer-events-none', isAtStart);
    scrollRightButton.classList.toggle('opacity-0', isAtEnd);
    scrollRightButton.classList.toggle('pointer-events-none', isAtEnd);

    leftGradient.style.display = isAtStart ? 'none' : 'block';
    rightGradient.style.display = isAtEnd ? 'none' : 'block';
};

scrollLeftButton.addEventListener('click', () => handleScroll('left'));
scrollRightButton.addEventListener('click', () => handleScroll('right'));
scrollContainer.addEventListener('scroll', updateScrollButtons);
window.addEventListener('resize', updateScrollButtons);

document.addEventListener('DOMContentLoaded', () => {
    updateScrollButtons();
});
