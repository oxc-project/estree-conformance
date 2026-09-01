__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSIntersectionType",
                "types": [
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 20,
                          "end": 21
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "foo",
                              "raw": "\"foo\"",
                              "start": 23,
                              "end": 28
                            },
                            "start": 23,
                            "end": 28
                          },
                          "start": 21,
                          "end": 28
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 20,
                        "end": 28
                      }
                    ],
                    "start": 18,
                    "end": 30
                  },
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
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 35,
                          "end": 36
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSLiteralType",
                            "literal": {
                              "type": "Literal",
                              "value": "bar",
                              "raw": "\"bar\"",
                              "start": 38,
                              "end": 43
                            },
                            "start": 38,
                            "end": 43
                          },
                          "start": 36,
                          "end": 43
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 35,
                        "end": 43
                      }
                    ],
                    "start": 33,
                    "end": 45
                  }
                ],
                "start": 18,
                "end": 45
              },
              "start": 16,
              "end": 45
            },
            "start": 14,
            "end": 45
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 45
        }
      ],
      "declare": true,
      "start": 0,
      "end": 46
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el1",
                "optional": false,
                "typeAnnotation": null,
                "start": 54,
                "end": 57
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 53,
            "end": 58
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o1",
            "optional": false,
            "typeAnnotation": null,
            "start": 61,
            "end": 63
          },
          "definite": false,
          "start": 53,
          "end": 63
        }
      ],
      "declare": false,
      "start": 47,
      "end": 64
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
            "name": "x",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSArrayType",
                    "elementType": {
                      "type": "TSNumberKeyword",
                      "start": 146,
                      "end": 152
                    },
                    "start": 146,
                    "end": 154
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
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
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 160,
                              "end": 161
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "a",
                                  "raw": "\"a\"",
                                  "start": 163,
                                  "end": 166
                                },
                                "start": 163,
                                "end": 166
                              },
                              "start": 161,
                              "end": 166
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 160,
                            "end": 166
                          }
                        ],
                        "start": 158,
                        "end": 168
                      },
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
                              "name": "t",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 173,
                              "end": 174
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "b",
                                  "raw": "\"b\"",
                                  "start": 176,
                                  "end": 179
                                },
                                "start": 176,
                                "end": 179
                              },
                              "start": 174,
                              "end": 179
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 173,
                            "end": 179
                          }
                        ],
                        "start": 171,
                        "end": 181
                      }
                    ],
                    "start": 158,
                    "end": 181
                  }
                ],
                "start": 146,
                "end": 182
              },
              "start": 144,
              "end": 182
            },
            "start": 143,
            "end": 182
          },
          "init": null,
          "definite": false,
          "start": 143,
          "end": 182
        }
      ],
      "declare": true,
      "start": 131,
      "end": 183
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el2",
                "optional": false,
                "typeAnnotation": null,
                "start": 189,
                "end": 192
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 188,
            "end": 193
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 196,
            "end": 197
          },
          "definite": false,
          "start": 188,
          "end": 197
        }
      ],
      "declare": false,
      "start": 184,
      "end": 198
    },
    {
      "type": "ForOfStatement",
      "await": false,
      "left": {
        "type": "VariableDeclaration",
        "kind": "const",
        "declarations": [
          {
            "type": "VariableDeclarator",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "elem",
              "optional": false,
              "typeAnnotation": null,
              "start": 217,
              "end": 221
            },
            "init": null,
            "definite": false,
            "start": 217,
            "end": 221
          }
        ],
        "declare": false,
        "start": 211,
        "end": 221
      },
      "right": {
        "type": "Identifier",
        "decorators": [],
        "name": "x",
        "optional": false,
        "typeAnnotation": null,
        "start": 225,
        "end": 226
      },
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ExpressionStatement",
            "expression": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "elem",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 238,
                  "end": 242
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "toFixed",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 243,
                  "end": 250
                },
                "optional": false,
                "computed": false,
                "start": 238,
                "end": 250
              },
              "typeArguments": null,
              "arguments": [],
              "optional": false,
              "start": 238,
              "end": 252
            },
            "directive": null,
            "start": 238,
            "end": 253
          }
        ],
        "start": 228,
        "end": 255
      },
      "start": 206,
      "end": 255
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Shape",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 267
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSUnionType",
        "types": [
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 276,
                  "end": 280
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 282,
                      "end": 290
                    },
                    "start": 282,
                    "end": 290
                  },
                  "start": 280,
                  "end": 290
                },
                "accessibility": null,
                "static": false,
                "start": 276,
                "end": 291
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "radius",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 292,
                  "end": 298
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 300,
                    "end": 306
                  },
                  "start": 298,
                  "end": 306
                },
                "accessibility": null,
                "static": false,
                "start": 292,
                "end": 306
              }
            ],
            "start": 274,
            "end": 308
          },
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 315,
                  "end": 319
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "rectangle",
                      "raw": "\"rectangle\"",
                      "start": 321,
                      "end": 332
                    },
                    "start": 321,
                    "end": 332
                  },
                  "start": 319,
                  "end": 332
                },
                "accessibility": null,
                "static": false,
                "start": 315,
                "end": 333
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "width",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 334,
                  "end": 339
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 341,
                    "end": 347
                  },
                  "start": 339,
                  "end": 347
                },
                "accessibility": null,
                "static": false,
                "start": 334,
                "end": 348
              },
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": false,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "height",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 349,
                  "end": 355
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 357,
                    "end": 363
                  },
                  "start": 355,
                  "end": 363
                },
                "accessibility": null,
                "static": false,
                "start": 349,
                "end": 363
              }
            ],
            "start": 313,
            "end": 365
          }
        ],
        "start": 272,
        "end": 365
      },
      "declare": false,
      "start": 257,
      "end": 366
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Circle",
        "optional": false,
        "typeAnnotation": null,
        "start": 373,
        "end": 379
      },
      "typeParameters": null,
      "typeAnnotation": {
        "type": "TSIntersectionType",
        "types": [
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Shape",
              "optional": false,
              "typeAnnotation": null,
              "start": 382,
              "end": 387
            },
            "typeArguments": null,
            "start": 382,
            "end": 387
          },
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
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 392,
                  "end": 396
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "circle",
                      "raw": "\"circle\"",
                      "start": 398,
                      "end": 406
                    },
                    "start": 398,
                    "end": 406
                  },
                  "start": 396,
                  "end": 406
                },
                "accessibility": null,
                "static": false,
                "start": 392,
                "end": 406
              }
            ],
            "start": 390,
            "end": 408
          }
        ],
        "start": 382,
        "end": 408
      },
      "declare": false,
      "start": 368,
      "end": 409
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "doStuffWithCircle",
        "optional": false,
        "typeAnnotation": null,
        "start": 420,
        "end": 437
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "arg",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Circle",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 443,
                    "end": 449
                  },
                  "typeArguments": null,
                  "start": 443,
                  "end": 449
                },
                {
                  "type": "TSTupleType",
                  "elementTypes": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Circle",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 453,
                        "end": 459
                      },
                      "typeArguments": null,
                      "start": 453,
                      "end": 459
                    },
                    {
                      "type": "TSFunctionType",
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "newValue",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Circle",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 472,
                                "end": 478
                              },
                              "typeArguments": null,
                              "start": 472,
                              "end": 478
                            },
                            "start": 470,
                            "end": 478
                          },
                          "start": 462,
                          "end": 478
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 483,
                          "end": 487
                        },
                        "start": 480,
                        "end": 487
                      },
                      "start": 461,
                      "end": 487
                    }
                  ],
                  "start": 452,
                  "end": 488
                }
              ],
              "start": 443,
              "end": 488
            },
            "start": 441,
            "end": 488
          },
          "start": 438,
          "end": 488
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "CallExpression",
              "callee": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Array",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 498,
                  "end": 503
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "isArray",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 504,
                  "end": 511
                },
                "optional": false,
                "computed": false,
                "start": 498,
                "end": 511
              },
              "typeArguments": null,
              "arguments": [
                {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "arg",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 512,
                  "end": 515
                }
              ],
              "optional": false,
              "start": 498,
              "end": 516
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "VariableDeclaration",
                  "kind": "let",
                  "declarations": [
                    {
                      "type": "VariableDeclarator",
                      "id": {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 529,
                            "end": 534
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "setValue",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 536,
                            "end": 544
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 528,
                        "end": 545
                      },
                      "init": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "arg",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 548,
                        "end": 551
                      },
                      "definite": false,
                      "start": 528,
                      "end": 551
                    }
                  ],
                  "declare": false,
                  "start": 524,
                  "end": 552
                }
              ],
              "start": 518,
              "end": 562
            },
            "alternate": null,
            "start": 494,
            "end": 562
          }
        ],
        "start": 490,
        "end": 564
      },
      "expression": false,
      "start": 411,
      "end": 564
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 575,
        "end": 577
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "T",
              "optional": false,
              "typeAnnotation": null,
              "start": 578,
              "end": 579
            },
            "constraint": {
              "type": "TSIntersectionType",
              "types": [
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 590,
                        "end": 591
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "foo",
                            "raw": "\"foo\"",
                            "start": 593,
                            "end": 598
                          },
                          "start": 593,
                          "end": 598
                        },
                        "start": 591,
                        "end": 598
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 590,
                      "end": 598
                    }
                  ],
                  "start": 588,
                  "end": 600
                },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 605,
                        "end": 606
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": "bar",
                            "raw": "\"bar\"",
                            "start": 608,
                            "end": 613
                          },
                          "start": 608,
                          "end": 613
                        },
                        "start": 606,
                        "end": 613
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 605,
                      "end": 613
                    }
                  ],
                  "start": 603,
                  "end": 615
                }
              ],
              "start": 588,
              "end": 615
            },
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 578,
            "end": 615
          }
        ],
        "start": 577,
        "end": 616
      },
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
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 620,
                "end": 621
              },
              "typeArguments": null,
              "start": 620,
              "end": 621
            },
            "start": 618,
            "end": 621
          },
          "start": 617,
          "end": 621
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "ArrayPattern",
                  "decorators": [],
                  "elements": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 632,
                      "end": 633
                    }
                  ],
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 631,
                  "end": 634
                },
                "init": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 637,
                  "end": 638
                },
                "definite": false,
                "start": 631,
                "end": 638
              }
            ],
            "declare": false,
            "start": 627,
            "end": 639
          }
        ],
        "start": 623,
        "end": 650
      },
      "expression": false,
      "start": 566,
      "end": 650
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
            "name": "o2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSIntersectionType",
                    "types": [
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 674
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "foo",
                                  "raw": "\"foo\"",
                                  "start": 676,
                                  "end": 681
                                },
                                "start": 676,
                                "end": 681
                              },
                              "start": 674,
                              "end": 681
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 673,
                            "end": 681
                          }
                        ],
                        "start": 671,
                        "end": 683
                      },
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
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 688,
                              "end": 689
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "bar",
                                  "raw": "\"bar\"",
                                  "start": 691,
                                  "end": 696
                                },
                                "start": 691,
                                "end": 696
                              },
                              "start": 689,
                              "end": 696
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 688,
                            "end": 696
                          }
                        ],
                        "start": 686,
                        "end": 698
                      }
                    ],
                    "start": 671,
                    "end": 698
                  },
                  {
                    "type": "TSIntersectionType",
                    "types": [
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 705,
                              "end": 706
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "qwe",
                                  "raw": "\"qwe\"",
                                  "start": 708,
                                  "end": 713
                                },
                                "start": 708,
                                "end": 713
                              },
                              "start": 706,
                              "end": 713
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 705,
                            "end": 713
                          }
                        ],
                        "start": 703,
                        "end": 715
                      },
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
                              "name": "b",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 720,
                              "end": 721
                            },
                            "typeAnnotation": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSLiteralType",
                                "literal": {
                                  "type": "Literal",
                                  "value": "rty",
                                  "raw": "\"rty\"",
                                  "start": 723,
                                  "end": 728
                                },
                                "start": 723,
                                "end": 728
                              },
                              "start": 721,
                              "end": 728
                            },
                            "accessibility": null,
                            "static": false,
                            "start": 720,
                            "end": 728
                          }
                        ],
                        "start": 718,
                        "end": 730
                      }
                    ],
                    "start": 703,
                    "end": 730
                  }
                ],
                "start": 670,
                "end": 731
              },
              "start": 668,
              "end": 731
            },
            "start": 666,
            "end": 731
          },
          "init": null,
          "definite": false,
          "start": 666,
          "end": 731
        }
      ],
      "declare": true,
      "start": 652,
      "end": 732
    },
    {
      "type": "VariableDeclaration",
      "kind": "const",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "ArrayPattern",
            "decorators": [],
            "elements": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "el3",
                "optional": false,
                "typeAnnotation": null,
                "start": 740,
                "end": 743
              }
            ],
            "optional": false,
            "typeAnnotation": null,
            "start": 739,
            "end": 744
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "o2",
            "optional": false,
            "typeAnnotation": null,
            "start": 747,
            "end": 749
          },
          "definite": false,
          "start": 739,
          "end": 749
        }
      ],
      "declare": false,
      "start": 733,
      "end": 750
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 759
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
    "value": "const",
    "start": 8,
    "end": 13
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 14,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 18,
    "end": 19
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 20,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 23,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 31,
    "end": 32
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 36,
    "end": 37
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 38,
    "end": 43
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 45,
    "end": 46
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 47,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "el1",
    "start": 54,
    "end": 57
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 57,
    "end": 58
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 59,
    "end": 60
  },
  {
    "type": "Identifier",
    "value": "o1",
    "start": 61,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 63,
    "end": 64
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 131,
    "end": 138
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 139,
    "end": 142
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 144,
    "end": 145
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 146,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 152,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 153,
    "end": 154
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 158,
    "end": 159
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 161,
    "end": 162
  },
  {
    "type": "String",
    "value": "\"a\"",
    "start": 163,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 167,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 169,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 171,
    "end": 172
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 173,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 174,
    "end": 175
  },
  {
    "type": "String",
    "value": "\"b\"",
    "start": 176,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 182,
    "end": 183
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 184,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 188,
    "end": 189
  },
  {
    "type": "Identifier",
    "value": "el2",
    "start": 189,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 192,
    "end": 193
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 194,
    "end": 195
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "for",
    "start": 206,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 211,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 217,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "of",
    "start": 222,
    "end": 224
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 226,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "elem",
    "start": 238,
    "end": 242
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 242,
    "end": 243
  },
  {
    "type": "Identifier",
    "value": "toFixed",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 250,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 254,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 257,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 276,
    "end": 280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 280,
    "end": 281
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 282,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "radius",
    "start": 292,
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
    "value": "number",
    "start": 300,
    "end": 306
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 307,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 315,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "String",
    "value": "\"rectangle\"",
    "start": 321,
    "end": 332
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "width",
    "start": 334,
    "end": 339
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 339,
    "end": 340
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 341,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 347,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "height",
    "start": 349,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 355,
    "end": 356
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 357,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 364,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 368,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 373,
    "end": 379
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "Shape",
    "start": 382,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 388,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 392,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "String",
    "value": "\"circle\"",
    "start": 398,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 411,
    "end": 419
  },
  {
    "type": "Identifier",
    "value": "doStuffWithCircle",
    "start": 420,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 437,
    "end": 438
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 438,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 443,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 453,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Identifier",
    "value": "newValue",
    "start": 462,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 470,
    "end": 471
  },
  {
    "type": "Identifier",
    "value": "Circle",
    "start": 472,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 478,
    "end": 479
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 480,
    "end": 482
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 483,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 490,
    "end": 491
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 494,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 497,
    "end": 498
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 503,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "isArray",
    "start": 504,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 512,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 515,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 518,
    "end": 519
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 524,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 528,
    "end": 529
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 529,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 534,
    "end": 535
  },
  {
    "type": "Identifier",
    "value": "setValue",
    "start": 536,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 544,
    "end": 545
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 546,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 551,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 563,
    "end": 564
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 566,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 577,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 578,
    "end": 579
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 580,
    "end": 587
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 588,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 590,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 591,
    "end": 592
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 593,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 601,
    "end": 602
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 603,
    "end": 604
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 606,
    "end": 607
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 608,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 615,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 616,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 620,
    "end": 621
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 621,
    "end": 622
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 623,
    "end": 624
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 627,
    "end": 630
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 632,
    "end": 633
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 638,
    "end": 639
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 649,
    "end": 650
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 652,
    "end": 659
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 660,
    "end": 665
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 666,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 670,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 671,
    "end": 672
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "String",
    "value": "\"foo\"",
    "start": 676,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 682,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 684,
    "end": 685
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 686,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 688,
    "end": 689
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 689,
    "end": 690
  },
  {
    "type": "String",
    "value": "\"bar\"",
    "start": 691,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 700,
    "end": 701
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 703,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 706,
    "end": 707
  },
  {
    "type": "String",
    "value": "\"qwe\"",
    "start": 708,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 718,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 720,
    "end": 721
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 721,
    "end": 722
  },
  {
    "type": "String",
    "value": "\"rty\"",
    "start": 723,
    "end": 728
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 729,
    "end": 730
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 730,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 731,
    "end": 732
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 733,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 739,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "el3",
    "start": 740,
    "end": 743
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 745,
    "end": 746
  },
  {
    "type": "Identifier",
    "value": "o2",
    "start": 747,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 749,
    "end": 750
  }
]
```
