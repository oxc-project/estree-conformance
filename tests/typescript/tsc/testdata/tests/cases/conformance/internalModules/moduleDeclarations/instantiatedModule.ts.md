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
        "name": "M",
        "optional": false,
        "typeAnnotation": null,
        "start": 63,
        "end": 64
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
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 88,
                "end": 93
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 96,
                      "end": 97
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 99,
                        "end": 105
                      },
                      "start": 97,
                      "end": 105
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 96,
                    "end": 106
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
                      "start": 107,
                      "end": 108
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 110,
                        "end": 116
                      },
                      "start": 108,
                      "end": 116
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 107,
                    "end": 116
                  }
                ],
                "start": 94,
                "end": 118
              },
              "declare": false,
              "start": 78,
              "end": 118
            },
            "specifiers": [],
            "source": null,
            "exportKind": "type",
            "attributes": [],
            "start": 71,
            "end": 118
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
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 134,
                    "end": 139
                  },
                  "init": {
                    "type": "Literal",
                    "value": 1,
                    "raw": "1",
                    "start": 142,
                    "end": 143
                  },
                  "definite": false,
                  "start": 134,
                  "end": 143
                }
              ],
              "declare": false,
              "start": 130,
              "end": 144
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 123,
            "end": 144
          }
        ],
        "start": 65,
        "end": 146
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 53,
      "end": 146
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
                  "name": "M",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 184,
                  "end": 185
                },
                "typeArguments": null,
                "start": 177,
                "end": 185
              },
              "start": 175,
              "end": 185
            },
            "start": 174,
            "end": 185
          },
          "init": null,
          "definite": false,
          "start": 174,
          "end": 185
        }
      ],
      "declare": false,
      "start": 170,
      "end": 186
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
            "typeAnnotation": null,
            "start": 191,
            "end": 192
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M",
            "optional": false,
            "typeAnnotation": null,
            "start": 195,
            "end": 196
          },
          "definite": false,
          "start": 191,
          "end": 196
        }
      ],
      "declare": false,
      "start": 187,
      "end": 197
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 207,
                "end": 213
              },
              "start": 205,
              "end": 213
            },
            "start": 203,
            "end": 213
          },
          "init": null,
          "definite": false,
          "start": 203,
          "end": 213
        }
      ],
      "declare": false,
      "start": 199,
      "end": 214
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 219,
            "end": 221
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M",
              "optional": false,
              "typeAnnotation": null,
              "start": 224,
              "end": 225
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 226,
              "end": 231
            },
            "optional": false,
            "computed": false,
            "start": 224,
            "end": 231
          },
          "definite": false,
          "start": 219,
          "end": 231
        }
      ],
      "declare": false,
      "start": 215,
      "end": 232
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
            "name": "a1",
            "optional": false,
            "typeAnnotation": null,
            "start": 237,
            "end": 239
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m",
              "optional": false,
              "typeAnnotation": null,
              "start": 242,
              "end": 243
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 244,
              "end": 249
            },
            "optional": false,
            "computed": false,
            "start": 242,
            "end": 249
          },
          "definite": false,
          "start": 237,
          "end": 249
        }
      ],
      "declare": false,
      "start": 233,
      "end": 250
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
            "name": "p1",
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
                      "start": 262,
                      "end": 263
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 265,
                        "end": 271
                      },
                      "start": 263,
                      "end": 271
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 262,
                    "end": 272
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
                      "start": 273,
                      "end": 274
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 276,
                        "end": 282
                      },
                      "start": 274,
                      "end": 282
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 273,
                    "end": 283
                  }
                ],
                "start": 260,
                "end": 285
              },
              "start": 258,
              "end": 285
            },
            "start": 256,
            "end": 285
          },
          "init": null,
          "definite": false,
          "start": 256,
          "end": 285
        }
      ],
      "declare": false,
      "start": 252,
      "end": 285
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
            "name": "p1",
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
                    "name": "M",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 294,
                    "end": 295
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 296,
                    "end": 301
                  },
                  "start": 294,
                  "end": 301
                },
                "typeArguments": null,
                "start": 294,
                "end": 301
              },
              "start": 292,
              "end": 301
            },
            "start": 290,
            "end": 301
          },
          "init": null,
          "definite": false,
          "start": 290,
          "end": 301
        }
      ],
      "declare": false,
      "start": 286,
      "end": 302
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M2",
        "optional": false,
        "typeAnnotation": null,
        "start": 405,
        "end": 407
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
                "start": 427,
                "end": 432
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
                      "name": "x",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 443,
                      "end": 444
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 446,
                        "end": 452
                      },
                      "start": 444,
                      "end": 452
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
                    "start": 443,
                    "end": 453
                  },
                  {
                    "type": "PropertyDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "y",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 462,
                      "end": 463
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 465,
                        "end": 471
                      },
                      "start": 463,
                      "end": 471
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
                    "start": 462,
                    "end": 472
                  },
                  {
                    "type": "MethodDefinition",
                    "decorators": [],
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Origin",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 488,
                      "end": 494
                    },
                    "value": {
                      "type": "FunctionExpression",
                      "id": null,
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
                            "name": "Point",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 498,
                            "end": 503
                          },
                          "typeArguments": null,
                          "start": 498,
                          "end": 503
                        },
                        "start": 496,
                        "end": 503
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
                                    "name": "x",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 527,
                                    "end": 528
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 530,
                                    "end": 531
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 527,
                                  "end": 531
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
                                    "start": 533,
                                    "end": 534
                                  },
                                  "value": {
                                    "type": "Literal",
                                    "value": 0,
                                    "raw": "0",
                                    "start": 536,
                                    "end": 537
                                  },
                                  "method": false,
                                  "shorthand": false,
                                  "computed": false,
                                  "optional": false,
                                  "start": 533,
                                  "end": 537
                                }
                              ],
                              "start": 525,
                              "end": 539
                            },
                            "start": 518,
                            "end": 540
                          }
                        ],
                        "start": 504,
                        "end": 550
                      },
                      "expression": false,
                      "start": 494,
                      "end": 550
                    },
                    "kind": "method",
                    "computed": false,
                    "static": true,
                    "override": false,
                    "optional": false,
                    "accessibility": null,
                    "start": 481,
                    "end": 550
                  }
                ],
                "start": 433,
                "end": 556
              },
              "abstract": false,
              "declare": false,
              "start": 421,
              "end": 556
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 414,
            "end": 556
          }
        ],
        "start": 408,
        "end": 558
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 395,
      "end": 558
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
            "name": "m2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M2",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 575,
                  "end": 577
                },
                "typeArguments": null,
                "start": 568,
                "end": 577
              },
              "start": 566,
              "end": 577
            },
            "start": 564,
            "end": 577
          },
          "init": null,
          "definite": false,
          "start": 564,
          "end": 577
        }
      ],
      "declare": false,
      "start": 560,
      "end": 578
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
            "name": "m2",
            "optional": false,
            "typeAnnotation": null,
            "start": 583,
            "end": 585
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M2",
            "optional": false,
            "typeAnnotation": null,
            "start": 588,
            "end": 590
          },
          "definite": false,
          "start": 583,
          "end": 590
        }
      ],
      "declare": false,
      "start": 579,
      "end": 591
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 636,
                    "end": 638
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 639,
                    "end": 644
                  },
                  "start": 636,
                  "end": 644
                },
                "typeArguments": null,
                "start": 629,
                "end": 644
              },
              "start": 627,
              "end": 644
            },
            "start": 625,
            "end": 644
          },
          "init": null,
          "definite": false,
          "start": 625,
          "end": 644
        }
      ],
      "declare": false,
      "start": 621,
      "end": 645
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 650,
            "end": 652
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m2",
              "optional": false,
              "typeAnnotation": null,
              "start": 655,
              "end": 657
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 658,
              "end": 663
            },
            "optional": false,
            "computed": false,
            "start": 655,
            "end": 663
          },
          "definite": false,
          "start": 650,
          "end": 663
        }
      ],
      "declare": false,
      "start": 646,
      "end": 664
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 669,
            "end": 671
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M2",
              "optional": false,
              "typeAnnotation": null,
              "start": 674,
              "end": 676
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Point",
              "optional": false,
              "typeAnnotation": null,
              "start": 677,
              "end": 682
            },
            "optional": false,
            "computed": false,
            "start": 674,
            "end": 682
          },
          "definite": false,
          "start": 669,
          "end": 682
        }
      ],
      "declare": false,
      "start": 665,
      "end": 683
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
            "name": "o",
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
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 691,
                    "end": 693
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 694,
                    "end": 699
                  },
                  "start": 691,
                  "end": 699
                },
                "typeArguments": null,
                "start": 691,
                "end": 699
              },
              "start": 689,
              "end": 699
            },
            "start": 688,
            "end": 699
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "a2",
                "optional": false,
                "typeAnnotation": null,
                "start": 702,
                "end": 704
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Origin",
                "optional": false,
                "typeAnnotation": null,
                "start": 705,
                "end": 711
              },
              "optional": false,
              "computed": false,
              "start": 702,
              "end": 711
            },
            "typeArguments": null,
            "arguments": [],
            "optional": false,
            "start": 702,
            "end": 713
          },
          "definite": false,
          "start": 688,
          "end": 713
        }
      ],
      "declare": false,
      "start": 684,
      "end": 714
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
            "name": "p2",
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
                      "start": 726,
                      "end": 727
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 729,
                        "end": 735
                      },
                      "start": 727,
                      "end": 735
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 726,
                    "end": 736
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
                      "start": 737,
                      "end": 738
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 740,
                        "end": 746
                      },
                      "start": 738,
                      "end": 746
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 737,
                    "end": 746
                  }
                ],
                "start": 724,
                "end": 748
              },
              "start": 722,
              "end": 748
            },
            "start": 720,
            "end": 748
          },
          "init": null,
          "definite": false,
          "start": 720,
          "end": 748
        }
      ],
      "declare": false,
      "start": 716,
      "end": 748
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
            "name": "p2",
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
                    "name": "M2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 757,
                    "end": 759
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Point",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 760,
                    "end": 765
                  },
                  "start": 757,
                  "end": 765
                },
                "typeArguments": null,
                "start": 757,
                "end": 765
              },
              "start": 755,
              "end": 765
            },
            "start": 753,
            "end": 765
          },
          "init": null,
          "definite": false,
          "start": 753,
          "end": 765
        }
      ],
      "declare": false,
      "start": 749,
      "end": 766
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 771,
            "end": 773
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m2",
                "optional": false,
                "typeAnnotation": null,
                "start": 780,
                "end": 782
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 783,
                "end": 788
              },
              "optional": false,
              "computed": false,
              "start": 780,
              "end": 788
            },
            "typeArguments": null,
            "arguments": [],
            "start": 776,
            "end": 790
          },
          "definite": false,
          "start": 771,
          "end": 790
        }
      ],
      "declare": false,
      "start": 767,
      "end": 791
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
            "name": "p2",
            "optional": false,
            "typeAnnotation": null,
            "start": 796,
            "end": 798
          },
          "init": {
            "type": "NewExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M2",
                "optional": false,
                "typeAnnotation": null,
                "start": 805,
                "end": 807
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Point",
                "optional": false,
                "typeAnnotation": null,
                "start": 808,
                "end": 813
              },
              "optional": false,
              "computed": false,
              "start": 805,
              "end": 813
            },
            "typeArguments": null,
            "arguments": [],
            "start": 801,
            "end": 815
          },
          "definite": false,
          "start": 796,
          "end": 815
        }
      ],
      "declare": false,
      "start": 792,
      "end": 816
    },
    {
      "type": "TSModuleDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "M3",
        "optional": false,
        "typeAnnotation": null,
        "start": 828,
        "end": 830
      },
      "body": {
        "type": "TSModuleBlock",
        "body": [
          {
            "type": "ExportNamedDeclaration",
            "declaration": {
              "type": "TSEnumDeclaration",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 849,
                "end": 854
              },
              "body": {
                "type": "TSEnumBody",
                "members": [
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Blue",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 857,
                      "end": 861
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 857,
                    "end": 861
                  },
                  {
                    "type": "TSEnumMember",
                    "id": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Red",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 863,
                      "end": 866
                    },
                    "initializer": null,
                    "computed": false,
                    "start": 863,
                    "end": 866
                  }
                ],
                "start": 855,
                "end": 868
              },
              "const": false,
              "declare": false,
              "start": 844,
              "end": 868
            },
            "specifiers": [],
            "source": null,
            "exportKind": "value",
            "attributes": [],
            "start": 837,
            "end": 868
          }
        ],
        "start": 831,
        "end": 870
      },
      "kind": "namespace",
      "declare": false,
      "global": false,
      "start": 818,
      "end": 870
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
            "name": "m3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "M3",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 887,
                  "end": 889
                },
                "typeArguments": null,
                "start": 880,
                "end": 889
              },
              "start": 878,
              "end": 889
            },
            "start": 876,
            "end": 889
          },
          "init": null,
          "definite": false,
          "start": 876,
          "end": 889
        }
      ],
      "declare": false,
      "start": 872,
      "end": 890
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
            "name": "m3",
            "optional": false,
            "typeAnnotation": null,
            "start": 895,
            "end": 897
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "M3",
            "optional": false,
            "typeAnnotation": null,
            "start": 900,
            "end": 902
          },
          "definite": false,
          "start": 895,
          "end": 902
        }
      ],
      "declare": false,
      "start": 891,
      "end": 903
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeQuery",
                "exprName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "M3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 920,
                    "end": 922
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 923,
                    "end": 928
                  },
                  "start": 920,
                  "end": 928
                },
                "typeArguments": null,
                "start": 913,
                "end": 928
              },
              "start": 911,
              "end": 928
            },
            "start": 909,
            "end": 928
          },
          "init": null,
          "definite": false,
          "start": 909,
          "end": 928
        }
      ],
      "declare": false,
      "start": 905,
      "end": 929
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 934,
            "end": 936
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "m3",
              "optional": false,
              "typeAnnotation": null,
              "start": 939,
              "end": 941
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 942,
              "end": 947
            },
            "optional": false,
            "computed": false,
            "start": 939,
            "end": 947
          },
          "definite": false,
          "start": 934,
          "end": 947
        }
      ],
      "declare": false,
      "start": 930,
      "end": 948
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 953,
            "end": 955
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "M3",
              "optional": false,
              "typeAnnotation": null,
              "start": 958,
              "end": 960
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Color",
              "optional": false,
              "typeAnnotation": null,
              "start": 961,
              "end": 966
            },
            "optional": false,
            "computed": false,
            "start": 958,
            "end": 966
          },
          "definite": false,
          "start": 953,
          "end": 966
        }
      ],
      "declare": false,
      "start": 949,
      "end": 967
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
            "name": "blue",
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
                    "name": "M3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 978,
                    "end": 980
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 981,
                    "end": 986
                  },
                  "start": 978,
                  "end": 986
                },
                "typeArguments": null,
                "start": 978,
                "end": 986
              },
              "start": 976,
              "end": 986
            },
            "start": 972,
            "end": 986
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 989,
              "end": 991
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 992,
              "end": 996
            },
            "optional": false,
            "computed": false,
            "start": 989,
            "end": 996
          },
          "definite": false,
          "start": 972,
          "end": 996
        }
      ],
      "declare": false,
      "start": 968,
      "end": 997
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
            "name": "p3",
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
                    "name": "M3",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1007,
                    "end": 1009
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1010,
                    "end": 1015
                  },
                  "start": 1007,
                  "end": 1015
                },
                "typeArguments": null,
                "start": 1007,
                "end": 1015
              },
              "start": 1005,
              "end": 1015
            },
            "start": 1003,
            "end": 1015
          },
          "init": null,
          "definite": false,
          "start": 1003,
          "end": 1015
        }
      ],
      "declare": false,
      "start": 999,
      "end": 1016
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1021,
            "end": 1023
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "M3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1026,
                "end": 1028
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 1029,
                "end": 1034
              },
              "optional": false,
              "computed": false,
              "start": 1026,
              "end": 1034
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 1035,
              "end": 1038
            },
            "optional": false,
            "computed": false,
            "start": 1026,
            "end": 1038
          },
          "definite": false,
          "start": 1021,
          "end": 1038
        }
      ],
      "declare": false,
      "start": 1017,
      "end": 1039
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
            "name": "p3",
            "optional": false,
            "typeAnnotation": null,
            "start": 1044,
            "end": 1046
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "m3",
                "optional": false,
                "typeAnnotation": null,
                "start": 1049,
                "end": 1051
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "Color",
                "optional": false,
                "typeAnnotation": null,
                "start": 1052,
                "end": 1057
              },
              "optional": false,
              "computed": false,
              "start": 1049,
              "end": 1057
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 1058,
              "end": 1062
            },
            "optional": false,
            "computed": false,
            "start": 1049,
            "end": 1062
          },
          "definite": false,
          "start": 1044,
          "end": 1062
        }
      ],
      "declare": false,
      "start": 1040,
      "end": 1063
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 53,
  "end": 1063
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 53,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 65,
    "end": 66
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 71,
    "end": 77
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 78,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 88,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 94,
    "end": 95
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 96,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 99,
    "end": 105
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 107,
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
    "value": "number",
    "start": 110,
    "end": 116
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 117,
    "end": 118
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 123,
    "end": 129
  },
  {
    "type": "Keyword",
    "value": "var",
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
    "value": "=",
    "start": 140,
    "end": 141
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 142,
    "end": 143
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 143,
    "end": 144
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 145,
    "end": 146
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 170,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 174,
    "end": 175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 175,
    "end": 176
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 177,
    "end": 183
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 184,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 185,
    "end": 186
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 187,
    "end": 190
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 193,
    "end": 194
  },
  {
    "type": "Identifier",
    "value": "M",
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
    "type": "Keyword",
    "value": "var",
    "start": 199,
    "end": 202
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 203,
    "end": 205
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 205,
    "end": 206
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 213,
    "end": 214
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 215,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 219,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 222,
    "end": 223
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 225,
    "end": 226
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 226,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 231,
    "end": 232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 240,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 242,
    "end": 243
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 243,
    "end": 244
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 244,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 252,
    "end": 255
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 256,
    "end": 258
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 258,
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
    "value": "x",
    "start": 262,
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
    "value": "number",
    "start": 265,
    "end": 271
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 271,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 273,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 274,
    "end": 275
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": ";",
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
    "value": "var",
    "start": 286,
    "end": 289
  },
  {
    "type": "Identifier",
    "value": "p1",
    "start": 290,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Identifier",
    "value": "M",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 295,
    "end": 296
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 296,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 301,
    "end": 302
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 395,
    "end": 404
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 405,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 408,
    "end": 409
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 414,
    "end": 420
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 421,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 427,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 443,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 446,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 465,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 481,
    "end": 487
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 488,
    "end": 494
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 494,
    "end": 495
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 495,
    "end": 496
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 496,
    "end": 497
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 498,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 518,
    "end": 524
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 525,
    "end": 526
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 528,
    "end": 529
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 534,
    "end": 535
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 536,
    "end": 537
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 538,
    "end": 539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 539,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 549,
    "end": 550
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 555,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 557,
    "end": 558
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 560,
    "end": 563
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 564,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 566,
    "end": 567
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 568,
    "end": 574
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 575,
    "end": 577
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 577,
    "end": 578
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 579,
    "end": 582
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 583,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 586,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 590,
    "end": 591
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 621,
    "end": 624
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 625,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 627,
    "end": 628
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 629,
    "end": 635
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 636,
    "end": 638
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 638,
    "end": 639
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 639,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 644,
    "end": 645
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 646,
    "end": 649
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 650,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 653,
    "end": 654
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 658,
    "end": 663
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 663,
    "end": 664
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 665,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 669,
    "end": 671
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 674,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 676,
    "end": 677
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 677,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 682,
    "end": 683
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 684,
    "end": 687
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Identifier",
    "value": "M2",
    "start": 691,
    "end": 693
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 693,
    "end": 694
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 694,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 702,
    "end": 704
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 704,
    "end": 705
  },
  {
    "type": "Identifier",
    "value": "Origin",
    "start": 705,
    "end": 711
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 711,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 712,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 713,
    "end": 714
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 716,
    "end": 719
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 720,
    "end": 722
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 722,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 724,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 726,
    "end": 727
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 727,
    "end": 728
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 729,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 738,
    "end": 739
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 740,
    "end": 746
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 747,
    "end": 748
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 749,
    "end": 752
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 753,
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
    "value": "M2",
    "start": 757,
    "end": 759
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 759,
    "end": 760
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 760,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 765,
    "end": 766
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 767,
    "end": 770
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 771,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 774,
    "end": 775
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 776,
    "end": 779
  },
  {
    "type": "Identifier",
    "value": "m2",
    "start": 780,
    "end": 782
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 782,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 783,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 788,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 789,
    "end": 790
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 790,
    "end": 791
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 792,
    "end": 795
  },
  {
    "type": "Identifier",
    "value": "p2",
    "start": 796,
    "end": 798
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 799,
    "end": 800
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 801,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "M2",
    "start": 805,
    "end": 807
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 807,
    "end": 808
  },
  {
    "type": "Identifier",
    "value": "Point",
    "start": 808,
    "end": 813
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 813,
    "end": 814
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 814,
    "end": 815
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 815,
    "end": 816
  },
  {
    "type": "Identifier",
    "value": "namespace",
    "start": 818,
    "end": 827
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 828,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 831,
    "end": 832
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 837,
    "end": 843
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 844,
    "end": 848
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 849,
    "end": 854
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 855,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 857,
    "end": 861
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 861,
    "end": 862
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 863,
    "end": 866
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 867,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 869,
    "end": 870
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 872,
    "end": 875
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 876,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 880,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 887,
    "end": 889
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 891,
    "end": 894
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 895,
    "end": 897
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 898,
    "end": 899
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 900,
    "end": 902
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 902,
    "end": 903
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 913,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 920,
    "end": 922
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 922,
    "end": 923
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 923,
    "end": 928
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 928,
    "end": 929
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 930,
    "end": 933
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 934,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 939,
    "end": 941
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 941,
    "end": 942
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 942,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 947,
    "end": 948
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 949,
    "end": 952
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 953,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 956,
    "end": 957
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 958,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 960,
    "end": 961
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 961,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 968,
    "end": 971
  },
  {
    "type": "Identifier",
    "value": "blue",
    "start": 972,
    "end": 976
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 976,
    "end": 977
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 978,
    "end": 980
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 980,
    "end": 981
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 981,
    "end": 986
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 989,
    "end": 991
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 991,
    "end": 992
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 992,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 996,
    "end": 997
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 999,
    "end": 1002
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1003,
    "end": 1005
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1005,
    "end": 1006
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 1007,
    "end": 1009
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1010,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1017,
    "end": 1020
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1021,
    "end": 1023
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Identifier",
    "value": "M3",
    "start": 1026,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1029,
    "end": 1034
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1034,
    "end": 1035
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 1035,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1038,
    "end": 1039
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1040,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "p3",
    "start": 1044,
    "end": 1046
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1047,
    "end": 1048
  },
  {
    "type": "Identifier",
    "value": "m3",
    "start": 1049,
    "end": 1051
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1051,
    "end": 1052
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 1052,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1057,
    "end": 1058
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 1058,
    "end": 1062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1062,
    "end": 1063
  }
]
```
