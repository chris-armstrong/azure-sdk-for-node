/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const msRest = require('ms-rest');
const msRestAzure = require('ms-rest-azure');
const WebResource = msRest.WebResource;

/**
 * Retrieve the job stream identified by job stream id.
 *
 * @param {string} resourceGroupName Name of an Azure Resource group.
 *
 * @param {string} automationAccountName The name of the automation account.
 *
 * @param {string} jobName The job name.
 *
 * @param {string} jobStreamId The job stream id.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.clientRequestId] Identifies this specific client
 * request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link JobStream} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _get(resourceGroupName, automationAccountName, jobName, jobStreamId, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let clientRequestId = (options && options.clientRequestId !== undefined) ? options.clientRequestId : undefined;
  let apiVersion = '2017-05-15-preview';
  // Validate
  try {
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 90)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/^[-\w\._]+$/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._]+$/');
      }
    }
    if (automationAccountName === null || automationAccountName === undefined || typeof automationAccountName.valueOf() !== 'string') {
      throw new Error('automationAccountName cannot be null or undefined and it must be of type string.');
    }
    if (jobName === null || jobName === undefined || typeof jobName.valueOf() !== 'string') {
      throw new Error('jobName cannot be null or undefined and it must be of type string.');
    }
    if (jobStreamId === null || jobStreamId === undefined || typeof jobStreamId.valueOf() !== 'string') {
      throw new Error('jobStreamId cannot be null or undefined and it must be of type string.');
    }
    if (clientRequestId !== null && clientRequestId !== undefined && typeof clientRequestId.valueOf() !== 'string') {
      throw new Error('clientRequestId must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams/{jobStreamId}';
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{automationAccountName}', encodeURIComponent(automationAccountName));
  requestUrl = requestUrl.replace('{jobName}', encodeURIComponent(jobName));
  requestUrl = requestUrl.replace('{jobStreamId}', encodeURIComponent(jobStreamId));
  let queryParameters = [];
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['clientRequestId'] = clientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['JobStream']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Retrieve a list of jobs streams identified by job name.
 *
 * @param {string} resourceGroupName Name of an Azure Resource group.
 *
 * @param {string} automationAccountName The name of the automation account.
 *
 * @param {string} jobName The job name.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.filter] The filter to apply on the operation.
 *
 * @param {string} [options.clientRequestId] Identifies this specific client
 * request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link JobStreamListResult} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listByJob(resourceGroupName, automationAccountName, jobName, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let filter = (options && options.filter !== undefined) ? options.filter : undefined;
  let clientRequestId = (options && options.clientRequestId !== undefined) ? options.clientRequestId : undefined;
  let apiVersion = '2017-05-15-preview';
  // Validate
  try {
    if (resourceGroupName === null || resourceGroupName === undefined || typeof resourceGroupName.valueOf() !== 'string') {
      throw new Error('resourceGroupName cannot be null or undefined and it must be of type string.');
    }
    if (resourceGroupName !== null && resourceGroupName !== undefined) {
      if (resourceGroupName.length > 90)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MaxLength": 90');
      }
      if (resourceGroupName.length < 1)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "MinLength": 1');
      }
      if (resourceGroupName.match(/^[-\w\._]+$/) === null)
      {
        throw new Error('"resourceGroupName" should satisfy the constraint - "Pattern": /^[-\w\._]+$/');
      }
    }
    if (automationAccountName === null || automationAccountName === undefined || typeof automationAccountName.valueOf() !== 'string') {
      throw new Error('automationAccountName cannot be null or undefined and it must be of type string.');
    }
    if (jobName === null || jobName === undefined || typeof jobName.valueOf() !== 'string') {
      throw new Error('jobName cannot be null or undefined and it must be of type string.');
    }
    if (filter !== null && filter !== undefined && typeof filter.valueOf() !== 'string') {
      throw new Error('filter must be of type string.');
    }
    if (this.client.subscriptionId === null || this.client.subscriptionId === undefined || typeof this.client.subscriptionId.valueOf() !== 'string') {
      throw new Error('this.client.subscriptionId cannot be null or undefined and it must be of type string.');
    }
    if (clientRequestId !== null && clientRequestId !== undefined && typeof clientRequestId.valueOf() !== 'string') {
      throw new Error('clientRequestId must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let baseUrl = this.client.baseUri;
  let requestUrl = baseUrl + (baseUrl.endsWith('/') ? '' : '/') + 'subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/jobs/{jobName}/streams';
  requestUrl = requestUrl.replace('{resourceGroupName}', encodeURIComponent(resourceGroupName));
  requestUrl = requestUrl.replace('{automationAccountName}', encodeURIComponent(automationAccountName));
  requestUrl = requestUrl.replace('{jobName}', encodeURIComponent(jobName));
  requestUrl = requestUrl.replace('{subscriptionId}', encodeURIComponent(this.client.subscriptionId));
  let queryParameters = [];
  if (filter !== null && filter !== undefined) {
    queryParameters.push('$filter=' + encodeURIComponent(filter));
  }
  queryParameters.push('api-version=' + encodeURIComponent(apiVersion));
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['clientRequestId'] = clientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['JobStreamListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/**
 * Retrieve a list of jobs streams identified by job name.
 *
 * @param {string} nextPageLink The NextLink from the previous successful call
 * to List operation.
 *
 * @param {object} [options] Optional Parameters.
 *
 * @param {string} [options.clientRequestId] Identifies this specific client
 * request.
 *
 * @param {object} [options.customHeaders] Headers that will be added to the
 * request
 *
 * @param {function} callback - The callback.
 *
 * @returns {function} callback(err, result, request, response)
 *
 *                      {Error}  err        - The Error object if an error occurred, null otherwise.
 *
 *                      {object} [result]   - The deserialized result object if an error did not occur.
 *                      See {@link JobStreamListResult} for more information.
 *
 *                      {object} [request]  - The HTTP Request object if an error did not occur.
 *
 *                      {stream} [response] - The HTTP Response stream if an error did not occur.
 */
