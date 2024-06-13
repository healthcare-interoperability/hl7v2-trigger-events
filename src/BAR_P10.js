import { MSH, SFT, UAC, EVN, PID, PV1, DG1, GP1, PR1, GP2 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class BAR_P10 extends TriggerEvent {
    static TriggerEvent = 'BAR_P10';
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
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DG1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'GP1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PR1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                    { identifier: 'GP2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                ],
                groups: { PROCEDURE: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
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
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DG1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'GP1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PR1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                    { identifier: 'GP2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                ],
                groups: { PROCEDURE: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'EVN', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'DG1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'GP1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PR1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                    { identifier: 'GP2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PROCEDURE'] },
                ],
                groups: { PROCEDURE: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, EVN: EVN, PID: PID, PV1: PV1, DG1: DG1, GP1: GP1, PR1: PR1, GP2: GP2 },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
