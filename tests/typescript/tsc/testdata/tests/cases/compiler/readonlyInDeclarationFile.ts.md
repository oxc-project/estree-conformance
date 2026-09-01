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
        "name": "Foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 13
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
            "readonly": true,
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 29,
              "end": 30
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 32,
                "end": 38
              },
              "start": 30,
              "end": 38
            },
            "accessibility": null,
            "static": false,
            "start": 20,
            "end": 39
          },
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 57,
                    "end": 63
                  },
                  "start": 55,
                  "end": 63
                },
                "start": 54,
                "end": 63
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 66,
                  "end": 72
                },
                "typeArguments": null,
                "start": 66,
                "end": 72
              },
              "start": 64,
              "end": 72
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 44,
            "end": 73
          }
        ],
        "start": 14,
        "end": 75
      },
      "declare": false,
      "start": 0,
      "end": 75
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "C",
        "optional": false,
        "typeAnnotation": null,
        "start": 83,
        "end": 84
      },
      "typeParameters": null,
      "superClass": null,
      "superTypeArguments": null,
      "implements": [],
      "body": {
        "type": "ClassBody",
        "body": [
          {
            "type": "TSIndexSignature",
            "parameters": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSStringKeyword",
                    "start": 104,
                    "end": 110
                  },
                  "start": 102,
                  "end": 110
                },
                "start": 101,
                "end": 110
              }
            ],
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Object",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 113,
                  "end": 119
                },
                "typeArguments": null,
                "start": 113,
                "end": 119
              },
              "start": 111,
              "end": 119
            },
            "readonly": true,
            "static": false,
            "accessibility": null,
            "start": 91,
            "end": 120
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a1",
              "optional": false,
              "typeAnnotation": null,
              "start": 142,
              "end": 144
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 146,
                "end": 152
              },
              "start": 144,
              "end": 152
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "private",
            "start": 125,
            "end": 153
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a2",
              "optional": false,
              "typeAnnotation": null,
              "start": 177,
              "end": 179
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 181,
                "end": 187
              },
              "start": 179,
              "end": 187
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "protected",
            "start": 158,
            "end": 188
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "a3",
              "optional": false,
              "typeAnnotation": null,
              "start": 209,
              "end": 211
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 213,
                "end": 219
              },
              "start": 211,
              "end": 219
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 193,
            "end": 220
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b1",
              "optional": false,
              "typeAnnotation": null,
              "start": 237,
              "end": 239
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 251,
                      "end": 252
                    },
                    "start": 244,
                    "end": 252
                  }
                ],
                "start": 242,
                "end": 254
              },
              "expression": false,
              "start": 239,
              "end": 254
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 225,
            "end": 254
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b2",
              "optional": false,
              "typeAnnotation": null,
              "start": 273,
              "end": 275
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 287,
                      "end": 288
                    },
                    "start": 280,
                    "end": 288
                  }
                ],
                "start": 278,
                "end": 290
              },
              "expression": false,
              "start": 275,
              "end": 290
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 259,
            "end": 290
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "b3",
              "optional": false,
              "typeAnnotation": null,
              "start": 306,
              "end": 308
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 320,
                      "end": 321
                    },
                    "start": 313,
                    "end": 321
                  }
                ],
                "start": 311,
                "end": 323
              },
              "expression": false,
              "start": 308,
              "end": 323
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 295,
            "end": 323
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 340,
              "end": 342
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 354,
                      "end": 355
                    },
                    "start": 347,
                    "end": 355
                  }
                ],
                "start": 345,
                "end": 357
              },
              "expression": false,
              "start": 342,
              "end": 357
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 328,
            "end": 357
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c1",
              "optional": false,
              "typeAnnotation": null,
              "start": 374,
              "end": 376
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 377,
                  "end": 382
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 384,
                "end": 387
              },
              "expression": false,
              "start": 376,
              "end": 387
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 362,
            "end": 387
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 406,
              "end": 408
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 420,
                      "end": 421
                    },
                    "start": 413,
                    "end": 421
                  }
                ],
                "start": 411,
                "end": 423
              },
              "expression": false,
              "start": 408,
              "end": 423
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 392,
            "end": 423
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c2",
              "optional": false,
              "typeAnnotation": null,
              "start": 442,
              "end": 444
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 445,
                  "end": 450
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 452,
                "end": 455
              },
              "expression": false,
              "start": 444,
              "end": 455
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 428,
            "end": 455
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 471,
              "end": 473
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 485,
                      "end": 486
                    },
                    "start": 478,
                    "end": 486
                  }
                ],
                "start": 476,
                "end": 488
              },
              "expression": false,
              "start": 473,
              "end": 488
            },
            "kind": "get",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 460,
            "end": 488
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "c3",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 506
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 507,
                  "end": 512
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 514,
                "end": 517
              },
              "expression": false,
              "start": 506,
              "end": 517
            },
            "kind": "set",
            "computed": false,
            "static": false,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 493,
            "end": 517
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s1",
              "optional": false,
              "typeAnnotation": null,
              "start": 546,
              "end": 548
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 550,
                "end": 556
              },
              "start": 548,
              "end": 556
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "private",
            "start": 522,
            "end": 557
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s2",
              "optional": false,
              "typeAnnotation": null,
              "start": 588,
              "end": 590
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 592,
                "end": 598
              },
              "start": 590,
              "end": 598
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "protected",
            "start": 562,
            "end": 599
          },
          {
            "type": "PropertyDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "s3",
              "optional": false,
              "typeAnnotation": null,
              "start": 627,
              "end": 629
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 631,
                "end": 637
              },
              "start": 629,
              "end": 637
            },
            "value": null,
            "computed": false,
            "static": true,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": true,
            "accessibility": "public",
            "start": 604,
            "end": 638
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t1",
              "optional": false,
              "typeAnnotation": null,
              "start": 662,
              "end": 664
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 676,
                      "end": 677
                    },
                    "start": 669,
                    "end": 677
                  }
                ],
                "start": 667,
                "end": 679
              },
              "expression": false,
              "start": 664,
              "end": 679
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 643,
            "end": 679
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t2",
              "optional": false,
              "typeAnnotation": null,
              "start": 705,
              "end": 707
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 719,
                      "end": 720
                    },
                    "start": 712,
                    "end": 720
                  }
                ],
                "start": 710,
                "end": 722
              },
              "expression": false,
              "start": 707,
              "end": 722
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 684,
            "end": 722
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "t3",
              "optional": false,
              "typeAnnotation": null,
              "start": 745,
              "end": 747
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 759,
                      "end": 760
                    },
                    "start": 752,
                    "end": 760
                  }
                ],
                "start": 750,
                "end": 762
              },
              "expression": false,
              "start": 747,
              "end": 762
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 727,
            "end": 762
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u1",
              "optional": false,
              "typeAnnotation": null,
              "start": 786,
              "end": 788
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 800,
                      "end": 801
                    },
                    "start": 793,
                    "end": 801
                  }
                ],
                "start": 791,
                "end": 803
              },
              "expression": false,
              "start": 788,
              "end": 803
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 767,
            "end": 803
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u1",
              "optional": false,
              "typeAnnotation": null,
              "start": 827,
              "end": 829
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 830,
                  "end": 835
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 837,
                "end": 840
              },
              "expression": false,
              "start": 829,
              "end": 840
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "private",
            "start": 808,
            "end": 840
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u2",
              "optional": false,
              "typeAnnotation": null,
              "start": 866,
              "end": 868
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 880,
                      "end": 881
                    },
                    "start": 873,
                    "end": 881
                  }
                ],
                "start": 871,
                "end": 883
              },
              "expression": false,
              "start": 868,
              "end": 883
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 845,
            "end": 883
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u2",
              "optional": false,
              "typeAnnotation": null,
              "start": 909,
              "end": 911
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 912,
                  "end": 917
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 919,
                "end": 922
              },
              "expression": false,
              "start": 911,
              "end": 922
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "protected",
            "start": 888,
            "end": 922
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u3",
              "optional": false,
              "typeAnnotation": null,
              "start": 945,
              "end": 947
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
                      "type": "Literal",
                      "value": 1,
                      "raw": "1",
                      "start": 959,
                      "end": 960
                    },
                    "start": 952,
                    "end": 960
                  }
                ],
                "start": 950,
                "end": 962
              },
              "expression": false,
              "start": 947,
              "end": 962
            },
            "kind": "get",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 927,
            "end": 962
          },
          {
            "type": "MethodDefinition",
            "decorators": [],
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "u3",
              "optional": false,
              "typeAnnotation": null,
              "start": 985,
              "end": 987
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
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 988,
                  "end": 993
                }
              ],
              "returnType": null,
              "body": {
                "type": "BlockStatement",
                "body": [],
                "start": 995,
                "end": 998
              },
              "expression": false,
              "start": 987,
              "end": 998
            },
            "kind": "set",
            "computed": false,
            "static": true,
            "override": false,
            "optional": false,
            "accessibility": "public",
            "start": 967,
            "end": 998
          }
        ],
        "start": 85,
        "end": 1000
      },
      "abstract": false,
      "declare": false,
      "start": 77,
      "end": 1000
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
            "name": "z",
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
                    "readonly": true,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1024,
                      "end": 1025
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 1027,
                        "end": 1033
                      },
                      "start": 1025,
                      "end": 1033
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 1015,
                    "end": 1034
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 1052,
                            "end": 1058
                          },
                          "start": 1050,
                          "end": 1058
                        },
                        "start": 1049,
                        "end": 1058
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Object",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1061,
                          "end": 1067
                        },
                        "typeArguments": null,
                        "start": 1061,
                        "end": 1067
                      },
                      "start": 1059,
                      "end": 1067
                    },
                    "readonly": true,
                    "static": false,
                    "accessibility": null,
                    "start": 1039,
                    "end": 1068
                  }
                ],
                "start": 1009,
                "end": 1070
              },
              "start": 1007,
              "end": 1070
            },
            "start": 1006,
            "end": 1070
          },
          "init": null,
          "definite": false,
          "start": 1006,
          "end": 1070
        }
      ],
      "declare": false,
      "start": 1002,
      "end": 1070
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f",
        "optional": false,
        "typeAnnotation": null,
        "start": 1081,
        "end": 1082
      },
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
              "type": "ObjectExpression",
              "properties": [
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1112,
                    "end": 1113
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
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1125,
                            "end": 1126
                          },
                          "start": 1118,
                          "end": 1127
                        }
                      ],
                      "start": 1116,
                      "end": 1129
                    },
                    "expression": false,
                    "start": 1113,
                    "end": 1129
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1108,
                  "end": 1129
                },
                {
                  "type": "Property",
                  "kind": "get",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1143,
                    "end": 1144
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
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1156,
                            "end": 1157
                          },
                          "start": 1149,
                          "end": 1158
                        }
                      ],
                      "start": 1147,
                      "end": 1160
                    },
                    "expression": false,
                    "start": 1144,
                    "end": 1160
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1139,
                  "end": 1160
                },
                {
                  "type": "Property",
                  "kind": "set",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "y",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1174,
                    "end": 1175
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
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1176,
                        "end": 1181
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "BlockStatement",
                      "body": [],
                      "start": 1183,
                      "end": 1186
                    },
                    "expression": false,
                    "start": 1175,
                    "end": 1186
                  },
                  "method": false,
                  "shorthand": false,
                  "computed": false,
                  "optional": false,
                  "start": 1170,
                  "end": 1186
                }
              ],
              "start": 1098,
              "end": 1192
            },
            "start": 1091,
            "end": 1192
          }
        ],
        "start": 1085,
        "end": 1194
      },
      "expression": false,
      "start": 1072,
      "end": 1194
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "g",
        "optional": false,
        "typeAnnotation": null,
        "start": 1205,
        "end": 1206
      },
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
                          "readonly": true,
                          "key": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "a",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1241,
                            "end": 1242
                          },
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSStringKeyword",
                              "start": 1244,
                              "end": 1250
                            },
                            "start": 1242,
                            "end": 1250
                          },
                          "accessibility": null,
                          "static": false,
                          "start": 1232,
                          "end": 1251
                        },
                        {
                          "type": "TSIndexSignature",
                          "parameters": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "x",
                              "optional": false,
                              "typeAnnotation": {
                                "type": "TSTypeAnnotation",
                                "typeAnnotation": {
                                  "type": "TSStringKeyword",
                                  "start": 1273,
                                  "end": 1279
                                },
                                "start": 1271,
                                "end": 1279
                              },
                              "start": 1270,
                              "end": 1279
                            }
                          ],
                          "typeAnnotation": {
                            "type": "TSTypeAnnotation",
                            "typeAnnotation": {
                              "type": "TSTypeReference",
                              "typeName": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "Object",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1282,
                                "end": 1288
                              },
                              "typeArguments": null,
                              "start": 1282,
                              "end": 1288
                            },
                            "start": 1280,
                            "end": 1288
                          },
                          "readonly": true,
                          "static": false,
                          "accessibility": null,
                          "start": 1260,
                          "end": 1289
                        }
                      ],
                      "start": 1222,
                      "end": 1295
                    },
                    "start": 1220,
                    "end": 1295
                  },
                  "start": 1219,
                  "end": 1295
                },
                "init": null,
                "definite": false,
                "start": 1219,
                "end": 1295
              }
            ],
            "declare": false,
            "start": 1215,
            "end": 1295
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 1307,
              "end": 1308
            },
            "start": 1300,
            "end": 1309
          }
        ],
        "start": 1209,
        "end": 1311
      },
      "expression": false,
      "start": 1196,
      "end": 1311
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 1311
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
    "value": "Foo",
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
    "type": "Identifier",
    "value": "readonly",
    "start": 20,
    "end": 28
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 30,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 32,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 38,
    "end": 39
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 44,
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
    "value": "x",
    "start": 54,
    "end": 55
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 57,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 63,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 66,
    "end": 72
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 72,
    "end": 73
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 74,
    "end": 75
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 77,
    "end": 82
  },
  {
    "type": "Identifier",
    "value": "C",
    "start": 83,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 91,
    "end": 99
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 100,
    "end": 101
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 101,
    "end": 102
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 102,
    "end": 103
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 104,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 110,
    "end": 111
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 111,
    "end": 112
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 113,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 125,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 133,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 142,
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
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 158,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 168,
    "end": 176
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 177,
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
    "value": ";",
    "start": 187,
    "end": 188
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 193,
    "end": 199
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 200,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 209,
    "end": 211
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 211,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 213,
    "end": 219
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 219,
    "end": 220
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 225,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 233,
    "end": 236
  },
  {
    "type": "Identifier",
    "value": "b1",
    "start": 237,
    "end": 239
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 239,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 240,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 242,
    "end": 243
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 244,
    "end": 250
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 259,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 269,
    "end": 272
  },
  {
    "type": "Identifier",
    "value": "b2",
    "start": 273,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 276,
    "end": 277
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 278,
    "end": 279
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 280,
    "end": 286
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 287,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 289,
    "end": 290
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 295,
    "end": 301
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 302,
    "end": 305
  },
  {
    "type": "Identifier",
    "value": "b3",
    "start": 306,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 308,
    "end": 309
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 311,
    "end": 312
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 313,
    "end": 319
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 320,
    "end": 321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 322,
    "end": 323
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 328,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 336,
    "end": 339
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 340,
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
    "value": "{",
    "start": 345,
    "end": 346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 347,
    "end": 353
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 354,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 362,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 370,
    "end": 373
  },
  {
    "type": "Identifier",
    "value": "c1",
    "start": 374,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 376,
    "end": 377
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 377,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 382,
    "end": 383
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 384,
    "end": 385
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 386,
    "end": 387
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 392,
    "end": 401
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 402,
    "end": 405
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 406,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 408,
    "end": 409
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 409,
    "end": 410
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 411,
    "end": 412
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 413,
    "end": 419
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 420,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 422,
    "end": 423
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 428,
    "end": 437
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 438,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "c2",
    "start": 442,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 445,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 452,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 454,
    "end": 455
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 460,
    "end": 466
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 467,
    "end": 470
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 471,
    "end": 473
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 473,
    "end": 474
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 474,
    "end": 475
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 478,
    "end": 484
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 485,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 493,
    "end": 499
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 500,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "c3",
    "start": 504,
    "end": 506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 506,
    "end": 507
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 507,
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
    "value": "{",
    "start": 514,
    "end": 515
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 516,
    "end": 517
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 522,
    "end": 529
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 530,
    "end": 536
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 537,
    "end": 545
  },
  {
    "type": "Identifier",
    "value": "s1",
    "start": 546,
    "end": 548
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 548,
    "end": 549
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 550,
    "end": 556
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 556,
    "end": 557
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 562,
    "end": 571
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 572,
    "end": 578
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 579,
    "end": 587
  },
  {
    "type": "Identifier",
    "value": "s2",
    "start": 588,
    "end": 590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 590,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 592,
    "end": 598
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 598,
    "end": 599
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 604,
    "end": 610
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 611,
    "end": 617
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 618,
    "end": 626
  },
  {
    "type": "Identifier",
    "value": "s3",
    "start": 627,
    "end": 629
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 629,
    "end": 630
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 631,
    "end": 637
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 637,
    "end": 638
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 643,
    "end": 650
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 651,
    "end": 657
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 658,
    "end": 661
  },
  {
    "type": "Identifier",
    "value": "t1",
    "start": 662,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 665,
    "end": 666
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 667,
    "end": 668
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 669,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 676,
    "end": 677
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 678,
    "end": 679
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 684,
    "end": 693
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 694,
    "end": 700
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 701,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "t2",
    "start": 705,
    "end": 707
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 707,
    "end": 708
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 708,
    "end": 709
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 710,
    "end": 711
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 712,
    "end": 718
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 719,
    "end": 720
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 721,
    "end": 722
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 727,
    "end": 733
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 734,
    "end": 740
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 741,
    "end": 744
  },
  {
    "type": "Identifier",
    "value": "t3",
    "start": 745,
    "end": 747
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 747,
    "end": 748
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 748,
    "end": 749
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 750,
    "end": 751
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 752,
    "end": 758
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 759,
    "end": 760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 761,
    "end": 762
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 767,
    "end": 774
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 775,
    "end": 781
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 782,
    "end": 785
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 786,
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
    "value": "{",
    "start": 791,
    "end": 792
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 793,
    "end": 799
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 800,
    "end": 801
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Keyword",
    "value": "private",
    "start": 808,
    "end": 815
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 816,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 823,
    "end": 826
  },
  {
    "type": "Identifier",
    "value": "u1",
    "start": 827,
    "end": 829
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 829,
    "end": 830
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 830,
    "end": 835
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 835,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 839,
    "end": 840
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 845,
    "end": 854
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 855,
    "end": 861
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 862,
    "end": 865
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 866,
    "end": 868
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 868,
    "end": 869
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 869,
    "end": 870
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 871,
    "end": 872
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 873,
    "end": 879
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 882,
    "end": 883
  },
  {
    "type": "Keyword",
    "value": "protected",
    "start": 888,
    "end": 897
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 898,
    "end": 904
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 905,
    "end": 908
  },
  {
    "type": "Identifier",
    "value": "u2",
    "start": 909,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 911,
    "end": 912
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 912,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 917,
    "end": 918
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 919,
    "end": 920
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 921,
    "end": 922
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 927,
    "end": 933
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 934,
    "end": 940
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 941,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "u3",
    "start": 945,
    "end": 947
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 950,
    "end": 951
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 952,
    "end": 958
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 959,
    "end": 960
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 961,
    "end": 962
  },
  {
    "type": "Keyword",
    "value": "public",
    "start": 967,
    "end": 973
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 974,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 981,
    "end": 984
  },
  {
    "type": "Identifier",
    "value": "u3",
    "start": 985,
    "end": 987
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 987,
    "end": 988
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 988,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 995,
    "end": 996
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1002,
    "end": 1005
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 1006,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1007,
    "end": 1008
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1009,
    "end": 1010
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1015,
    "end": 1023
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1027,
    "end": 1033
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1033,
    "end": 1034
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1039,
    "end": 1047
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1048,
    "end": 1049
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1049,
    "end": 1050
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1050,
    "end": 1051
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1052,
    "end": 1058
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1059,
    "end": 1060
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1067,
    "end": 1068
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1069,
    "end": 1070
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1072,
    "end": 1080
  },
  {
    "type": "Identifier",
    "value": "f",
    "start": 1081,
    "end": 1082
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1082,
    "end": 1083
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1083,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1085,
    "end": 1086
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1091,
    "end": 1097
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1108,
    "end": 1111
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1112,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1118,
    "end": 1124
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1125,
    "end": 1126
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1126,
    "end": 1127
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1139,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1143,
    "end": 1144
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1144,
    "end": 1145
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1145,
    "end": 1146
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1149,
    "end": 1155
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1156,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1157,
    "end": 1158
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1160,
    "end": 1161
  },
  {
    "type": "Identifier",
    "value": "set",
    "start": 1170,
    "end": 1173
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 1174,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1176,
    "end": 1181
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1181,
    "end": 1182
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1196,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "g",
    "start": 1205,
    "end": 1206
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1206,
    "end": 1207
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1207,
    "end": 1208
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1209,
    "end": 1210
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1215,
    "end": 1218
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1219,
    "end": 1220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1232,
    "end": 1240
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1241,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1244,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1250,
    "end": 1251
  },
  {
    "type": "Identifier",
    "value": "readonly",
    "start": 1260,
    "end": 1268
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1269,
    "end": 1270
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1270,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1273,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1279,
    "end": 1280
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 1282,
    "end": 1288
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1288,
    "end": 1289
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1294,
    "end": 1295
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1300,
    "end": 1306
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1308,
    "end": 1309
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  }
]
```
