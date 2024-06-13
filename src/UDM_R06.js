import { MSH, URD, URS, DSP, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class UDM_R06 extends TriggerEvent {
    static TriggerEvent = 'UDM_R06';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'URD', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'URS', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSP', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DSC', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, URD: URD, URS: URS, DSP: DSP, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
