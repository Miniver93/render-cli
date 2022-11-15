/* tslint:disable */
/* eslint-disable */
/**
 * Render Public API
 * Manage everything about your Render services
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: support@render.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime.ts';
import type { Service } from './Service.ts';
import {
    ServiceFromJSON,
    ServiceFromJSONTyped,
    ServiceToJSON,
} from './Service.ts';

/**
 * 
 * @export
 * @interface CreateService201Response
 */
export interface CreateService201Response {
    /**
     * 
     * @type {Service}
     * @memberof CreateService201Response
     */
    service?: Service;
    /**
     * 
     * @type {string}
     * @memberof CreateService201Response
     */
    deployId?: string;
}

/**
 * Check if a given object implements the CreateService201Response interface.
 */
export function instanceOfCreateService201Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateService201ResponseFromJSON(json: any): CreateService201Response {
    return CreateService201ResponseFromJSONTyped(json, false);
}

export function CreateService201ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateService201Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'service': !exists(json, 'service') ? undefined : ServiceFromJSON(json['service']),
        'deployId': !exists(json, 'deployId') ? undefined : json['deployId'],
    };
}

export function CreateService201ResponseToJSON(value?: CreateService201Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'service': ServiceToJSON(value.service),
        'deployId': value.deployId,
    };
}

