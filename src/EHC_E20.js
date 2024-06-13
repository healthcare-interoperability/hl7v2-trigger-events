import { MSH, SFT, UAC, IVC, CTD, LOC, ROL, PID, ACC, IN1, IN2, DG1, NTE, OBX, PSL, ADJ, PRT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E20 extends TriggerEvent {
    static TriggerEvent = 'EHC_E20';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'CTD', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'LOC', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'ROL', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'ACC', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'IN1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'INSURANCE'] },
                    { identifier: 'DG1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'DIAGNOSIS'] },
                    {
                        identifier: 'NTE',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'DIAGNOSIS'],
                    },
                    { identifier: 'OBX', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'PSL', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'ADJ', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'LOC', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'PRT', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'ROL', sequence: '20', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                ],
                groups: {
                    AUTHORIZATION_REQUEST: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PAT_INFO: {
                                sequence: { start: '8', stop: '14' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    INSURANCE: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                    DIAGNOSIS: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, subgroup: {} },
                                },
                            },
                            PSL_ITEM_INFO: { sequence: { start: '15', stop: '20' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'CTD', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'LOC', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'ROL', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'PID', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'ACC', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'IN1', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'INSURANCE'] },
                    { identifier: 'IN2', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'INSURANCE'] },
                    { identifier: 'DG1', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'DIAGNOSIS'] },
                    {
                        identifier: 'NTE',
                        sequence: '13',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO', 'DIAGNOSIS'],
                    },
                    { identifier: 'OBX', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PAT_INFO'] },
                    { identifier: 'PSL', sequence: '15', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'NTE', sequence: '16', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'ADJ', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'LOC', sequence: '18', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'ROL', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                ],
                groups: {
                    AUTHORIZATION_REQUEST: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PAT_INFO: {
                                sequence: { start: '8', stop: '14' },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    INSURANCE: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                    DIAGNOSIS: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                                },
                            },
                            PSL_ITEM_INFO: { sequence: { start: '15', stop: '19' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, IVC: IVC, CTD: CTD, LOC: LOC, ROL: ROL, PID: PID, ACC: ACC, IN1: IN1, IN2: IN2, DG1: DG1, NTE: NTE, OBX: OBX, PSL: PSL, ADJ: ADJ, PRT: PRT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
