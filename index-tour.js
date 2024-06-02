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
            text: 'Welcome to Mimir Remote. This short tour will guide you through the main features.',
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'mimir-logo',
            text: 'This is the Mimir logo. You can click on it to go back to the homepage.',
            attachTo: {
                element: '#mimir',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'download-link',
            text: 'Click here to download the latest release of Mimir.',
            attachTo: {
                element: '#download',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'github-link',
            text: 'This link takes you to the GitHub repository of Mimir.',
            attachTo: {
                element: '#github',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'instructions-link',
            text: 'Setup and usage instructions.',
            attachTo: {
                element: '#instructions',
                on: 'bottom'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'how-to-use',
            text: 'Click here to learn how to use the utility.',
            attachTo: {
                element: '#how-to-use',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'keyboard-card',
            text: 'This will lead you to the keyboard control page, where you can control the keyboard of another device over a common network.',
            attachTo: {
                element: '#keyboard',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'trackpad-card',
            text: 'This will lead you to the trackpad control page (This feature is currently under construction).',
            attachTo: {
                element: '#trackpad',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Next',
                    action: tour.next
                }
            ]
        });

        tour.addStep({
            id: 'gamepad-card',
            text: 'This will lead you to the gamepad control page (This feature is currently under construction).',
            attachTo: {
                element: '#gamepad',
                on: 'right'
            },
            buttons: [
                {
                    text: 'Finish',
                    action: tour.complete
                }
            ]
        });

        tour.start();
    });