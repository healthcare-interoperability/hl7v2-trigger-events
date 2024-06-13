import { MSH, MSA, ERR, SFT, UAC, NTE, PID, PRT, ARV, SPM, OBX, SAC, ORC, TQ1, TQ2, OBR, ROL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORL_O34 extends TriggerEvent {
    static TriggerEvent = 'ORL_O34';
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
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'PRT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'ARV', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'SPM', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'] },
                    { identifier: 'PRT', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'] },
                    { identifier: 'SAC', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'ORC', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER'] },
                    { identifier: 'PRT', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    {
                        identifier: 'OBR',
                        sequence: '18',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '19',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: '7', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            SPECIMEN: {
                                sequence: { start: '10', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN_OBSERVATION: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    ORDER: {
                                        sequence: { start: '14', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            TIMING: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: { sequence: { start: '18', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                        },
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
                    { identifier: 'SPM', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN'] },
                    { identifier: 'SAC', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN'] },
                    { identifier: 'ORC', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER'] },
                    {
                        identifier: 'TQ1',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER', 'TIMING'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '12',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER', 'TIMING'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'SPM',
                        sequence: '14',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN'],
                    },
                    {
                        identifier: 'SAC',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN'],
                    },
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
                                    SPECIMEN: {
                                        sequence: { start: '7', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            ORDER: {
                                                sequence: { start: '10', stop: null },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                subgroup: {
                                                    TIMING: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                    OBSERVATION_REQUEST: {
                                                        sequence: { start: '13', stop: null },
                                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                        subgroup: {
                                                            SPECIMEN: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                                        },
                                                    },
                                                },
                                            },
                                        },
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
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'SPM', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'SAC', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'ORC', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    {
                        identifier: 'OBR',
                        sequence: '14',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'ROL',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: '7', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            SPECIMEN: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    ORDER: {
                                        sequence: { start: '11', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            TIMING: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            2.7: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'SFT', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'PRT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE'] },
                    { identifier: 'SPM', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'] },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'SPECIMEN_OBSERVATION'] },
                    { identifier: 'SAC', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN'] },
                    { identifier: 'ORC', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER'] },
                    { identifier: 'PRT', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'TIMING'] },
                    {
                        identifier: 'OBR',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'SPECIMEN', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: '7', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            SPECIMEN: {
                                sequence: { start: '9', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN_OBSERVATION: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    ORDER: {
                                        sequence: { start: '13', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            TIMING: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '2.7.1': {
                sequences: { ref: '2.7' },
                groups: { ref: '2.7' },
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, SFT: SFT, UAC: UAC, NTE: NTE, PID: PID, PRT: PRT, ARV: ARV, SPM: SPM, OBX: OBX, SAC: SAC, ORC: ORC, TQ1: TQ1, TQ2: TQ2, OBR: OBR, ROL: ROL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
