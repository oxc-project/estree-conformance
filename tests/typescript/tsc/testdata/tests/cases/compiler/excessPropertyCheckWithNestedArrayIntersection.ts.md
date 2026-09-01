__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValueOnlyFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 25
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 32,
              "end": 38
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 40,
                  "end": 45
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 56,
                            "end": 61
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 63,
                                  "end": 69
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 72,
                                  "end": 76
                                }
                              ],
                              "start": 63,
                              "end": 76
                            },
                            "start": 61,
                            "end": 76
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 56,
                          "end": 77
                        }
                      ],
                      "start": 46,
                      "end": 83
                    }
                  ],
                  "start": 45,
                  "end": 84
                },
                "start": 40,
                "end": 84
              },
              "start": 38,
              "end": 84
            },
            "accessibility": null,
            "static": false,
            "start": 32,
            "end": 85
          }
        ],
        "start": 26,
        "end": 87
      },
      "declare": false,
      "start": 0,
      "end": 87
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ValueAndKeyFields",
        "optional": false,
        "typeAnnotation": null,
        "start": 98,
        "end": 115
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "fields",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 128
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 130,
                  "end": 135
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeLiteral",
                      "members": [
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 146,
                            "end": 149
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSStringKeyword",
                                  "start": 151,
                                  "end": 157
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 160,
                                  "end": 164
                                }
                              ],
                              "start": 151,
                              "end": 164
                            },
                            "start": 149,
                            "end": 164
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 146,
                          "end": 165
                        },
                        {
                          "type": "TSPropertySignature",
                          "computed": false,
                          "optional": false,
                          "readonly": false,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 174,
                            "end": 179
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSUnionType",
                              "types": [
                                {
                                  "type": "TSNumberKeyword",
                                  "start": 181,
                                  "end": 187
                                },
                                {
                                  "type": "TSNullKeyword",
                                  "start": 190,
                                  "end": 194
                                }
                              ],
                              "start": 181,
                              "end": 194
                            },
                            "start": 179,
                            "end": 194
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 174,
                          "end": 195
                        }
                      ],
                      "start": 136,
                      "end": 201
                    }
                  ],
                  "start": 135,
                  "end": 202
                },
                "start": 130,
                "end": 202
              },
              "start": 128,
              "end": 202
            },
            "accessibility": null,
            "static": false,
            "start": 122,
            "end": 203
          }
        ],
        "start": 116,
        "end": 205
      },
      "declare": false,
      "start": 88,
      "end": 205
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "BugRepro",
        "optional": false,
        "typeAnnotation": null,
        "start": 216,
        "end": 224
      },
      "typeParameters": null,
      "extends": [],
      "body": {
        "type": "TSInterfaceBody",
        "body": [
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "dataType",
              "optional": false,
              "typeAnnotation": null,
              "start": 229,
              "end": 237
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValueAndKeyFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 239,
                      "end": 256
                    },
                    "typeArguments": null,
                    "start": 239,
                    "end": 256
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "ValueOnlyFields",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 259,
                      "end": 274
                    },
                    "typeArguments": null,
                    "start": 259,
                    "end": 274
                  }
                ],
                "start": 239,
                "end": 274
              },
              "start": 237,
              "end": 274
            },
            "accessibility": null,
            "static": false,
            "start": 229,
            "end": 275
          }
        ],
        "start": 225,
        "end": 277
      },
      "declare": false,
      "start": 206,
      "end": 277
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "repro",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "BugRepro",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 291,
                  "end": 299
                },
                "typeArguments": null,
                "start": 291,
                "end": 299
              },
              "start": 289,
              "end": 299
            },
            "start": 284,
            "end": 299
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "dataType",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 306,
                  "end": 314
                },
                "value": {
                  "type": "ObjectExpression",
                  "properties": [
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "fields",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 322,
                        "end": 328
                      },
                      "value": {
                        "type": "ArrayExpression",
                        "elements": [
                          {
                            "type": "ObjectExpression",
                            "properties": [
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "key",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 339,
                                  "end": 342
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": "bla",
                                  "raw": "'bla'",
                                  "start": 344,
                                  "end": 349
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 339,
                                "end": 349
                              },
                              {
                                "type": "Property",
                                "kind": "init",
                                "key": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "value",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 385,
                                  "end": 390
                                },
                                "value": {
                                  "type": "Literal",
                                  "value": null,
                                  "raw": "null",
                                  "start": 392,
                                  "end": 396
                                },
                                "method": false,
                                "shorthand": false,
                                "computed": false,
                                "optional": false,
                                "start": 385,
                                "end": 396
                              }
                            ],
                            "start": 331,
                            "end": 403
                          }
                        ],
                        "start": 330,
                        "end": 404
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 322,
                      "end": 404
                    }
                  ],
                  "start": 316,
                  "end": 409
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 306,
                "end": 409
              }
            ],
            "start": 302,
            "end": 411
          },
          "definite": false,
          "start": 284,
          "end": 411
        }
      ],
      "declare": false,
      "start": 278,
      "end": 411
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 411
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "interface",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "ValueOnlyFields",
    "start": 10,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 40,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 56,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 63,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 70,
    "end": 71
  },
  {
    "type": "Null",
    "value": "null",
    "start": 72,
    "end": 76
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 76,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 82,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 86,
    "end": 87
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 88,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "ValueAndKeyFields",
    "start": 98,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 122,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 130,
    "end": 135
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 146,
    "end": 149
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 149,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 151,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 158,
    "end": 159
  },
  {
    "type": "Null",
    "value": "null",
    "start": 160,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 174,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 181,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "Null",
    "value": "null",
    "start": 190,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 200,
    "end": 201
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 202,
    "end": 203
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 204,
    "end": 205
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 206,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "BugRepro",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 229,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "ValueAndKeyFields",
    "start": 239,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 257,
    "end": 258
  },
  {
    "type": "Identifier",
    "value": "ValueOnlyFields",
    "start": 259,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 276,
    "end": 277
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 278,
    "end": 283
  },
  {
    "type": "Identifier",
    "value": "repro",
    "start": 284,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 289,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "BugRepro",
    "start": 291,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "dataType",
    "start": 306,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 314,
    "end": 315
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 316,
    "end": 317
  },
  {
    "type": "Identifier",
    "value": "fields",
    "start": 322,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 330,
    "end": 331
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 331,
    "end": 332
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 339,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 342,
    "end": 343
  },
  {
    "type": "String",
    "value": "'bla'",
    "start": 344,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 349,
    "end": 350
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 385,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 390,
    "end": 391
  },
  {
    "type": "Null",
    "value": "null",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 396,
    "end": 397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 402,
    "end": 403
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 404,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 410,
    "end": 411
  }
]
```
