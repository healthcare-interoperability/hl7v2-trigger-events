import { MSH, PID, PD1, NTE, PV1, PV2, ORC, OBR, OBX, CTI, DSC, NK1, CTD, FT1, SFT, SPM, UAC, ROL, TQ1, TQ2 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORU_W01 extends TriggerEvent {
    static TriggerEvent = 'ORU_W01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION'] },
                    { identifier: 'OBR', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION'] },
                    { identifier: 'OBX', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION', 'OBSERVATION'] },
                    { identifier: 'CTI', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESPONSE', 'ORDER_OBSERVATION'] },
                    { identifier: 'DSC', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '2', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '5', stop: '6' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            ORDER_OBSERVATION: {
                                sequence: { start: '7', stop: '12' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { OBSERVATION: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            '2.3.1': {
                sequences: { ref: '2.3' },
                groups: { ref: '2.3' },
            },
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'OBR', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTD', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'OBX',
                        sequence: '12',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    { identifier: 'FT1', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTI', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'DSC', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    PATIENT_RESULT: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '2', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '6', stop: '7' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            ORDER_OBSERVATION: {
                                sequence: { start: '8', stop: '15' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { OBSERVATION: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'OBR', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTD', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'OBX',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    { identifier: 'FT1', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTI', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'SPM', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN'],
                    },
                    { identifier: 'DSC', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    PATIENT_RESULT: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '3', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            ORDER_OBSERVATION: {
                                sequence: { start: '9', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    OBSERVATION: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                    SPECIMEN: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'OBR', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'ROL', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'TQ1',
                        sequence: '15',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'TIMING_QTY'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'TIMING_QTY'],
                    },
                    { identifier: 'CTD', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'OBX',
                        sequence: '18',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '19',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    { identifier: 'FT1', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTI', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'SPM', sequence: '22', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '23',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN'],
                    },
                    { identifier: 'DSC', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    PATIENT_RESULT: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '4', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            ORDER_OBSERVATION: {
                                sequence: { start: '11', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    TIMING_QTY: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    OBSERVATION: { sequence: { start: '18', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    SPECIMEN: { sequence: { start: '22', stop: '23' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                        },
                    },
                },
            },
        },
        segments: {
            MSH: MSH,
            PID: PID,
            PD1: PD1,
            NTE: NTE,
            PV1: PV1,
            PV2: PV2,
            ORC: ORC,
            OBR: OBR,
            OBX: OBX,
            CTI: CTI,
            DSC: DSC,
            NK1: NK1,
            CTD: CTD,
            FT1: FT1,
            SFT: SFT,
            SPM: SPM,
            UAC: UAC,
            ROL: ROL,
            TQ1: TQ1,
            TQ2: TQ2,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
