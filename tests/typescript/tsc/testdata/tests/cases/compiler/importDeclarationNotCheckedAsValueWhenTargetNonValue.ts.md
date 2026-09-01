__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "dojox",
        "optional": false,
        "typeAnnotation": null,
        "start": 18,
        "end": 23
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "charting",
              "optional": false,
              "typeAnnotation": null,
              "start": 40,
              "end": 48
            },
            "body": {
              "type": "TSModuleBlock",
              "body": [
                {
                  "type": "TSModuleDeclaration",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "axis2d",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 69,
                    "end": 75
                  },
                  "body": {
                    "type": "TSModuleBlock",
                    "body": [
                      {
                        "type": "ExportNamedDeclaration",
                        "declaration": {
                          "type": "ClassDeclaration",
                          "decorators": [],
                          "id": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Val",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 103,
                            "end": 106
                          },
                          "typeParameters": null,
                          "superClass": null,
                          "superTypeArguments": null,
                          "implements": [],
                          "body": {
                            "type": "ClassBody",
                            "body": [],
                            "start": 107,
                            "end": 110
                          },
                          "abstract": false,
                          "declare": false,
                          "start": 97,
                          "end": 110
                        },
                        "specifiers": [],
                        "source": null,
                        "exportKind": "value",
                        "attributes": [],
                        "start": 90,
                        "end": 110
                      },
                      {
                        "type": "TSInterfaceDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "common",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 133,
                          "end": 139
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
                                "name": "createText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 158,
                                "end": 168
                              },
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSObjectKeyword",
                                  "start": 170,
                                  "end": 176
                                },
                                "start": 168,
                                "end": 176
                              },
                              "accessibility": null,
                              "static": false,
                              "start": 158,
                              "end": 177
                            }
                          ],
                          "start": 140,
                          "end": 191
                        },
                        "declare": false,
                        "start": 123,
                        "end": 191
                      },
                      {
                        "type": "TSModuleDeclaration",
                        "id": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "common",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 214,
                          "end": 220
                        },
                        "body": {
                          "type": "TSModuleBlock",
                          "body": [
                            {
                              "type": "TSInterfaceDeclaration",
                              "id": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "createText",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 249,
                                "end": 259
                              },
                              "typeParameters": null,
                              "extends": [],
                              "body": {
                                "type": "TSInterfaceBody",
                                "body": [
                                  {
                                    "type": "TSMethodSignature",
                                    "key": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "gfx",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 282,
                                      "end": 285
                                    },
                                    "computed": false,
                                    "optional": false,
                                    "kind": "method",
                                    "typeParameters": null,
                                    "params": [],
                                    "returnType": {
                                      "type": "TSTypeAnnotation",
                                      "typeAnnotation": {
                                        "type": "TSStringKeyword",
                                        "start": 289,
                                        "end": 295
                                      },
                                      "start": 287,
                                      "end": 295
                                    },
                                    "accessibility": null,
                                    "readonly": false,
                                    "static": false,
                                    "start": 282,
                                    "end": 295
                                  }
                                ],
                                "start": 260,
                                "end": 313
                              },
                              "declare": false,
                              "start": 239,
                              "end": 313
                            }
                          ],
                          "start": 221,
                          "end": 327
                        },
                        "kind": "namespace",
                        "declare": false,
                        "global": false,
                        "start": 204,
                        "end": 327
                      }
                    ],
                    "start": 76,
                    "end": 337
                  },
                  "kind": "namespace",
                  "declare": false,
                  "global": false,
                  "start": 59,
                  "end": 337
                }
              ],
              "start": 49,
              "end": 343
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 30,
            "end": 343
          }
        ],
        "start": 24,
        "end": 345
      },
      "kind": "namespace",
      "declare": true,
      "global": false,
      "start": 0,
      "end": 345
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Literal",
        "value": "dojox/charting/axis2d/common.createText",
        "raw": "\"dojox/charting/axis2d/common.createText\"",
        "start": 361,
        "end": 402
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 416,
              "end": 419
            },
            "moduleReference": {
              "type": "TSQualifiedName",
              "left": {
                "type": "TSQualifiedName",
                "left": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "dojox",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 422,
                    "end": 427
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "charting",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 428,
                    "end": 436
                  },
                  "start": 422,
                  "end": 436
                },
                "right": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "axis2d",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 437,
                  "end": 443
                },
                "start": 422,
                "end": 443
              },
              "right": {
                "type": "Identifier",
                "decorators": [],
                "name": "common",
                "optional": false,
                "typeAnnotation": null,
                "start": 444,
                "end": 450
              },
              "start": 422,
              "end": 450
            },
            "importKind": "value",
            "start": 409,
            "end": 450
          },
          {
            "type": "TSExportAssignment",
            "expression": {
              "type": "Identifier",
              "decorators": [],
              "name": "exp",
              "optional": false,
              "typeAnnotation": null,
              "start": 464,
              "end": 467
            },
            "start": 455,
            "end": 468
          }
        ],
        "start": 403,
        "end": 470
      },
      "kind": "module",
      "declare": true,
      "global": false,
      "start": 346,
      "end": 470
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 470
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
    "type": "Identifier",
    "value": "namespace",
    "start": 8,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "dojox",
    "start": 18,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 24,
    "end": 25
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 30,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "charting",
    "start": 40,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 49,
    "end": 50
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 59,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "axis2d",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 76,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 90,
    "end": 96
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 97,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Val",
    "start": 103,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 107,
    "end": 108
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 109,
    "end": 110
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 123,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "createText",
    "start": 158,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 168,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "object",
    "start": 170,
    "end": 176
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 204,
    "end": 213
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 214,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 221,
    "end": 222
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 239,
    "end": 248
  },
  {
    "type": "Identifier",
    "value": "createText",
    "start": 249,
    "end": 259
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 260,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "gfx",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 285,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 286,
    "end": 287
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 287,
    "end": 288
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 289,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 346,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "module",
    "start": 354,
    "end": 360
  },
  {
    "type": "String",
    "value": "\"dojox/charting/axis2d/common.createText\"",
    "start": 361,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 403,
    "end": 404
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 409,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "exp",
    "start": 416,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "dojox",
    "start": 422,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "charting",
    "start": 428,
    "end": 436
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 436,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "axis2d",
    "start": 437,
    "end": 443
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "common",
    "start": 444,
    "end": 450
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 455,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "exp",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 469,
    "end": 470
  }
]
```
