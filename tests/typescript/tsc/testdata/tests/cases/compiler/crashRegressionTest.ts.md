__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "TSQualifiedName",
        "left": {
          "type": "TSQualifiedName",
          "left": {
            "type": "Identifier",
            "decorators": [],
            "name": "MsPortal",
            "optional": false,
            "typeAnnotation": null,
            "start": 10,
            "end": 18
          },
          "right": {
            "type": "Identifier",
            "decorators": [],
            "name": "Util",
            "optional": false,
            "typeAnnotation": null,
            "start": 19,
            "end": 23
          },
          "start": 10,
          "end": 23
        },
        "right": {
          "type": "Identifier",
          "decorators": [],
          "name": "TemplateEngine",
          "optional": false,
          "typeAnnotation": null,
          "start": 24,
          "end": 38
        },
        "start": 10,
        "end": 38
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "Literal",
              "value": "use strict",
              "raw": "\"use strict\"",
              "start": 45,
              "end": 57
            },
            "directive": "use strict",
            "start": 45,
            "end": 58
          },
          {
            "type": "TSInterfaceDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "TemplateKeyValue",
              "optional": false,
              "typeAnnotation": null,
              "start": 75,
              "end": 91
            },
            "typeParameters": null,
            "extends": [],
            "body": {
              "type": "TSInterfaceBody",
              "body": [
                {
                  "type": "TSIndexSignature",
                  "parameters": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSStringKeyword",
                          "start": 109,
                          "end": 115
                        },
                        "start": 107,
                        "end": 115
                      },
                      "start": 103,
                      "end": 115
                    }
                  ],
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSStringKeyword",
                      "start": 118,
                      "end": 124
                    },
                    "start": 116,
                    "end": 124
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 102,
                  "end": 125
                }
              ],
              "start": 92,
              "end": 131
            },
            "declare": false,
            "start": 65,
            "end": 131
          },
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "StringTemplate",
              "optional": false,
              "typeAnnotation": null,
              "start": 144,
              "end": 158
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [
                {
                  "type": "PropertyDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "_templateStorage",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 177,
                    "end": 193
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "TemplateStorage",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 195,
                        "end": 210
                      },
                      "typeArguments": null,
                      "start": 195,
                      "end": 210
                    },
                    "start": 193,
                    "end": 210
                  },
                  "value": null,
                  "computed": false,
                  "static": false,
                  "declare": false,
                  "override": false,
                  "optional": false,
                  "definite": false,
                  "readonly": false,
                  "accessibility": "private",
                  "start": 169,
                  "end": 211
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "constructor",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 222,
                    "end": 233
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "templateStorage",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "TemplateStorage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 251,
                              "end": 266
                            },
                            "typeArguments": null,
                            "start": 251,
                            "end": 266
                          },
                          "start": 249,
                          "end": 266
                        },
                        "start": 234,
                        "end": 266
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "ThisExpression",
                                "start": 282,
                                "end": 286
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "_templateStorage",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 287,
                                "end": 303
                              },
                              "optional": false,
                              "computed": false,
                              "start": 282,
                              "end": 303
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "templateStorage",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 306,
                              "end": 321
                            },
                            "start": 282,
                            "end": 321
                          },
                          "directive": null,
                          "start": 282,
                          "end": 322
                        }
                      ],
                      "start": 268,
                      "end": 332
                    },
                    "expression": false,
                    "start": 233,
                    "end": 332
                  },
                  "kind": "constructor",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": null,
                  "start": 222,
                  "end": 332
                },
                {
                  "type": "MethodDefinition",
                  "decorators": [],
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "text",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 350,
                    "end": 354
                  },
                  "value": {
                    "type": "FunctionExpression",
                    "id": null,
                    "generator": false,
                    "async": false,
                    "declare": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "value",
                        "optional": true,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 363,
                            "end": 369
                          },
                          "start": 361,
                          "end": 369
                        },
                        "start": 355,
                        "end": 369
                      }
                    ],
                    "returnType": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSAnyKeyword",
                        "start": 372,
                        "end": 375
                      },
                      "start": 370,
                      "end": 375
                    },
                    "body": {
                      "type": "BlockStatement",
                      "body": [
                        {
                          "type": "ExpressionStatement",
                          "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                              "type": "MemberExpression",
                              "object": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "MemberExpression",
                                  "object": {
                                    "type": "ThisExpression",
                                    "start": 390,
                                    "end": 394
                                  },
                                  "property": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "_templateStorage",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 395,
                                    "end": 411
                                  },
                                  "optional": false,
                                  "computed": false,
                                  "start": 390,
                                  "end": 411
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "templateSources",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 412,
                                  "end": 427
                                },
                                "optional": false,
                                "computed": false,
                                "start": 390,
                                "end": 427
                              },
                              "property": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "ThisExpression",
                                  "start": 428,
                                  "end": 432
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "_name",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 433,
                                  "end": 438
                                },
                                "optional": false,
                                "computed": false,
                                "start": 428,
                                "end": 438
                              },
                              "optional": false,
                              "computed": true,
                              "start": 390,
                              "end": 439
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "value",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 442,
                              "end": 447
                            },
                            "start": 390,
                            "end": 447
                          },
                          "directive": null,
                          "start": 390,
                          "end": 448
                        }
                      ],
                      "start": 376,
                      "end": 458
                    },
                    "expression": false,
                    "start": 354,
                    "end": 458
                  },
                  "kind": "method",
                  "computed": false,
                  "static": false,
                  "override": false,
                  "optional": false,
                  "accessibility": "public",
                  "start": 343,
                  "end": 458
                }
              ],
              "start": 159,
              "end": 464
            },
            "abstract": false,
            "declare": false,
            "start": 138,
            "end": 464
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "ClassDeclaration",
              "decorators": [],
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "TemplateStorage",
                "optional": false,
                "typeAnnotation": null,
                "start": 484,
                "end": 499
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templateSources",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 517,
                      "end": 532
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 534,
                          "end": 550
                        },
                        "typeArguments": null,
                        "start": 534,
                        "end": 550
                      },
                      "start": 532,
                      "end": 550
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 553,
                      "end": 555
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 510,
                    "end": 556
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "templateData",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 572,
                      "end": 584
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "TemplateKeyValue",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 586,
                          "end": 602
                        },
                        "typeArguments": null,
                        "start": 586,
                        "end": 602
                      },
                      "start": 584,
                      "end": 602
                    },
                    "value": {
                      "type": "ObjectExpression",
                      "properties": [],
                      "start": 605,
                      "end": 607
                    },
                    "computed": false,
                    "static": false,
                    "declare": false,
                    "override": false,
                    "optional": false,
                    "definite": false,
                    "readonly": false,
                    "accessibility": "public",
                    "start": 565,
                    "end": 608
                  }
                ],
                "start": 500,
                "end": 614
              },
              "abstract": false,
              "declare": false,
              "start": 478,
              "end": 614
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 471,
            "end": 614
          }
        ],
        "start": 39,
        "end": 616
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 616
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 616
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 0,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "MsPortal",
    "start": 10,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "Util",
    "start": 19,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "TemplateEngine",
    "start": 24,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "String",
    "value": "\"use strict\"",
    "start": 45,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 57,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 65,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "TemplateKeyValue",
    "start": 75,
    "end": 91
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 92,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 103,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 107,
    "end": 108
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 109,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 115,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 118,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 130,
    "end": 131
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 138,
    "end": 143
  },
  {
    "type": "Identifier",
    "value": "StringTemplate",
    "start": 144,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 159,
    "end": 160
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 169,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "_templateStorage",
    "start": 177,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "TemplateStorage",
    "start": 195,
    "end": 210
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 210,
    "end": 211
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 222,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "templateStorage",
    "start": 234,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 249,
    "end": 250
  },
  {
    "type": "Identifier",
    "value": "TemplateStorage",
    "start": 251,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 282,
    "end": 286
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 286,
    "end": 287
  },
  {
    "type": "Identifier",
    "value": "_templateStorage",
    "start": 287,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 304,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "templateStorage",
    "start": 306,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 343,
    "end": 349
  },
  {
    "type": "Identifier",
    "value": "text",
    "start": 350,
    "end": 354
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 354,
    "end": 355
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 355,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 361,
    "end": 362
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 363,
    "end": 369
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 369,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 370,
    "end": 371
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 372,
    "end": 375
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 376,
    "end": 377
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 390,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "_templateStorage",
    "start": 395,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 411,
    "end": 412
  },
  {
    "type": "Identifier",
    "value": "templateSources",
    "start": 412,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 427,
    "end": 428
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 428,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "_name",
    "start": 433,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 442,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 447,
    "end": 448
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 471,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 478,
    "end": 483
  },
  {
    "type": "Identifier",
    "value": "TemplateStorage",
    "start": 484,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 500,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 510,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "templateSources",
    "start": 517,
    "end": 532
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 532,
    "end": 533
  },
  {
    "type": "Identifier",
    "value": "TemplateKeyValue",
    "start": 534,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 553,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 554,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 555,
    "end": 556
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 565,
    "end": 571
  },
  {
    "type": "Identifier",
    "value": "templateData",
    "start": 572,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 584,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "TemplateKeyValue",
    "start": 586,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 613,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 615,
    "end": 616
  }
]
```
