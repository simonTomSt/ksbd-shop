export default {
    "scalars": [
        1,
        2,
        4,
        5,
        9,
        11,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        41,
        42,
        43,
        44,
        82,
        117,
        120,
        121
    ],
    "types": {
        "Query": {
            "activeChannel": [
                14
            ],
            "activeCustomer": [
                107
            ],
            "activeOrder": [
                122
            ],
            "availableCountries": [
                161
            ],
            "collections": [
                18,
                {
                    "options": [
                        201
                    ]
                }
            ],
            "collection": [
                15,
                {
                    "id": [
                        1
                    ],
                    "slug": [
                        2
                    ]
                }
            ],
            "eligibleShippingMethods": [
                76
            ],
            "eligiblePaymentMethods": [
                77
            ],
            "facets": [
                113,
                {
                    "options": [
                        202
                    ]
                }
            ],
            "facet": [
                111,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "me": [
                12
            ],
            "nextOrderStates": [
                2
            ],
            "order": [
                122,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "orderByCode": [
                122,
                {
                    "code": [
                        2,
                        "String!"
                    ]
                }
            ],
            "product": [
                150,
                {
                    "id": [
                        1
                    ],
                    "slug": [
                        2
                    ]
                }
            ],
            "products": [
                152,
                {
                    "options": [
                        204
                    ]
                }
            ],
            "search": [
                142,
                {
                    "input": [
                        70,
                        "SearchInput!"
                    ]
                }
            ],
            "activePaymentMethods": [
                194
            ],
            "activeShippingMethods": [
                195
            ],
            "__typename": [
                2
            ]
        },
        "ID": {},
        "String": {},
        "Mutation": {
            "addItemToOrder": [
                78,
                {
                    "productVariantId": [
                        1,
                        "ID!"
                    ],
                    "quantity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "removeOrderLine": [
                79,
                {
                    "orderLineId": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "removeAllOrderLines": [
                79
            ],
            "adjustOrderLine": [
                78,
                {
                    "orderLineId": [
                        1,
                        "ID!"
                    ],
                    "quantity": [
                        4,
                        "Int!"
                    ]
                }
            ],
            "applyCouponCode": [
                81,
                {
                    "couponCode": [
                        2,
                        "String!"
                    ]
                }
            ],
            "removeCouponCode": [
                122,
                {
                    "couponCode": [
                        2,
                        "String!"
                    ]
                }
            ],
            "transitionOrderToState": [
                207,
                {
                    "state": [
                        2,
                        "String!"
                    ]
                }
            ],
            "setOrderShippingAddress": [
                219,
                {
                    "input": [
                        73,
                        "CreateAddressInput!"
                    ]
                }
            ],
            "setOrderBillingAddress": [
                219,
                {
                    "input": [
                        73,
                        "CreateAddressInput!"
                    ]
                }
            ],
            "unsetOrderShippingAddress": [
                219
            ],
            "unsetOrderBillingAddress": [
                219
            ],
            "setOrderCustomFields": [
                219,
                {
                    "input": [
                        199,
                        "UpdateOrderInput!"
                    ]
                }
            ],
            "setOrderShippingMethod": [
                80,
                {
                    "shippingMethodId": [
                        1,
                        "[ID!]!"
                    ]
                }
            ],
            "addPaymentToOrder": [
                206,
                {
                    "input": [
                        200,
                        "PaymentInput!"
                    ]
                }
            ],
            "setCustomerForOrder": [
                208,
                {
                    "input": [
                        72,
                        "CreateCustomerInput!"
                    ]
                }
            ],
            "login": [
                217,
                {
                    "username": [
                        2,
                        "String!"
                    ],
                    "password": [
                        2,
                        "String!"
                    ],
                    "rememberMe": [
                        5
                    ]
                }
            ],
            "authenticate": [
                218,
                {
                    "input": [
                        196,
                        "AuthenticationInput!"
                    ],
                    "rememberMe": [
                        5
                    ]
                }
            ],
            "logout": [
                75
            ],
            "registerCustomerAccount": [
                209,
                {
                    "input": [
                        197,
                        "RegisterCustomerInput!"
                    ]
                }
            ],
            "refreshCustomerVerification": [
                210,
                {
                    "emailAddress": [
                        2,
                        "String!"
                    ]
                }
            ],
            "updateCustomer": [
                107,
                {
                    "input": [
                        198,
                        "UpdateCustomerInput!"
                    ]
                }
            ],
            "createCustomerAddress": [
                6,
                {
                    "input": [
                        73,
                        "CreateAddressInput!"
                    ]
                }
            ],
            "updateCustomerAddress": [
                6,
                {
                    "input": [
                        74,
                        "UpdateAddressInput!"
                    ]
                }
            ],
            "deleteCustomerAddress": [
                75,
                {
                    "id": [
                        1,
                        "ID!"
                    ]
                }
            ],
            "verifyCustomerAccount": [
                211,
                {
                    "token": [
                        2,
                        "String!"
                    ],
                    "password": [
                        2
                    ]
                }
            ],
            "updateCustomerPassword": [
                212,
                {
                    "currentPassword": [
                        2,
                        "String!"
                    ],
                    "newPassword": [
                        2,
                        "String!"
                    ]
                }
            ],
            "requestUpdateCustomerEmailAddress": [
                213,
                {
                    "password": [
                        2,
                        "String!"
                    ],
                    "newEmailAddress": [
                        2,
                        "String!"
                    ]
                }
            ],
            "updateCustomerEmailAddress": [
                214,
                {
                    "token": [
                        2,
                        "String!"
                    ]
                }
            ],
            "requestPasswordReset": [
                215,
                {
                    "emailAddress": [
                        2,
                        "String!"
                    ]
                }
            ],
            "resetPassword": [
                216,
                {
                    "token": [
                        2,
                        "String!"
                    ],
                    "password": [
                        2,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                2
            ]
        },
        "Int": {},
        "Boolean": {},
        "Address": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "fullName": [
                2
            ],
            "company": [
                2
            ],
            "streetLine1": [
                2
            ],
            "streetLine2": [
                2
            ],
            "city": [
                2
            ],
            "province": [
                2
            ],
            "postalCode": [
                2
            ],
            "country": [
                161
            ],
            "phoneNumber": [
                2
            ],
            "defaultShippingAddress": [
                5
            ],
            "defaultBillingAddress": [
                5
            ],
            "customFields": [
                236
            ],
            "__typename": [
                2
            ]
        },
        "Asset": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "type": [
                11
            ],
            "fileSize": [
                4
            ],
            "mimeType": [
                2
            ],
            "width": [
                4
            ],
            "height": [
                4
            ],
            "source": [
                2
            ],
            "preview": [
                2
            ],
            "focalPoint": [
                8
            ],
            "tags": [
                171
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "Coordinate": {
            "x": [
                9
            ],
            "y": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "Float": {},
        "AssetList": {
            "items": [
                7
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "AssetType": {},
        "CurrentUser": {
            "id": [
                1
            ],
            "identifier": [
                2
            ],
            "channels": [
                13
            ],
            "__typename": [
                2
            ]
        },
        "CurrentUserChannel": {
            "id": [
                1
            ],
            "token": [
                2
            ],
            "code": [
                2
            ],
            "permissions": [
                22
            ],
            "__typename": [
                2
            ]
        },
        "Channel": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "code": [
                2
            ],
            "token": [
                2
            ],
            "defaultTaxZone": [
                178
            ],
            "defaultShippingZone": [
                178
            ],
            "defaultLanguageCode": [
                120
            ],
            "availableLanguageCodes": [
                120
            ],
            "currencyCode": [
                82
            ],
            "defaultCurrencyCode": [
                82
            ],
            "availableCurrencyCodes": [
                82
            ],
            "trackInventory": [
                5
            ],
            "outOfStockThreshold": [
                4
            ],
            "pricesIncludeTax": [
                5
            ],
            "seller": [
                167
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "Collection": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "slug": [
                2
            ],
            "breadcrumbs": [
                16
            ],
            "position": [
                4
            ],
            "description": [
                2
            ],
            "featuredAsset": [
                7
            ],
            "assets": [
                7
            ],
            "parent": [
                15
            ],
            "parentId": [
                1
            ],
            "children": [
                15
            ],
            "filters": [
                52
            ],
            "translations": [
                17
            ],
            "productVariants": [
                153,
                {
                    "options": [
                        205
                    ]
                }
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CollectionBreadcrumb": {
            "id": [
                1
            ],
            "name": [
                2
            ],
            "slug": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CollectionTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "slug": [
                2
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CollectionList": {
            "items": [
                15
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "GlobalFlag": {},
        "AdjustmentType": {},
        "DeletionResult": {},
        "Permission": {},
        "SortOrder": {},
        "ErrorCode": {},
        "LogicalOperator": {},
        "NativeAuthStrategyError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "InvalidCredentialsError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "authenticationError": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "OrderStateTransitionError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "transitionError": [
                2
            ],
            "fromState": [
                2
            ],
            "toState": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "EmailAddressConflictError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "GuestCheckoutError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "errorDetail": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "OrderLimitError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "maxItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "NegativeQuantityError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "InsufficientStockError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "quantityAvailable": [
                4
            ],
            "order": [
                122
            ],
            "__typename": [
                2
            ]
        },
        "CouponCodeInvalidError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "couponCode": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CouponCodeExpiredError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "couponCode": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CouponCodeLimitError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "couponCode": [
                2
            ],
            "limit": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "OrderModificationError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "IneligibleShippingMethodError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NoActiveOrderError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "OrderInterceptorError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "interceptorError": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "JSON": {},
        "DateTime": {},
        "Upload": {},
        "Money": {},
        "PaginatedList": {
            "items": [
                46
            ],
            "totalItems": [
                4
            ],
            "on_AssetList": [
                10
            ],
            "on_CollectionList": [
                18
            ],
            "on_CustomerList": [
                108
            ],
            "on_FacetList": [
                113
            ],
            "on_FacetValueList": [
                115
            ],
            "on_HistoryEntryList": [
                118
            ],
            "on_OrderList": [
                125
            ],
            "on_ProductList": [
                152
            ],
            "on_ProductVariantList": [
                153
            ],
            "on_PromotionList": [
                158
            ],
            "on_CountryList": [
                162
            ],
            "on_ProvinceList": [
                164
            ],
            "on_RoleList": [
                166
            ],
            "on_ShippingMethodList": [
                170
            ],
            "on_TagList": [
                172
            ],
            "on_TaxRateList": [
                175
            ],
            "__typename": [
                2
            ]
        },
        "Node": {
            "id": [
                1
            ],
            "on_Address": [
                6
            ],
            "on_Asset": [
                7
            ],
            "on_Channel": [
                14
            ],
            "on_Collection": [
                15
            ],
            "on_CustomerGroup": [
                105
            ],
            "on_Customer": [
                107
            ],
            "on_FacetValue": [
                109
            ],
            "on_Facet": [
                111
            ],
            "on_HistoryEntry": [
                116
            ],
            "on_Order": [
                122
            ],
            "on_OrderLine": [
                128
            ],
            "on_Payment": [
                129
            ],
            "on_Refund": [
                131
            ],
            "on_Fulfillment": [
                133
            ],
            "on_Surcharge": [
                134
            ],
            "on_PaymentMethod": [
                135
            ],
            "on_ProductOptionGroup": [
                137
            ],
            "on_ProductOption": [
                139
            ],
            "on_Product": [
                150
            ],
            "on_ProductVariant": [
                154
            ],
            "on_Promotion": [
                156
            ],
            "on_Country": [
                161
            ],
            "on_Province": [
                163
            ],
            "on_Role": [
                165
            ],
            "on_Seller": [
                167
            ],
            "on_ShippingMethod": [
                168
            ],
            "on_Tag": [
                171
            ],
            "on_TaxCategory": [
                173
            ],
            "on_TaxRate": [
                174
            ],
            "on_User": [
                176
            ],
            "on_AuthenticationMethod": [
                177
            ],
            "on_Zone": [
                178
            ],
            "__typename": [
                2
            ]
        },
        "ErrorResult": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_InvalidCredentialsError": [
                27
            ],
            "on_OrderStateTransitionError": [
                28
            ],
            "on_EmailAddressConflictError": [
                29
            ],
            "on_GuestCheckoutError": [
                30
            ],
            "on_OrderLimitError": [
                31
            ],
            "on_NegativeQuantityError": [
                32
            ],
            "on_InsufficientStockError": [
                33
            ],
            "on_CouponCodeInvalidError": [
                34
            ],
            "on_CouponCodeExpiredError": [
                35
            ],
            "on_CouponCodeLimitError": [
                36
            ],
            "on_OrderModificationError": [
                37
            ],
            "on_IneligibleShippingMethodError": [
                38
            ],
            "on_NoActiveOrderError": [
                39
            ],
            "on_OrderInterceptorError": [
                40
            ],
            "on_OrderPaymentStateError": [
                179
            ],
            "on_IneligiblePaymentMethodError": [
                180
            ],
            "on_PaymentFailedError": [
                181
            ],
            "on_PaymentDeclinedError": [
                182
            ],
            "on_AlreadyLoggedInError": [
                183
            ],
            "on_MissingPasswordError": [
                184
            ],
            "on_PasswordValidationError": [
                185
            ],
            "on_PasswordAlreadySetError": [
                186
            ],
            "on_VerificationTokenInvalidError": [
                187
            ],
            "on_VerificationTokenExpiredError": [
                188
            ],
            "on_IdentifierChangeTokenInvalidError": [
                189
            ],
            "on_IdentifierChangeTokenExpiredError": [
                190
            ],
            "on_PasswordResetTokenInvalidError": [
                191
            ],
            "on_PasswordResetTokenExpiredError": [
                192
            ],
            "on_NotVerifiedError": [
                193
            ],
            "__typename": [
                2
            ]
        },
        "Adjustment": {
            "adjustmentSource": [
                2
            ],
            "type": [
                20
            ],
            "description": [
                2
            ],
            "amount": [
                44
            ],
            "data": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "TaxLine": {
            "description": [
                2
            ],
            "taxRate": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "ConfigArg": {
            "name": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ConfigArgDefinition": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "required": [
                5
            ],
            "defaultValue": [
                41
            ],
            "label": [
                2
            ],
            "description": [
                2
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ConfigurableOperation": {
            "code": [
                2
            ],
            "args": [
                50
            ],
            "__typename": [
                2
            ]
        },
        "ConfigurableOperationDefinition": {
            "code": [
                2
            ],
            "args": [
                51
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "DeletionResponse": {
            "result": [
                21
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ConfigArgInput": {
            "name": [
                2
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ConfigurableOperationInput": {
            "code": [
                2
            ],
            "arguments": [
                55
            ],
            "__typename": [
                2
            ]
        },
        "StringOperators": {
            "eq": [
                2
            ],
            "notEq": [
                2
            ],
            "contains": [
                2
            ],
            "notContains": [
                2
            ],
            "in": [
                2
            ],
            "notIn": [
                2
            ],
            "regex": [
                2
            ],
            "isNull": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "IDOperators": {
            "eq": [
                2
            ],
            "notEq": [
                2
            ],
            "in": [
                2
            ],
            "notIn": [
                2
            ],
            "isNull": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "BooleanOperators": {
            "eq": [
                5
            ],
            "isNull": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "NumberRange": {
            "start": [
                9
            ],
            "end": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "NumberOperators": {
            "eq": [
                9
            ],
            "lt": [
                9
            ],
            "lte": [
                9
            ],
            "gt": [
                9
            ],
            "gte": [
                9
            ],
            "between": [
                60
            ],
            "isNull": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "DateRange": {
            "start": [
                42
            ],
            "end": [
                42
            ],
            "__typename": [
                2
            ]
        },
        "DateOperators": {
            "eq": [
                42
            ],
            "before": [
                42
            ],
            "after": [
                42
            ],
            "between": [
                62
            ],
            "isNull": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "StringListOperators": {
            "inList": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NumberListOperators": {
            "inList": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "BooleanListOperators": {
            "inList": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "IDListOperators": {
            "inList": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "DateListOperators": {
            "inList": [
                42
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueFilterInput": {
            "and": [
                1
            ],
            "or": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "SearchInput": {
            "term": [
                2
            ],
            "facetValueFilters": [
                69
            ],
            "collectionId": [
                1
            ],
            "collectionSlug": [
                2
            ],
            "groupByProduct": [
                5
            ],
            "take": [
                4
            ],
            "skip": [
                4
            ],
            "sort": [
                71
            ],
            "inStock": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "SearchResultSortParameter": {
            "name": [
                23
            ],
            "price": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "CreateCustomerInput": {
            "title": [
                2
            ],
            "firstName": [
                2
            ],
            "lastName": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "emailAddress": [
                2
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CreateAddressInput": {
            "fullName": [
                2
            ],
            "company": [
                2
            ],
            "streetLine1": [
                2
            ],
            "streetLine2": [
                2
            ],
            "city": [
                2
            ],
            "province": [
                2
            ],
            "postalCode": [
                2
            ],
            "countryCode": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "defaultShippingAddress": [
                5
            ],
            "defaultBillingAddress": [
                5
            ],
            "customFields": [
                237
            ],
            "__typename": [
                2
            ]
        },
        "UpdateAddressInput": {
            "id": [
                1
            ],
            "fullName": [
                2
            ],
            "company": [
                2
            ],
            "streetLine1": [
                2
            ],
            "streetLine2": [
                2
            ],
            "city": [
                2
            ],
            "province": [
                2
            ],
            "postalCode": [
                2
            ],
            "countryCode": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "defaultShippingAddress": [
                5
            ],
            "defaultBillingAddress": [
                5
            ],
            "customFields": [
                238
            ],
            "__typename": [
                2
            ]
        },
        "Success": {
            "success": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethodQuote": {
            "id": [
                1
            ],
            "price": [
                44
            ],
            "priceWithTax": [
                44
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "metadata": [
                41
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "PaymentMethodQuote": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "isEligible": [
                5
            ],
            "eligibilityMessage": [
                2
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "UpdateOrderItemsResult": {
            "on_Order": [
                122
            ],
            "on_OrderModificationError": [
                37
            ],
            "on_OrderLimitError": [
                31
            ],
            "on_NegativeQuantityError": [
                32
            ],
            "on_InsufficientStockError": [
                33
            ],
            "on_OrderInterceptorError": [
                40
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "RemoveOrderItemsResult": {
            "on_Order": [
                122
            ],
            "on_OrderModificationError": [
                37
            ],
            "on_OrderInterceptorError": [
                40
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "SetOrderShippingMethodResult": {
            "on_Order": [
                122
            ],
            "on_OrderModificationError": [
                37
            ],
            "on_IneligibleShippingMethodError": [
                38
            ],
            "on_NoActiveOrderError": [
                39
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "ApplyCouponCodeResult": {
            "on_Order": [
                122
            ],
            "on_CouponCodeExpiredError": [
                35
            ],
            "on_CouponCodeInvalidError": [
                34
            ],
            "on_CouponCodeLimitError": [
                36
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "CurrencyCode": {},
        "CustomField": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "ui": [
                41
            ],
            "on_StringCustomFieldConfig": [
                84
            ],
            "on_LocaleStringCustomFieldConfig": [
                86
            ],
            "on_IntCustomFieldConfig": [
                87
            ],
            "on_FloatCustomFieldConfig": [
                88
            ],
            "on_BooleanCustomFieldConfig": [
                89
            ],
            "on_DateTimeCustomFieldConfig": [
                90
            ],
            "on_RelationCustomFieldConfig": [
                91
            ],
            "on_TextCustomFieldConfig": [
                92
            ],
            "on_LocaleTextCustomFieldConfig": [
                93
            ],
            "on_StructCustomFieldConfig": [
                102
            ],
            "__typename": [
                2
            ]
        },
        "StringCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "length": [
                4
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "pattern": [
                2
            ],
            "options": [
                85
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "StringFieldOption": {
            "value": [
                2
            ],
            "label": [
                103
            ],
            "__typename": [
                2
            ]
        },
        "LocaleStringCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "length": [
                4
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "pattern": [
                2
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "IntCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "min": [
                4
            ],
            "max": [
                4
            ],
            "step": [
                4
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "FloatCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "min": [
                9
            ],
            "max": [
                9
            ],
            "step": [
                9
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "BooleanCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "DateTimeCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "min": [
                2
            ],
            "max": [
                2
            ],
            "step": [
                4
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "RelationCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "entity": [
                2
            ],
            "scalarFields": [
                2
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "TextCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "LocaleTextCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "StructField": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "ui": [
                41
            ],
            "on_StringStructFieldConfig": [
                95
            ],
            "on_IntStructFieldConfig": [
                96
            ],
            "on_FloatStructFieldConfig": [
                97
            ],
            "on_BooleanStructFieldConfig": [
                98
            ],
            "on_DateTimeStructFieldConfig": [
                99
            ],
            "on_TextStructFieldConfig": [
                100
            ],
            "__typename": [
                2
            ]
        },
        "StringStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "length": [
                4
            ],
            "pattern": [
                2
            ],
            "options": [
                85
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "IntStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "min": [
                4
            ],
            "max": [
                4
            ],
            "step": [
                4
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "FloatStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "min": [
                9
            ],
            "max": [
                9
            ],
            "step": [
                9
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "BooleanStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "DateTimeStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "min": [
                2
            ],
            "max": [
                2
            ],
            "step": [
                4
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "TextStructFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "StructFieldConfig": {
            "on_StringStructFieldConfig": [
                95
            ],
            "on_IntStructFieldConfig": [
                96
            ],
            "on_FloatStructFieldConfig": [
                97
            ],
            "on_BooleanStructFieldConfig": [
                98
            ],
            "on_DateTimeStructFieldConfig": [
                99
            ],
            "on_TextStructFieldConfig": [
                100
            ],
            "on_StructField": [
                94
            ],
            "__typename": [
                2
            ]
        },
        "StructCustomFieldConfig": {
            "name": [
                2
            ],
            "type": [
                2
            ],
            "list": [
                5
            ],
            "fields": [
                101
            ],
            "label": [
                103
            ],
            "description": [
                103
            ],
            "readonly": [
                5
            ],
            "internal": [
                5
            ],
            "nullable": [
                5
            ],
            "requiresPermission": [
                22
            ],
            "ui": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "LocalizedString": {
            "languageCode": [
                120
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CustomFieldConfig": {
            "on_StringCustomFieldConfig": [
                84
            ],
            "on_LocaleStringCustomFieldConfig": [
                86
            ],
            "on_IntCustomFieldConfig": [
                87
            ],
            "on_FloatCustomFieldConfig": [
                88
            ],
            "on_BooleanCustomFieldConfig": [
                89
            ],
            "on_DateTimeCustomFieldConfig": [
                90
            ],
            "on_RelationCustomFieldConfig": [
                91
            ],
            "on_TextCustomFieldConfig": [
                92
            ],
            "on_LocaleTextCustomFieldConfig": [
                93
            ],
            "on_StructCustomFieldConfig": [
                102
            ],
            "on_CustomField": [
                83
            ],
            "__typename": [
                2
            ]
        },
        "CustomerGroup": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "customers": [
                108,
                {
                    "options": [
                        106
                    ]
                }
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CustomerListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                223
            ],
            "filter": [
                222
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "Customer": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "title": [
                2
            ],
            "firstName": [
                2
            ],
            "lastName": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "emailAddress": [
                2
            ],
            "addresses": [
                6
            ],
            "orders": [
                125,
                {
                    "options": [
                        203
                    ]
                }
            ],
            "user": [
                176
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CustomerList": {
            "items": [
                107
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "FacetValue": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "facet": [
                111
            ],
            "facetId": [
                1
            ],
            "name": [
                2
            ],
            "code": [
                2
            ],
            "translations": [
                110
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Facet": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "code": [
                2
            ],
            "values": [
                109
            ],
            "valueList": [
                115,
                {
                    "options": [
                        114
                    ]
                }
            ],
            "translations": [
                112
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "FacetTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "FacetList": {
            "items": [
                111
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                227
            ],
            "filter": [
                226
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueList": {
            "items": [
                109
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "HistoryEntry": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "type": [
                117
            ],
            "data": [
                41
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "HistoryEntryType": {},
        "HistoryEntryList": {
            "items": [
                116
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "HistoryEntryListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                229
            ],
            "filter": [
                228
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "LanguageCode": {},
        "OrderType": {},
        "Order": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "type": [
                121
            ],
            "orderPlacedAt": [
                42
            ],
            "code": [
                2
            ],
            "state": [
                2
            ],
            "active": [
                5
            ],
            "customer": [
                107
            ],
            "shippingAddress": [
                124
            ],
            "billingAddress": [
                124
            ],
            "lines": [
                128
            ],
            "surcharges": [
                134
            ],
            "discounts": [
                127
            ],
            "couponCodes": [
                2
            ],
            "promotions": [
                156
            ],
            "payments": [
                129
            ],
            "fulfillments": [
                133
            ],
            "totalQuantity": [
                4
            ],
            "subTotal": [
                44
            ],
            "subTotalWithTax": [
                44
            ],
            "currencyCode": [
                82
            ],
            "shippingLines": [
                126
            ],
            "shipping": [
                44
            ],
            "shippingWithTax": [
                44
            ],
            "total": [
                44
            ],
            "totalWithTax": [
                44
            ],
            "taxSummary": [
                123
            ],
            "history": [
                118,
                {
                    "options": [
                        119
                    ]
                }
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "OrderTaxSummary": {
            "description": [
                2
            ],
            "taxRate": [
                9
            ],
            "taxBase": [
                44
            ],
            "taxTotal": [
                44
            ],
            "__typename": [
                2
            ]
        },
        "OrderAddress": {
            "fullName": [
                2
            ],
            "company": [
                2
            ],
            "streetLine1": [
                2
            ],
            "streetLine2": [
                2
            ],
            "city": [
                2
            ],
            "province": [
                2
            ],
            "postalCode": [
                2
            ],
            "country": [
                2
            ],
            "countryCode": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "customFields": [
                236
            ],
            "__typename": [
                2
            ]
        },
        "OrderList": {
            "items": [
                122
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "ShippingLine": {
            "id": [
                1
            ],
            "shippingMethod": [
                168
            ],
            "price": [
                44
            ],
            "priceWithTax": [
                44
            ],
            "discountedPrice": [
                44
            ],
            "discountedPriceWithTax": [
                44
            ],
            "discounts": [
                127
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "Discount": {
            "adjustmentSource": [
                2
            ],
            "type": [
                20
            ],
            "description": [
                2
            ],
            "amount": [
                44
            ],
            "amountWithTax": [
                44
            ],
            "__typename": [
                2
            ]
        },
        "OrderLine": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "productVariant": [
                154
            ],
            "featuredAsset": [
                7
            ],
            "unitPrice": [
                44
            ],
            "unitPriceWithTax": [
                44
            ],
            "unitPriceChangeSinceAdded": [
                44
            ],
            "unitPriceWithTaxChangeSinceAdded": [
                44
            ],
            "discountedUnitPrice": [
                44
            ],
            "discountedUnitPriceWithTax": [
                44
            ],
            "proratedUnitPrice": [
                44
            ],
            "proratedUnitPriceWithTax": [
                44
            ],
            "quantity": [
                4
            ],
            "orderPlacedQuantity": [
                4
            ],
            "taxRate": [
                9
            ],
            "linePrice": [
                44
            ],
            "linePriceWithTax": [
                44
            ],
            "discountedLinePrice": [
                44
            ],
            "discountedLinePriceWithTax": [
                44
            ],
            "proratedLinePrice": [
                44
            ],
            "proratedLinePriceWithTax": [
                44
            ],
            "lineTax": [
                44
            ],
            "discounts": [
                127
            ],
            "taxLines": [
                49
            ],
            "order": [
                122
            ],
            "fulfillmentLines": [
                132
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "Payment": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "method": [
                2
            ],
            "amount": [
                44
            ],
            "state": [
                2
            ],
            "transactionId": [
                2
            ],
            "errorMessage": [
                2
            ],
            "refunds": [
                131
            ],
            "metadata": [
                41
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "RefundLine": {
            "orderLine": [
                128
            ],
            "orderLineId": [
                1
            ],
            "quantity": [
                4
            ],
            "refund": [
                131
            ],
            "refundId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Refund": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "items": [
                44
            ],
            "shipping": [
                44
            ],
            "adjustment": [
                44
            ],
            "total": [
                44
            ],
            "method": [
                2
            ],
            "state": [
                2
            ],
            "transactionId": [
                2
            ],
            "reason": [
                2
            ],
            "lines": [
                130
            ],
            "paymentId": [
                1
            ],
            "metadata": [
                41
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "FulfillmentLine": {
            "orderLine": [
                128
            ],
            "orderLineId": [
                1
            ],
            "quantity": [
                4
            ],
            "fulfillment": [
                133
            ],
            "fulfillmentId": [
                1
            ],
            "__typename": [
                2
            ]
        },
        "Fulfillment": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "lines": [
                132
            ],
            "summary": [
                132
            ],
            "state": [
                2
            ],
            "method": [
                2
            ],
            "trackingCode": [
                2
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "Surcharge": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "description": [
                2
            ],
            "sku": [
                2
            ],
            "taxLines": [
                49
            ],
            "price": [
                44
            ],
            "priceWithTax": [
                44
            ],
            "taxRate": [
                9
            ],
            "__typename": [
                2
            ]
        },
        "PaymentMethod": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "code": [
                2
            ],
            "description": [
                2
            ],
            "enabled": [
                5
            ],
            "checker": [
                52
            ],
            "handler": [
                52
            ],
            "translations": [
                136
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "PaymentMethodTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ProductOptionGroup": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "options": [
                139
            ],
            "translations": [
                138
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ProductOptionGroupTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ProductOption": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "groupId": [
                1
            ],
            "group": [
                137
            ],
            "translations": [
                140
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ProductOptionTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "SearchReindexResponse": {
            "success": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "SearchResponse": {
            "items": [
                146
            ],
            "totalItems": [
                4
            ],
            "facetValues": [
                143
            ],
            "collections": [
                144
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueResult": {
            "facetValue": [
                109
            ],
            "count": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "CollectionResult": {
            "collection": [
                15
            ],
            "count": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "SearchResultAsset": {
            "id": [
                1
            ],
            "preview": [
                2
            ],
            "focalPoint": [
                8
            ],
            "__typename": [
                2
            ]
        },
        "SearchResult": {
            "sku": [
                2
            ],
            "slug": [
                2
            ],
            "productId": [
                1
            ],
            "productName": [
                2
            ],
            "productAsset": [
                145
            ],
            "productVariantId": [
                1
            ],
            "productVariantName": [
                2
            ],
            "productVariantAsset": [
                145
            ],
            "price": [
                147
            ],
            "priceWithTax": [
                147
            ],
            "currencyCode": [
                82
            ],
            "description": [
                2
            ],
            "facetIds": [
                1
            ],
            "facetValueIds": [
                1
            ],
            "collectionIds": [
                1
            ],
            "score": [
                9
            ],
            "inStock": [
                5
            ],
            "__typename": [
                2
            ]
        },
        "SearchResultPrice": {
            "on_PriceRange": [
                149
            ],
            "on_SinglePrice": [
                148
            ],
            "__typename": [
                2
            ]
        },
        "SinglePrice": {
            "value": [
                44
            ],
            "__typename": [
                2
            ]
        },
        "PriceRange": {
            "min": [
                44
            ],
            "max": [
                44
            ],
            "__typename": [
                2
            ]
        },
        "Product": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "slug": [
                2
            ],
            "description": [
                2
            ],
            "enabled": [
                5
            ],
            "featuredAsset": [
                7
            ],
            "assets": [
                7
            ],
            "variants": [
                154
            ],
            "variantList": [
                153,
                {
                    "options": [
                        205
                    ]
                }
            ],
            "optionGroups": [
                137
            ],
            "facetValues": [
                109
            ],
            "translations": [
                151
            ],
            "collections": [
                15
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ProductTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "slug": [
                2
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ProductList": {
            "items": [
                150
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariantList": {
            "items": [
                154
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariant": {
            "id": [
                1
            ],
            "product": [
                150
            ],
            "productId": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "sku": [
                2
            ],
            "name": [
                2
            ],
            "featuredAsset": [
                7
            ],
            "assets": [
                7
            ],
            "price": [
                44
            ],
            "currencyCode": [
                82
            ],
            "priceWithTax": [
                44
            ],
            "stockLevel": [
                2
            ],
            "taxRateApplied": [
                174
            ],
            "taxCategory": [
                173
            ],
            "options": [
                139
            ],
            "facetValues": [
                109
            ],
            "translations": [
                155
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariantTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Promotion": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "startsAt": [
                42
            ],
            "endsAt": [
                42
            ],
            "couponCode": [
                2
            ],
            "perCustomerUsageLimit": [
                4
            ],
            "usageLimit": [
                4
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "enabled": [
                5
            ],
            "conditions": [
                52
            ],
            "actions": [
                52
            ],
            "translations": [
                157
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "PromotionTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PromotionList": {
            "items": [
                156
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Region": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "type": [
                2
            ],
            "name": [
                2
            ],
            "enabled": [
                5
            ],
            "parent": [
                159
            ],
            "parentId": [
                1
            ],
            "translations": [
                160
            ],
            "on_Country": [
                161
            ],
            "on_Province": [
                163
            ],
            "__typename": [
                2
            ]
        },
        "RegionTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Country": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "type": [
                2
            ],
            "name": [
                2
            ],
            "enabled": [
                5
            ],
            "parent": [
                159
            ],
            "parentId": [
                1
            ],
            "translations": [
                160
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CountryList": {
            "items": [
                161
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Province": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "type": [
                2
            ],
            "name": [
                2
            ],
            "enabled": [
                5
            ],
            "parent": [
                159
            ],
            "parentId": [
                1
            ],
            "translations": [
                160
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ProvinceList": {
            "items": [
                163
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Role": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "code": [
                2
            ],
            "description": [
                2
            ],
            "permissions": [
                22
            ],
            "channels": [
                14
            ],
            "__typename": [
                2
            ]
        },
        "RoleList": {
            "items": [
                165
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Seller": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethod": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "fulfillmentHandlerCode": [
                2
            ],
            "checker": [
                52
            ],
            "calculator": [
                52
            ],
            "translations": [
                169
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethodTranslation": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "languageCode": [
                120
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "ShippingMethodList": {
            "items": [
                168
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "Tag": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "value": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "TagList": {
            "items": [
                171
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "TaxCategory": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "isDefault": [
                5
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "TaxRate": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "enabled": [
                5
            ],
            "value": [
                9
            ],
            "category": [
                173
            ],
            "zone": [
                178
            ],
            "customerGroup": [
                105
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "TaxRateList": {
            "items": [
                174
            ],
            "totalItems": [
                4
            ],
            "__typename": [
                2
            ]
        },
        "User": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "identifier": [
                2
            ],
            "verified": [
                5
            ],
            "roles": [
                165
            ],
            "lastLogin": [
                42
            ],
            "authenticationMethods": [
                177
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "AuthenticationMethod": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "strategy": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "Zone": {
            "id": [
                1
            ],
            "createdAt": [
                42
            ],
            "updatedAt": [
                42
            ],
            "name": [
                2
            ],
            "members": [
                159
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "OrderPaymentStateError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "IneligiblePaymentMethodError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "eligibilityCheckerMessage": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PaymentFailedError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "paymentErrorMessage": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PaymentDeclinedError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "paymentErrorMessage": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "AlreadyLoggedInError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "MissingPasswordError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PasswordValidationError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "validationErrorMessage": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PasswordAlreadySetError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "VerificationTokenInvalidError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "VerificationTokenExpiredError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "IdentifierChangeTokenInvalidError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "IdentifierChangeTokenExpiredError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PasswordResetTokenInvalidError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PasswordResetTokenExpiredError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NotVerifiedError": {
            "errorCode": [
                24
            ],
            "message": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "PublicPaymentMethod": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "translations": [
                136
            ],
            "__typename": [
                2
            ]
        },
        "PublicShippingMethod": {
            "id": [
                1
            ],
            "code": [
                2
            ],
            "name": [
                2
            ],
            "description": [
                2
            ],
            "translations": [
                169
            ],
            "__typename": [
                2
            ]
        },
        "AuthenticationInput": {
            "native": [
                239
            ],
            "__typename": [
                2
            ]
        },
        "RegisterCustomerInput": {
            "emailAddress": [
                2
            ],
            "title": [
                2
            ],
            "firstName": [
                2
            ],
            "lastName": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "password": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCustomerInput": {
            "title": [
                2
            ],
            "firstName": [
                2
            ],
            "lastName": [
                2
            ],
            "phoneNumber": [
                2
            ],
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "UpdateOrderInput": {
            "customFields": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "PaymentInput": {
            "method": [
                2
            ],
            "metadata": [
                41
            ],
            "__typename": [
                2
            ]
        },
        "CollectionListOptions": {
            "topLevelOnly": [
                5
            ],
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                231
            ],
            "filter": [
                230
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "FacetListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                233
            ],
            "filter": [
                232
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "OrderListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                225
            ],
            "filter": [
                224
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "ProductListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                235
            ],
            "filter": [
                234
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariantListOptions": {
            "skip": [
                4
            ],
            "take": [
                4
            ],
            "sort": [
                221
            ],
            "filter": [
                220
            ],
            "filterOperator": [
                25
            ],
            "__typename": [
                2
            ]
        },
        "AddPaymentToOrderResult": {
            "on_Order": [
                122
            ],
            "on_OrderPaymentStateError": [
                179
            ],
            "on_IneligiblePaymentMethodError": [
                180
            ],
            "on_PaymentFailedError": [
                181
            ],
            "on_PaymentDeclinedError": [
                182
            ],
            "on_OrderStateTransitionError": [
                28
            ],
            "on_NoActiveOrderError": [
                39
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "TransitionOrderToStateResult": {
            "on_Order": [
                122
            ],
            "on_OrderStateTransitionError": [
                28
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "SetCustomerForOrderResult": {
            "on_Order": [
                122
            ],
            "on_AlreadyLoggedInError": [
                183
            ],
            "on_EmailAddressConflictError": [
                29
            ],
            "on_NoActiveOrderError": [
                39
            ],
            "on_GuestCheckoutError": [
                30
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "RegisterCustomerAccountResult": {
            "on_Success": [
                75
            ],
            "on_MissingPasswordError": [
                184
            ],
            "on_PasswordValidationError": [
                185
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "RefreshCustomerVerificationResult": {
            "on_Success": [
                75
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "VerifyCustomerAccountResult": {
            "on_CurrentUser": [
                12
            ],
            "on_VerificationTokenInvalidError": [
                187
            ],
            "on_VerificationTokenExpiredError": [
                188
            ],
            "on_MissingPasswordError": [
                184
            ],
            "on_PasswordValidationError": [
                185
            ],
            "on_PasswordAlreadySetError": [
                186
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCustomerPasswordResult": {
            "on_Success": [
                75
            ],
            "on_InvalidCredentialsError": [
                27
            ],
            "on_PasswordValidationError": [
                185
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "RequestUpdateCustomerEmailAddressResult": {
            "on_Success": [
                75
            ],
            "on_InvalidCredentialsError": [
                27
            ],
            "on_EmailAddressConflictError": [
                29
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "UpdateCustomerEmailAddressResult": {
            "on_Success": [
                75
            ],
            "on_IdentifierChangeTokenInvalidError": [
                189
            ],
            "on_IdentifierChangeTokenExpiredError": [
                190
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "RequestPasswordResetResult": {
            "on_Success": [
                75
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "ResetPasswordResult": {
            "on_CurrentUser": [
                12
            ],
            "on_PasswordResetTokenInvalidError": [
                191
            ],
            "on_PasswordResetTokenExpiredError": [
                192
            ],
            "on_PasswordValidationError": [
                185
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_NotVerifiedError": [
                193
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "NativeAuthenticationResult": {
            "on_CurrentUser": [
                12
            ],
            "on_InvalidCredentialsError": [
                27
            ],
            "on_NotVerifiedError": [
                193
            ],
            "on_NativeAuthStrategyError": [
                26
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "AuthenticationResult": {
            "on_CurrentUser": [
                12
            ],
            "on_InvalidCredentialsError": [
                27
            ],
            "on_NotVerifiedError": [
                193
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "ActiveOrderResult": {
            "on_Order": [
                122
            ],
            "on_NoActiveOrderError": [
                39
            ],
            "on_Node": [
                46
            ],
            "on_ErrorResult": [
                47
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariantFilterParameter": {
            "id": [
                58
            ],
            "productId": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "languageCode": [
                57
            ],
            "sku": [
                57
            ],
            "name": [
                57
            ],
            "price": [
                61
            ],
            "currencyCode": [
                57
            ],
            "priceWithTax": [
                61
            ],
            "stockLevel": [
                57
            ],
            "_and": [
                220
            ],
            "_or": [
                220
            ],
            "__typename": [
                2
            ]
        },
        "ProductVariantSortParameter": {
            "id": [
                23
            ],
            "productId": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "sku": [
                23
            ],
            "name": [
                23
            ],
            "price": [
                23
            ],
            "priceWithTax": [
                23
            ],
            "stockLevel": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "CustomerFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "title": [
                57
            ],
            "firstName": [
                57
            ],
            "lastName": [
                57
            ],
            "phoneNumber": [
                57
            ],
            "emailAddress": [
                57
            ],
            "_and": [
                222
            ],
            "_or": [
                222
            ],
            "__typename": [
                2
            ]
        },
        "CustomerSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "title": [
                23
            ],
            "firstName": [
                23
            ],
            "lastName": [
                23
            ],
            "phoneNumber": [
                23
            ],
            "emailAddress": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "OrderFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "type": [
                57
            ],
            "orderPlacedAt": [
                63
            ],
            "code": [
                57
            ],
            "state": [
                57
            ],
            "active": [
                59
            ],
            "totalQuantity": [
                61
            ],
            "subTotal": [
                61
            ],
            "subTotalWithTax": [
                61
            ],
            "currencyCode": [
                57
            ],
            "shipping": [
                61
            ],
            "shippingWithTax": [
                61
            ],
            "total": [
                61
            ],
            "totalWithTax": [
                61
            ],
            "_and": [
                224
            ],
            "_or": [
                224
            ],
            "__typename": [
                2
            ]
        },
        "OrderSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "orderPlacedAt": [
                23
            ],
            "code": [
                23
            ],
            "state": [
                23
            ],
            "totalQuantity": [
                23
            ],
            "subTotal": [
                23
            ],
            "subTotalWithTax": [
                23
            ],
            "shipping": [
                23
            ],
            "shippingWithTax": [
                23
            ],
            "total": [
                23
            ],
            "totalWithTax": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "languageCode": [
                57
            ],
            "facetId": [
                58
            ],
            "name": [
                57
            ],
            "code": [
                57
            ],
            "_and": [
                226
            ],
            "_or": [
                226
            ],
            "__typename": [
                2
            ]
        },
        "FacetValueSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "facetId": [
                23
            ],
            "name": [
                23
            ],
            "code": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "HistoryEntryFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "type": [
                57
            ],
            "_and": [
                228
            ],
            "_or": [
                228
            ],
            "__typename": [
                2
            ]
        },
        "HistoryEntrySortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "CollectionFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "languageCode": [
                57
            ],
            "name": [
                57
            ],
            "slug": [
                57
            ],
            "position": [
                61
            ],
            "description": [
                57
            ],
            "parentId": [
                58
            ],
            "_and": [
                230
            ],
            "_or": [
                230
            ],
            "__typename": [
                2
            ]
        },
        "CollectionSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "name": [
                23
            ],
            "slug": [
                23
            ],
            "position": [
                23
            ],
            "description": [
                23
            ],
            "parentId": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "FacetFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "languageCode": [
                57
            ],
            "name": [
                57
            ],
            "code": [
                57
            ],
            "_and": [
                232
            ],
            "_or": [
                232
            ],
            "__typename": [
                2
            ]
        },
        "FacetSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "name": [
                23
            ],
            "code": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "ProductFilterParameter": {
            "id": [
                58
            ],
            "createdAt": [
                63
            ],
            "updatedAt": [
                63
            ],
            "languageCode": [
                57
            ],
            "name": [
                57
            ],
            "slug": [
                57
            ],
            "description": [
                57
            ],
            "enabled": [
                59
            ],
            "_and": [
                234
            ],
            "_or": [
                234
            ],
            "__typename": [
                2
            ]
        },
        "ProductSortParameter": {
            "id": [
                23
            ],
            "createdAt": [
                23
            ],
            "updatedAt": [
                23
            ],
            "name": [
                23
            ],
            "slug": [
                23
            ],
            "description": [
                23
            ],
            "__typename": [
                2
            ]
        },
        "AddressCustomFields": {
            "vatId": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "CreateAddressCustomFieldsInput": {
            "vatId": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "UpdateAddressCustomFieldsInput": {
            "vatId": [
                2
            ],
            "__typename": [
                2
            ]
        },
        "NativeAuthInput": {
            "username": [
                2
            ],
            "password": [
                2
            ],
            "__typename": [
                2
            ]
        }
    }
}