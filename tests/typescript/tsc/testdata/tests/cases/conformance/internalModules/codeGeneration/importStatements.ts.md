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
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 31,
                "end": 36
              },
              "typeParameters": null,
              "superClass": null,
              "superTypeArguments": null,
              "implements": [],
              "body": {
                "type": "ClassBody",
                "body": [
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "constructor",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 47,
                      "end": 58
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
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "x",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 69,
                                "end": 75
                              },
                              "start": 67,
                              "end": 75
                            },
                            "start": 66,
                            "end": 75
                          },
                          "readonly": false,
                          "static": false,
                          "start": 59,
                          "end": 75
                        },
                        {
                          "type": "TSParameterProperty",
                          "accessibility": "public",
                          "decorators": [],
                          "override": false,
                          "parameter": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "y",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSNumberKeyword",
                                "start": 87,
                                "end": 93
                              },
                              "start": 85,
                              "end": 93
                            },
                            "start": 84,
                            "end": 93
                          },
                          "readonly": false,
                          "static": false,
                          "start": 77,
                          "end": 93
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 95,
                        "end": 98
                      },
                      "expression": false,
                      "start": 58,
                      "end": 98
                    },
                    "kind": "constructor",
                    "computed": false,
                    "static": false,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 47,
                    "end": 98
                  }
                ],
                "start": 37,
                "end": 104
              },
              "abstract": false,
              "declare": false,
              "start": 25,
              "end": 104
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 18,
            "end": 104
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "VariableDeclaration",
              "kind": "var",
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "id": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Origin",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 121,
                    "end": 127
                  },
                  "init": {
                    "type": "NewExpression",
                    "callee": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 139
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 140,
                        "end": 141
                      },
                      {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 143,
                        "end": 144
                      }
                    ],
                    "start": 130,
                    "end": 145
                  },
                  "definite": false,
                  "start": 121,
                  "end": 145
                }
              ],
              "declare": false,
              "start": 117,
              "end": 146
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 110,
            "end": 146
          }
        ],
        "start": 12,
        "end": 148
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 148
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 184,
        "end": 185
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 199,
              "end": 200
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 203,
              "end": 204
            },
            "importKind": "value",
            "start": 192,
            "end": 205
          }
        ],
        "start": 186,
        "end": 255
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 174,
      "end": 255
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 291,
        "end": 292
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 307
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 310,
              "end": 311
            },
            "importKind": "value",
            "start": 299,
            "end": 312
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "m",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeQuery",
                      "exprName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "typeArguments": null,
                      "start": 372,
                      "end": 380
                    },
                    "start": 370,
                    "end": 380
                  },
                  "start": 369,
                  "end": 380
                },
                "init": null,
                "definite": false,
                "start": 369,
                "end": 380
              }
            ],
            "declare": false,
            "start": 365,
            "end": 381
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 393,
                          "end": 394
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 395,
                          "end": 400
                        },
                        "start": 393,
                        "end": 400
                      },
                      "typeArguments": null,
                      "start": 393,
                      "end": 400
                    },
                    "start": 391,
                    "end": 400
                  },
                  "start": 390,
                  "end": 400
                },
                "init": null,
                "definite": false,
                "start": 390,
                "end": 400
              }
            ],
            "declare": false,
            "start": 386,
            "end": 401
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 410,
                  "end": 411
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
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 415,
                        "end": 416
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 417,
                        "end": 418
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 415,
                      "end": 418
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "y",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 420,
                        "end": 421
                      },
                      "value": {
                        "type": "Literal",
                        "value": 0,
                        "raw": "0",
                        "start": 422,
                        "end": 423
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 420,
                      "end": 423
                    }
                  ],
                  "start": 414,
                  "end": 425
                },
                "definite": false,
                "start": 410,
                "end": 425
              }
            ],
            "declare": false,
            "start": 406,
            "end": 426
          }
        ],
        "start": 293,
        "end": 428
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 281,
      "end": 428
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "D",
        "optional": false,
        "typeAnnotation": null,
        "start": 461,
        "end": 462
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 476,
              "end": 477
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 480,
              "end": 481
            },
            "importKind": "value",
            "start": 469,
            "end": 482
          },
          {
            "type": "VariableDeclaration",
            "kind": "var",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "p",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 492,
                  "end": 493
                },
                "init": {
                  "type": "NewExpression",
                  "callee": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 500,
                      "end": 501
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Point",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 502,
                      "end": 507
                    },
                    "optional": false,
                    "computed": false,
                    "start": 500,
                    "end": 507
                  },
                  "typeArguments": null,
                  "arguments": [
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 508,
                      "end": 509
                    },
                    {
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 511,
                      "end": 512
                    }
                  ],
                  "start": 496,
                  "end": 513
                },
                "definite": false,
                "start": 492,
                "end": 513
              }
            ],
            "declare": false,
            "start": 488,
            "end": 514
          }
        ],
        "start": 463,
        "end": 516
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 451,
      "end": 516
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "E",
        "optional": false,
        "typeAnnotation": null,
        "start": 528,
        "end": 529
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "TSImportEqualsDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 543,
              "end": 544
            },
            "moduleReference": {
              "type": "Identifier",
              "decorators": [],
              "name": "A",
              "optional": false,
              "typeAnnotation": null,
              "start": 547,
              "end": 548
            },
            "importKind": "value",
            "start": 536,
            "end": 549
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "FunctionDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "xDist",
                "optional": false,
                "typeAnnotation": null,
                "start": 570,
                "end": 575
              },
              "generator": false,
              "async": false,
              "declare": false,
              "typeParameters": null,
              "params": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "TSQualifiedName",
                        "left": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 579,
                          "end": 580
                        },
                        "right": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Point",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 581,
                          "end": 586
                        },
                        "start": 579,
                        "end": 586
                      },
                      "typeArguments": null,
                      "start": 579,
                      "end": 586
                    },
                    "start": 577,
                    "end": 586
                  },
                  "start": 576,
                  "end": 586
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ReturnStatement",
                    "argument": {
                      "type": "BinaryExpression",
                      "left": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 606,
                            "end": 607
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "Origin",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 608,
                            "end": 614
                          },
                          "optional": false,
                          "computed": false,
                          "start": 606,
                          "end": 614
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 615,
                          "end": 616
                        },
                        "optional": false,
                        "computed": false,
                        "start": 606,
                        "end": 616
                      },
                      "operator": "-",
                      "right": {
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 619,
                          "end": 620
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "x",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 621,
                          "end": 622
                        },
                        "optional": false,
                        "computed": false,
                        "start": 619,
                        "end": 622
                      },
                      "start": 606,
                      "end": 622
                    },
                    "start": 598,
                    "end": 624
                  }
                ],
                "start": 588,
                "end": 630
              },
              "expression": false,
              "start": 561,
              "end": 630
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 554,
            "end": 630
          }
        ],
        "start": 530,
        "end": 632
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 518,
      "end": 632
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 632
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
    "value": "A",
    "start": 10,
    "end": 11
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 12,
    "end": 13
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 18,
    "end": 24
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 25,
    "end": 30
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 31,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 37,
    "end": 38
  },
  {
    "type": "Identifier",
    "value": "constructor",
    "start": 47,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 59,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 66,
    "end": 67
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 67,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 69,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 75,
    "end": 76
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 77,
    "end": 83
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 84,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 87,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 97,
    "end": 98
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 103,
    "end": 104
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 110,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 117,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 128,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 130,
    "end": 133
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 134,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 139,
    "end": 140
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 141,
    "end": 142
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 144,
    "end": 145
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 174,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 186,
    "end": 187
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 192,
    "end": 198
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 201,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 281,
    "end": 290
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 293,
    "end": 294
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 299,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 306,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 310,
    "end": 311
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 365,
    "end": 368
  },
  {
    "type": "Identifier",
    "value": "m",
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
    "type": "Keyword",
    "value": "typeof",
    "start": 372,
    "end": 378
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 380,
    "end": 381
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 386,
    "end": 389
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 391,
    "end": 392
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 393,
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
    "value": "Point",
    "start": 395,
    "end": 400
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 400,
    "end": 401
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 406,
    "end": 409
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 414,
    "end": 415
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 416,
    "end": 417
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 418,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 421,
    "end": 422
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 451,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 463,
    "end": 464
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 469,
    "end": 475
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 480,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 481,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 488,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 494,
    "end": 495
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 496,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 501,
    "end": 502
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 502,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 507,
    "end": 508
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 509,
    "end": 510
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 512,
    "end": 513
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 515,
    "end": 516
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 518,
    "end": 527
  },
  {
    "type": "Identifier",
    "value": "E",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 530,
    "end": 531
  },
  {
    "type": "Keyword",
    "value": "import",
    "start": 536,
    "end": 542
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 543,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 545,
    "end": 546
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 547,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 548,
    "end": 549
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 554,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 561,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "xDist",
    "start": 570,
    "end": 575
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 575,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 576,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 581,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 586,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 598,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 605,
    "end": 606
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 607,
    "end": 608
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 608,
    "end": 614
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "-",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 620,
    "end": 621
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 622,
    "end": 623
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 623,
    "end": 624
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 629,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 631,
    "end": 632
  }
]
```
