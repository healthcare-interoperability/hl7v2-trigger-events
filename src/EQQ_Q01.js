import { MSH, EQL, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EQQ_Q01 extends TriggerEvent {
    static TriggerEvent = 'EQQ_Q01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EQL', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
        },
        segments: { MSH: MSH, EQL: EQL, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
