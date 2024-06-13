import { MSH, SFT, UAC, IVC, PYE, CTD, NTE, PSS, PSG, PSL } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E02 extends TriggerEvent {
    static TriggerEvent = 'EHC_E02';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_INFORMATION_CANCEL'] },
                    { identifier: 'PYE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_INFORMATION_CANCEL'] },
                    { identifier: 'CTD', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INVOICE_INFORMATION_CANCEL'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INVOICE_INFORMATION_CANCEL'] },
                    {
                        identifier: 'PSS',
                        sequence: '8',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_INFORMATION_CANCEL', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '9',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_INFORMATION_CANCEL', 'PRODUCT_SERVICE_SECTION', 'PSG'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '10',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['INVOICE_INFORMATION_CANCEL', 'PRODUCT_SERVICE_SECTION', 'PSG'],
                    },
                ],
                groups: {
                    INVOICE_INFORMATION_CANCEL: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { PSG: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
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
                    { identifier: 'IVC', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_INFORMATION'] },
                    { identifier: 'PYE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_INFORMATION'] },
                    { identifier: 'CTD', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INVOICE_INFORMATION'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INVOICE_INFORMATION'] },
                    { identifier: 'PSS', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_INFORMATION', 'PRODUCT_SERVICE_SECTION'] },
                    {
                        identifier: 'PSG',
                        sequence: '9',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_INFORMATION', 'PRODUCT_SERVICE_SECTION', 'PSG'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '10',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['INVOICE_INFORMATION', 'PRODUCT_SERVICE_SECTION', 'PSG'],
                    },
                ],
                groups: {
                    INVOICE_INFORMATION: {
                        sequence: { start: '4', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '8', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { PSG: { sequence: { start: '9', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, IVC: IVC, PYE: PYE, CTD: CTD, NTE: NTE, PSS: PSS, PSG: PSG, PSL: PSL },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
