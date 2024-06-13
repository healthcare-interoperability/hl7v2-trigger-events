import { MSH, SFT, UAC, RFI, CTD, IVC, PSS, PSG, PID, PSL, OBR, NTE, OBX } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class EHC_E12 extends TriggerEvent {
    static TriggerEvent = 'EHC_E12';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'RFI', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'CTD', sequence: '5', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'IVC', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PSS', sequence: '7', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PSG', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PID', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'PSL', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'CTD', sequence: '11', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'OBR', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['REQUEST'] },
                    { identifier: 'OBX', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['REQUEST'] },
                ],
                groups: { REQUEST: { sequence: { start: '11', stop: '14' }, restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 }, subgroup: {} } },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, RFI: RFI, CTD: CTD, IVC: IVC, PSS: PSS, PSG: PSG, PID: PID, PSL: PSL, OBR: OBR, NTE: NTE, OBX: OBX },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
