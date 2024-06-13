import { MSH, SFT, UAC, MSA, ERR, QAK, QPD, RCP, PID, PD1, NK1, NTE, PV1, PV2, ORC, TQ1, TQ2, OBR, CTD, OBX, SPM, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class RSP_Z90 extends TriggerEvent {
    static TriggerEvent = 'RSP_Z90';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'TQ1', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'TIMING'] },
                    { identifier: 'OBR', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'NTE', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'CTD', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'OBX', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'SPM', sequence: '23', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'SPECIMEN'] },
                    { identifier: 'DSC', sequence: '25', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    QUERY_RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '9', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            COMMON_ORDER: {
                                sequence: { start: '15', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    TIMING: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    OBSERVATION: { sequence: { start: '21', stop: '22' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            SPECIMEN: { sequence: { start: '23', stop: '24' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.6: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MSA', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QPD', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RCP', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'PD1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'NK1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'NTE', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT'] },
                    { identifier: 'PV1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'PV2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'PATIENT', 'VISIT'] },
                    { identifier: 'ORC', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'TIMING'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'TIMING'] },
                    { identifier: 'OBR', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'CTD', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER'] },
                    { identifier: 'OBX', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'SPM', sequence: '22', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'SPECIMEN'] },
                    { identifier: 'OBX', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['QUERY_RESPONSE', 'SPECIMEN'] },
                    { identifier: 'DSC', sequence: '24', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {
                    QUERY_RESPONSE: {
                        sequence: { start: null, stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PATIENT: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { VISIT: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            COMMON_ORDER: {
                                sequence: { start: '14', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    TIMING: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    OBSERVATION: { sequence: { start: '20', stop: '21' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            SPECIMEN: { sequence: { start: '22', stop: '23' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            '2.5.1': {
                sequences: { ref: '2.5' },
                groups: { ref: '2.5' },
            },
        },
        segments: {
            MSH: MSH,
            SFT: SFT,
            UAC: UAC,
            MSA: MSA,
            ERR: ERR,
            QAK: QAK,
            QPD: QPD,
            RCP: RCP,
            PID: PID,
            PD1: PD1,
            NK1: NK1,
            NTE: NTE,
            PV1: PV1,
            PV2: PV2,
            ORC: ORC,
            TQ1: TQ1,
            TQ2: TQ2,
            OBR: OBR,
            CTD: CTD,
            OBX: OBX,
            SPM: SPM,
            DSC: DSC,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
