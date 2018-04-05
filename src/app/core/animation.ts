import { trigger, style, animate, transition } from '@angular/animations';

export const sliderY = trigger(
    'sliderY', [
        transition(':enter', [
            style({ height: '0', opacity: 0, overflow: 'hidden' }),
            animate('500ms', style({ height: '*', opacity: 1 }))
        ]),
        transition(':leave', [
            style({ height: '*', opacity: 1, overflow: 'hidden' }),
            animate('500ms', style({ height: '0', opacity: 0 }))
        ])
    ]
)

export const sliderXMany = trigger(
    'sliderXMany', [
        transition(':enter', [
            style({ transform: 'translateX({{slideX}})' }),
            animate('500ms', style({ transform: 'translateX(0)' }))
        ], { params: { slideX: '-100px' } })
    ]
)