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
/**
 * 
 * @export
 * @interface DockerDetails
 */
export interface DockerDetails {
    /**
     * 
     * @type {string}
     * @memberof DockerDetails
     */
    dockerCommand: string;
    /**
     * 
     * @type {string}
     * @memberof DockerDetails
     */
    dockerContext: string;
    /**
     * 
     * @type {string}
     * @memberof DockerDetails
     */
    dockerfilePath: string;
}

/**
 * Check if a given object implements the DockerDetails interface.
 */
export function instanceOfDockerDetails(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "dockerCommand" in value;
    isInstance = isInstance && "dockerContext" in value;
    isInstance = isInstance && "dockerfilePath" in value;

    return isInstance;
}

export function DockerDetailsFromJSON(json: any): DockerDetails {
    return DockerDetailsFromJSONTyped(json, false);
}

export function DockerDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): DockerDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dockerCommand': json['dockerCommand'],
        'dockerContext': json['dockerContext'],
        'dockerfilePath': json['dockerfilePath'],
    };
}

export function DockerDetailsToJSON(value?: DockerDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dockerCommand': value.dockerCommand,
        'dockerContext': value.dockerContext,
        'dockerfilePath': value.dockerfilePath,
    };
}

