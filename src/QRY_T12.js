import { MSH, QRD, QRF } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class QRY_T12 extends TriggerEvent {
    static TriggerEvent = 'QRY_T12';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRD', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QRF', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.4: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.5: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            '2.5.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.6: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, QRD: QRD, QRF: QRF },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
