import { MSH, SFT, UAC, PID, PD1, PRT, NTE, NK1, ARV, OBX, PV1, PV2, ORC, TXA, OBR, TQ1, TQ2, CTD, FT1, CTI, SPM, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class ORU_R40 extends TriggerEvent {
    static TriggerEvent = 'ORU_R40';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'PRT', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    { identifier: 'ARV', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT'] },
                    {
                        identifier: 'OBX',
                        sequence: '10',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'PATIENT', 'PATIENT_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '11',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'PATIENT', 'PATIENT_OBSERVATION'],
                    },
                    { identifier: 'PV1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    { identifier: 'PRT', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'PATIENT', 'VISIT'] },
                    {
                        identifier: 'ORC',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'COMMON_ORDER'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'COMMON_ORDER'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '17',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'COMMON_ORDER', 'ORDER_DOCUMENT'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'COMMON_ORDER', 'ORDER_DOCUMENT'],
                    },
                    {
                        identifier: 'TXA',
                        sequence: '19',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'COMMON_ORDER', 'ORDER_DOCUMENT'],
                    },
                    { identifier: 'OBR', sequence: '20', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'NTE', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'PRT', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'TQ1',
                        sequence: '23',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'TIMING_QTY'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '24',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'TIMING_QTY'],
                    },
                    { identifier: 'CTD', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    {
                        identifier: 'OBX',
                        sequence: '26',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '27',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '28',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'OBSERVATION'],
                    },
                    { identifier: 'FT1', sequence: '29', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'CTI', sequence: '30', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION'] },
                    { identifier: 'SPM', sequence: '31', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN'] },
                    {
                        identifier: 'OBX',
                        sequence: '32',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    {
                        identifier: 'PRT',
                        sequence: '33',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PATIENT_RESULT', 'ORDER_OBSERVATION', 'SPECIMEN', 'SPECIMEN_OBSERVATION'],
                    },
                    { identifier: 'DSC', sequence: '34', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    PATIENT_RESULT: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '4', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: {
                                    PATIENT_OBSERVATION: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    VISIT: { sequence: { start: '12', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                },
                            },
                            ORDER_OBSERVATION: {
                                sequence: { start: null, stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    COMMON_ORDER: {
                                        sequence: { start: '15', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                        subgroup: { ORDER_DOCUMENT: { sequence: { start: '17', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                                    },
                                    TIMING_QTY: { sequence: { start: '23', stop: '24' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    OBSERVATION: { sequence: { start: '26', stop: '28' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    SPECIMEN: {
                                        sequence: { start: '31', stop: null },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: { SPECIMEN_OBSERVATION: { sequence: { start: '32', stop: '33' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                },
            },
        },
        segments: {
            MSH: MSH,
            SFT: SFT,
            UAC: UAC,
            PID: PID,
            PD1: PD1,
            PRT: PRT,
            NTE: NTE,
            NK1: NK1,
            ARV: ARV,
            OBX: OBX,
            PV1: PV1,
            PV2: PV2,
            ORC: ORC,
            TXA: TXA,
            OBR: OBR,
            TQ1: TQ1,
            TQ2: TQ2,
            CTD: CTD,
            FT1: FT1,
            CTI: CTI,
            SPM: SPM,
            DSC: DSC,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
