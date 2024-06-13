import { MSH, SFT, UAC, EQU, NDS, NTE, ROL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EAN_U09 extends TriggerEvent {
    static TriggerEvent = 'EAN_U09';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EQU', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NDS', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                ],
                groups: { NOTIFICATION: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
            },
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EQU', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NDS', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'ROL', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { NOTIFICATION: { sequence: { start: '3', stop: '4' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'EQU', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NDS', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'ROL', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { NOTIFICATION: { sequence: { start: '4', stop: '5' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EQU', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NDS', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['NOTIFICATION'] },
                    { identifier: 'ROL', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.8' },
            },
            2.7: {
                sequences: { ref: '2.6' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.6' },
                groups: { ref: '2.8' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, EQU: EQU, NDS: NDS, NTE: NTE, ROL: ROL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
