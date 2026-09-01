__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "AutomationMode",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 19
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "NONE",
              "optional": false,
              "typeAnnotation": null,
              "start": 26,
              "end": 30
            },
            "initializer": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 33,
              "end": 35
            },
            "computed": false,
            "start": 26,
            "end": 35
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TIME",
              "optional": false,
              "typeAnnotation": null,
              "start": 41,
              "end": 45
            },
            "initializer": {
              "type": "Literal",
              "value": "time",
              "raw": "\"time\"",
              "start": 48,
              "end": 54
            },
            "computed": false,
            "start": 41,
            "end": 54
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "SYSTEM",
              "optional": false,
              "typeAnnotation": null,
              "start": 60,
              "end": 66
            },
            "initializer": {
              "type": "Literal",
              "value": "system",
              "raw": "\"system\"",
              "start": 69,
              "end": 77
            },
            "computed": false,
            "start": 60,
            "end": 77
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "LOCATION",
              "optional": false,
              "typeAnnotation": null,
              "start": 83,
              "end": 91
            },
            "initializer": {
              "type": "Literal",
              "value": "location",
              "raw": "\"location\"",
              "start": 94,
              "end": 104
            },
            "computed": false,
            "start": 83,
            "end": 104
          }
        ],
        "start": 20,
        "end": 107
      },
      "const": false,
      "declare": false,
      "start": 0,
      "end": 107
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ThemePreset",
        "optional": false,
        "typeAnnotation": null,
        "start": 119,
        "end": 130
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
              "name": "id",
              "optional": false,
              "typeAnnotation": null,
              "start": 137,
              "end": 139
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 141,
                "end": 147
              },
              "start": 139,
              "end": 147
            },
            "accessibility": null,
            "static": false,
            "start": 137,
            "end": 148
          }
        ],
        "start": 131,
        "end": 150
      },
      "declare": false,
      "start": 109,
      "end": 150
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Automation",
        "optional": false,
        "typeAnnotation": null,
        "start": 162,
        "end": 172
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
              "name": "mode",
              "optional": false,
              "typeAnnotation": null,
              "start": 179,
              "end": 183
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "AutomationMode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 185,
                  "end": 199
                },
                "typeArguments": null,
                "start": 185,
                "end": 199
              },
              "start": 183,
              "end": 199
            },
            "accessibility": null,
            "static": false,
            "start": 179,
            "end": 200
          }
        ],
        "start": 173,
        "end": 202
      },
      "declare": false,
      "start": 152,
      "end": 202
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "UserSettings",
        "optional": false,
        "typeAnnotation": null,
        "start": 214,
        "end": 226
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
              "name": "presets",
              "optional": false,
              "typeAnnotation": null,
              "start": 233,
              "end": 240
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSArrayType",
                "elementType": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "ThemePreset",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 242,
                    "end": 253
                  },
                  "typeArguments": null,
                  "start": 242,
                  "end": 253
                },
                "start": 242,
                "end": 255
              },
              "start": 240,
              "end": 255
            },
            "accessibility": null,
            "static": false,
            "start": 233,
            "end": 256
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "automation",
              "optional": false,
              "typeAnnotation": null,
              "start": 261,
              "end": 271
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Automation",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 273,
                  "end": 283
                },
                "typeArguments": null,
                "start": 273,
                "end": 283
              },
              "start": 271,
              "end": 283
            },
            "accessibility": null,
            "static": false,
            "start": 261,
            "end": 284
          }
        ],
        "start": 227,
        "end": 286
      },
      "declare": false,
      "start": 204,
      "end": 286
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ExtensionData",
        "optional": false,
        "typeAnnotation": null,
        "start": 298,
        "end": 311
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
              "name": "settings",
              "optional": false,
              "typeAnnotation": null,
              "start": 318,
              "end": 326
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "UserSettings",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 328,
                  "end": 340
                },
                "typeArguments": null,
                "start": 328,
                "end": 340
              },
              "start": 326,
              "end": 340
            },
            "accessibility": null,
            "static": false,
            "start": 318,
            "end": 341
          }
        ],
        "start": 312,
        "end": 343
      },
      "declare": false,
      "start": 288,
      "end": 343
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "getMockData",
          "optional": false,
          "typeAnnotation": null,
          "start": 361,
          "end": 372
        },
        "generator": false,
        "async": false,
        "declare": false,
        "typeParameters": null,
        "params": [],
        "returnType": {
          "type": "TSTypeAnnotation",
          "typeAnnotation": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "ExtensionData",
              "optional": false,
              "typeAnnotation": null,
              "start": 376,
              "end": 389
            },
            "typeArguments": null,
            "start": 376,
            "end": 389
          },
          "start": 374,
          "end": 389
        },
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "ReturnStatement",
              "argument": {
                "type": "ObjectExpression",
                "properties": [
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "settings",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 413,
                      "end": 421
                    },
                    "value": {
                      "type": "TSAsExpression",
                      "expression": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "presets",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 437,
                              "end": 444
                            },
                            "value": {
                              "type": "ArrayExpression",
                              "elements": [],
                              "start": 446,
                              "end": 448
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 437,
                            "end": 448
                          },
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "automation",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 462,
                              "end": 472
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
                                    "name": "mode",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 492,
                                    "end": 496
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": "",
                                    "raw": "\"\"",
                                    "start": 498,
                                    "end": 500
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 492,
                                  "end": 500
                                }
                              ],
                              "start": 474,
                              "end": 515
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 462,
                            "end": 515
                          }
                        ],
                        "start": 423,
                        "end": 526
                      },
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "UserSettings",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 530,
                          "end": 542
                        },
                        "typeArguments": null,
                        "start": 530,
                        "end": 542
                      },
                      "start": 423,
                      "end": 542
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 413,
                    "end": 542
                  }
                ],
                "start": 403,
                "end": 549
              },
              "start": 396,
              "end": 549
            }
          ],
          "start": 390,
          "end": 551
        },
        "expression": false,
        "start": 352,
        "end": 551
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 345,
      "end": 551
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 551
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "enum",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "AutomationMode",
    "start": 5,
    "end": 19
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "NONE",
    "start": 26,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 31,
    "end": 32
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 33,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 35,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "TIME",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 46,
    "end": 47
  },
  {
    "type": "String",
    "value": "\"time\"",
    "start": 48,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "SYSTEM",
    "start": 60,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 67,
    "end": 68
  },
  {
    "type": "String",
    "value": "\"system\"",
    "start": 69,
    "end": 77
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 77,
    "end": 78
  },
  {
    "type": "Identifier",
    "value": "LOCATION",
    "start": 83,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 92,
    "end": 93
  },
  {
    "type": "String",
    "value": "\"location\"",
    "start": 94,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 106,
    "end": 107
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 109,
    "end": 118
  },
  {
    "type": "Identifier",
    "value": "ThemePreset",
    "start": 119,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "id",
    "start": 137,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 141,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 152,
    "end": 161
  },
  {
    "type": "Identifier",
    "value": "Automation",
    "start": 162,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 173,
    "end": 174
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 179,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "AutomationMode",
    "start": 185,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 201,
    "end": 202
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "UserSettings",
    "start": 214,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "presets",
    "start": 233,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "ThemePreset",
    "start": 242,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "automation",
    "start": 261,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "Automation",
    "start": 273,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 283,
    "end": 284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 285,
    "end": 286
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 288,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "ExtensionData",
    "start": 298,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 312,
    "end": 313
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 318,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 326,
    "end": 327
  },
  {
    "type": "Identifier",
    "value": "UserSettings",
    "start": 328,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 345,
    "end": 351
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 352,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "getMockData",
    "start": 361,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 374,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "ExtensionData",
    "start": 376,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 396,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "settings",
    "start": 413,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 423,
    "end": 424
  },
  {
    "type": "Identifier",
    "value": "presets",
    "start": 437,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 448,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "automation",
    "start": 462,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 474,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "mode",
    "start": 492,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 498,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 527,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "UserSettings",
    "start": 530,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 542,
    "end": 543
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 548,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 550,
    "end": 551
  }
]
```
