import { MSH, SFT, UAC, IVC, PSL, NTE, AUT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E21 extends TriggerEvent {
    static TriggerEvent = 'EHC_E21';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST'] },
                    { identifier: 'PSL', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'NTE', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                    { identifier: 'AUT', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['AUTHORIZATION_REQUEST', 'PSL_ITEM_INFO'] },
                ],
                groups: {
                    AUTHORIZATION_REQUEST: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: { PSL_ITEM_INFO: { sequence: { start: '5', stop: '7' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, IVC: IVC, PSL: PSL, NTE: NTE, AUT: AUT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
