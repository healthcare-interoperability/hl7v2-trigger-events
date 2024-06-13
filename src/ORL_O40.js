import { MSH, MSA, ERR, SFT, UAC, NTE, PID, PRT, ARV, ORC, TQ1, TQ2, OBR, SHP, PAC, SPM, SAC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORL_O40 extends TriggerEvent {
    static TriggerEvent = 'ORL_O40';
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
                    {
                        identifier: 'OBR',
                        sequence: '14',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'SHP',
                        sequence: '16',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT'],
                    },
                    {
                        identifier: 'PAC',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE'],
                    },
                    {
                        identifier: 'SPM',
                        sequence: '18',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE', 'SPECIMEN_IN_PACKAGE'],
                    },
                    {
                        identifier: 'SAC',
                        sequence: '19',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE', 'SPECIMEN_IN_PACKAGE', 'SPECIMEN_CONTAINER_IN_PACKAGE'],
                    },
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
                                        sequence: { start: '10', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            TIMING: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: {
                                                sequence: { start: '14', stop: null },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    SPECIMEN_SHIPMENT: {
                                                        sequence: { start: '16', stop: null },
                                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                        subgroup: {
                                                            PACKAGE: {
                                                                sequence: { start: '17', stop: null },
                                                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                                                subgroup: {
                                                                    SPECIMEN_IN_PACKAGE: {
                                                                        sequence: { start: '18', stop: null },
                                                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                                        subgroup: {
                                                                            SPECIMEN_CONTAINER_IN_PACKAGE: {
                                                                                sequence: { start: '19', stop: '19' },
                                                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                                                subgroup: {},
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
                    { identifier: 'PID', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'PRT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'PRT', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER'] },
                    { identifier: 'TQ1', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'TIMING'] },
                    {
                        identifier: 'OBR',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST'],
                    },
                    {
                        identifier: 'SHP',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT'],
                    },
                    {
                        identifier: 'PAC',
                        sequence: '16',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE'],
                    },
                    {
                        identifier: 'SPM',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE', 'SPECIMEN_IN_PACKAGE'],
                    },
                    {
                        identifier: 'SAC',
                        sequence: '18',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['RESPONSE', 'PATIENT', 'ORDER', 'OBSERVATION_REQUEST', 'SPECIMEN_SHIPMENT', 'PACKAGE', 'SPECIMEN_IN_PACKAGE', 'SPECIMEN_CONTAINER_IN_PACKAGE'],
                    },
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
                                        sequence: { start: '9', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: {
                                            TIMING: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                            OBSERVATION_REQUEST: {
                                                sequence: { start: '13', stop: null },
                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                                subgroup: {
                                                    SPECIMEN_SHIPMENT: {
                                                        sequence: { start: '15', stop: null },
                                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                        subgroup: {
                                                            PACKAGE: {
                                                                sequence: { start: '16', stop: null },
                                                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                                                subgroup: {
                                                                    SPECIMEN_IN_PACKAGE: {
                                                                        sequence: { start: '17', stop: null },
                                                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                                        subgroup: {
                                                                            SPECIMEN_CONTAINER_IN_PACKAGE: {
                                                                                sequence: { start: '18', stop: '18' },
                                                                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                                                                subgroup: {},
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
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, SFT: SFT, UAC: UAC, NTE: NTE, PID: PID, PRT: PRT, ARV: ARV, ORC: ORC, TQ1: TQ1, TQ2: TQ2, OBR: OBR, SHP: SHP, PAC: PAC, SPM: SPM, SAC: SAC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
