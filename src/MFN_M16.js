import { MSH, SFT, UAC, MFI, MFE, ITM, NTE, STZ, VND, PKG, PCE, IVT, ILT } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class MFN_M16 extends TriggerEvent {
    static TriggerEvent = 'MFN_M16';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SFT', sequence: '2', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'UAC', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFI', sequence: '4', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'MFE', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD'] },
                    { identifier: 'ITM', sequence: '6', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD'] },
                    { identifier: 'NTE', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD'] },
                    { identifier: 'STZ', sequence: '8', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'STERILIZATION'] },
                    { identifier: 'NTE', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'STERILIZATION'] },
                    { identifier: 'VND', sequence: '10', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'PURCHASING_VENDOR'] },
                    {
                        identifier: 'PKG',
                        sequence: '11',
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 },
                        isGroup: true,
                        groupPath: ['MATERIAL_ITEM_RECORD', 'PURCHASING_VENDOR', 'PACKAGING'],
                    },
                    {
                        identifier: 'PCE',
                        sequence: '12',
                        restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                        isGroup: true,
                        groupPath: ['MATERIAL_ITEM_RECORD', 'PURCHASING_VENDOR', 'PACKAGING'],
                    },
                    { identifier: 'IVT', sequence: '13', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'MATERIAL_LOCATION'] },
                    { identifier: 'ILT', sequence: '14', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'MATERIAL_LOCATION'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['MATERIAL_ITEM_RECORD', 'MATERIAL_LOCATION'] },
                ],
                groups: {
                    MATERIAL_ITEM_RECORD: {
                        sequence: { start: '5', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            STERILIZATION: { sequence: { start: '8', stop: '9' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PURCHASING_VENDOR: {
                                sequence: { start: '10', stop: null },
                                restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 },
                                subgroup: { PACKAGING: { sequence: { start: '11', stop: '12' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} } },
                            },
                            MATERIAL_LOCATION: { sequence: { start: '13', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
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
        segments: { MSH: MSH, SFT: SFT, UAC: UAC, MFI: MFI, MFE: MFE, ITM: ITM, NTE: NTE, STZ: STZ, VND: VND, PKG: PKG, PCE: PCE, IVT: IVT, ILT: ILT },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
