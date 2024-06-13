import { MSH, MSA, ERR, SFT, UAC, NTE, PID, PRT, ARV, ORC, TQ1, TQ2, ODS, ODT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORD_O04 extends TriggerEvent {
    static TriggerEvent = 'ORD_O04';
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
                    { identifier: 'NTE', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'PRT', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'TQ1', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'TQ2', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'ODS', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'ORC', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'PRT', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'TQ1', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'TQ2', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'ODT', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'NTE', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '7', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER_DIET: {
                                sequence: { start: '11', stop: '16' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { TIMING_DIET: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                            ORDER_TRAY: {
                                sequence: { start: '17', stop: '22' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { TIMING_TRAY: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'ODS', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'NTE', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'ORC', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'ODT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'NTE', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER_DIET: { sequence: { start: '7', stop: '9' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                            ORDER_TRAY: { sequence: { start: '10', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'TQ1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'TQ2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'ODS', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'NTE', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'ORC', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'TQ1', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'TQ2', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'ODT', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER_DIET: {
                                sequence: { start: '8', stop: '12' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { TIMING_DIET: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                            ORDER_TRAY: {
                                sequence: { start: '13', stop: '17' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { TIMING_TRAY: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
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
                    { identifier: 'NTE', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'TQ1', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'TQ2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET', 'TIMING_DIET'] },
                    { identifier: 'ODS', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_DIET'] },
                    { identifier: 'ORC', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY', 'TIMING_TRAY'] },
                    { identifier: 'ODT', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_TRAY'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            PATIENT: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            ORDER_DIET: {
                                sequence: { start: '9', stop: '13' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { TIMING_DIET: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                            ORDER_TRAY: {
                                sequence: { start: '14', stop: '18' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { TIMING_TRAY: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            2.7: {
                sequences: { ref: '2.6' },
                groups: { ref: '2.6' },
            },
            '2.7.1': {
                sequences: { ref: '2.6' },
                groups: { ref: '2.6' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, SFT: SFT, UAC: UAC, NTE: NTE, PID: PID, PRT: PRT, ARV: ARV, ORC: ORC, TQ1: TQ1, TQ2: TQ2, ODS: ODS, ODT: ODT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
