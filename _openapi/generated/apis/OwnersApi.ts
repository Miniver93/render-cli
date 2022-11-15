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


import * as runtime from '../runtime.ts';
import type {
  GetOwners200ResponseInner,
  ModelError,
  Owner,
} from '../models/index.ts';
import {
    GetOwners200ResponseInnerFromJSON,
    GetOwners200ResponseInnerToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    OwnerFromJSON,
    OwnerToJSON,
} from '../models/index.ts';

export interface GetOwnerRequest {
    ownerId: string;
}

export interface GetOwnersRequest {
    name?: Array<string>;
    email?: Array<string>;
    cursor?: string;
    limit?: number;
}

/**
 * 
 */
export class OwnersApi extends runtime.BaseAPI {

    /**
     * Retrieve user or team
     */
    async getOwnerRaw(requestParameters: GetOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Owner>> {
        if (requestParameters.ownerId === null || requestParameters.ownerId === undefined) {
            throw new runtime.RequiredError('ownerId','Required parameter requestParameters.ownerId was null or undefined when calling getOwner.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/owners/{ownerId}`.replace(`{${"ownerId"}}`, encodeURIComponent(String(requestParameters.ownerId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OwnerFromJSON(jsonValue));
    }

    /**
     * Retrieve user or team
     */
    async getOwner(requestParameters: GetOwnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Owner> {
        const response = await this.getOwnerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * List authorized users and teams
     */
    async getOwnersRaw(requestParameters: GetOwnersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<GetOwners200ResponseInner>>> {
        const queryParameters: any = {};

        if (requestParameters.name) {
            queryParameters['name'] = requestParameters.name;
        }

        if (requestParameters.email) {
            queryParameters['email'] = requestParameters.email;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        if (requestParameters.limit !== undefined) {
            queryParameters['limit'] = requestParameters.limit;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/owners`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(GetOwners200ResponseInnerFromJSON));
    }

    /**
     * List authorized users and teams
     */
    async getOwners(requestParameters: GetOwnersRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<GetOwners200ResponseInner>> {
        const response = await this.getOwnersRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
