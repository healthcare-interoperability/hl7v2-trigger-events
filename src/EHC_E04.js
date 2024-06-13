import { MSH, SFT, UAC, IVC, NTE, PSS, PSG, PSL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E04 extends TriggerEvent {
    static TriggerEvent = 'EHC_E04';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['REASSESSMENT_REQUEST_INFO'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['REASSESSMENT_REQUEST_INFO'] },
                    {
                        identifier: 'PSS',
                        sequence: '6',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '7',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '8',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                ],
                groups: {
                    REASSESSMENT_REQUEST_INFO: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '6', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { PRODUCT_SERVICE_GROUP: { sequence: { start: '7', stop: '8' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
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
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REASSESSMENT_REQUEST_INFO'] },
                    { identifier: 'NTE', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['REASSESSMENT_REQUEST_INFO'] },
                    {
                        identifier: 'PSS',
                        sequence: '6',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '7',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '8',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['REASSESSMENT_REQUEST_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                ],
                groups: { ref: '2.8' },
            },
            2.7: {
                sequences: { ref: '2.6' },
                groups: { ref: '2.8' },
            },
            '2.7.1': {
                sequences: { ref: '2.6' },
                groups: { ref: '2.8' },
            },
        },
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, IVC: IVC, NTE: NTE, PSS: PSS, PSG: PSG, PSL: PSL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
