import {
  trigger,
  state,
  style,
  transition,
  animate,
  group,
  query,
  stagger,
  keyframes,
} from '@angular/animations';

export const SlideInOutAnimation = [
  [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ transform: 'translateY(-100%)' })),
      ]),
    ]),
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(100%)' }),
        animate('400ms ease-out', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('400ms ease-out', style({ transform: 'translateY(100%)' })),
      ]),
    ]),
  ],
];

export const PageSlideAnimationRTL = [
  trigger('pageSlide', [
    // transition(':enter', [
    //   style({ transform: 'translateX(100vw)' }),
    //   animate('400ms ease-out', style({ transform: 'translateX(0)' })),
    // ]),
    // transition(':leave', [
    //   animate('350ms ease-out', style({ transform: 'translateX(-100vw)' })),
    // ]),
    // Default state
    state('default', style({ transform: 'translateX(0)' })),

    // Right to Left transition (for moving to next page)
    transition('* => slideRight', [
      style({ transform: 'translateX(100vw)' }),
      animate('1s ease-out', style({ transform: 'translateX(0)' })),
    ]),

    // Left to Right transition (for moving to previous page)
    transition('* => slideLeft', [
      style({ transform: 'translateX(-100vw)' }),
      animate('1s ease-out', style({ transform: 'translateX(0)' })),
    ]),

    // Exit animations
    transition('slideRight => void', [
      animate('1s ease-out', style({ transform: 'translateX(-100vw)' })),
    ]),
    transition('slideLeft => void', [
      animate('1s ease-out', style({ transform: 'translateX(100vw)' })),
    ]),
  ]),
];
