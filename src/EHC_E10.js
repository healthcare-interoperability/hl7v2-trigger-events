import { MSH, SFT, UAC, MSA, ERR, IPR, NTE, PYE, IN1, IN2, IVC, PSS, PSG, PSL, ADJ } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E10 extends TriggerEvent {
    static TriggerEvent = 'EHC_E10';
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
                    { identifier: 'IPR', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    { identifier: 'PYE', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    { identifier: 'IN1', sequence: '9', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    { identifier: 'IN2', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    { identifier: 'IVC', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['INVOICE_PROCESSING_RESULTS_INFO'] },
                    {
                        identifier: 'PSS',
                        sequence: '12',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_PROCESSING_RESULTS_INFO', 'PRODUCT_SERVICE_SECTION'],
                    },
                    {
                        identifier: 'PSG',
                        sequence: '13',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_PROCESSING_RESULTS_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP'],
                    },
                    {
                        identifier: 'PSL',
                        sequence: '14',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['INVOICE_PROCESSING_RESULTS_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PRODUCT_SERVICE_LINE_INFO'],
                    },
                    {
                        identifier: 'ADJ',
                        sequence: '15',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['INVOICE_PROCESSING_RESULTS_INFO', 'PRODUCT_SERVICE_SECTION', 'PRODUCT_SERVICE_GROUP', 'PRODUCT_SERVICE_LINE_INFO'],
                    },
                ],
                groups: {
                    INVOICE_PROCESSING_RESULTS_INFO: {
                        sequence: { start: '6', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            PRODUCT_SERVICE_SECTION: {
                                sequence: { start: '12', stop: null },
                                restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                subgroup: {
                                    PRODUCT_SERVICE_GROUP: {
                                        sequence: { start: '13', stop: null },
                                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                                        subgroup: {
                                            PRODUCT_SERVICE_LINE_INFO: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} },
                                        },
                                    },
                                },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, MSA: MSA, ERR: ERR, IPR: IPR, NTE: NTE, PYE: PYE, IN1: IN1, IN2: IN2, IVC: IVC, PSS: PSS, PSG: PSG, PSL: PSL, ADJ: ADJ },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
