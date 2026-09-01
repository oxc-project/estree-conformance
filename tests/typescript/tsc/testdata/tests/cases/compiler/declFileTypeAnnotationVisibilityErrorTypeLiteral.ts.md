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
        "name": "m",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 11
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ClassDeclaration",
            "decorators": [],
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "private1",
              "optional": false,
              "typeAnnotation": null,
              "start": 24,
              "end": 32
            },
            "typeParameters": null,
            "superClass": null,
            "superTypeArguments": null,
            "implements": [],
            "body": {
              "type": "ClassBody",
              "body": [],
              "start": 33,
              "end": 40
            },
            "abstract": false,
            "declare": false,
            "start": 18,
            "end": 40
          },
          {
            "type": "TSModuleDeclaration",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 55,
              "end": 57
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
                      "name": "public1",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 81,
                      "end": 88
                    },
                    "typeParameters": null,
                    "superClass": null,
                    "superTypeArguments": null,
                    "implements": [],
                    "body": {
                      "type": "ClassBody",
                      "body": [],
                      "start": 89,
                      "end": 100
                    },
                    "abstract": false,
                    "declare": false,
                    "start": 75,
                    "end": 100
                  },
                  "specifiers": [],
                  "source": null,
                  "exportKind": "value",
                  "attributes": [],
                  "start": 68,
                  "end": 100
                }
              ],
              "start": 58,
              "end": 106
            },
            "kind": "namespace",
            "declare": false,
            "global": false,
            "start": 45,
            "end": 106
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
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
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
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 136,
                              "end": 137
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 139,
                                  "end": 147
                                },
                                "typeArguments": null,
                                "start": 139,
                                "end": 147
                              },
                              "start": 137,
                              "end": 147
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 136,
                            "end": 148
                          },
                          {
                            "type": "TSPropertySignature",
                            "computed": false,
                            "optional": false,
                            "readonly": false,
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "y",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 157,
                              "end": 158
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 160,
                                    "end": 162
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 163,
                                    "end": 170
                                  },
                                  "start": 160,
                                  "end": 170
                                },
                                "typeArguments": null,
                                "start": 160,
                                "end": 170
                              },
                              "start": 158,
                              "end": 170
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 157,
                            "end": 171
                          },
                          {
                            "type": "TSCallSignatureDeclaration",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSArrayType",
                                "elementType": {
                                  "type": "TSTypeReference",
                                  "typeName": {
                                    "type": "TSQualifiedName",
                                    "left": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "m2",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 184,
                                      "end": 186
                                    },
                                    "right": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "public1",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 187,
                                      "end": 194
                                    },
                                    "start": 184,
                                    "end": 194
                                  },
                                  "typeArguments": null,
                                  "start": 184,
                                  "end": 194
                                },
                                "start": 184,
                                "end": 196
                              },
                              "start": 182,
                              "end": 196
                            },
                            "start": 180,
                            "end": 197
                          },
                          {
                            "type": "TSMethodSignature",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "method",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 206,
                              "end": 212
                            },
                            "computed": false,
                            "optional": false,
                            "kind": "method",
                            "typeParameters": null,
                            "params": [],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 216,
                                  "end": 224
                                },
                                "typeArguments": null,
                                "start": 216,
                                "end": 224
                              },
                              "start": 214,
                              "end": 224
                            },
                            "accessibility": null,
                            "readonly": false,
                            "static": false,
                            "start": 206,
                            "end": 225
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "n",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSNumberKeyword",
                                    "start": 238,
                                    "end": 244
                                  },
                                  "start": 236,
                                  "end": 244
                                },
                                "start": 235,
                                "end": 244
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 247,
                                  "end": 255
                                },
                                "typeArguments": null,
                                "start": 247,
                                "end": 255
                              },
                              "start": 245,
                              "end": 255
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 234,
                            "end": 256
                          },
                          {
                            "type": "TSIndexSignature",
                            "parameters": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "s",
                                "optional": false,
                                "typeAnnotation": {
                                  "type": "TSTypeAnnotation",
                                  "typeAnnotation": {
                                    "type": "TSStringKeyword",
                                    "start": 269,
                                    "end": 275
                                  },
                                  "start": 267,
                                  "end": 275
                                },
                                "start": 266,
                                "end": 275
                              }
                            ],
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "TSQualifiedName",
                                  "left": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "m2",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 278,
                                    "end": 280
                                  },
                                  "right": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "public1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 281,
                                    "end": 288
                                  },
                                  "start": 278,
                                  "end": 288
                                },
                                "typeArguments": null,
                                "start": 278,
                                "end": 288
                              },
                              "start": 276,
                              "end": 288
                            },
                            "readonly": false,
                            "static": false,
                            "accessibility": null,
                            "start": 265,
                            "end": 289
                          }
                        ],
                        "start": 126,
                        "end": 295
                      },
                      "start": 124,
                      "end": 295
                    },
                    "start": 123,
                    "end": 295
                  },
                  "init": null,
                  "definite": false,
                  "start": 123,
                  "end": 295
                }
              ],
              "declare": false,
              "start": 119,
              "end": 296
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 112,
            "end": 296
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
                    "name": "x2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 312,
                    "end": 314
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
                          "start": 327,
                          "end": 328
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "private1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 334,
                            "end": 342
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 330,
                          "end": 344
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 327,
                        "end": 344
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
                          "start": 354,
                          "end": 355
                        },
                        "value": {
                          "type": "NewExpression",
                          "callee": {
                            "type": "MemberExpression",
                            "object": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "m2",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 361,
                              "end": 363
                            },
                            "property": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "public1",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 364,
                              "end": 371
                            },
                            "optional": false,
                            "computed": false,
                            "start": 361,
                            "end": 371
                          },
                          "typeArguments": null,
                          "arguments": [],
                          "start": 357,
                          "end": 373
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 354,
                        "end": 373
                      },
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "method",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 383,
                          "end": 389
                        },
                        "value": {
                          "type": "FunctionExpression",
                          "id": null,
                          "generator": false,
                          "async": false,
                          "declare": false,
                          "typeParameters": null,
                          "params": [],
                          "returnType": null,
                          "body": {
                            "type": "BlockStatement",
                            "body": [
                              {
                                "type": "ReturnStatement",
                                "argument": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "private1",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 417,
                                    "end": 425
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 413,
                                  "end": 427
                                },
                                "start": 406,
                                "end": 428
                              }
                            ],
                            "start": 392,
                            "end": 438
                          },
                          "expression": false,
                          "start": 389,
                          "end": 438
                        },
                        "method": true,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 383,
                        "end": 438
                      }
                    ],
                    "start": 317,
                    "end": 444
                  },
                  "definite": false,
                  "start": 312,
                  "end": 444
                }
              ],
              "declare": false,
              "start": 308,
              "end": 445
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 301,
            "end": 445
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
                    "name": "x3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 461,
                    "end": 463
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 466,
                    "end": 467
                  },
                  "definite": false,
                  "start": 461,
                  "end": 467
                }
              ],
              "declare": false,
              "start": 457,
              "end": 468
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 450,
            "end": 468
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
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSFunctionType",
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 513,
                                  "end": 521
                                },
                                "typeArguments": null,
                                "start": 513,
                                "end": 521
                              },
                              "start": 511,
                              "end": 521
                            },
                            "start": 510,
                            "end": 521
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 526,
                                "end": 528
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 529,
                                "end": 536
                              },
                              "start": 526,
                              "end": 536
                            },
                            "typeArguments": null,
                            "start": 526,
                            "end": 536
                          },
                          "start": 523,
                          "end": 536
                        },
                        "start": 509,
                        "end": 536
                      },
                      "start": 507,
                      "end": 536
                    },
                    "start": 506,
                    "end": 536
                  },
                  "init": null,
                  "definite": false,
                  "start": 506,
                  "end": 536
                }
              ],
              "declare": false,
              "start": 502,
              "end": 537
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 495,
            "end": 537
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
                    "name": "y2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 553,
                    "end": 555
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 558,
                    "end": 559
                  },
                  "definite": false,
                  "start": 553,
                  "end": 559
                }
              ],
              "declare": false,
              "start": 549,
              "end": 560
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 542,
            "end": 560
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
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSConstructorType",
                        "abstract": false,
                        "typeParameters": null,
                        "params": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "private1",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 612,
                                  "end": 620
                                },
                                "typeArguments": null,
                                "start": 612,
                                "end": 620
                              },
                              "start": 610,
                              "end": 620
                            },
                            "start": 609,
                            "end": 620
                          }
                        ],
                        "returnType": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "TSQualifiedName",
                              "left": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "m2",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 625,
                                "end": 627
                              },
                              "right": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "public1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 628,
                                "end": 635
                              },
                              "start": 625,
                              "end": 635
                            },
                            "typeArguments": null,
                            "start": 625,
                            "end": 635
                          },
                          "start": 622,
                          "end": 635
                        },
                        "start": 604,
                        "end": 635
                      },
                      "start": 602,
                      "end": 635
                    },
                    "start": 601,
                    "end": 635
                  },
                  "init": null,
                  "definite": false,
                  "start": 601,
                  "end": 635
                }
              ],
              "declare": false,
              "start": 597,
              "end": 636
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 590,
            "end": 636
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
                    "name": "z2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 652,
                    "end": 654
                  },
                  "init": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "z",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 657,
                    "end": 658
                  },
                  "definite": false,
                  "start": 652,
                  "end": 658
                }
              ],
              "declare": false,
              "start": 648,
              "end": 659
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 641,
            "end": 659
          }
        ],
        "start": 12,
        "end": 661
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 661
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 661
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
    "value": "m",
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
    "value": "class",
    "start": 18,
    "end": 23
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 24,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 45,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 55,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 58,
    "end": 59
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 68,
    "end": 74
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 75,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 81,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 89,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 99,
    "end": 100
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 112,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 119,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 124,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 126,
    "end": 127
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 136,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 139,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 147,
    "end": 148
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 160,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 163,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 181,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 184,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 186,
    "end": 187
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 187,
    "end": 194
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 195,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 196,
    "end": 197
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 206,
    "end": 212
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 212,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 214,
    "end": 215
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 216,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 234,
    "end": 235
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 235,
    "end": 236
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 236,
    "end": 237
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 238,
    "end": 244
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 244,
    "end": 245
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 245,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 247,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 255,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 265,
    "end": 266
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 269,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 276,
    "end": 277
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 278,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 281,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 301,
    "end": 307
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 308,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 312,
    "end": 314
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 315,
    "end": 316
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 317,
    "end": 318
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 328,
    "end": 329
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 330,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 334,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 344,
    "end": 345
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 357,
    "end": 360
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 361,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 363,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 364,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 371,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 373,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "method",
    "start": 383,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 389,
    "end": 390
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 392,
    "end": 393
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 406,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 413,
    "end": 416
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 417,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 444,
    "end": 445
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 450,
    "end": 456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 457,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 464,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 467,
    "end": 468
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 495,
    "end": 501
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 502,
    "end": 505
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 506,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 507,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 513,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 521,
    "end": 522
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 523,
    "end": 525
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 526,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 529,
    "end": 536
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 536,
    "end": 537
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 542,
    "end": 548
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 549,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "y2",
    "start": 553,
    "end": 555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 559,
    "end": 560
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 590,
    "end": 596
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 597,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 602,
    "end": 603
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 610,
    "end": 611
  },
  {
    "type": "Identifier",
    "value": "private1",
    "start": 612,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 622,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 627,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "public1",
    "start": 628,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 635,
    "end": 636
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 641,
    "end": 647
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 648,
    "end": 651
  },
  {
    "type": "Identifier",
    "value": "z2",
    "start": 652,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 660,
    "end": 661
  }
]
```
