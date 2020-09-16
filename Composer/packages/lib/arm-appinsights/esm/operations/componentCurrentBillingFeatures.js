/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */
import { __assign } from 'tslib';
import * as msRest from '@azure/ms-rest-js';
import * as Mappers from '../models/componentCurrentBillingFeaturesMappers';
import * as Parameters from '../models/parameters';
/** Class representing a ComponentCurrentBillingFeatures. */
var ComponentCurrentBillingFeatures = /** @class */ (function () {
  /**
   * Create a ComponentCurrentBillingFeatures.
   * @param {ApplicationInsightsManagementClientContext} client Reference to the service client.
   */
  function ComponentCurrentBillingFeatures(client) {
    this.client = client;
  }
  ComponentCurrentBillingFeatures.prototype.get = function (resourceGroupName, resourceName, options, callback) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        options: options,
      },
      getOperationSpec,
      callback
    );
  };
  ComponentCurrentBillingFeatures.prototype.update = function (
    resourceGroupName,
    resourceName,
    billingFeaturesProperties,
    options,
    callback
  ) {
    return this.client.sendOperationRequest(
      {
        resourceGroupName: resourceGroupName,
        resourceName: resourceName,
        billingFeaturesProperties: billingFeaturesProperties,
        options: options,
      },
      updateOperationSpec,
      callback
    );
  };
  return ComponentCurrentBillingFeatures;
})();
export { ComponentCurrentBillingFeatures };
// Operation Specifications
var serializer = new msRest.Serializer(Mappers);
var getOperationSpec = {
  httpMethod: 'GET',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/currentbillingfeatures',
  urlParameters: [Parameters.resourceGroupName, Parameters.subscriptionId, Parameters.resourceName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentBillingFeatures,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  serializer: serializer,
};
var updateOperationSpec = {
  httpMethod: 'PUT',
  path:
    'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Insights/components/{resourceName}/currentbillingfeatures',
  urlParameters: [Parameters.resourceGroupName, Parameters.subscriptionId, Parameters.resourceName],
  queryParameters: [Parameters.apiVersion],
  headerParameters: [Parameters.acceptLanguage],
  requestBody: {
    parameterPath: 'billingFeaturesProperties',
    mapper: __assign(__assign({}, Mappers.ApplicationInsightsComponentBillingFeatures), { required: true }),
  },
  responses: {
    200: {
      bodyMapper: Mappers.ApplicationInsightsComponentBillingFeatures,
    },
    default: {
      bodyMapper: Mappers.CloudError,
    },
  },
  serializer: serializer,
};
//# sourceMappingURL=componentCurrentBillingFeatures.js.map
