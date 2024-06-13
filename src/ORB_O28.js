import { MSH, MSA, ERR, SFT, UAC, NTE, PID, PRT, ARV, ORC, TQ1, TQ2, BPO } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORB_O28 extends TriggerEvent {
    static TriggerEvent = 'ORB_O28';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'SFT', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'PRT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ARV', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER: {
                                        sequence: { start: '10', stop: '14' },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: { TIMING: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'SFT', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '6', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER: {
                                        sequence: { start: '7', stop: '10' },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: { TIMING: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
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
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'SFT', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'BPO', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER: {
                                        sequence: { start: '8', stop: '11' },
                                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                                        subgroup: { TIMING: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            2.7: {
                sequences: { ref: '2.6' },
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    ORDER: {
                                        sequence: { start: '8', stop: '11' },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: { TIMING: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '2.7.1': {
                sequences: { ref: '2.6' },
                groups: { ref: '2.7' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, SFT: SFT, UAC: UAC, NTE: NTE, PID: PID, PRT: PRT, ARV: ARV, ORC: ORC, TQ1: TQ1, TQ2: TQ2, BPO: BPO },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
