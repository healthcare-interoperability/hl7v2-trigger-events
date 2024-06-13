import { MSH, MSA, ERR, QAK, ERQ, DSC, SFT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ERP_R09 extends TriggerEvent {
    static TriggerEvent = 'ERP_R09';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERQ', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
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
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MSA', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERQ', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.3' },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.3' },
            },
            2.6: {
                sequences: { ref: '2.5' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, QAK: QAK, ERQ: ERQ, DSC: DSC, SFT: SFT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
