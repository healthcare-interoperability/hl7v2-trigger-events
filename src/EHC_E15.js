import { MSH, SFT, UAC, PMT, PYE, IPR, IVC, PSS, PSG, PSL, ADJ, PRT, ROL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E15 extends TriggerEvent {
    static TriggerEvent = 'EHC_E15';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PMT', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_HEADER_INFO'] },
                    { identifier: 'PYE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_HEADER_INFO'] },
                    { identifier: 'IPR', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO'] },
                    { identifier: 'IVC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO'] },
                    {
                        identifier: 'PSS',
                        sequence: '8',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '9',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '10',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PSL_ITEM_INFO'],
                    },
                    {
                        identifier: 'ADJ',
                        sequence: '11',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PSL_ITEM_INFO'],
                    },
                    { identifier: 'ADJ', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ADJUSTMENT_PAYEE'] },
                    { identifier: 'PRT', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['ADJUSTMENT_PAYEE'] },
                    { identifier: 'ROL', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['ADJUSTMENT_PAYEE'] },
                ],
                groups: {
                    PAYMENT_REMITTANCE_HEADER_INFO: { sequence: { start: '4', stop: '5' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, subgroup: {} },
                    PAYMENT_REMITTANCE_DETAIL_INFO: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    PRODUCT_SERVICE_GROUP: {
                                        sequence: { start: '9', stop: null },
                                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                        subgroup: { PSL_ITEM_INFO: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                    ADJUSTMENT_PAYEE: { sequence: { start: '12', stop: '14' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                },
            },
            2.6: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PMT', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_HEADER_INFO'] },
                    { identifier: 'PYE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_HEADER_INFO'] },
                    { identifier: 'IPR', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO'] },
                    { identifier: 'IVC', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO'] },
                    {
                        identifier: 'PSS',
                        sequence: '8',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '9',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '10',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PSL_ITEM_INFO'],
                    },
                    {
                        identifier: 'ADJ',
                        sequence: '11',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['PAYMENT_REMITTANCE_DETAIL_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PSL_ITEM_INFO'],
                    },
                    { identifier: 'ADJ', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['ADJUSTMENT_PAYEE'] },
                    { identifier: 'ROL', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['ADJUSTMENT_PAYEE'] },
                ],
                groups: {
                    PAYMENT_REMITTANCE_HEADER_INFO: { sequence: { start: '4', stop: '5' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, subgroup: {} },
                    PAYMENT_REMITTANCE_DETAIL_INFO: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    PRODUCT_SERVICE_GROUP: {
                                        sequence: { start: '9', stop: null },
                                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                        subgroup: { PSL_ITEM_INFO: { sequence: { start: '10', stop: '11' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
                                    },
                                },
                            },
                        },
                    },
                    ADJUSTMENT_PAYEE: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, PMT: PMT, PYE: PYE, IPR: IPR, IVC: IVC, PSS: PSS, PSG: PSG, PSL: PSL, ADJ: ADJ, PRT: PRT, ROL: ROL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
