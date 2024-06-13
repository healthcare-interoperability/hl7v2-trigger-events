import { MSH, SFT, UAC, QPD, RCP, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class QBP_Q33 extends TriggerEvent {
    static TriggerEvent = 'QBP_Q33';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, QPD: QPD, RCP: RCP, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
