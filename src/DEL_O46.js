import { MSH, STF, UAC, PID, PD1, OBX, NTE, AL1, ARV, PV1, DON } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class DEL_O46 extends TriggerEvent {
    static TriggerEvent = 'DEL_O46';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'STF', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'OBX', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'AL1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'ARV', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR'] },
                    { identifier: 'PV1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['DONNOR', 'DONOR_REGISTRATION'] },
                    { identifier: 'NTE', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['DONNOR', 'DONOR_REGISTRATION'] },
                    { identifier: 'DON', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                ],
                groups: {
                    DONNOR: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { DONOR_REGISTRATION: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                },
            },
        },
        segments: { MSH: MSH, STF: STF, UAC: UAC, PID: PID, PD1: PD1, OBX: OBX, NTE: NTE, AL1: AL1, ARV: ARV, PV1: PV1, DON: DON },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
