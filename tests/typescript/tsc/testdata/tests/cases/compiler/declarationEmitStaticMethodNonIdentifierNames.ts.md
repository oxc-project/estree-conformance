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
            "name": "uniqueSym",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeOperator",
                "operator": "unique",
                "typeAnnotation": {
                  "type": "TSSymbolKeyword",
                  "start": 32,
                  "end": 38
                },
                "start": 25,
                "end": 38
              },
              "start": 23,
              "end": 38
            },
            "start": 14,
            "end": 38
          },
          "init": null,
          "definite": false,
          "start": 14,
          "end": 38
        }
      ],
      "declare": true,
      "start": 0,
      "end": 39
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Foo",
          "optional": false,
          "typeAnnotation": null,
          "start": 115,
          "end": 118
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
                "type": "PrivateIdentifier",
                "name": "priv",
                "start": 132,
                "end": 137
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
                  "body": [],
                  "start": 140,
                  "end": 143
                },
                "expression": false,
                "start": 137,
                "end": 143
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 125,
              "end": 143
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPriv",
                "optional": false,
                "typeAnnotation": null,
                "start": 155,
                "end": 162
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 182,
                          "end": 185
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "priv",
                          "start": 186,
                          "end": 191
                        },
                        "optional": false,
                        "computed": false,
                        "start": 182,
                        "end": 191
                      },
                      "start": 175,
                      "end": 192
                    }
                  ],
                  "start": 165,
                  "end": 198
                },
                "expression": false,
                "start": 162,
                "end": 198
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 148,
              "end": 198
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": "quoted-name",
                "raw": "\"quoted-name\"",
                "start": 211,
                "end": 224
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
                  "body": [],
                  "start": 227,
                  "end": 230
                },
                "expression": false,
                "start": 224,
                "end": 230
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 204,
              "end": 230
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getQuoted",
                "optional": false,
                "typeAnnotation": null,
                "start": 242,
                "end": 251
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 271,
                          "end": 274
                        },
                        "property": {
                          "type": "Literal",
                          "value": "quoted-name",
                          "raw": "\"quoted-name\"",
                          "start": 275,
                          "end": 288
                        },
                        "optional": false,
                        "computed": true,
                        "start": 271,
                        "end": 289
                      },
                      "start": 264,
                      "end": 290
                    }
                  ],
                  "start": 254,
                  "end": 296
                },
                "expression": false,
                "start": 251,
                "end": 296
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 235,
              "end": 296
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": "computed-name",
                "raw": "\"computed-name\"",
                "start": 310,
                "end": 325
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
                  "body": [],
                  "start": 329,
                  "end": 332
                },
                "expression": false,
                "start": 326,
                "end": 332
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 302,
              "end": 332
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getComputed",
                "optional": false,
                "typeAnnotation": null,
                "start": 344,
                "end": 355
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 375,
                          "end": 378
                        },
                        "property": {
                          "type": "Literal",
                          "value": "computed-name",
                          "raw": "\"computed-name\"",
                          "start": 379,
                          "end": 394
                        },
                        "optional": false,
                        "computed": true,
                        "start": 375,
                        "end": 395
                      },
                      "start": 368,
                      "end": 396
                    }
                  ],
                  "start": 358,
                  "end": 402
                },
                "expression": false,
                "start": 355,
                "end": 402
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 337,
              "end": 402
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 415,
                "end": 416
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
                  "body": [],
                  "start": 419,
                  "end": 422
                },
                "expression": false,
                "start": 416,
                "end": 422
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 408,
              "end": 422
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getNumeric",
                "optional": false,
                "typeAnnotation": null,
                "start": 434,
                "end": 444
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 464,
                          "end": 467
                        },
                        "property": {
                          "type": "Literal",
                          "value": 1,
                          "raw": "1",
                          "start": 468,
                          "end": 469
                        },
                        "optional": false,
                        "computed": true,
                        "start": 464,
                        "end": 470
                      },
                      "start": 457,
                      "end": 471
                    }
                  ],
                  "start": 447,
                  "end": 477
                },
                "expression": false,
                "start": 444,
                "end": 477
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 427,
              "end": 477
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "uniqueSym",
                "optional": false,
                "typeAnnotation": null,
                "start": 491,
                "end": 500
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
                  "body": [],
                  "start": 504,
                  "end": 507
                },
                "expression": false,
                "start": 501,
                "end": 507
              },
              "kind": "method",
              "computed": true,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 483,
              "end": 507
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getUnique",
                "optional": false,
                "typeAnnotation": null,
                "start": 519,
                "end": 528
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Foo",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 548,
                          "end": 551
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "uniqueSym",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 552,
                          "end": 561
                        },
                        "optional": false,
                        "computed": true,
                        "start": 548,
                        "end": 562
                      },
                      "start": 541,
                      "end": 563
                    }
                  ],
                  "start": 531,
                  "end": 569
                },
                "expression": false,
                "start": 528,
                "end": 569
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 512,
              "end": 569
            },
            {
              "type": "PropertyDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "privRef",
                "optional": false,
                "typeAnnotation": null,
                "start": 629,
                "end": 636
              },
              "typeAnnotation": null,
              "value": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 639,
                  "end": 642
                },
                "property": {
                  "type": "PrivateIdentifier",
                  "name": "priv",
                  "start": 643,
                  "end": 648
                },
                "optional": false,
                "computed": false,
                "start": 639,
                "end": 648
              },
              "computed": false,
              "static": true,
              "declare": false,
              "override": false,
              "optional": false,
              "definite": false,
              "readonly": false,
              "accessibility": null,
              "start": 622,
              "end": 649
            }
          ],
          "start": 119,
          "end": 651
        },
        "abstract": false,
        "declare": false,
        "start": 109,
        "end": 651
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 102,
      "end": 651
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Writable",
          "optional": false,
          "typeAnnotation": null,
          "start": 705,
          "end": 713
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
                "name": "normalName",
                "optional": false,
                "typeAnnotation": null,
                "start": 727,
                "end": 737
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
                  "body": [],
                  "start": 740,
                  "end": 743
                },
                "expression": false,
                "start": 737,
                "end": 743
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 720,
              "end": 743
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getNormal",
                "optional": false,
                "typeAnnotation": null,
                "start": 755,
                "end": 764
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Writable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 784,
                          "end": 792
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "normalName",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 793,
                          "end": 803
                        },
                        "optional": false,
                        "computed": false,
                        "start": 784,
                        "end": 803
                      },
                      "start": 777,
                      "end": 804
                    }
                  ],
                  "start": 767,
                  "end": 810
                },
                "expression": false,
                "start": 764,
                "end": 810
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 748,
              "end": 810
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "$dollar",
                "optional": false,
                "typeAnnotation": null,
                "start": 823,
                "end": 830
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
                  "body": [],
                  "start": 833,
                  "end": 836
                },
                "expression": false,
                "start": 830,
                "end": 836
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 816,
              "end": 836
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getDollar",
                "optional": false,
                "typeAnnotation": null,
                "start": 848,
                "end": 857
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Writable",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 877,
                          "end": 885
                        },
                        "property": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "$dollar",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 886,
                          "end": 893
                        },
                        "optional": false,
                        "computed": false,
                        "start": 877,
                        "end": 893
                      },
                      "start": 870,
                      "end": 894
                    }
                  ],
                  "start": 860,
                  "end": 900
                },
                "expression": false,
                "start": 857,
                "end": 900
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 841,
              "end": 900
            }
          ],
          "start": 714,
          "end": 902
        },
        "abstract": false,
        "declare": false,
        "start": 699,
        "end": 902
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 692,
      "end": 902
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Generic",
          "optional": false,
          "typeAnnotation": null,
          "start": 917,
          "end": 924
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
                "type": "PrivateIdentifier",
                "name": "priv",
                "start": 938,
                "end": 943
              },
              "value": {
                "type": "FunctionExpression",
                "id": null,
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
                        "start": 944,
                        "end": 945
                      },
                      "constraint": null,
                      "default": null,
                      "in": false,
                      "out": false,
                      "const": false,
                      "start": 944,
                      "end": 945
                    }
                  ],
                  "start": 943,
                  "end": 946
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
                          "start": 950,
                          "end": 951
                        },
                        "typeArguments": null,
                        "start": 950,
                        "end": 951
                      },
                      "start": 948,
                      "end": 951
                    },
                    "start": 947,
                    "end": 951
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
                      "start": 954,
                      "end": 955
                    },
                    "typeArguments": null,
                    "start": 954,
                    "end": 955
                  },
                  "start": 952,
                  "end": 955
                },
                "body": {
                  "type": "BlockStatement",
                  "body": [
                    {
                      "type": "ReturnStatement",
                      "argument": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "x",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 965,
                        "end": 966
                      },
                      "start": 958,
                      "end": 967
                    }
                  ],
                  "start": 956,
                  "end": 969
                },
                "expression": false,
                "start": 943,
                "end": 969
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 931,
              "end": 969
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPriv",
                "optional": false,
                "typeAnnotation": null,
                "start": 981,
                "end": 988
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Generic",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1008,
                          "end": 1015
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "priv",
                          "start": 1016,
                          "end": 1021
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1008,
                        "end": 1021
                      },
                      "start": 1001,
                      "end": 1022
                    }
                  ],
                  "start": 991,
                  "end": 1028
                },
                "expression": false,
                "start": 988,
                "end": 1028
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 974,
              "end": 1028
            }
          ],
          "start": 925,
          "end": 1030
        },
        "abstract": false,
        "declare": false,
        "start": 911,
        "end": 1030
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 904,
      "end": 1030
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Recursive",
          "optional": false,
          "typeAnnotation": null,
          "start": 1045,
          "end": 1054
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
                "type": "PrivateIdentifier",
                "name": "rec",
                "start": 1068,
                "end": 1072
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recursive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1084,
                          "end": 1093
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "rec",
                          "start": 1094,
                          "end": 1098
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1084,
                        "end": 1098
                      },
                      "start": 1077,
                      "end": 1099
                    }
                  ],
                  "start": 1075,
                  "end": 1101
                },
                "expression": false,
                "start": 1072,
                "end": 1101
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1061,
              "end": 1101
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getRec",
                "optional": false,
                "typeAnnotation": null,
                "start": 1113,
                "end": 1119
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Recursive",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1139,
                          "end": 1148
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "rec",
                          "start": 1149,
                          "end": 1153
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1139,
                        "end": 1153
                      },
                      "start": 1132,
                      "end": 1154
                    }
                  ],
                  "start": 1122,
                  "end": 1160
                },
                "expression": false,
                "start": 1119,
                "end": 1160
              },
              "kind": "method",
              "computed": false,
              "static": true,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1106,
              "end": 1160
            }
          ],
          "start": 1055,
          "end": 1162
        },
        "abstract": false,
        "declare": false,
        "start": 1039,
        "end": 1162
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1032,
      "end": 1162
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "ClassDeclaration",
        "decorators": [],
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "Instance",
          "optional": false,
          "typeAnnotation": null,
          "start": 1236,
          "end": 1244
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
                "type": "PrivateIdentifier",
                "name": "priv",
                "start": 1251,
                "end": 1256
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
                  "body": [],
                  "start": 1259,
                  "end": 1262
                },
                "expression": false,
                "start": 1256,
                "end": 1262
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1251,
              "end": 1262
            },
            {
              "type": "MethodDefinition",
              "decorators": [],
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "getPriv",
                "optional": false,
                "typeAnnotation": null,
                "start": 1267,
                "end": 1274
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
                        "type": "MemberExpression",
                        "object": {
                          "type": "ThisExpression",
                          "start": 1294,
                          "end": 1298
                        },
                        "property": {
                          "type": "PrivateIdentifier",
                          "name": "priv",
                          "start": 1299,
                          "end": 1304
                        },
                        "optional": false,
                        "computed": false,
                        "start": 1294,
                        "end": 1304
                      },
                      "start": 1287,
                      "end": 1305
                    }
                  ],
                  "start": 1277,
                  "end": 1311
                },
                "expression": false,
                "start": 1274,
                "end": 1311
              },
              "kind": "method",
              "computed": false,
              "static": false,
              "override": false,
              "optional": false,
              "accessibility": null,
              "start": 1267,
              "end": 1311
            }
          ],
          "start": 1245,
          "end": 1313
        },
        "abstract": false,
        "declare": false,
        "start": 1230,
        "end": 1313
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1223,
      "end": 1313
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1313
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
    "value": "uniqueSym",
    "start": 14,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "unique",
    "start": 25,
    "end": 31
  },
  {
    "type": "Identifier",
    "value": "symbol",
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
    "type": "Keyword",
    "value": "export",
    "start": 102,
    "end": 108
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 109,
    "end": 114
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 115,
    "end": 118
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 119,
    "end": 120
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 125,
    "end": 131
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 132,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 137,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 140,
    "end": 141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 142,
    "end": 143
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 148,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "getPriv",
    "start": 155,
    "end": 162
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 162,
    "end": 163
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 163,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 165,
    "end": 166
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 175,
    "end": 181
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 182,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 185,
    "end": 186
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 186,
    "end": 191
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 191,
    "end": 192
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 197,
    "end": 198
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 204,
    "end": 210
  },
  {
    "type": "String",
    "value": "\"quoted-name\"",
    "start": 211,
    "end": 224
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 225,
    "end": 226
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 227,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 229,
    "end": 230
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 235,
    "end": 241
  },
  {
    "type": "Identifier",
    "value": "getQuoted",
    "start": 242,
    "end": 251
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 251,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 252,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 264,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 271,
    "end": 274
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 274,
    "end": 275
  },
  {
    "type": "String",
    "value": "\"quoted-name\"",
    "start": 275,
    "end": 288
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 288,
    "end": 289
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 289,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 295,
    "end": 296
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 302,
    "end": 308
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 309,
    "end": 310
  },
  {
    "type": "String",
    "value": "\"computed-name\"",
    "start": 310,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 326,
    "end": 327
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 327,
    "end": 328
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 329,
    "end": 330
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 331,
    "end": 332
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 337,
    "end": 343
  },
  {
    "type": "Identifier",
    "value": "getComputed",
    "start": 344,
    "end": 355
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 355,
    "end": 356
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 358,
    "end": 359
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 368,
    "end": 374
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 375,
    "end": 378
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 378,
    "end": 379
  },
  {
    "type": "String",
    "value": "\"computed-name\"",
    "start": 379,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 394,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 395,
    "end": 396
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 401,
    "end": 402
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 408,
    "end": 414
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 415,
    "end": 416
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 416,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 417,
    "end": 418
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 419,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 421,
    "end": 422
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 427,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "getNumeric",
    "start": 434,
    "end": 444
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 444,
    "end": 445
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 445,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 447,
    "end": 448
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 457,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 464,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 467,
    "end": 468
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 468,
    "end": 469
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 469,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 476,
    "end": 477
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 483,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 490,
    "end": 491
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 491,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 500,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 502,
    "end": 503
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 504,
    "end": 505
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 506,
    "end": 507
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 512,
    "end": 518
  },
  {
    "type": "Identifier",
    "value": "getUnique",
    "start": 519,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 541,
    "end": 547
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 548,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 551,
    "end": 552
  },
  {
    "type": "Identifier",
    "value": "uniqueSym",
    "start": 552,
    "end": 561
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 562,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 622,
    "end": 628
  },
  {
    "type": "Identifier",
    "value": "privRef",
    "start": 629,
    "end": 636
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 637,
    "end": 638
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 639,
    "end": 642
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 642,
    "end": 643
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 643,
    "end": 648
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 648,
    "end": 649
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 650,
    "end": 651
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 692,
    "end": 698
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 699,
    "end": 704
  },
  {
    "type": "Identifier",
    "value": "Writable",
    "start": 705,
    "end": 713
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 720,
    "end": 726
  },
  {
    "type": "Identifier",
    "value": "normalName",
    "start": 727,
    "end": 737
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 737,
    "end": 738
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 738,
    "end": 739
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 740,
    "end": 741
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 742,
    "end": 743
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 748,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "getNormal",
    "start": 755,
    "end": 764
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 764,
    "end": 765
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 765,
    "end": 766
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 767,
    "end": 768
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 777,
    "end": 783
  },
  {
    "type": "Identifier",
    "value": "Writable",
    "start": 784,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 792,
    "end": 793
  },
  {
    "type": "Identifier",
    "value": "normalName",
    "start": 793,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 803,
    "end": 804
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 809,
    "end": 810
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 816,
    "end": 822
  },
  {
    "type": "Identifier",
    "value": "$dollar",
    "start": 823,
    "end": 830
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 830,
    "end": 831
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 831,
    "end": 832
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 833,
    "end": 834
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 835,
    "end": 836
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 841,
    "end": 847
  },
  {
    "type": "Identifier",
    "value": "getDollar",
    "start": 848,
    "end": 857
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 857,
    "end": 858
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 858,
    "end": 859
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 860,
    "end": 861
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 870,
    "end": 876
  },
  {
    "type": "Identifier",
    "value": "Writable",
    "start": 877,
    "end": 885
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 885,
    "end": 886
  },
  {
    "type": "Identifier",
    "value": "$dollar",
    "start": 886,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 893,
    "end": 894
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 899,
    "end": 900
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 901,
    "end": 902
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 904,
    "end": 910
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 911,
    "end": 916
  },
  {
    "type": "Identifier",
    "value": "Generic",
    "start": 917,
    "end": 924
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 925,
    "end": 926
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 931,
    "end": 937
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 938,
    "end": 943
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 943,
    "end": 944
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 944,
    "end": 945
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 945,
    "end": 946
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 946,
    "end": 947
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 947,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 948,
    "end": 949
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 950,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 951,
    "end": 952
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 952,
    "end": 953
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 956,
    "end": 957
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 958,
    "end": 964
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 965,
    "end": 966
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 966,
    "end": 967
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 968,
    "end": 969
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 974,
    "end": 980
  },
  {
    "type": "Identifier",
    "value": "getPriv",
    "start": 981,
    "end": 988
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 988,
    "end": 989
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 989,
    "end": 990
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 991,
    "end": 992
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1001,
    "end": 1007
  },
  {
    "type": "Identifier",
    "value": "Generic",
    "start": 1008,
    "end": 1015
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1015,
    "end": 1016
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 1016,
    "end": 1021
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1021,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1029,
    "end": 1030
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1039,
    "end": 1044
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 1045,
    "end": 1054
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1055,
    "end": 1056
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1061,
    "end": 1067
  },
  {
    "type": "PrivateIdentifier",
    "value": "rec",
    "start": 1068,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1073,
    "end": 1074
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1075,
    "end": 1076
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1077,
    "end": 1083
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 1084,
    "end": 1093
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "PrivateIdentifier",
    "value": "rec",
    "start": 1094,
    "end": 1098
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1098,
    "end": 1099
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1100,
    "end": 1101
  },
  {
    "type": "Keyword",
    "value": "static",
    "start": 1106,
    "end": 1112
  },
  {
    "type": "Identifier",
    "value": "getRec",
    "start": 1113,
    "end": 1119
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1119,
    "end": 1120
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1120,
    "end": 1121
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1122,
    "end": 1123
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1132,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "Recursive",
    "start": 1139,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1148,
    "end": 1149
  },
  {
    "type": "PrivateIdentifier",
    "value": "rec",
    "start": 1149,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1159,
    "end": 1160
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1223,
    "end": 1229
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 1230,
    "end": 1235
  },
  {
    "type": "Identifier",
    "value": "Instance",
    "start": 1236,
    "end": 1244
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1245,
    "end": 1246
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 1251,
    "end": 1256
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1256,
    "end": 1257
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1257,
    "end": 1258
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Identifier",
    "value": "getPriv",
    "start": 1267,
    "end": 1274
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1274,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1277,
    "end": 1278
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1287,
    "end": 1293
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1294,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1298,
    "end": 1299
  },
  {
    "type": "PrivateIdentifier",
    "value": "priv",
    "start": 1299,
    "end": 1304
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1304,
    "end": 1305
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1310,
    "end": 1311
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1312,
    "end": 1313
  }
]
```