function _listByJobNext(nextPageLink, options, callback) {
   /* jshint validthis: true */
  let client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  let clientRequestId = (options && options.clientRequestId !== undefined) ? options.clientRequestId : undefined;
  // Validate
  try {
    if (nextPageLink === null || nextPageLink === undefined || typeof nextPageLink.valueOf() !== 'string') {
      throw new Error('nextPageLink cannot be null or undefined and it must be of type string.');
    }
    if (clientRequestId !== null && clientRequestId !== undefined && typeof clientRequestId.valueOf() !== 'string') {
      throw new Error('clientRequestId must be of type string.');
    }
    if (this.client.acceptLanguage !== null && this.client.acceptLanguage !== undefined && typeof this.client.acceptLanguage.valueOf() !== 'string') {
      throw new Error('this.client.acceptLanguage must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  let requestUrl = '{nextLink}';
  requestUrl = requestUrl.replace('{nextLink}', nextPageLink);

  // Create HTTP transport objects
  let httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.url = requestUrl;
  httpRequest.headers = {};
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  if (this.client.generateClientRequestId) {
      httpRequest.headers['x-ms-client-request-id'] = msRestAzure.generateUuid();
  }
  if (clientRequestId !== undefined && clientRequestId !== null) {
    httpRequest.headers['clientRequestId'] = clientRequestId;
  }
  if (this.client.acceptLanguage !== undefined && this.client.acceptLanguage !== null) {
    httpRequest.headers['accept-language'] = this.client.acceptLanguage;
  }
  if(options) {
    for(let headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  httpRequest.body = null;
  // Send Request
  return client.pipeline(httpRequest, (err, response, responseBody) => {
    if (err) {
      return callback(err);
    }
    let statusCode = response.statusCode;
    if (statusCode !== 200) {
      let error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = msRest.stripRequest(httpRequest);
      error.response = msRest.stripResponse(response);
      if (responseBody === '') responseBody = null;
      let parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        if (parsedErrorResponse) {
          let internalError = null;
          if (parsedErrorResponse.error) internalError = parsedErrorResponse.error;
          error.code = internalError ? internalError.code : parsedErrorResponse.code;
          error.message = internalError ? internalError.message : parsedErrorResponse.message;
        }
        if (parsedErrorResponse !== null && parsedErrorResponse !== undefined) {
          let resultMapper = new client.models['ErrorResponse']().mapper();
          error.body = client.deserialize(resultMapper, parsedErrorResponse, 'error.body');
        }
      } catch (defaultError) {
        error.message = `Error "${defaultError.message}" occurred in deserializing the responseBody ` +
                         `- "${responseBody}" for the default response.`;
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    let result = null;
    if (responseBody === '') responseBody = null;
    // Deserialize Response
    if (statusCode === 200) {
      let parsedResponse = null;
      try {
        parsedResponse = JSON.parse(responseBody);
        result = JSON.parse(responseBody);
        if (parsedResponse !== null && parsedResponse !== undefined) {
          let resultMapper = new client.models['JobStreamListResult']().mapper();
          result = client.deserialize(resultMapper, parsedResponse, 'result');
        }
      } catch (error) {
        let deserializationError = new Error(`Error ${error} occurred in deserializing the responseBody - ${responseBody}`);
        deserializationError.request = msRest.stripRequest(httpRequest);
        deserializationError.response = msRest.stripResponse(response);
        return callback(deserializationError);
      }
    }

    return callback(null, result, httpRequest, response);
  });
}

/** Class representing a JobStreamOperations. */
class JobStreamOperations {
  /**
   * Create a JobStreamOperations.
   * @param {AutomationClient} client Reference to the service client.
   */
  constructor(client) {
    this.client = client;
    this._get = _get;
    this._listByJob = _listByJob;
    this._listByJobNext = _listByJobNext;
  }

  /**
   * Retrieve the job stream identified by job stream id.
   *
   * @param {string} resourceGroupName Name of an Azure Resource group.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {string} jobName The job name.
   *
   * @param {string} jobStreamId The job stream id.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<JobStream>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  getWithHttpOperationResponse(resourceGroupName, automationAccountName, jobName, jobStreamId, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._get(resourceGroupName, automationAccountName, jobName, jobStreamId, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Retrieve the job stream identified by job stream id.
   *
   * @param {string} resourceGroupName Name of an Azure Resource group.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {string} jobName The job name.
   *
   * @param {string} jobStreamId The job stream id.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {JobStream} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link JobStream} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  get(resourceGroupName, automationAccountName, jobName, jobStreamId, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._get(resourceGroupName, automationAccountName, jobName, jobStreamId, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._get(resourceGroupName, automationAccountName, jobName, jobStreamId, options, optionalCallback);
    }
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   *
   * @param {string} resourceGroupName Name of an Azure Resource group.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {string} jobName The job name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.filter] The filter to apply on the operation.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<JobStreamListResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listByJobWithHttpOperationResponse(resourceGroupName, automationAccountName, jobName, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listByJob(resourceGroupName, automationAccountName, jobName, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   *
   * @param {string} resourceGroupName Name of an Azure Resource group.
   *
   * @param {string} automationAccountName The name of the automation account.
   *
   * @param {string} jobName The job name.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.filter] The filter to apply on the operation.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {JobStreamListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link JobStreamListResult} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listByJob(resourceGroupName, automationAccountName, jobName, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listByJob(resourceGroupName, automationAccountName, jobName, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listByJob(resourceGroupName, automationAccountName, jobName, options, optionalCallback);
    }
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @returns {Promise} A promise is returned
   *
   * @resolve {HttpOperationResponse<JobStreamListResult>} - The deserialized result object.
   *
   * @reject {Error} - The error object.
   */
  listByJobNextWithHttpOperationResponse(nextPageLink, options) {
    let client = this.client;
    let self = this;
    return new Promise((resolve, reject) => {
      self._listByJobNext(nextPageLink, options, (err, result, request, response) => {
        let httpOperationResponse = new msRest.HttpOperationResponse(request, response);
        httpOperationResponse.body = result;
        if (err) { reject(err); }
        else { resolve(httpOperationResponse); }
        return;
      });
    });
  }

  /**
   * Retrieve a list of jobs streams identified by job name.
   *
   * @param {string} nextPageLink The NextLink from the previous successful call
   * to List operation.
   *
   * @param {object} [options] Optional Parameters.
   *
   * @param {string} [options.clientRequestId] Identifies this specific client
   * request.
   *
   * @param {object} [options.customHeaders] Headers that will be added to the
   * request
   *
   * @param {function} [optionalCallback] - The optional callback.
   *
   * @returns {function|Promise} If a callback was passed as the last parameter
   * then it returns the callback else returns a Promise.
   *
   * {Promise} A promise is returned
   *
   *                      @resolve {JobStreamListResult} - The deserialized result object.
   *
   *                      @reject {Error} - The error object.
   *
   * {function} optionalCallback(err, result, request, response)
   *
   *                      {Error}  err        - The Error object if an error occurred, null otherwise.
   *
   *                      {object} [result]   - The deserialized result object if an error did not occur.
   *                      See {@link JobStreamListResult} for more information.
   *
   *                      {object} [request]  - The HTTP Request object if an error did not occur.
   *
   *                      {stream} [response] - The HTTP Response stream if an error did not occur.
   */
  listByJobNext(nextPageLink, options, optionalCallback) {
    let client = this.client;
    let self = this;
    if (!optionalCallback && typeof options === 'function') {
      optionalCallback = options;
      options = null;
    }
    if (!optionalCallback) {
      return new Promise((resolve, reject) => {
        self._listByJobNext(nextPageLink, options, (err, result, request, response) => {
          if (err) { reject(err); }
          else { resolve(result); }
          return;
        });
      });
    } else {
      return self._listByJobNext(nextPageLink, options, optionalCallback);
    }
  }

}

module.exports = JobStreamOperations;
