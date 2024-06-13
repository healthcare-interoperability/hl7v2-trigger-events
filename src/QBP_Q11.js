import { MSH, SFT, UAC, QPD, Hxx, RCP, DSC, EVN } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class QBP_Q11 extends TriggerEvent {
    static TriggerEvent = 'QBP_Q11';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'Hxx', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QBP'] },
                    { identifier: 'RCP', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { QBP: { sequence: { start: '5', stop: '5' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'QPD', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.4' },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.4' },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DSC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.4' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, QPD: QPD, Hxx: Hxx, RCP: RCP, DSC: DSC, EVN: EVN },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
