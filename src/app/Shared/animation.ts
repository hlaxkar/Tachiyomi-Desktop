import {
    trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    [
        trigger('slideUp', [
          transition(':enter', [
            style({ transform: 'translateY(-100%)' }),
            animate('400ms ease-out', style({ transform: 'translateX(0)' })),
          ]),
          transition(":leave", [
            animate('400ms ease-out', style({ transform: 'translateY(-100%)' })),
          ])
        ]),
        trigger('slideDown', [
          transition(':enter', [
            style({ transform: 'translateY(100%)' }),
            animate('400ms ease-out', style({ transform: 'translateX(0)' })),
          ]),
          transition(":leave", [
            animate('400ms ease-out', style({ transform: 'translateY(100%)' })),
          ])
        ])
      ],
]