import { MSH, SFT, UAC, MSA, ERR, QAK, QPD, IVC, PSG, PSL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class RSP_E22 extends TriggerEvent {
    static TriggerEvent = 'RSP_E22';
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
                    { identifier: 'QAK', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_ACK'] },
                    { identifier: 'QPD', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_ACK'] },
                    { identifier: 'IVC', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_ACK', 'AUTHORIZATION_INFO'] },
                    { identifier: 'PSG', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['QUERY_ACK', 'AUTHORIZATION_INFO'] },
                    {
                        identifier: 'PSL',
                        sequence: '10',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['QUERY_ACK', 'AUTHORIZATION_INFO', 'PSL_ITEM_INFO'],
                    },
                ],
                groups: {
                    QUERY_ACK: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            AUTHORIZATION_INFO: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 },
                                subgroup: { PSL_ITEM_INFO: { sequence: { start: '10', stop: '10' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                            },
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
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, MSA: MSA, ERR: ERR, QAK: QAK, QPD: QPD, IVC: IVC, PSG: PSG, PSL: PSL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
