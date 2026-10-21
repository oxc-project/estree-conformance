__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "WorkerReplacement",
        "optional": false,
        "typeAnnotation": null,
        "start": 14,
        "end": 31
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "EventTarget",
        "optional": false,
        "typeAnnotation": null,
        "start": 40,
        "end": 51
      },
      "superTypeArguments": null,
      "implements": [
        {
          "type": "TSClassImplements",
          "expression": {
            "type": "Identifier",
            "decorators": [],
            "name": "Worker",
            "optional": false,
            "typeAnnotation": null,
            "start": 63,
            "end": 69
          },
          "typeArguments": null,
          "start": 63,
          "end": 69
        }
      ],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onmessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 76,
              "end": 85
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Worker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 95,
                              "end": 101
                            },
                            "typeArguments": null,
                            "start": 95,
                            "end": 101
                          },
                          "start": 93,
                          "end": 101
                        },
                        "start": 89,
                        "end": 101
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MessageEvent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 110,
                              "end": 122
                            },
                            "typeArguments": null,
                            "start": 110,
                            "end": 122
                          },
                          "start": 108,
                          "end": 122
                        },
                        "start": 103,
                        "end": 122
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 127,
                        "end": 130
                      },
                      "start": 124,
                      "end": 130
                    },
                    "start": 88,
                    "end": 130
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 134,
                    "end": 138
                  }
                ],
                "start": 87,
                "end": 138
              },
              "start": 85,
              "end": 138
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 76,
            "end": 139
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onmessageerror",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 158
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSFunctionType",
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "this",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Worker",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 168,
                              "end": 174
                            },
                            "typeArguments": null,
                            "start": 168,
                            "end": 174
                          },
                          "start": 166,
                          "end": 174
                        },
                        "start": 162,
                        "end": 174
                      },
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "event",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "MessageEvent",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 183,
                              "end": 195
                            },
                            "typeArguments": null,
                            "start": 183,
                            "end": 195
                          },
                          "start": 181,
                          "end": 195
                        },
                        "start": 176,
                        "end": 195
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 200,
                        "end": 203
                      },
                      "start": 197,
                      "end": 203
                    },
                    "start": 161,
                    "end": 203
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 207,
                    "end": 211
                  }
                ],
                "start": 160,
                "end": 211
              },
              "start": 158,
              "end": 211
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 144,
            "end": 212
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "onerror",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 224
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Worker",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 226,
                    "end": 232
                  },
                  "typeArguments": null,
                  "start": 226,
                  "end": 232
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "onerror",
                    "raw": "\"onerror\"",
                    "start": 233,
                    "end": 242
                  },
                  "start": 233,
                  "end": 242
                },
                "start": 226,
                "end": 243
              },
              "start": 224,
              "end": 243
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 217,
            "end": 244
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "postMessage",
              "optional": false,
              "typeAnnotation": null,
              "start": 249,
              "end": 260
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Worker",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 262,
                    "end": 268
                  },
                  "typeArguments": null,
                  "start": 262,
                  "end": 268
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "postMessage",
                    "raw": "\"postMessage\"",
                    "start": 269,
                    "end": 282
                  },
                  "start": 269,
                  "end": 282
                },
                "start": 262,
                "end": 283
              },
              "start": 260,
              "end": 283
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 249,
            "end": 284
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "terminate",
              "optional": false,
              "typeAnnotation": null,
              "start": 289,
              "end": 298
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Worker",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 300,
                    "end": 306
                  },
                  "typeArguments": null,
                  "start": 300,
                  "end": 306
                },
                "indexType": {
                  "type": "TSLiteralType",
                  "literal": {
                    "type": "Literal",
                    "value": "terminate",
                    "raw": "\"terminate\"",
                    "start": 307,
                    "end": 318
                  },
                  "start": 307,
                  "end": 318
                },
                "start": 300,
                "end": 319
              },
              "start": 298,
              "end": 319
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 289,
            "end": 320
          }
        ],
        "start": 70,
        "end": 322
      },
      "abstract": false,
      "declare": true,
      "start": 0,
      "end": 322
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 322
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "declare",
    "start": 0,
    "end": 7
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "WorkerReplacement",
    "start": 14,
    "end": 31
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 32,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "EventTarget",
    "start": 40,
    "end": 51
  },
  {
    "type": "Keyword",
    "value": "implements",
    "start": 52,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 70,
    "end": 71
  },
  {
    "type": "Identifier",
    "value": "onmessage",
    "start": 76,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 87,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 89,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 93,
    "end": 94
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 95,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 103,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 108,
    "end": 109
  },
  {
    "type": "Identifier",
    "value": "MessageEvent",
    "start": 110,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 124,
    "end": 126
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 127,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 132,
    "end": 133
  },
  {
    "type": "Null",
    "value": "null",
    "start": 134,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 138,
    "end": 139
  },
  {
    "type": "Identifier",
    "value": "onmessageerror",
    "start": 144,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 161,
    "end": 162
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 162,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 168,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 176,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "MessageEvent",
    "start": 183,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 197,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 200,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 205,
    "end": 206
  },
  {
    "type": "Null",
    "value": "null",
    "start": 207,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "onerror",
    "start": 217,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 224,
    "end": 225
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 226,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 232,
    "end": 233
  },
  {
    "type": "String",
    "value": "\"onerror\"",
    "start": 233,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "postMessage",
    "start": 249,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 262,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 268,
    "end": 269
  },
  {
    "type": "String",
    "value": "\"postMessage\"",
    "start": 269,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "terminate",
    "start": 289,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 298,
    "end": 299
  },
  {
    "type": "Identifier",
    "value": "Worker",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 306,
    "end": 307
  },
  {
    "type": "String",
    "value": "\"terminate\"",
    "start": 307,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 321,
    "end": 322
  }
]
```
