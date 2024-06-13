import { MSH, NTE, PID, PD1, PV1, PV2, IN1, IN2, IN3, GT1, AL1, ORC, ODS, OBX, ODT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class OMD_O01 extends TriggerEvent {
    static TriggerEvent = 'OMD_O01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'IN1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'INSURANCE'] },
                    { identifier: 'GT1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'AL1', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'ORC', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER_DIET'] },
                    { identifier: 'ODS', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER_DIET', 'DIET'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER_DIET', 'DIET'] },
                    { identifier: 'OBX', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER_DIET', 'DIET', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER_DIET', 'DIET', 'OBSERVATION'] },
                    { identifier: 'ORC', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER_TRAY'] },
                    { identifier: 'ODT', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER_TRAY'] },
                    { identifier: 'NTE', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER_TRAY'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '3', stop: '12' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT_VISIT: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '8', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                    ORDER_DIET: {
                        sequence: { start: '13', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            DIET: {
                                sequence: { start: '14', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { OBSERVATION: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                    ORDER_TRAY: { sequence: { start: '18', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
        },
        segments: { MSH: MSH, NTE: NTE, PID: PID, PD1: PD1, PV1: PV1, PV2: PV2, IN1: IN1, IN2: IN2, IN3: IN3, GT1: GT1, AL1: AL1, ORC: ORC, ODS: ODS, OBX: OBX, ODT: ODT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}