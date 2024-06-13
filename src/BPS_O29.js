import { MSH, SFT, UAC, NTE, PID, PD1, PRT, ARV, PV1, PV2, ORC, TQ1, TQ2, BPO, BPX } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class BPS_O29 extends TriggerEvent {
    static TriggerEvent = 'BPS_O29';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PRT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'ARV', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PRT', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'PRT', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'BPX', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                    { identifier: 'NTE', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '10', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '13', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            TIMING: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PRODUCT: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'NTE', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'TQ1', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'BPX', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '9', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            TIMING: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PRODUCT: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
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
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'TQ1', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'NTE', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'BPX', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '10', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            TIMING: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PRODUCT: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.7: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PRT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'NTE', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT', 'PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'TQ1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER'] },
                    { identifier: 'BPX', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['ORDER', 'PRODUCT'] },
                ],
                groups: {
                    PATIENT: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: { PATIENT_VISIT: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                    },
                    ORDER: {
                        sequence: { start: '11', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            TIMING: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PRODUCT: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            '2.7.1': {
                sequences: { ref: '2.7' },
                groups: { ref: '2.7' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, NTE: NTE, PID: PID, PD1: PD1, PRT: PRT, ARV: ARV, PV1: PV1, PV2: PV2, ORC: ORC, TQ1: TQ1, TQ2: TQ2, BPO: BPO, BPX: BPX },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
