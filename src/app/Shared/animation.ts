import {
    trigger, state, style, transition,
    animate, group, query, stagger, keyframes
} from '@angular/animations';

export const SlideInOutAnimation = [
    [
        trigger('slideInLeft', [
          transition(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('500ms ease-out', style({ transform: 'translateX(0)' })),
          ]),
          transition(":leave", [
            animate('500ms ease-out', style({ transform: 'translateX(-100%)' })),
          ])
        ])
      ],
]