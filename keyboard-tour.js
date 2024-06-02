document.addEventListener('DOMContentLoaded', function() {
    const tour = new Shepherd.Tour({
        useModalOverlay: true,
        defaultStepOptions: {
            classes: 'shepherd-theme-custom',
            scrollTo: true
        }
    });

    tour.addStep({
        id: 'welcome',
        text: 'This is the keyboard control page. You can use this to control a PC on the same local network.',
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.addStep({
        id: 'keyboard-card',
        text: 'Enter the IP address of the computer to control.',
        attachTo: {
            element: '#ipInput',
            on: 'top'
        },
        buttons: [
            {
                text: 'Next',
                action: tour.next
            }
        ]
    });

    tour.start();
});