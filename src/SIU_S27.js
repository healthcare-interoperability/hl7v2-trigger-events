import { MSH, SCH, TQ1, NTE, PID, PD1, PV1, PV2, OBX, DG1, RGS, AIS, AIG, AIL, AIP } from '@healthcare-interoperability/hl7v2-segments';
import { TriggerEvent } from '@healthcare-interoperability/hl7v2-core';

export class SIU_S27 extends TriggerEvent {
    static TriggerEvent = 'SIU_S27';
    static Structure = {
        versions: {
            2.8: {
                sequences: [
                    {},
                    { identifier: 'MSH', sequence: '1', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'SCH', sequence: '2', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: false },
                    { identifier: 'TQ1', sequence: '3', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'NTE', sequence: '4', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: false },
                    { identifier: 'PID', sequence: '5', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PD1', sequence: '6', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV1', sequence: '7', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'PV2', sequence: '8', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 1 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'OBX', sequence: '9', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'DG1', sequence: '10', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['PATIENT'] },
                    { identifier: 'RGS', sequence: '11', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES'] },
                    { identifier: 'AIS', sequence: '12', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'NTE', sequence: '13', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'SERVICE'] },
                    { identifier: 'AIG', sequence: '14', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '15', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'GENERAL_RESOURCE'] },
                    { identifier: 'AIL', sequence: '16', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'NTE', sequence: '17', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'LOCATION_RESOURCE'] },
                    { identifier: 'AIP', sequence: '18', restrictions: { nillable: false, minOccurs: 1, maxOccurs: 1 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                    { identifier: 'NTE', sequence: '19', restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, isGroup: true, groupPath: ['RESOURCES', 'PERSONNEL_RESOURCE'] },
                ],
                groups: {
                    PATIENT: { sequence: { start: '5', stop: '10' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                    RESOURCES: {
                        sequence: { start: '11', stop: null },
                        restrictions: { nillable: false, minOccurs: 1, maxOccurs: 9999 },
                        subgroup: {
                            SERVICE: { sequence: { start: '12', stop: '13' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            GENERAL_RESOURCE: { sequence: { start: '14', stop: '15' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            LOCATION_RESOURCE: { sequence: { start: '16', stop: '17' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                            PERSONNEL_RESOURCE: { sequence: { start: '18', stop: '19' }, restrictions: { nillable: true, minOccurs: 0, maxOccurs: 9999 }, subgroup: {} },
                        },
                    },
                },
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
        segments: { MSH: MSH, SCH: SCH, TQ1: TQ1, NTE: NTE, PID: PID, PD1: PD1, PV1: PV1, PV2: PV2, OBX: OBX, DG1: DG1, RGS: RGS, AIS: AIS, AIG: AIG, AIL: AIL, AIP: AIP },
    };

    constructor(message, version = null) {
        super(message, version);
    }
}
