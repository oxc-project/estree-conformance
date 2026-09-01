__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSImportEqualsDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "React",
        "optional": false,
        "typeAnnotation": null,
        "start": 50,
        "end": 55
      },
      "moduleReference": {
        "type": "TSExternalModuleReference",
        "expression": {
          "type": "Literal",
          "value": "react",
          "raw": "'react'",
          "start": 66,
          "end": 73
        },
        "start": 58,
        "end": 74
      },
      "importKind": "value",
      "start": 43,
      "end": 74
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "ComponentWithTwoAttributes",
        "optional": false,
        "typeAnnotation": null,
        "start": 93,
        "end": 119
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "K",
              "optional": false,
              "typeAnnotation": null,
              "start": 120,
              "end": 121
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 120,
            "end": 121
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "V",
              "optional": false,
              "typeAnnotation": null,
              "start": 122,
              "end": 123
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 122,
            "end": 123
          }
        ],
        "start": 119,
        "end": 124
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "key1",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 129,
                    "end": 133
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "K",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 135,
                        "end": 136
                      },
                      "typeArguments": null,
                      "start": 135,
                      "end": 136
                    },
                    "start": 133,
                    "end": 136
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 129,
                  "end": 137
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
                    "start": 138,
                    "end": 143
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "V",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 145,
                        "end": 146
                      },
                      "typeArguments": null,
                      "start": 145,
                      "end": 146
                    },
                    "start": 143,
                    "end": 146
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 138,
                  "end": 146
                }
              ],
              "start": 128,
              "end": 147
            },
            "start": 126,
            "end": 147
          },
          "start": 125,
          "end": 147
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
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 150,
              "end": 153
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 154,
              "end": 161
            },
            "start": 150,
            "end": 161
          },
          "typeArguments": null,
          "start": 150,
          "end": 161
        },
        "start": 148,
        "end": 161
      },
      "body": null,
      "expression": false,
      "start": 76,
      "end": 162
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Baz",
        "optional": false,
        "typeAnnotation": null,
        "start": 179,
        "end": 182
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
              "start": 183,
              "end": 184
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 183,
            "end": 184
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 185,
              "end": 186
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 185,
            "end": 186
          }
        ],
        "start": 182,
        "end": 187
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "key1",
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
                "start": 194,
                "end": 195
              },
              "typeArguments": null,
              "start": 194,
              "end": 195
            },
            "start": 192,
            "end": 195
          },
          "start": 188,
          "end": 195
        },
        {
          "type": "Identifier",
          "decorators": [],
          "name": "value",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "U",
                "optional": false,
                "typeAnnotation": null,
                "start": 204,
                "end": 205
              },
              "typeArguments": null,
              "start": 204,
              "end": 205
            },
            "start": 202,
            "end": 205
          },
          "start": 197,
          "end": 205
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a0",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 217,
                  "end": 219
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentWithTwoAttributes",
                      "start": 223,
                      "end": 249
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "key1",
                          "start": 250,
                          "end": 254
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "key1",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 256,
                            "end": 260
                          },
                          "start": 255,
                          "end": 261
                        },
                        "start": 250,
                        "end": 261
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "value",
                          "start": 262,
                          "end": 267
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "value",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 269,
                            "end": 274
                          },
                          "start": 268,
                          "end": 275
                        },
                        "start": 262,
                        "end": 275
                      }
                    ],
                    "selfClosing": true,
                    "start": 222,
                    "end": 278
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 222,
                  "end": 278
                },
                "definite": false,
                "start": 217,
                "end": 278
              }
            ],
            "declare": false,
            "start": 213,
            "end": 278
          },
          {
            "type": "VariableDeclaration",
            "kind": "let",
            "declarations": [
              {
                "type": "VariableDeclarator",
                "id": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "a1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 287,
                  "end": 289
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "ComponentWithTwoAttributes",
                      "start": 293,
                      "end": 319
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXSpreadAttribute",
                        "argument": {
                          "type": "ObjectExpression",
                          "properties": [
                            {
                              "type": "Property",
                              "kind": "init",
                              "key": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 325,
                                "end": 329
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "key1",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 325,
                                "end": 329
                              },
                              "method": false,
                              "shorthand": true,
                              "computed": false,
                              "optional": false,
                              "start": 325,
                              "end": 329
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
                                "start": 331,
                                "end": 336
                              },
                              "value": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 338,
                                "end": 343
                              },
                              "method": false,
                              "shorthand": false,
                              "computed": false,
                              "optional": false,
                              "start": 331,
                              "end": 343
                            }
                          ],
                          "start": 324,
                          "end": 344
                        },
                        "start": 320,
                        "end": 345
                      },
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "key",
                          "start": 346,
                          "end": 349
                        },
                        "value": {
                          "type": "Literal",
                          "value": "Component",
                          "raw": "\"Component\"",
                          "start": 350,
                          "end": 361
                        },
                        "start": 346,
                        "end": 361
                      }
                    ],
                    "selfClosing": true,
                    "start": 292,
                    "end": 364
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 292,
                  "end": 364
                },
                "definite": false,
                "start": 287,
                "end": 364
              }
            ],
            "declare": false,
            "start": 283,
            "end": 364
          }
        ],
        "start": 207,
        "end": 366
      },
      "expression": false,
      "start": 170,
      "end": 366
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Link",
        "optional": false,
        "typeAnnotation": null,
        "start": 385,
        "end": 389
      },
      "generator": false,
      "async": false,
      "declare": true,
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "U",
              "optional": false,
              "typeAnnotation": null,
              "start": 390,
              "end": 391
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 390,
            "end": 391
          }
        ],
        "start": 389,
        "end": 392
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "l",
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
                    "name": "func",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 397,
                    "end": 401
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
                          "name": "arg",
                          "optional": false,
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "U",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 409,
                                "end": 410
                              },
                              "typeArguments": null,
                              "start": 409,
                              "end": 410
                            },
                            "start": 407,
                            "end": 410
                          },
                          "start": 404,
                          "end": 410
                        }
                      ],
                      "returnType": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSVoidKeyword",
                          "start": 413,
                          "end": 417
                        },
                        "start": 411,
                        "end": 417
                      },
                      "start": 403,
                      "end": 417
                    },
                    "start": 401,
                    "end": 417
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 397,
                  "end": 417
                }
              ],
              "start": 396,
              "end": 418
            },
            "start": 394,
            "end": 418
          },
          "start": 393,
          "end": 418
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
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 421,
              "end": 424
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 425,
              "end": 432
            },
            "start": 421,
            "end": 432
          },
          "typeArguments": null,
          "start": 421,
          "end": 432
        },
        "start": 419,
        "end": 432
      },
      "body": null,
      "expression": false,
      "start": 368,
      "end": 433
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink",
        "optional": false,
        "typeAnnotation": null,
        "start": 450,
        "end": 460
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                      "type": "TSNumberKeyword",
                      "start": 471,
                      "end": 477
                    },
                    "start": 469,
                    "end": 477
                  },
                  "start": 468,
                  "end": 477
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSVoidKeyword",
                  "start": 480,
                  "end": 484
                },
                "start": 478,
                "end": 484
              },
              "start": 467,
              "end": 484
            },
            "start": 465,
            "end": 484
          },
          "start": 461,
          "end": 484
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 496,
                  "end": 497
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 501,
                      "end": 505
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 506,
                          "end": 510
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 512,
                            "end": 516
                          },
                          "start": 511,
                          "end": 517
                        },
                        "start": 506,
                        "end": 517
                      }
                    ],
                    "selfClosing": true,
                    "start": 500,
                    "end": 520
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 500,
                  "end": 520
                },
                "definite": false,
                "start": 496,
                "end": 520
              }
            ],
            "declare": false,
            "start": 492,
            "end": 520
          }
        ],
        "start": 486,
        "end": 522
      },
      "expression": false,
      "start": 441,
      "end": 522
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "createLink1",
        "optional": false,
        "typeAnnotation": null,
        "start": 533,
        "end": 544
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "func",
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
                      "type": "TSNumberKeyword",
                      "start": 555,
                      "end": 561
                    },
                    "start": 553,
                    "end": 561
                  },
                  "start": 552,
                  "end": 561
                }
              ],
              "returnType": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSBooleanKeyword",
                  "start": 564,
                  "end": 571
                },
                "start": 562,
                "end": 571
              },
              "start": 551,
              "end": 571
            },
            "start": 549,
            "end": 571
          },
          "start": 545,
          "end": 571
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
                  "type": "Identifier",
                  "decorators": [],
                  "name": "o",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 583,
                  "end": 584
                },
                "init": {
                  "type": "JSXElement",
                  "openingElement": {
                    "type": "JSXOpeningElement",
                    "name": {
                      "type": "JSXIdentifier",
                      "name": "Link",
                      "start": 588,
                      "end": 592
                    },
                    "typeArguments": null,
                    "attributes": [
                      {
                        "type": "JSXAttribute",
                        "name": {
                          "type": "JSXIdentifier",
                          "name": "func",
                          "start": 593,
                          "end": 597
                        },
                        "value": {
                          "type": "JSXExpressionContainer",
                          "expression": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "func",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 599,
                            "end": 603
                          },
                          "start": 598,
                          "end": 604
                        },
                        "start": 593,
                        "end": 604
                      }
                    ],
                    "selfClosing": true,
                    "start": 587,
                    "end": 607
                  },
                  "children": [],
                  "closingElement": null,
                  "start": 587,
                  "end": 607
                },
                "definite": false,
                "start": 583,
                "end": 607
              }
            ],
            "declare": false,
            "start": 579,
            "end": 607
          }
        ],
        "start": 573,
        "end": 609
      },
      "expression": false,
      "start": 524,
      "end": 609
    },
    {
      "type": "TSInterfaceDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamProp",
        "optional": false,
        "typeAnnotation": null,
        "start": 621,
        "end": 635
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
              "start": 636,
              "end": 637
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 636,
            "end": 637
          }
        ],
        "start": 635,
        "end": 638
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
              "name": "values",
              "optional": false,
              "typeAnnotation": null,
              "start": 645,
              "end": 651
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
                  "start": 653,
                  "end": 658
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
                        "start": 659,
                        "end": 660
                      },
                      "typeArguments": null,
                      "start": 659,
                      "end": 660
                    }
                  ],
                  "start": 658,
                  "end": 661
                },
                "start": 653,
                "end": 661
              },
              "start": 651,
              "end": 661
            },
            "accessibility": null,
            "static": false,
            "start": 645,
            "end": 662
          },
          {
            "type": "TSPropertySignature",
            "computed": false,
            "optional": false,
            "readonly": false,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "selectHandler",
              "optional": false,
              "typeAnnotation": null,
              "start": 667,
              "end": 680
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
                    "name": "selectedVal",
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
                          "start": 696,
                          "end": 697
                        },
                        "typeArguments": null,
                        "start": 696,
                        "end": 697
                      },
                      "start": 694,
                      "end": 697
                    },
                    "start": 683,
                    "end": 697
                  }
                ],
                "returnType": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSVoidKeyword",
                    "start": 702,
                    "end": 706
                  },
                  "start": 699,
                  "end": 706
                },
                "start": 682,
                "end": 706
              },
              "start": 680,
              "end": 706
            },
            "accessibility": null,
            "static": false,
            "start": 667,
            "end": 707
          }
        ],
        "start": 639,
        "end": 709
      },
      "declare": false,
      "start": 611,
      "end": 709
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "InferParamComponent",
        "optional": false,
        "typeAnnotation": null,
        "start": 728,
        "end": 747
      },
      "generator": false,
      "async": false,
      "declare": true,
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
              "start": 748,
              "end": 749
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 748,
            "end": 749
          }
        ],
        "start": 747,
        "end": 750
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "attr",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "InferParamProp",
                "optional": false,
                "typeAnnotation": null,
                "start": 757,
                "end": 771
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
                      "start": 772,
                      "end": 773
                    },
                    "typeArguments": null,
                    "start": 772,
                    "end": 773
                  }
                ],
                "start": 771,
                "end": 774
              },
              "start": 757,
              "end": 774
            },
            "start": 755,
            "end": 774
          },
          "start": 751,
          "end": 774
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
              "name": "JSX",
              "optional": false,
              "typeAnnotation": null,
              "start": 777,
              "end": 780
            },
            "right": {
              "type": "Identifier",
              "decorators": [],
              "name": "Element",
              "optional": false,
              "typeAnnotation": null,
              "start": 781,
              "end": 788
            },
            "start": 777,
            "end": 788
          },
          "typeArguments": null,
          "start": 777,
          "end": 788
        },
        "start": 775,
        "end": 788
      },
      "body": null,
      "expression": false,
      "start": 711,
      "end": 789
    },
    {
      "type": "VariableDeclaration",
      "kind": "let",
      "declarations": [
        {
          "type": "VariableDeclarator",
          "id": {
            "type": "Identifier",
            "decorators": [],
            "name": "i",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 802
          },
          "init": {
            "type": "JSXElement",
            "openingElement": {
              "type": "JSXOpeningElement",
              "name": {
                "type": "JSXIdentifier",
                "name": "InferParamComponent",
                "start": 806,
                "end": 825
              },
              "typeArguments": null,
              "attributes": [
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "values",
                    "start": 826,
                    "end": 832
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrayExpression",
                      "elements": [
                        {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 835,
                          "end": 836
                        },
                        {
                          "type": "Literal",
                          "value": 2,
                          "raw": "2",
                          "start": 838,
                          "end": 839
                        },
                        {
                          "type": "Literal",
                          "value": 3,
                          "raw": "3",
                          "start": 841,
                          "end": 842
                        },
                        {
                          "type": "Literal",
                          "value": 4,
                          "raw": "4",
                          "start": 844,
                          "end": 845
                        }
                      ],
                      "start": 834,
                      "end": 846
                    },
                    "start": 833,
                    "end": 847
                  },
                  "start": 826,
                  "end": 847
                },
                {
                  "type": "JSXAttribute",
                  "name": {
                    "type": "JSXIdentifier",
                    "name": "selectHandler",
                    "start": 848,
                    "end": 861
                  },
                  "value": {
                    "type": "JSXExpressionContainer",
                    "expression": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "val",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 864,
                          "end": 867
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 872,
                        "end": 875
                      },
                      "id": null,
                      "generator": false,
                      "start": 863,
                      "end": 875
                    },
                    "start": 862,
                    "end": 876
                  },
                  "start": 848,
                  "end": 876
                }
              ],
              "selfClosing": true,
              "start": 805,
              "end": 879
            },
            "children": [],
            "closingElement": null,
            "start": 805,
            "end": 879
          },
          "definite": false,
          "start": 801,
          "end": 879
        }
      ],
      "declare": false,
      "start": 797,
      "end": 880
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 43,
  "end": 880
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "import",
    "start": 43,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "React",
    "start": 50,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 56,
    "end": 57
  },
  {
    "type": "Identifier",
    "value": "require",
    "start": 58,
    "end": 65
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 65,
    "end": 66
  },
  {
    "type": "String",
    "value": "'react'",
    "start": 66,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 73,
    "end": 74
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 76,
    "end": 83
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 84,
    "end": 92
  },
  {
    "type": "Identifier",
    "value": "ComponentWithTwoAttributes",
    "start": 93,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 120,
    "end": 121
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 121,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 123,
    "end": 124
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 126,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 128,
    "end": 129
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 129,
    "end": 133
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 133,
    "end": 134
  },
  {
    "type": "Identifier",
    "value": "K",
    "start": 135,
    "end": 136
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 136,
    "end": 137
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 138,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 143,
    "end": 144
  },
  {
    "type": "Identifier",
    "value": "V",
    "start": 145,
    "end": 146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 146,
    "end": 147
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 147,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 148,
    "end": 149
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 150,
    "end": 153
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 153,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 154,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 161,
    "end": 162
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 170,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "Baz",
    "start": 179,
    "end": 182
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 182,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 183,
    "end": 184
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 184,
    "end": 185
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 188,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 192,
    "end": 193
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 194,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 195,
    "end": 196
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 197,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 202,
    "end": 203
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 204,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 205,
    "end": 206
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 207,
    "end": 208
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 213,
    "end": 216
  },
  {
    "type": "Identifier",
    "value": "a0",
    "start": 217,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 220,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 222,
    "end": 223
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 223,
    "end": 249
  },
  {
    "type": "JSXIdentifier",
    "value": "key1",
    "start": 250,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 254,
    "end": 255
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 255,
    "end": 256
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 256,
    "end": 260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 260,
    "end": 261
  },
  {
    "type": "JSXIdentifier",
    "value": "value",
    "start": 262,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 267,
    "end": 268
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 268,
    "end": 269
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 269,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 274,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 277,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 283,
    "end": 286
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 287,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 290,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 292,
    "end": 293
  },
  {
    "type": "JSXIdentifier",
    "value": "ComponentWithTwoAttributes",
    "start": 293,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 321,
    "end": 324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 324,
    "end": 325
  },
  {
    "type": "Identifier",
    "value": "key1",
    "start": 325,
    "end": 329
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 329,
    "end": 330
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 331,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 336,
    "end": 337
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 338,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 343,
    "end": 344
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 344,
    "end": 345
  },
  {
    "type": "JSXIdentifier",
    "value": "key",
    "start": 346,
    "end": 349
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 349,
    "end": 350
  },
  {
    "type": "JSXText",
    "value": "\"Component\"",
    "start": 350,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 362,
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
    "value": "}",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 368,
    "end": 375
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 376,
    "end": 384
  },
  {
    "type": "Identifier",
    "value": "Link",
    "start": 385,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 390,
    "end": 391
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 391,
    "end": 392
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 392,
    "end": 393
  },
  {
    "type": "Identifier",
    "value": "l",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 396,
    "end": 397
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 397,
    "end": 401
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 401,
    "end": 402
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 403,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "arg",
    "start": 404,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "U",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 410,
    "end": 411
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 411,
    "end": 413
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 413,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 418,
    "end": 419
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 419,
    "end": 420
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 421,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 424,
    "end": 425
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 425,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 432,
    "end": 433
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 441,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "createLink",
    "start": 450,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 461,
    "end": 465
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 467,
    "end": 468
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 469,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 471,
    "end": 477
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 478,
    "end": 480
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 480,
    "end": 484
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 484,
    "end": 485
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 486,
    "end": 487
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 492,
    "end": 495
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 496,
    "end": 497
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 498,
    "end": 499
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 500,
    "end": 501
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 501,
    "end": 505
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 506,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 510,
    "end": 511
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 518,
    "end": 519
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 519,
    "end": 520
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 521,
    "end": 522
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 524,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "createLink1",
    "start": 533,
    "end": 544
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 544,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 545,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 552,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 553,
    "end": 554
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 555,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 562,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 564,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 571,
    "end": 572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 573,
    "end": 574
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "o",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 585,
    "end": 586
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 587,
    "end": 588
  },
  {
    "type": "JSXIdentifier",
    "value": "Link",
    "start": 588,
    "end": 592
  },
  {
    "type": "JSXIdentifier",
    "value": "func",
    "start": 593,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 597,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 598,
    "end": 599
  },
  {
    "type": "Identifier",
    "value": "func",
    "start": 599,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 605,
    "end": 606
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 606,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 608,
    "end": 609
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 611,
    "end": 620
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 621,
    "end": 635
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 635,
    "end": 636
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 636,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 637,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 639,
    "end": 640
  },
  {
    "type": "Identifier",
    "value": "values",
    "start": 645,
    "end": 651
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 651,
    "end": 652
  },
  {
    "type": "Identifier",
    "value": "Array",
    "start": 653,
    "end": 658
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 658,
    "end": 659
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 659,
    "end": 660
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 660,
    "end": 661
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 661,
    "end": 662
  },
  {
    "type": "Identifier",
    "value": "selectHandler",
    "start": 667,
    "end": 680
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 680,
    "end": 681
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "selectedVal",
    "start": 683,
    "end": 694
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 694,
    "end": 695
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 696,
    "end": 697
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 697,
    "end": 698
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 699,
    "end": 701
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 702,
    "end": 706
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 706,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 711,
    "end": 718
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 719,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "InferParamComponent",
    "start": 728,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 747,
    "end": 748
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 749,
    "end": 750
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 750,
    "end": 751
  },
  {
    "type": "Identifier",
    "value": "attr",
    "start": 751,
    "end": 755
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 755,
    "end": 756
  },
  {
    "type": "Identifier",
    "value": "InferParamProp",
    "start": 757,
    "end": 771
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 771,
    "end": 772
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 772,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 773,
    "end": 774
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 774,
    "end": 775
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 775,
    "end": 776
  },
  {
    "type": "Identifier",
    "value": "JSX",
    "start": 777,
    "end": 780
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 780,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "Element",
    "start": 781,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 788,
    "end": 789
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "i",
    "start": 801,
    "end": 802
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 805,
    "end": 806
  },
  {
    "type": "JSXIdentifier",
    "value": "InferParamComponent",
    "start": 806,
    "end": 825
  },
  {
    "type": "JSXIdentifier",
    "value": "values",
    "start": 826,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 832,
    "end": 833
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 834,
    "end": 835
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 836,
    "end": 837
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 839,
    "end": 840
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 841,
    "end": 842
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 842,
    "end": 843
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 845,
    "end": 846
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  },
  {
    "type": "JSXIdentifier",
    "value": "selectHandler",
    "start": 848,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 861,
    "end": 862
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 862,
    "end": 863
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 863,
    "end": 864
  },
  {
    "type": "Identifier",
    "value": "val",
    "start": 864,
    "end": 867
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 869,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 872,
    "end": 873
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 874,
    "end": 875
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 875,
    "end": 876
  },
  {
    "type": "Punctuator",
    "value": "/",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 879,
    "end": 880
  }
]
```
