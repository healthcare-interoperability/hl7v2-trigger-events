import {
    MSH,
    SFT,
    UAC,
    MSA,
    ERR,
    PID,
    PD1,
    NK1,
    IN1,
    IN2,
    IN3,
    SCH,
    RGS,
    AIS,
    AIG,
    AIL,
    AIP,
    OBX,
    ORC,
    OBR,
    ODS,
    PR1,
    RF1,
    AL1,
    IAM,
    ACC,
    RMI,
    DB1,
    DG1,
    DRG,
    PDA,
    ROL,
    PRD,
    VAR,
    CTI,
    PV1,
    PV2,
    RXO,
    RXR,
    RXC,
    RXE,
    RXA,
    PRB,
    GOL,
    PTH,
    REL,
} from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class CCI_I22 extends TriggerEvent {
    static TriggerEvent = 'CCI_I22';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'NK1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IN1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN3', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'SCH', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['APPOINTMENT_HISTORY'] },
                    { identifier: 'RGS', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES'] },
                    {
                        identifier: 'AIS',
                        sequence: '14',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES', 'RESOURCE_DETAIL', 'RESOURCE_OBJECT'],
                    },
                    {
                        identifier: 'AIG',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES', 'RESOURCE_DETAIL', 'RESOURCE_OBJECT'],
                    },
                    {
                        identifier: 'AIL',
                        sequence: '16',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES', 'RESOURCE_DETAIL', 'RESOURCE_OBJECT'],
                    },
                    {
                        identifier: 'AIP',
                        sequence: '17',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES', 'RESOURCE_DETAIL', 'RESOURCE_OBJECT'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '18',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['APPOINTMENT_HISTORY', 'RESOURCES', 'RESOURCE_DETAIL'],
                    },
                    { identifier: 'ORC', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['CLINICAL_HISTORY'] },
                    {
                        identifier: 'OBR',
                        sequence: '20',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'ODS',
                        sequence: '21',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'PR1',
                        sequence: '22',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'RF1',
                        sequence: '23',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'AL1',
                        sequence: '24',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'IAM',
                        sequence: '25',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'ACC',
                        sequence: '26',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'RMI',
                        sequence: '27',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'DB1',
                        sequence: '28',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'DG1',
                        sequence: '29',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'DRG',
                        sequence: '30',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'PDA',
                        sequence: '31',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL', 'CLINICAL_HISTORY_OBJECT'],
                    },
                    { identifier: 'OBX', sequence: '32', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['CLINICAL_HISTORY', 'CLINICAL_HISTORY_DETAIL'] },
                    {
                        identifier: 'ROL',
                        sequence: '33',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'ROLE_CLINICAL_HISTORY', 'ROLE_CLINICAL_HISTORY_OBJECT'],
                    },
                    {
                        identifier: 'PRD',
                        sequence: '34',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['CLINICAL_HISTORY', 'ROLE_CLINICAL_HISTORY', 'ROLE_CLINICAL_HISTORY_OBJECT'],
                    },
                    { identifier: 'VAR', sequence: '35', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['CLINICAL_HISTORY', 'ROLE_CLINICAL_HISTORY'] },
                    { identifier: 'CTI', sequence: '36', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['CLINICAL_HISTORY'] },
                    { identifier: 'PV1', sequence: '37', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_VISIT'] },
                    { identifier: 'PV2', sequence: '38', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT_VISIT'] },
                    { identifier: 'ORC', sequence: '39', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MEDICATION_HISTORY'] },
                    { identifier: 'RXO', sequence: '40', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ORDER_DETAIL'] },
                    {
                        identifier: 'RXR',
                        sequence: '41',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ORDER_DETAIL'],
                    },
                    { identifier: 'RXC', sequence: '42', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ORDER_DETAIL'] },
                    { identifier: 'OBX', sequence: '43', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ORDER_DETAIL'] },
                    {
                        identifier: 'RXE',
                        sequence: '44',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ENCODING_DETAIL'],
                    },
                    {
                        identifier: 'RXR',
                        sequence: '45',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ENCODING_DETAIL'],
                    },
                    {
                        identifier: 'RXC',
                        sequence: '46',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ENCODING_DETAIL'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '47',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ENCODING_DETAIL'],
                    },
                    {
                        identifier: 'RXA',
                        sequence: '48',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ADMINISTRATION_DETAIL'],
                    },
                    {
                        identifier: 'RXR',
                        sequence: '49',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ADMINISTRATION_DETAIL'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '50',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MEDICATION_HISTORY', 'MEDICATION_ADMINISTRATION_DETAIL'],
                    },
                    { identifier: 'CTI', sequence: '51', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MEDICATION_HISTORY'] },
                    { identifier: 'PRB', sequence: '52', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PROBLEM'] },
                    { identifier: 'VAR', sequence: '53', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PROBLEM'] },
                    { identifier: 'ROL', sequence: '54', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PROBLEM', 'ROLE_PROBLEM', 'ROLE_PROBLEM_OBJECT'] },
                    { identifier: 'PRD', sequence: '55', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PROBLEM', 'ROLE_PROBLEM', 'ROLE_PROBLEM_OBJECT'] },
                    { identifier: 'VAR', sequence: '56', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PROBLEM', 'ROLE_PROBLEM'] },
                    { identifier: 'OBX', sequence: '57', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PROBLEM'] },
                    { identifier: 'GOL', sequence: '58', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['GOAL'] },
                    { identifier: 'VAR', sequence: '59', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['GOAL'] },
                    { identifier: 'ROL', sequence: '60', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['GOAL', 'ROLE_GOAL', 'ROAL_GOAL_OBJECT'] },
                    { identifier: 'PRD', sequence: '61', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['GOAL', 'ROLE_GOAL', 'ROAL_GOAL_OBJECT'] },
                    { identifier: 'VAR', sequence: '62', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['GOAL', 'ROLE_GOAL'] },
                    { identifier: 'OBX', sequence: '63', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['GOAL'] },
                    { identifier: 'PTH', sequence: '64', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATHWAY'] },
                    { identifier: 'VAR', sequence: '65', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATHWAY'] },
                    { identifier: 'ROL', sequence: '66', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATHWAY', 'ROLE_PATHWAY', 'ROLE_PATHWAY_OBJECT'] },
                    { identifier: 'PRD', sequence: '67', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATHWAY', 'ROLE_PATHWAY', 'ROLE_PATHWAY_OBJECT'] },
                    { identifier: 'VAR', sequence: '68', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATHWAY', 'ROLE_PATHWAY'] },
                    { identifier: 'OBX', sequence: '69', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATHWAY'] },
                    { identifier: 'REL', sequence: '70', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                ],
                groups: {
                    INSURANCE: { sequence: { start: '9', stop: '11' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    APPOINTMENT_HISTORY: {
                        sequence: { start: '12', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            RESOURCES: {
                                sequence: { start: '13', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: {
                                    RESOURCE_DETAIL: {
                                        sequence: { start: null, stop: '18' },
                                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                        subgroup: { RESOURCE_OBJECT: { sequence: { start: '14', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                    CLINICAL_HISTORY: {
                        sequence: { start: '19', stop: '36' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            CLINICAL_HISTORY_DETAIL: {
                                sequence: { start: null, stop: '32' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { CLINICAL_HISTORY_OBJECT: { sequence: { start: '20', stop: '31' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                            ROLE_CLINICAL_HISTORY: {
                                sequence: { start: null, stop: '35' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { ROLE_CLINICAL_HISTORY_OBJECT: { sequence: { start: '33', stop: '34' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                    PATIENT_VISIT: { sequence: { start: '37', stop: '38' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                    MEDICATION_HISTORY: {
                        sequence: { start: '39', stop: '51' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            MEDICATION_ORDER_DETAIL: { sequence: { start: '40', stop: '43' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            MEDICATION_ENCODING_DETAIL: { sequence: { start: '44', stop: '47' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            MEDICATION_ADMINISTRATION_DETAIL: { sequence: { start: '48', stop: '50' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                    PROBLEM: {
                        sequence: { start: '52', stop: '57' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            ROLE_PROBLEM: {
                                sequence: { start: null, stop: '56' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { ROLE_PROBLEM_OBJECT: { sequence: { start: '54', stop: '55' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                    GOAL: {
                        sequence: { start: '58', stop: '63' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            ROLE_GOAL: {
                                sequence: { start: null, stop: '62' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { ROAL_GOAL_OBJECT: { sequence: { start: '60', stop: '61' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                    PATHWAY: {
                        sequence: { start: '64', stop: '69' },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            ROLE_PATHWAY: {
                                sequence: { start: null, stop: '68' },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { ROLE_PATHWAY_OBJECT: { sequence: { start: '66', stop: '67' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} } },
                            },
                        },
                    },
                },
            },
            2.7: {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.8' },
                groups: { ref: '2.8' },
            },
        },
        segments: {
            MSH: MSH,
            SFT: SFT,
            UAC: UAC,
            MSA: MSA,
            ERR: ERR,
            PID: PID,
            PD1: PD1,
            NK1: NK1,
            IN1: IN1,
            IN2: IN2,
            IN3: IN3,
            SCH: SCH,
            RGS: RGS,
            AIS: AIS,
            AIG: AIG,
            AIL: AIL,
            AIP: AIP,
            OBX: OBX,
            ORC: ORC,
            OBR: OBR,
            ODS: ODS,
            PR1: PR1,
            RF1: RF1,
            AL1: AL1,
            IAM: IAM,
            ACC: ACC,
            RMI: RMI,
            DB1: DB1,
            DG1: DG1,
            DRG: DRG,
            PDA: PDA,
            ROL: ROL,
            PRD: PRD,
            VAR: VAR,
            CTI: CTI,
            PV1: PV1,
            PV2: PV2,
            RXO: RXO,
            RXR: RXR,
            RXC: RXC,
            RXE: RXE,
            RXA: RXA,
            PRB: PRB,
            GOL: GOL,
            PTH: PTH,
            REL: REL,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
