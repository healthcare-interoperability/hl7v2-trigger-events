import { MSH, SFT, UAC, MSA, ERR, IVC, PSL, AUT, ADJ } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E24 extends TriggerEvent {
    static TriggerEvent = 'EHC_E24';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MSA', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO'] },
                    { identifier: 'PSL', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO'] },
                    { identifier: 'AUT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO'] },
                    { identifier: 'ADJ', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO'] },
                ],
                groups: {
                    AUTHORIZATION_RESPONSE_INFO: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: { PSL_ITEM_INFO: { sequence: { start: '7', stop: '9' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                    },
                },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'MSA', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO'] },
                    { identifier: 'PSL', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO'] },
                    { identifier: 'AUT', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO'] },
                    {
                        identifier: 'ADJ',
                        sequence: '9',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['AUTHORIZATION_RESPONSE_INFO', 'PSL_ITEM_INFO', 'PAYER_ADJUSTMENT'],
                    },
                ],
                groups: {
                    AUTHORIZATION_RESPONSE_INFO: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PSL_ITEM_INFO: {
                                sequence: { start: '7', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: { PAYER_ADJUSTMENT: { sequence: { start: '9', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, MSA: MSA, ERR: ERR, IVC: IVC, PSL: PSL, AUT: AUT, ADJ: ADJ },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
