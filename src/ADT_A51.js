import { MSH, SFT, UAC, EVN, PID, PD1, MRG, PV1 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ADT_A51 extends TriggerEvent {
    static TriggerEvent = 'ADT_A51';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MRG', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
            2.6: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MRG', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.8' },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.8' },
            },
            2.4: {
                sequences: { ref: '2.3' },
                groups: { ref: '2.8' },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'EVN', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MRG', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                ],
                groups: { ref: '2.8' },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.8' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, EVN: EVN, PID: PID, PD1: PD1, MRG: MRG, PV1: PV1 },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
