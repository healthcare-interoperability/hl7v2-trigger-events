import { MSH, MSA, ERR, SFT, UAC, NTE, NK1, PID, PRT, ARV, SPM, OBX, SAC, ORC, OBR, TQ1, TQ2, ROL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class OPR_O38 extends TriggerEvent {
    static TriggerEvent = 'OPR_O38';
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
                    { identifier: 'NK1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'PRT', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'ARV', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'SPM', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    { identifier: 'SAC', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    {
                        identifier: 'ORC',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    { identifier: 'TQ1', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            ORDER: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN: {
                                        sequence: { start: '11', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            SPECIMEN_OBSERVATION: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: { sequence: { start: '15', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            TIMING: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
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
                    { identifier: 'NK1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'SPM', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    { identifier: 'SAC', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    {
                        identifier: 'ORC',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'ROL',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            ORDER: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN: {
                                        sequence: { start: '9', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            OBSERVATION_REQUEST: { sequence: { start: '12', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            TIMING: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'NK1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'PRT', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER'] },
                    { identifier: 'SPM', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '12',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    { identifier: 'SAC', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN'] },
                    {
                        identifier: 'ORC',
                        sequence: '14',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'OBSERVATION_REQUEST'],
                    },
                    { identifier: 'TQ1', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER', 'SPECIMEN', 'TIMING'] },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        subgroup: {
                            ORDER: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    SPECIMEN: {
                                        sequence: { start: '10', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            SPECIMEN_OBSERVATION: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: { sequence: { start: '14', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            TIMING: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
        segments: {
            MSH: MSH,
            MSA: MSA,
            ERR: ERR,
            SFT: SFT,
            UAC: UAC,
            NTE: NTE,
            NK1: NK1,
            PID: PID,
            PRT: PRT,
            ARV: ARV,
            SPM: SPM,
            OBX: OBX,
            SAC: SAC,
            ORC: ORC,
            OBR: OBR,
            TQ1: TQ1,
            TQ2: TQ2,
            ROL: ROL,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
