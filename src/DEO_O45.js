import { MSH, STF, UAC, PID, OBX, ARV, NTE, PV1, OBR } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class DEO_O45 extends TriggerEvent {
    static TriggerEvent = 'DEO_O45';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'STF', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'OBX', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'ARV', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR', 'DONOR_REGISTRATION'] },
                    { identifier: 'NTE', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR', 'DONOR_REGISTRATION'] },
                    { identifier: 'OBR', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR_ORDER'] },
                    { identifier: 'NTE', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR_ORDER'] },
                    { identifier: 'OBX', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR_ORDER', 'DONATION_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR_ORDER', 'DONATION_OBSERVATION'] },
                ],
                groups: {
                    DONNOR: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { DONOR_REGISTRATION: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    DONNOR_ORDER: {
                        sequence: { start: '10', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: { DONATION_OBSERVATION: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                    },
                },
            },
        },
        segments: { MSH: MSH, STF: STF, UAC: UAC, PID: PID, OBX: OBX, ARV: ARV, NTE: NTE, PV1: PV1, OBR: OBR },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
