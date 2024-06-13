import { MSH, SFT, UAC, EVN, PID, PD1, PRT, ROL, PV1, PV2, DB1, OBX, AL1, DG1, DRG, PR1, GT1, NK1, IN1, IN2, IN3, ACC, UB1, UB2 } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class BAR_P01 extends TriggerEvent {
    static TriggerEvent = 'BAR_P01';
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
                    { identifier: 'PV1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PRT', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'ROL', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'PRT', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '23', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'PRT', sequence: '26', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ROL', sequence: '27', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '28', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '29', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '30', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: {
                    VISIT: {
                        sequence: { start: '9', stop: '30' },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PROCEDURE: { sequence: { start: '18', stop: '20' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '23', stop: '27' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: {
                    VISIT: {
                        sequence: { start: '5', stop: '21' },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PROCEDURE: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '16', stop: '18' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            '2.3.1': {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PV1', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: { ref: '2.3' },
            },
            2.4: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'EVN', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '3', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PD1', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ROL', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PV1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'ROL', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ROL', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: {
                    VISIT: {
                        sequence: { start: '6', stop: '24' },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PROCEDURE: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '18', stop: '21' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'ROL', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '19', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ROL', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: {
                    VISIT: {
                        sequence: { start: '7', stop: '25' },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PROCEDURE: { sequence: { start: '15', stop: '16' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '19', stop: '22' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
                    { identifier: 'PV1', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PV2', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'ROL', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DB1', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'OBX', sequence: '12', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'AL1', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DG1', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'DRG', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'PR1', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'ROL', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'PROCEDURE'] },
                    { identifier: 'GT1', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'NK1', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'IN1', sequence: '20', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '21', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'IN3', sequence: '22', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ROL', sequence: '23', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['VISIT', 'INSURANCE'] },
                    { identifier: 'ACC', sequence: '24', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB1', sequence: '25', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                    { identifier: 'UB2', sequence: '26', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['VISIT'] },
                ],
                groups: {
                    VISIT: {
                        sequence: { start: '8', stop: '26' },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PROCEDURE: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            INSURANCE: { sequence: { start: '20', stop: '23' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
            OBX: OBX,
            AL1: AL1,
            DG1: DG1,
            DRG: DRG,
            PR1: PR1,
            GT1: GT1,
            NK1: NK1,
            IN1: IN1,
            IN2: IN2,
            IN3: IN3,
            ACC: ACC,
            UB1: UB1,
            UB2: UB2,
        },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
