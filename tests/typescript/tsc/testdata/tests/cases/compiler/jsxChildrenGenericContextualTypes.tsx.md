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
        "name": "JSX",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Element",
                "optional": false,
                "typeAnnotation": null,
                "start": 37,
                "end": 44
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 45,
                "end": 47
              },
              "declare": false,
              "start": 27,
              "end": 47
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 20,
            "end": 47
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementAttributesProperty",
                "optional": false,
                "typeAnnotation": null,
                "start": 69,
                "end": 94
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
                      "name": "props",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 97,
                      "end": 102
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 104,
                        "end": 106
                      },
                      "start": 102,
                      "end": 106
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 97,
                    "end": 107
                  }
                ],
                "start": 95,
                "end": 109
              },
              "declare": false,
              "start": 59,
              "end": 109
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 52,
            "end": 109
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "ElementChildrenAttribute",
                "optional": false,
                "typeAnnotation": null,
                "start": 131,
                "end": 155
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
                      "name": "children",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 158,
                      "end": 166
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeLiteral",
                        "members": [],
                        "start": 168,
                        "end": 170
                      },
                      "start": 166,
                      "end": 170
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 158,
                    "end": 171
                  }
                ],
                "start": 156,
                "end": 173
              },
              "declare": false,
              "start": 121,
              "end": 173
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 114,
            "end": 173
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicAttributes",
                "optional": false,
                "typeAnnotation": null,
                "start": 195,
                "end": 214
              },
              "typeParameters": null,
              "extends": [],
              "body": {
                "type": "TSInterfaceBody",
                "body": [],
                "start": 215,
                "end": 217
              },
              "declare": false,
              "start": 185,
              "end": 217
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 178,
            "end": 217
          },
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSInterfaceDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IntrinsicElements",
                "optional": false,
                "typeAnnotation": null,
                "start": 239,
                "end": 256
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
                        "name": "key",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 265,
                            "end": 271
                          },
                          "start": 263,
                          "end": 271
                        },
                        "start": 260,
                        "end": 271
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Element",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 274,
                          "end": 281
                        },
                        "typeArguments": null,
                        "start": 274,
                        "end": 281
                      },
                      "start": 272,
                      "end": 281
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 259,
                    "end": 281
                  }
                ],
                "start": 257,
                "end": 283
              },
              "declare": false,
              "start": 229,
              "end": 283
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 222,
            "end": 283
          }
        ],
        "start": 14,
        "end": 285
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 0,
      "end": 285
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
            "name": "Elem",
            "optional": false,
            "typeAnnotation": null,
            "start": 292,
            "end": 296
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 300,
                    "end": 301
                  },
                  "constraint": null,
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 300,
                  "end": 301
                },
                {
                  "type": "TSTypeParameter",
                  "name": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "U",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 302,
                    "end": 303
                  },
                  "constraint": null,
                  "default": {
                    "type": "TSNeverKeyword",
                    "start": 304,
                    "end": 309
                  },
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 302,
                  "end": 309
                }
              ],
              "start": 299,
              "end": 310
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
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
                          "name": "prop",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 316,
                          "end": 320
                        },
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
                              "start": 322,
                              "end": 323
                            },
                            "typeArguments": null,
                            "start": 322,
                            "end": 323
                          },
                          "start": 320,
                          "end": 323
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 316,
                        "end": 324
                      },
                      {
                        "type": "TSPropertySignature",
                        "computed": false,
                        "optional": false,
                        "readonly": false,
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "children",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 325,
                          "end": 333
                        },
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSFunctionType",
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "t",
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
                                      "start": 339,
                                      "end": 340
                                    },
                                    "typeArguments": null,
                                    "start": 339,
                                    "end": 340
                                  },
                                  "start": 337,
                                  "end": 340
                                },
                                "start": 336,
                                "end": 340
                              }
                            ],
                            "returnType": {
                              "type": "TSTypeAnnotation",
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "T",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 345,
                                  "end": 346
                                },
                                "typeArguments": null,
                                "start": 345,
                                "end": 346
                              },
                              "start": 342,
                              "end": 346
                            },
                            "start": 335,
                            "end": 346
                          },
                          "start": 333,
                          "end": 346
                        },
                        "accessibility": null,
                        "static": false,
                        "start": 325,
                        "end": 346
                      }
                    ],
                    "start": 314,
                    "end": 348
                  },
                  "start": 312,
                  "end": 348
                },
                "start": 311,
                "end": 348
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 354,
                  "end": 357
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 353,
                "end": 358
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 360,
                  "end": 363
                },
                "start": 358,
                "end": 364
              },
              "start": 353,
              "end": 364
            },
            "id": null,
            "generator": false,
            "start": 299,
            "end": 364
          },
          "definite": false,
          "start": 292,
          "end": 364
        }
      ],
      "declare": false,
      "start": 286,
      "end": 365
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "Elem",
          "optional": false,
          "typeAnnotation": null,
          "start": 366,
          "end": 370
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 372,
                  "end": 376
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 379,
                        "end": 380
                      },
                      "value": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 382,
                        "end": 385
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 379,
                      "end": 385
                    }
                  ],
                  "start": 378,
                  "end": 386
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 372,
                "end": 386
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 388,
                  "end": 396
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 399
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 405,
                          "end": 406
                        },
                        "value": {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 408,
                          "end": 411
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 405,
                        "end": 411
                      }
                    ],
                    "start": 404,
                    "end": 412
                  },
                  "id": null,
                  "generator": false,
                  "start": 398,
                  "end": 413
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 388,
                "end": 413
              }
            ],
            "start": 371,
            "end": 414
          }
        ],
        "optional": false,
        "start": 366,
        "end": 415
      },
      "directive": null,
      "start": 366,
      "end": 416
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
            "name": "q",
            "optional": false,
            "typeAnnotation": null,
            "start": 423,
            "end": 424
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 428,
                "end": 432
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 433,
                    "end": 437
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 440,
                            "end": 441
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 443,
                            "end": 446
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 440,
                          "end": 446
                        }
                      ],
                      "start": 439,
                      "end": 447
                    },
                    "start": 438,
                    "end": 448
                  },
                  "start": 433,
                  "end": 448
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 449,
                    "end": 457
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "i",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 459,
                          "end": 460
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "ObjectExpression",
                        "properties": [
                          {
                            "type": "Property",
                            "kind": "init",
                            "key": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "a",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 466,
                              "end": 467
                            },
                            "value": {
                              "type": "Literal",
                              "value": "z",
                              "raw": "\"z\"",
                              "start": 469,
                              "end": 472
                            },
                            "method": false,
                            "shorthand": false,
                            "computed": false,
                            "optional": false,
                            "start": 466,
                            "end": 472
                          }
                        ],
                        "start": 465,
                        "end": 473
                      },
                      "id": null,
                      "generator": false,
                      "start": 459,
                      "end": 474
                    },
                    "start": 458,
                    "end": 475
                  },
                  "start": 449,
                  "end": 475
                }
              ],
              "selfClosing": true,
              "start": 427,
              "end": 478
            },
            "children": [],
            "closingElement": null,
            "start": 427,
            "end": 478
          },
          "definite": false,
          "start": 423,
          "end": 478
        }
      ],
      "declare": false,
      "start": 417,
      "end": 478
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 485,
            "end": 487
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 491,
                "end": 495
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 496,
                    "end": 500
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ObjectExpression",
                      "properties": [
                        {
                          "type": "Property",
                          "kind": "init",
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 503,
                            "end": 504
                          },
                          "value": {
                            "type": "Literal",
                            "value": "x",
                            "raw": "\"x\"",
                            "start": 506,
                            "end": 509
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 503,
                          "end": 509
                        }
                      ],
                      "start": 502,
                      "end": 510
                    },
                    "start": 501,
                    "end": 511
                  },
                  "start": 496,
                  "end": 511
                }
              ],
              "selfClosing": false,
              "start": 490,
              "end": 512
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "i",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 513,
                      "end": 514
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "a",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 520,
                          "end": 521
                        },
                        "value": {
                          "type": "Literal",
                          "value": "z",
                          "raw": "\"z\"",
                          "start": 523,
                          "end": 526
                        },
                        "method": false,
                        "shorthand": false,
                        "computed": false,
                        "optional": false,
                        "start": 520,
                        "end": 526
                      }
                    ],
                    "start": 519,
                    "end": 527
                  },
                  "id": null,
                  "generator": false,
                  "start": 513,
                  "end": 528
                },
                "start": 512,
                "end": 529
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "Elem",
                "start": 531,
                "end": 535
              },
              "start": 529,
              "end": 536
            },
            "start": 490,
            "end": 536
          },
          "definite": false,
          "start": 485,
          "end": 536
        }
      ],
      "declare": false,
      "start": 479,
      "end": 536
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "LitProps",
        "optional": false,
        "typeAnnotation": null,
        "start": 548,
        "end": 556
      },
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
              "start": 557,
              "end": 558
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 557,
            "end": 558
          }
        ],
        "start": 556,
        "end": 559
      },
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
              "name": "prop",
              "optional": false,
              "typeAnnotation": null,
              "start": 562,
              "end": 566
            },
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
                  "start": 568,
                  "end": 569
                },
                "typeArguments": null,
                "start": 568,
                "end": 569
              },
              "start": 566,
              "end": 569
            },
            "accessibility": null,
            "static": false,
            "start": 562,
            "end": 570
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "children",
              "optional": false,
              "typeAnnotation": null,
              "start": 571,
              "end": 579
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSFunctionType",
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
                        "type": "TSThisType",
                        "start": 585,
                        "end": 589
                      },
                      "start": 583,
                      "end": 589
                    },
                    "start": 582,
                    "end": 589
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "T",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 594,
                      "end": 595
                    },
                    "typeArguments": null,
                    "start": 594,
                    "end": 595
                  },
                  "start": 591,
                  "end": 595
                },
                "start": 581,
                "end": 595
              },
              "start": 579,
              "end": 595
            },
            "accessibility": null,
            "static": false,
            "start": 571,
            "end": 595
          }
        ],
        "start": 560,
        "end": 597
      },
      "declare": false,
      "start": 538,
      "end": 597
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
            "name": "ElemLit",
            "optional": false,
            "typeAnnotation": null,
            "start": 604,
            "end": 611
          },
          "init": {
            "type": "ArrowFunctionExpression",
            "expression": true,
            "async": false,
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
                    "start": 615,
                    "end": 616
                  },
                  "constraint": {
                    "type": "TSStringKeyword",
                    "start": 625,
                    "end": 631
                  },
                  "default": null,
                  "in": false,
                  "out": false,
                  "const": false,
                  "start": 615,
                  "end": 631
                }
              ],
              "start": 614,
              "end": 632
            },
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "p",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "LitProps",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 636,
                      "end": 644
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 645,
                            "end": 646
                          },
                          "typeArguments": null,
                          "start": 645,
                          "end": 646
                        }
                      ],
                      "start": 644,
                      "end": 647
                    },
                    "start": 636,
                    "end": 647
                  },
                  "start": 634,
                  "end": 647
                },
                "start": 633,
                "end": 647
              }
            ],
            "returnType": null,
            "body": {
              "type": "JSXElement",
              "openingElement": {
                "type": "JSXOpeningElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 653,
                  "end": 656
                },
                "typeArguments": null,
                "attributes": [],
                "selfClosing": false,
                "start": 652,
                "end": 657
              },
              "children": [],
              "closingElement": {
                "type": "JSXClosingElement",
                "name": {
                  "type": "JSXIdentifier",
                  "name": "div",
                  "start": 659,
                  "end": 662
                },
                "start": 657,
                "end": 663
              },
              "start": 652,
              "end": 663
            },
            "id": null,
            "generator": false,
            "start": 614,
            "end": 663
          },
          "definite": false,
          "start": 604,
          "end": 663
        }
      ],
      "declare": false,
      "start": 598,
      "end": 664
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "CallExpression",
        "callee": {
          "type": "Identifier",
          "decorators": [],
          "name": "ElemLit",
          "optional": false,
          "typeAnnotation": null,
          "start": 665,
          "end": 672
        },
        "typeArguments": null,
        "arguments": [
          {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "prop",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 674,
                  "end": 678
                },
                "value": {
                  "type": "Literal",
                  "value": "x",
                  "raw": "\"x\"",
                  "start": 680,
                  "end": 683
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 674,
                "end": 683
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "children",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 685,
                  "end": 693
                },
                "value": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 701,
                    "end": 704
                  },
                  "id": null,
                  "generator": false,
                  "start": 695,
                  "end": 704
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 685,
                "end": 704
              }
            ],
            "start": 673,
            "end": 705
          }
        ],
        "optional": false,
        "start": 665,
        "end": 706
      },
      "directive": null,
      "start": 665,
      "end": 707
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
            "name": "j",
            "optional": false,
            "typeAnnotation": null,
            "start": 714,
            "end": 715
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 719,
                "end": 726
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 727,
                    "end": 731
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 732,
                    "end": 735
                  },
                  "start": 727,
                  "end": 735
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 736,
                    "end": 744
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "x",
                        "raw": "\"x\"",
                        "start": 752,
                        "end": 755
                      },
                      "id": null,
                      "generator": false,
                      "start": 746,
                      "end": 755
                    },
                    "start": 745,
                    "end": 756
                  },
                  "start": 736,
                  "end": 756
                }
              ],
              "selfClosing": true,
              "start": 718,
              "end": 759
            },
            "children": [],
            "closingElement": null,
            "start": 718,
            "end": 759
          },
          "definite": false,
          "start": 714,
          "end": 759
        }
      ],
      "declare": false,
      "start": 708,
      "end": 759
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
            "name": "jj",
            "optional": false,
            "typeAnnotation": null,
            "start": 766,
            "end": 768
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 772,
                "end": 779
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 780,
                    "end": 784
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 785,
                    "end": 788
                  },
                  "start": 780,
                  "end": 788
                }
              ],
              "selfClosing": false,
              "start": 771,
              "end": 789
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 796,
                    "end": 799
                  },
                  "id": null,
                  "generator": false,
                  "start": 790,
                  "end": 799
                },
                "start": 789,
                "end": 800
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 802,
                "end": 809
              },
              "start": 800,
              "end": 810
            },
            "start": 771,
            "end": 810
          },
          "definite": false,
          "start": 766,
          "end": 810
        }
      ],
      "declare": false,
      "start": 760,
      "end": 810
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
            "name": "arg",
            "optional": false,
            "typeAnnotation": null,
            "start": 834,
            "end": 837
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 841,
                "end": 848
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 849,
                    "end": 853
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 854,
                    "end": 857
                  },
                  "start": 849,
                  "end": 857
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "children",
                    "start": 858,
                    "end": 866
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": true,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "p",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 868,
                          "end": 869
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "Literal",
                        "value": "y",
                        "raw": "\"y\"",
                        "start": 873,
                        "end": 876
                      },
                      "id": null,
                      "generator": false,
                      "start": 868,
                      "end": 876
                    },
                    "start": 867,
                    "end": 877
                  },
                  "start": 858,
                  "end": 877
                }
              ],
              "selfClosing": true,
              "start": 840,
              "end": 880
            },
            "children": [],
            "closingElement": null,
            "start": 840,
            "end": 880
          },
          "definite": false,
          "start": 834,
          "end": 880
        }
      ],
      "declare": false,
      "start": 828,
      "end": 880
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
            "name": "argchild",
            "optional": false,
            "typeAnnotation": null,
            "start": 887,
            "end": 895
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 899,
                "end": 906
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 907,
                    "end": 911
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 912,
                    "end": 915
                  },
                  "start": 907,
                  "end": 915
                }
              ],
              "selfClosing": false,
              "start": 898,
              "end": 916
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [
                    {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "p",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 917,
                      "end": 918
                    }
                  ],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": "y",
                    "raw": "\"y\"",
                    "start": 922,
                    "end": 925
                  },
                  "id": null,
                  "generator": false,
                  "start": 917,
                  "end": 925
                },
                "start": 916,
                "end": 926
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 928,
                "end": 935
              },
              "start": 926,
              "end": 936
            },
            "start": 898,
            "end": 936
          },
          "definite": false,
          "start": 887,
          "end": 936
        }
      ],
      "declare": false,
      "start": 881,
      "end": 936
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
            "name": "mismatched",
            "optional": false,
            "typeAnnotation": null,
            "start": 943,
            "end": 953
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 957,
                "end": 964
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "prop",
                    "start": 965,
                    "end": 969
                  },
                  "value": {
                    "type": "Literal",
                    "value": "x",
                    "raw": "\"x\"",
                    "start": 970,
                    "end": 973
                  },
                  "start": 965,
                  "end": 973
                }
              ],
              "selfClosing": false,
              "start": 956,
              "end": 974
            },
            "children": [
              {
                "type": "JSXExpressionContainer",
                "expression": {
                  "type": "ArrowFunctionExpression",
                  "expression": true,
                  "async": false,
                  "typeParameters": null,
                  "params": [],
                  "returnType": null,
                  "body": {
                    "type": "Literal",
                    "value": 12,
                    "raw": "12",
                    "start": 981,
                    "end": 983
                  },
                  "id": null,
                  "generator": false,
                  "start": 975,
                  "end": 983
                },
                "start": 974,
                "end": 984
              }
            ],
            "closingElement": {
              "type": "JSXClosingElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "ElemLit",
                "start": 986,
                "end": 993
              },
              "start": 984,
              "end": 994
            },
            "start": 956,
            "end": 994
          },
          "definite": false,
          "start": 943,
          "end": 994
        }
      ],
      "declare": false,
      "start": 937,
      "end": 994
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 994
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
    "value": "JSX",
    "start": 10,
    "end": 13
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 14,
    "end": 15
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 20,
    "end": 26
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 27,
    "end": 36
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 45,
    "end": 46
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 52,
    "end": 58
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 59,
    "end": 68
  },
  {
    "type": "Identifier",
    "value": "ElementAttributesProperty",
    "start": 69,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 95,
    "end": 96
  },
  {
    "type": "Identifier",
    "value": "props",
    "start": 97,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 104,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 105,
    "end": 106
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 106,
    "end": 107
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 108,
    "end": 109
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 114,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 121,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "ElementChildrenAttribute",
    "start": 131,
    "end": 155
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 156,
    "end": 157
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 158,
    "end": 166
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 166,
    "end": 167
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 169,
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
    "value": "}",
    "start": 172,
    "end": 173
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 178,
    "end": 184
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 185,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "IntrinsicAttributes",
    "start": 195,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 216,
    "end": 217
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 222,
    "end": 228
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 229,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "IntrinsicElements",
    "start": 239,
    "end": 256
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 257,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 259,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "key",
    "start": 260,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 263,
    "end": 264
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 271,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 274,
    "end": 281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 282,
    "end": 283
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 284,
    "end": 285
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 286,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 292,
    "end": 296
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 297,
    "end": 298
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 300,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 302,
    "end": 303
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 303,
    "end": 304
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 304,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 311,
    "end": 312
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 312,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 314,
    "end": 315
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 316,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 320,
    "end": 321
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 323,
    "end": 324
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 325,
    "end": 333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 335,
    "end": 336
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 336,
    "end": 337
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 337,
    "end": 338
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 339,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 340,
    "end": 341
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 342,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 347,
    "end": 348
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 348,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 353,
    "end": 354
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 358,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 359,
    "end": 360
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 360,
    "end": 363
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 363,
    "end": 364
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 364,
    "end": 365
  },
  {
    "type": "Identifier",
    "value": "Elem",
    "start": 366,
    "end": 370
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 370,
    "end": 371
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 371,
    "end": 372
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 372,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 376,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 379,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 380,
    "end": 381
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 382,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 385,
    "end": 386
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 386,
    "end": 387
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 388,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 400,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 404,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 406,
    "end": 407
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 408,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 411,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 412,
    "end": 413
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 413,
    "end": 414
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 414,
    "end": 415
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 415,
    "end": 416
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 417,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "q",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 427,
    "end": 428
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem",
    "start": 428,
    "end": 432
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 433,
    "end": 437
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 437,
    "end": 438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 439,
    "end": 440
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 440,
    "end": 441
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 441,
    "end": 442
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 443,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 447,
    "end": 448
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 449,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 458,
    "end": 459
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 459,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 461,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 464,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 465,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 467,
    "end": 468
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 469,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 472,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 476,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 477,
    "end": 478
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 479,
    "end": 484
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 485,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 488,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 490,
    "end": 491
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem",
    "start": 491,
    "end": 495
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 496,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 504,
    "end": 505
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 506,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 511,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 512,
    "end": 513
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 513,
    "end": 514
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 515,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 519,
    "end": 520
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 520,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "String",
    "value": "\"z\"",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 526,
    "end": 527
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 530,
    "end": 531
  },
  {
    "type": "JSXIdentifier",
    "value": "Elem",
    "start": 531,
    "end": 535
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 535,
    "end": 536
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 538,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "LitProps",
    "start": 548,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 556,
    "end": 557
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 557,
    "end": 558
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 558,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 560,
    "end": 561
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 562,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 569,
    "end": 570
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 571,
    "end": 579
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 579,
    "end": 580
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 581,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 582,
    "end": 583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 583,
    "end": 584
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 585,
    "end": 589
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 589,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 591,
    "end": 593
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 594,
    "end": 595
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 596,
    "end": 597
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 598,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "ElemLit",
    "start": 604,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 612,
    "end": 613
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 614,
    "end": 615
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 615,
    "end": 616
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 617,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 625,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 631,
    "end": 632
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 632,
    "end": 633
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 633,
    "end": 634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 634,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "LitProps",
    "start": 636,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 645,
    "end": 646
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 646,
    "end": 647
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 647,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 649,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 652,
    "end": 653
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 653,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 657,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 658,
    "end": 659
  },
  {
    "type": "JSXIdentifier",
    "value": "div",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 662,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Identifier",
    "value": "ElemLit",
    "start": 665,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 672,
    "end": 673
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 673,
    "end": 674
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 674,
    "end": 678
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 678,
    "end": 679
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 680,
    "end": 683
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 683,
    "end": 684
  },
  {
    "type": "Identifier",
    "value": "children",
    "start": 685,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 693,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 695,
    "end": 696
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 698,
    "end": 700
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 701,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 704,
    "end": 705
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 705,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 708,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "j",
    "start": 714,
    "end": 715
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 716,
    "end": 717
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 718,
    "end": 719
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 719,
    "end": 726
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 727,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 731,
    "end": 732
  },
  {
    "type": "JSXText",
    "value": "\"x\"",
    "start": 732,
    "end": 735
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 736,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 744,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 745,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 746,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 749,
    "end": 751
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 752,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 755,
    "end": 756
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 757,
    "end": 758
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 758,
    "end": 759
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 760,
    "end": 765
  },
  {
    "type": "Identifier",
    "value": "jj",
    "start": 766,
    "end": 768
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 769,
    "end": 770
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 772,
    "end": 779
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 780,
    "end": 784
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 784,
    "end": 785
  },
  {
    "type": "JSXText",
    "value": "\"x\"",
    "start": 785,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 793,
    "end": 795
  },
  {
    "type": "String",
    "value": "\"x\"",
    "start": 796,
    "end": 799
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 799,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 801,
    "end": 802
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 802,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 828,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 834,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 840,
    "end": 841
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 841,
    "end": 848
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 849,
    "end": 853
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 853,
    "end": 854
  },
  {
    "type": "JSXText",
    "value": "\"x\"",
    "start": 854,
    "end": 857
  },
  {
    "type": "JSXIdentifier",
    "value": "children",
    "start": 858,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 866,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 867,
    "end": 868
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 870,
    "end": 872
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 873,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 876,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 879,
    "end": 880
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 881,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "argchild",
    "start": 887,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 898,
    "end": 899
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 899,
    "end": 906
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 907,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 911,
    "end": 912
  },
  {
    "type": "JSXText",
    "value": "\"x\"",
    "start": 912,
    "end": 915
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 919,
    "end": 921
  },
  {
    "type": "String",
    "value": "\"y\"",
    "start": 922,
    "end": 925
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 925,
    "end": 926
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 926,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 927,
    "end": 928
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 928,
    "end": 935
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 935,
    "end": 936
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 937,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "mismatched",
    "start": 943,
    "end": 953
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 956,
    "end": 957
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 957,
    "end": 964
  },
  {
    "type": "JSXIdentifier",
    "value": "prop",
    "start": 965,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 969,
    "end": 970
  },
  {
    "type": "JSXText",
    "value": "\"x\"",
    "start": 970,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 973,
    "end": 974
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 975,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 976,
    "end": 977
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 978,
    "end": 980
  },
  {
    "type": "Numeric",
    "value": "12",
    "start": 981,
    "end": 983
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 983,
    "end": 984
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 984,
    "end": 985
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 985,
    "end": 986
  },
  {
    "type": "JSXIdentifier",
    "value": "ElemLit",
    "start": 986,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 993,
    "end": 994
  }
]
```
