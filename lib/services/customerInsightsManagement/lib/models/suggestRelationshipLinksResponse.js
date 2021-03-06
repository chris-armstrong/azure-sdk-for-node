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

const models = require('./index');

/**
 * The response of suggest relationship links operation.
 *
 */
class SuggestRelationshipLinksResponse {
  /**
   * Create a SuggestRelationshipLinksResponse.
   * @member {string} [interactionName] The interaction name.
   * @member {array} [suggestedRelationships] Suggested relationships for the
   * type.
   */
  constructor() {
  }

  /**
   * Defines the metadata of SuggestRelationshipLinksResponse
   *
   * @returns {object} metadata of SuggestRelationshipLinksResponse
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'SuggestRelationshipLinksResponse',
      type: {
        name: 'Composite',
        className: 'SuggestRelationshipLinksResponse',
        modelProperties: {
          interactionName: {
            required: false,
            readOnly: true,
            serializedName: 'interactionName',
            type: {
              name: 'String'
            }
          },
          suggestedRelationships: {
            required: false,
            readOnly: true,
            serializedName: 'suggestedRelationships',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'RelationshipsLookupElementType',
                  type: {
                    name: 'Composite',
                    className: 'RelationshipsLookup'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = SuggestRelationshipLinksResponse;
