import { MSH, SFT, UAC, EVN, PID, PD1, PRT, ROL, PV1, PV2, DB1, ORC, TQ1, TQ2, OBR, NTE, OBX, DG1, DRG, GT1, IN1, IN2, IN3, ACC, FT1, PR1 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class DFT_P11 extends TriggerEvent {
    static TriggerEvent = 'DFT_P11';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PRT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'ROL', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PV1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'ROL', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DB1', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'ORC', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER'] },
                    { identifier: 'TQ1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'TQ2', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'OBR', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'OBX', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'DG1', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DRG', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'GT1', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IN1', sequence: '24', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN2', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN3', sequence: '26', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'PRT', sequence: '27', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ROL', sequence: '28', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ACC', sequence: '29', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'FT1', sequence: '30', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'PR1', sequence: '31', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'PRT', sequence: '32', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ROL', sequence: '33', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ORC', sequence: '34', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER'] },
                    {
                        identifier: 'TQ1',
                        sequence: '35',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '36',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '37',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '38',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '39',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '40',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    { identifier: 'DG1', sequence: '41', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'DRG', sequence: '42', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'GT1', sequence: '43', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'IN1', sequence: '44', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN2', sequence: '45', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN3', sequence: '46', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'PRT', sequence: '47', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'ROL', sequence: '48', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                ],
                groups: {
                    COMMON_ORDER: {
                        sequence: { start: '14', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            TIMING_QUANTITY: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            ORDER: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            OBSERVATION: { sequence: { start: '19', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                    INSURANCE: { sequence: { start: '24', stop: '28' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    FINANCIAL: {
                        sequence: { start: '30', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            FINANCIAL_PROCEDURE: { sequence: { start: '31', stop: '33' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            FINANCIAL_COMMON_ORDER: {
                                sequence: { start: '34', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: {
                                    FINANCIAL_TIMING_QUANTITY: { sequence: { start: '35', stop: '36' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    FINANCIAL_ORDER: { sequence: { start: '37', stop: '38' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                    FINANCIAL_OBSERVATION: { sequence: { start: '39', stop: '40' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            FINANCIAL_INSURANCE: { sequence: { start: '44', stop: '48' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.5: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'EVN', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ROL', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ROL', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DB1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'ORC', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER'] },
                    { identifier: 'TQ1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'TQ2', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'OBR', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'OBX', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'DG1', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DRG', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'GT1', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IN1', sequence: '21', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN2', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN3', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ROL', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ACC', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'FT1', sequence: '26', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'PR1', sequence: '27', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ROL', sequence: '28', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ORC', sequence: '29', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER'] },
                    {
                        identifier: 'TQ1',
                        sequence: '30',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '31',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '32',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '33',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '34',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '35',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    { identifier: 'DG1', sequence: '36', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'DRG', sequence: '37', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'GT1', sequence: '38', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'IN1', sequence: '39', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN2', sequence: '40', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN3', sequence: '41', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'ROL', sequence: '42', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                ],
                groups: {
                    COMMON_ORDER: {
                        sequence: { start: '11', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            TIMING_QUANTITY: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            ORDER: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            OBSERVATION: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                    INSURANCE: { sequence: { start: '21', stop: '24' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    FINANCIAL: {
                        sequence: { start: '26', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            FINANCIAL_PROCEDURE: { sequence: { start: '27', stop: '28' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            FINANCIAL_COMMON_ORDER: {
                                sequence: { start: '29', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: {
                                    FINANCIAL_TIMING_QUANTITY: { sequence: { start: '30', stop: '31' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    FINANCIAL_ORDER: { sequence: { start: '32', stop: '33' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                    FINANCIAL_OBSERVATION: { sequence: { start: '34', stop: '35' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            FINANCIAL_INSURANCE: { sequence: { start: '39', stop: '42' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'EVN', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ROL', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ROL', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DB1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'ORC', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER'] },
                    { identifier: 'TQ1', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'TQ2', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'TIMING_QUANTITY'] },
                    { identifier: 'OBR', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'ORDER'] },
                    { identifier: 'OBX', sequence: '17', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'NTE', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['COMMON_ORDER', 'OBSERVATION'] },
                    { identifier: 'DG1', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DRG', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'GT1', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IN1', sequence: '22', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN2', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'IN3', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ROL', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INSURANCE'] },
                    { identifier: 'ACC', sequence: '26', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'FT1', sequence: '27', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'PR1', sequence: '28', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ROL', sequence: '29', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_PROCEDURE'] },
                    { identifier: 'ORC', sequence: '30', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER'] },
                    {
                        identifier: 'TQ1',
                        sequence: '31',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'TQ2',
                        sequence: '32',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_TIMING_QUANTITY'],
                    },
                    {
                        identifier: 'OBR',
                        sequence: '33',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '34',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_ORDER'],
                    },
                    {
                        identifier: 'OBX',
                        sequence: '35',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    {
                        identifier: 'NTE',
                        sequence: '36',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['FINANCIAL', 'FINANCIAL_COMMON_ORDER', 'FINANCIAL_OBSERVATION'],
                    },
                    { identifier: 'DG1', sequence: '37', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'DRG', sequence: '38', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'GT1', sequence: '39', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL'] },
                    { identifier: 'IN1', sequence: '40', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN2', sequence: '41', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'IN3', sequence: '42', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                    { identifier: 'ROL', sequence: '43', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['FINANCIAL', 'FINANCIAL_INSURANCE'] },
                ],
                groups: {
                    COMMON_ORDER: {
                        sequence: { start: '12', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            TIMING_QUANTITY: { sequence: { start: '13', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            ORDER: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                            OBSERVATION: { sequence: { start: '17', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                    INSURANCE: { sequence: { start: '22', stop: '25' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    FINANCIAL: {
                        sequence: { start: '27', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            FINANCIAL_PROCEDURE: { sequence: { start: '28', stop: '29' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            FINANCIAL_COMMON_ORDER: {
                                sequence: { start: '30', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: {
                                    FINANCIAL_TIMING_QUANTITY: { sequence: { start: '31', stop: '32' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                    FINANCIAL_ORDER: { sequence: { start: '33', stop: '34' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                    FINANCIAL_OBSERVATION: { sequence: { start: '35', stop: '36' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            FINANCIAL_INSURANCE: { sequence: { start: '40', stop: '43' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
        segments: {
            MSH: MSH,
            SFT: SFT,
            UAC: UAC,
            EVN: EVN,
            PID: PID,
            PD1: PD1,
            PRT: PRT,
            ROL: ROL,
            PV1: PV1,
            PV2: PV2,
            DB1: DB1,
            ORC: ORC,
            TQ1: TQ1,
            TQ2: TQ2,
            OBR: OBR,
            NTE: NTE,
            OBX: OBX,
            DG1: DG1,
            DRG: DRG,
            GT1: GT1,
            IN1: IN1,
            IN2: IN2,
            IN3: IN3,
            ACC: ACC,
            FT1: FT1,
            PR1: PR1,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
