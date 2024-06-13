import { MSH, MSA, ERR, QAK, RDF, RDT, DSC } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class TBR_Q01 extends TriggerEvent {
    static TriggerEvent = 'TBR_Q01';
    static Structure = {
        versions: {
            2.3: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MSA', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'ERR', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'QAK', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RDF', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'RDT', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'DSC', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                ],
                groups: {},
            },
        },
        segments: { MSH: MSH, MSA: MSA, ERR: ERR, QAK: QAK, RDF: RDF, RDT: RDT, DSC: DSC },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
