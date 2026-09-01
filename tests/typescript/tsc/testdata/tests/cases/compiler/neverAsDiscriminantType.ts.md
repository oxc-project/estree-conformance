__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo1",
        "optional": false,
        "typeAnnotation": null,
        "start": 5,
        "end": 9
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
                  "start": 14,
                  "end": 18
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 20,
                      "end": 23
                    },
                    "start": 20,
                    "end": 23
                  },
                  "start": 18,
                  "end": 23
                },
                "accessibility": null,
                "static": false,
                "start": 14,
                "end": 24
              },
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
                  "start": 25,
                  "end": 26
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 28,
                    "end": 34
                  },
                  "start": 26,
                  "end": 34
                },
                "accessibility": null,
                "static": false,
                "start": 25,
                "end": 34
              }
            ],
            "start": 12,
            "end": 36
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
                  "start": 41,
                  "end": 45
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 47,
                      "end": 50
                    },
                    "start": 47,
                    "end": 50
                  },
                  "start": 45,
                  "end": 50
                },
                "accessibility": null,
                "static": false,
                "start": 41,
                "end": 50
              }
            ],
            "start": 39,
            "end": 52
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
                  "start": 57,
                  "end": 61
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 63,
                    "end": 68
                  },
                  "start": 61,
                  "end": 68
                },
                "accessibility": null,
                "static": false,
                "start": 57,
                "end": 68
              }
            ],
            "start": 55,
            "end": 70
          }
        ],
        "start": 12,
        "end": 70
      },
      "declare": false,
      "start": 0,
      "end": 71
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f1",
        "optional": false,
        "typeAnnotation": null,
        "start": 82,
        "end": 84
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo1",
                "optional": false,
                "typeAnnotation": null,
                "start": 90,
                "end": 94
              },
              "typeArguments": null,
              "start": 90,
              "end": 94
            },
            "start": 88,
            "end": 94
          },
          "start": 85,
          "end": 94
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 106,
                  "end": 109
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 110,
                  "end": 114
                },
                "optional": false,
                "computed": false,
                "start": 106,
                "end": 114
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 119,
                "end": 122
              },
              "start": 106,
              "end": 122
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 134,
                      "end": 137
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 138,
                      "end": 139
                    },
                    "optional": false,
                    "computed": false,
                    "start": 134,
                    "end": 139
                  },
                  "directive": null,
                  "start": 134,
                  "end": 140
                }
              ],
              "start": 124,
              "end": 146
            },
            "alternate": null,
            "start": 102,
            "end": 146
          }
        ],
        "start": 96,
        "end": 148
      },
      "expression": false,
      "start": 73,
      "end": 148
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Foo2",
        "optional": false,
        "typeAnnotation": null,
        "start": 155,
        "end": 159
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
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 164,
                  "end": 168
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "a",
                      "raw": "'a'",
                      "start": 171,
                      "end": 174
                    },
                    "start": 171,
                    "end": 174
                  },
                  "start": 169,
                  "end": 174
                },
                "accessibility": null,
                "static": false,
                "start": 164,
                "end": 175
              },
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
                  "start": 176,
                  "end": 177
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNumberKeyword",
                    "start": 179,
                    "end": 185
                  },
                  "start": 177,
                  "end": 185
                },
                "accessibility": null,
                "static": false,
                "start": 176,
                "end": 185
              }
            ],
            "start": 162,
            "end": 187
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 192,
                  "end": 196
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSLiteralType",
                    "literal": {
                      "type": "Literal",
                      "value": "b",
                      "raw": "'b'",
                      "start": 199,
                      "end": 202
                    },
                    "start": 199,
                    "end": 202
                  },
                  "start": 197,
                  "end": 202
                },
                "accessibility": null,
                "static": false,
                "start": 192,
                "end": 202
              }
            ],
            "start": 190,
            "end": 204
          },
          {
            "type": "TSTypeLiteral",
            "members": [
              {
                "type": "TSPropertySignature",
                "computed": false,
                "optional": true,
                "readonly": false,
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 209,
                  "end": 213
                },
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSNeverKeyword",
                    "start": 216,
                    "end": 221
                  },
                  "start": 214,
                  "end": 221
                },
                "accessibility": null,
                "static": false,
                "start": 209,
                "end": 221
              }
            ],
            "start": 207,
            "end": 223
          }
        ],
        "start": 162,
        "end": 223
      },
      "declare": false,
      "start": 150,
      "end": 224
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "f2",
        "optional": false,
        "typeAnnotation": null,
        "start": 235,
        "end": 237
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "foo",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Foo2",
                "optional": false,
                "typeAnnotation": null,
                "start": 243,
                "end": 247
              },
              "typeArguments": null,
              "start": 243,
              "end": 247
            },
            "start": 241,
            "end": 247
          },
          "start": 238,
          "end": 247
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "IfStatement",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "foo",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 259,
                  "end": 262
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "kind",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 263,
                  "end": 267
                },
                "optional": false,
                "computed": false,
                "start": 259,
                "end": 267
              },
              "operator": "===",
              "right": {
                "type": "Literal",
                "value": "a",
                "raw": "'a'",
                "start": 272,
                "end": 275
              },
              "start": 259,
              "end": 275
            },
            "consequent": {
              "type": "BlockStatement",
              "body": [
                {
                  "type": "ExpressionStatement",
                  "expression": {
                    "type": "MemberExpression",
                    "object": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "foo",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 287,
                      "end": 290
                    },
                    "property": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "a",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 291,
                      "end": 292
                    },
                    "optional": false,
                    "computed": false,
                    "start": 287,
                    "end": 292
                  },
                  "directive": null,
                  "start": 287,
                  "end": 293
                }
              ],
              "start": 277,
              "end": 299
            },
            "alternate": null,
            "start": 255,
            "end": 299
          }
        ],
        "start": 249,
        "end": 301
      },
      "expression": false,
      "start": 226,
      "end": 301
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GatewayPayloadStructure",
          "optional": false,
          "typeAnnotation": null,
          "start": 342,
          "end": 365
        },
        "typeParameters": {
          "type": "TSTypeParameterDeclaration",
          "params": [
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "O",
                "optional": false,
                "typeAnnotation": null,
                "start": 366,
                "end": 367
              },
              "constraint": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GatewayOpcode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 376,
                  "end": 389
                },
                "typeArguments": null,
                "start": 376,
                "end": 389
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 366,
              "end": 389
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "T",
                "optional": false,
                "typeAnnotation": null,
                "start": 391,
                "end": 392
              },
              "constraint": {
                "type": "TSTypeOperator",
                "operator": "keyof",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GatewayEvents",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 407,
                    "end": 420
                  },
                  "typeArguments": null,
                  "start": 407,
                  "end": 420
                },
                "start": 401,
                "end": 420
              },
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 391,
              "end": 420
            },
            {
              "type": "TSTypeParameter",
              "name": {
                "type": "Identifier",
                "decorators": [],
                "name": "D",
                "optional": false,
                "typeAnnotation": null,
                "start": 422,
                "end": 423
              },
              "constraint": null,
              "default": null,
              "in": false,
              "out": false,
              "const": false,
              "start": 422,
              "end": 423
            }
          ],
          "start": 365,
          "end": 424
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
                "name": "op",
                "optional": false,
                "typeAnnotation": null,
                "start": 431,
                "end": 433
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "O",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 435,
                    "end": 436
                  },
                  "typeArguments": null,
                  "start": 435,
                  "end": 436
                },
                "start": 433,
                "end": 436
              },
              "accessibility": null,
              "static": false,
              "start": 431,
              "end": 436
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "d",
                "optional": false,
                "typeAnnotation": null,
                "start": 441,
                "end": 442
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "D",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 444,
                    "end": 445
                  },
                  "typeArguments": null,
                  "start": 444,
                  "end": 445
                },
                "start": 442,
                "end": 445
              },
              "accessibility": null,
              "static": false,
              "start": 441,
              "end": 445
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "t",
                "optional": false,
                "typeAnnotation": null,
                "start": 450,
                "end": 451
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
                    "start": 454,
                    "end": 455
                  },
                  "typeArguments": null,
                  "start": 454,
                  "end": 455
                },
                "start": 452,
                "end": 455
              },
              "accessibility": null,
              "static": false,
              "start": 450,
              "end": 455
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": true,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "s",
                "optional": false,
                "typeAnnotation": null,
                "start": 460,
                "end": 461
              },
              "typeAnnotation": {
                "type": "TSTypeAnnotation",
                "typeAnnotation": {
                  "type": "TSNumberKeyword",
                  "start": 464,
                  "end": 470
                },
                "start": 462,
                "end": 470
              },
              "accessibility": null,
              "static": false,
              "start": 460,
              "end": 470
            }
          ],
          "start": 425,
          "end": 472
        },
        "declare": false,
        "start": 332,
        "end": 472
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 325,
      "end": 472
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSTypeAliasDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GatewayPayload",
          "optional": false,
          "typeAnnotation": null,
          "start": 486,
          "end": 500
        },
        "typeParameters": null,
        "typeAnnotation": {
          "type": "TSIndexedAccessType",
          "objectType": {
            "type": "TSMappedType",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "O",
              "optional": false,
              "typeAnnotation": null,
              "start": 510,
              "end": 511
            },
            "constraint": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "GatewayOpcode",
                "optional": false,
                "typeAnnotation": null,
                "start": 515,
                "end": 528
              },
              "typeArguments": null,
              "start": 515,
              "end": 528
            },
            "nameType": null,
            "typeAnnotation": {
              "type": "TSConditionalType",
              "checkType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "O",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 531,
                  "end": 532
                },
                "typeArguments": null,
                "start": 531,
                "end": 532
              },
              "extendsType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "TSQualifiedName",
                  "left": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "GatewayOpcode",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 541,
                    "end": 554
                  },
                  "right": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "DISPATCH",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 555,
                    "end": 563
                  },
                  "start": 541,
                  "end": 563
                },
                "typeArguments": null,
                "start": 541,
                "end": 563
              },
              "trueType": {
                "type": "TSIndexedAccessType",
                "objectType": {
                  "type": "TSMappedType",
                  "key": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "T",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 581,
                    "end": 582
                  },
                  "constraint": {
                    "type": "TSTypeOperator",
                    "operator": "keyof",
                    "typeAnnotation": {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "GatewayEvents",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 605
                      },
                      "typeArguments": null,
                      "start": 592,
                      "end": 605
                    },
                    "start": 586,
                    "end": 605
                  },
                  "nameType": null,
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GatewayPayloadStructure",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 608,
                      "end": 631
                    },
                    "typeArguments": {
                      "type": "TSTypeParameterInstantiation",
                      "params": [
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "TSQualifiedName",
                            "left": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "GatewayOpcode",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 632,
                              "end": 645
                            },
                            "right": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "DISPATCH",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 646,
                              "end": 654
                            },
                            "start": 632,
                            "end": 654
                          },
                          "typeArguments": null,
                          "start": 632,
                          "end": 654
                        },
                        {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "T",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 656,
                            "end": 657
                          },
                          "typeArguments": null,
                          "start": 656,
                          "end": 657
                        },
                        {
                          "type": "TSIndexedAccessType",
                          "objectType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "GatewayEvents",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 659,
                              "end": 672
                            },
                            "typeArguments": null,
                            "start": 659,
                            "end": 672
                          },
                          "indexType": {
                            "type": "TSTypeReference",
                            "typeName": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "T",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 673,
                              "end": 674
                            },
                            "typeArguments": null,
                            "start": 673,
                            "end": 674
                          },
                          "start": 659,
                          "end": 675
                        }
                      ],
                      "start": 631,
                      "end": 676
                    },
                    "start": 608,
                    "end": 676
                  },
                  "optional": false,
                  "readonly": null,
                  "start": 570,
                  "end": 682
                },
                "indexType": {
                  "type": "TSTypeOperator",
                  "operator": "keyof",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "GatewayEvents",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 689,
                      "end": 702
                    },
                    "typeArguments": null,
                    "start": 689,
                    "end": 702
                  },
                  "start": 683,
                  "end": 702
                },
                "start": 570,
                "end": 703
              },
              "falseType": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GatewayPayloadStructure",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 710,
                  "end": 733
                },
                "typeArguments": {
                  "type": "TSTypeParameterInstantiation",
                  "params": [
                    {
                      "type": "TSTypeReference",
                      "typeName": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "O",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 734,
                        "end": 735
                      },
                      "typeArguments": null,
                      "start": 734,
                      "end": 735
                    },
                    {
                      "type": "TSNeverKeyword",
                      "start": 737,
                      "end": 742
                    },
                    {
                      "type": "TSConditionalType",
                      "checkType": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "O",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 744,
                          "end": 745
                        },
                        "typeArguments": null,
                        "start": 744,
                        "end": 745
                      },
                      "extendsType": {
                        "type": "TSTypeOperator",
                        "operator": "keyof",
                        "typeAnnotation": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GatewayParams",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 760,
                            "end": 773
                          },
                          "typeArguments": null,
                          "start": 760,
                          "end": 773
                        },
                        "start": 754,
                        "end": 773
                      },
                      "trueType": {
                        "type": "TSIndexedAccessType",
                        "objectType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "GatewayParams",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 776,
                            "end": 789
                          },
                          "typeArguments": null,
                          "start": 776,
                          "end": 789
                        },
                        "indexType": {
                          "type": "TSTypeReference",
                          "typeName": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "O",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 790,
                            "end": 791
                          },
                          "typeArguments": null,
                          "start": 790,
                          "end": 791
                        },
                        "start": 776,
                        "end": 792
                      },
                      "falseType": {
                        "type": "TSNeverKeyword",
                        "start": 795,
                        "end": 800
                      },
                      "start": 744,
                      "end": 800
                    }
                  ],
                  "start": 733,
                  "end": 801
                },
                "start": 710,
                "end": 801
              },
              "start": 531,
              "end": 801
            },
            "optional": false,
            "readonly": null,
            "start": 503,
            "end": 803
          },
          "indexType": {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "GatewayOpcode",
              "optional": false,
              "typeAnnotation": null,
              "start": 804,
              "end": 817
            },
            "typeArguments": null,
            "start": 804,
            "end": 817
          },
          "start": 503,
          "end": 818
        },
        "declare": false,
        "start": 481,
        "end": 818
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 474,
      "end": 818
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GatewayParams",
          "optional": false,
          "typeAnnotation": null,
          "start": 837,
          "end": 850
        },
        "typeParameters": null,
        "extends": [],
        "body": {
          "type": "TSInterfaceBody",
          "body": [
            {
              "type": "TSPropertySignature",
              "computed": true,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "MemberExpression",
                "object": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GatewayOpcode",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 858,
                  "end": 871
                },
                "property": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "HELLO",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 872,
                  "end": 877
                },
                "optional": false,
                "computed": false,
                "start": 858,
                "end": 877
              },
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
                        "name": "b",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 882,
                        "end": 883
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 885,
                            "end": 886
                          },
                          "start": 885,
                          "end": 886
                        },
                        "start": 883,
                        "end": 886
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 882,
                      "end": 886
                    }
                  ],
                  "start": 880,
                  "end": 888
                },
                "start": 878,
                "end": 888
              },
              "accessibility": null,
              "static": false,
              "start": 857,
              "end": 888
            }
          ],
          "start": 851,
          "end": 890
        },
        "declare": false,
        "start": 827,
        "end": 890
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 820,
      "end": 890
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSEnumDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GatewayOpcode",
          "optional": false,
          "typeAnnotation": null,
          "start": 904,
          "end": 917
        },
        "body": {
          "type": "TSEnumBody",
          "members": [
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "DISPATCH",
                "optional": false,
                "typeAnnotation": null,
                "start": 924,
                "end": 932
              },
              "initializer": {
                "type": "Literal",
                "value": 0,
                "raw": "0",
                "start": 935,
                "end": 936
              },
              "computed": false,
              "start": 924,
              "end": 936
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HEARTBEAT",
                "optional": false,
                "typeAnnotation": null,
                "start": 942,
                "end": 951
              },
              "initializer": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "start": 954,
                "end": 955
              },
              "computed": false,
              "start": 942,
              "end": 955
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "IDENTIFY",
                "optional": false,
                "typeAnnotation": null,
                "start": 961,
                "end": 969
              },
              "initializer": {
                "type": "Literal",
                "value": 2,
                "raw": "2",
                "start": 972,
                "end": 973
              },
              "computed": false,
              "start": 961,
              "end": 973
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "PRESENCE_UPDATE",
                "optional": false,
                "typeAnnotation": null,
                "start": 979,
                "end": 994
              },
              "initializer": {
                "type": "Literal",
                "value": 3,
                "raw": "3",
                "start": 997,
                "end": 998
              },
              "computed": false,
              "start": 979,
              "end": 998
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "VOICE_STATE_UPDATE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1004,
                "end": 1022
              },
              "initializer": {
                "type": "Literal",
                "value": 4,
                "raw": "4",
                "start": 1025,
                "end": 1026
              },
              "computed": false,
              "start": 1004,
              "end": 1026
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RESUME",
                "optional": false,
                "typeAnnotation": null,
                "start": 1032,
                "end": 1038
              },
              "initializer": {
                "type": "Literal",
                "value": 6,
                "raw": "6",
                "start": 1041,
                "end": 1042
              },
              "computed": false,
              "start": 1032,
              "end": 1042
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "RECONNECT",
                "optional": false,
                "typeAnnotation": null,
                "start": 1048,
                "end": 1057
              },
              "initializer": {
                "type": "Literal",
                "value": 7,
                "raw": "7",
                "start": 1060,
                "end": 1061
              },
              "computed": false,
              "start": 1048,
              "end": 1061
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "REQUEST_GUILD_MEMBERS",
                "optional": false,
                "typeAnnotation": null,
                "start": 1067,
                "end": 1088
              },
              "initializer": {
                "type": "Literal",
                "value": 8,
                "raw": "8",
                "start": 1091,
                "end": 1092
              },
              "computed": false,
              "start": 1067,
              "end": 1092
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "INVALID_SESSION",
                "optional": false,
                "typeAnnotation": null,
                "start": 1098,
                "end": 1113
              },
              "initializer": {
                "type": "Literal",
                "value": 9,
                "raw": "9",
                "start": 1116,
                "end": 1117
              },
              "computed": false,
              "start": 1098,
              "end": 1117
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HELLO",
                "optional": false,
                "typeAnnotation": null,
                "start": 1123,
                "end": 1128
              },
              "initializer": {
                "type": "Literal",
                "value": 10,
                "raw": "10",
                "start": 1131,
                "end": 1133
              },
              "computed": false,
              "start": 1123,
              "end": 1133
            },
            {
              "type": "TSEnumMember",
              "id": {
                "type": "Identifier",
                "decorators": [],
                "name": "HEARTBEAT_ACK",
                "optional": false,
                "typeAnnotation": null,
                "start": 1139,
                "end": 1152
              },
              "initializer": {
                "type": "Literal",
                "value": 11,
                "raw": "11",
                "start": 1155,
                "end": 1157
              },
              "computed": false,
              "start": 1139,
              "end": 1157
            }
          ],
          "start": 918,
          "end": 1160
        },
        "const": false,
        "declare": false,
        "start": 899,
        "end": 1160
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 892,
      "end": 1160
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "TSInterfaceDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "GatewayEvents",
          "optional": false,
          "typeAnnotation": null,
          "start": 1179,
          "end": 1192
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
                "name": "MESSAGE_CREATE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1199,
                "end": 1213
              },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1217,
                        "end": 1218
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 1220,
                            "end": 1221
                          },
                          "start": 1220,
                          "end": 1221
                        },
                        "start": 1218,
                        "end": 1221
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1217,
                      "end": 1221
                    }
                  ],
                  "start": 1215,
                  "end": 1223
                },
                "start": 1213,
                "end": 1223
              },
              "accessibility": null,
              "static": false,
              "start": 1199,
              "end": 1223
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "MESSAGE_UPDATE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1228,
                "end": 1242
              },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1246,
                        "end": 1247
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 1249,
                            "end": 1250
                          },
                          "start": 1249,
                          "end": 1250
                        },
                        "start": 1247,
                        "end": 1250
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1246,
                      "end": 1250
                    }
                  ],
                  "start": 1244,
                  "end": 1252
                },
                "start": 1242,
                "end": 1252
              },
              "accessibility": null,
              "static": false,
              "start": 1228,
              "end": 1252
            },
            {
              "type": "TSPropertySignature",
              "computed": false,
              "optional": false,
              "readonly": false,
              "key": {
                "type": "Identifier",
                "decorators": [],
                "name": "MESSAGE_DELETE",
                "optional": false,
                "typeAnnotation": null,
                "start": 1257,
                "end": 1271
              },
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
                        "name": "a",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1275,
                        "end": 1276
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSLiteralType",
                          "literal": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 1278,
                            "end": 1279
                          },
                          "start": 1278,
                          "end": 1279
                        },
                        "start": 1276,
                        "end": 1279
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 1275,
                      "end": 1279
                    }
                  ],
                  "start": 1273,
                  "end": 1281
                },
                "start": 1271,
                "end": 1281
              },
              "accessibility": null,
              "static": false,
              "start": 1257,
              "end": 1281
            }
          ],
          "start": 1193,
          "end": 1283
        },
        "declare": false,
        "start": 1169,
        "end": 1283
      },
      "specifiers": [],
      "source": null,
      "exportKind": "type",
      "attributes": [],
      "start": 1162,
      "end": 1283
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "assertMessage",
        "optional": false,
        "typeAnnotation": null,
        "start": 1294,
        "end": 1307
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "event",
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
                    "name": "a",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1317,
                    "end": 1318
                  },
                  "typeAnnotation": {
                    "type": "TSTypeAnnotation",
                    "typeAnnotation": {
                      "type": "TSLiteralType",
                      "literal": {
                        "type": "Literal",
                        "value": 1,
                        "raw": "1",
                        "start": 1320,
                        "end": 1321
                      },
                      "start": 1320,
                      "end": 1321
                    },
                    "start": 1318,
                    "end": 1321
                  },
                  "accessibility": null,
                  "static": false,
                  "start": 1317,
                  "end": 1321
                }
              ],
              "start": 1315,
              "end": 1323
            },
            "start": 1313,
            "end": 1323
          },
          "start": 1308,
          "end": 1323
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 1325,
        "end": 1328
      },
      "expression": false,
      "start": 1285,
      "end": 1328
    },
    {
      "type": "ExportNamedDeclaration",
      "declaration": {
        "type": "FunctionDeclaration",
        "id": {
          "type": "Identifier",
          "decorators": [],
          "name": "adaptSession",
          "optional": false,
          "typeAnnotation": null,
          "start": 1352,
          "end": 1364
        },
        "generator": false,
        "async": true,
        "declare": false,
        "typeParameters": null,
        "params": [
          {
            "type": "Identifier",
            "decorators": [],
            "name": "input",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "GatewayPayload",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 1372,
                  "end": 1386
                },
                "typeArguments": null,
                "start": 1372,
                "end": 1386
              },
              "start": 1370,
              "end": 1386
            },
            "start": 1365,
            "end": 1386
          }
        ],
        "returnType": null,
        "body": {
          "type": "BlockStatement",
          "body": [
            {
              "type": "IfStatement",
              "test": {
                "type": "BinaryExpression",
                "left": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "input",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1398,
                    "end": 1403
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "t",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 1404,
                    "end": 1405
                  },
                  "optional": false,
                  "computed": false,
                  "start": 1398,
                  "end": 1405
                },
                "operator": "===",
                "right": {
                  "type": "Literal",
                  "value": "MESSAGE_CREATE",
                  "raw": "'MESSAGE_CREATE'",
                  "start": 1410,
                  "end": 1426
                },
                "start": 1398,
                "end": 1426
              },
              "consequent": {
                "type": "BlockStatement",
                "body": [
                  {
                    "type": "ExpressionStatement",
                    "expression": {
                      "type": "CallExpression",
                      "callee": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "assertMessage",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 1438,
                        "end": 1451
                      },
                      "typeArguments": null,
                      "arguments": [
                        {
                          "type": "MemberExpression",
                          "object": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "input",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1452,
                            "end": 1457
                          },
                          "property": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "d",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1458,
                            "end": 1459
                          },
                          "optional": false,
                          "computed": false,
                          "start": 1452,
                          "end": 1459
                        }
                      ],
                      "optional": false,
                      "start": 1438,
                      "end": 1460
                    },
                    "directive": null,
                    "start": 1438,
                    "end": 1460
                  }
                ],
                "start": 1428,
                "end": 1466
              },
              "alternate": null,
              "start": 1394,
              "end": 1466
            }
          ],
          "start": 1388,
          "end": 1468
        },
        "expression": false,
        "start": 1337,
        "end": 1468
      },
      "specifiers": [],
      "source": null,
      "exportKind": "value",
      "attributes": [],
      "start": 1330,
      "end": 1468
    }
  ],
  "sourceType": "module",
  "hashbang": null,
  "start": 0,
  "end": 1468
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Identifier",
    "value": "type",
    "start": 0,
    "end": 4
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 5,
    "end": 9
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Identifier",
    "value": "kind",
    "start": 14,
    "end": 18
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 18,
    "end": 19
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 20,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 25,
    "end": 26
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 26,
    "end": 27
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 28,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 35,
    "end": 36
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 37,
    "end": 38
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 39,
    "end": 40
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 41,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 45,
    "end": 46
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 47,
    "end": 50
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 51,
    "end": 52
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 55,
    "end": 56
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 57,
    "end": 61
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 61,
    "end": 62
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 63,
    "end": 68
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 69,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 70,
    "end": 71
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 73,
    "end": 81
  },
  {
    "type": "Identifier",
    "value": "f1",
    "start": 82,
    "end": 84
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 85,
    "end": 88
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 88,
    "end": 89
  },
  {
    "type": "Identifier",
    "value": "Foo1",
    "start": 90,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 96,
    "end": 97
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 102,
    "end": 104
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 105,
    "end": 106
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 106,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 109,
    "end": 110
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 110,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 115,
    "end": 118
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 119,
    "end": 122
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 122,
    "end": 123
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 124,
    "end": 125
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 134,
    "end": 137
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 137,
    "end": 138
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 138,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "type",
    "start": 150,
    "end": 154
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 155,
    "end": 159
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 160,
    "end": 161
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 162,
    "end": 163
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 164,
    "end": 168
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 168,
    "end": 169
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 169,
    "end": 170
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 171,
    "end": 174
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 174,
    "end": 175
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 176,
    "end": 177
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 177,
    "end": 178
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 179,
    "end": 185
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 188,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 192,
    "end": 196
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 196,
    "end": 197
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 197,
    "end": 198
  },
  {
    "type": "String",
    "value": "'b'",
    "start": 199,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 203,
    "end": 204
  },
  {
    "type": "Punctuator",
    "value": "|",
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
    "type": "Identifier",
    "value": "kind",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "?",
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
    "value": "never",
    "start": 216,
    "end": 221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 223,
    "end": 224
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 226,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "f2",
    "start": 235,
    "end": 237
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 237,
    "end": 238
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 238,
    "end": 241
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "Foo2",
    "start": 243,
    "end": 247
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 249,
    "end": 250
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 255,
    "end": 257
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 258,
    "end": 259
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 259,
    "end": 262
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 262,
    "end": 263
  },
  {
    "type": "Identifier",
    "value": "kind",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 268,
    "end": 271
  },
  {
    "type": "String",
    "value": "'a'",
    "start": 272,
    "end": 275
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 275,
    "end": 276
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 277,
    "end": 278
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 300,
    "end": 301
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 325,
    "end": 331
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 332,
    "end": 341
  },
  {
    "type": "Identifier",
    "value": "GatewayPayloadStructure",
    "start": 342,
    "end": 365
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 365,
    "end": 366
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 366,
    "end": 367
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 368,
    "end": 375
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 376,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 389,
    "end": 390
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 391,
    "end": 392
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 393,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 401,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "GatewayEvents",
    "start": 407,
    "end": 420
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 420,
    "end": 421
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 422,
    "end": 423
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 423,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 425,
    "end": 426
  },
  {
    "type": "Identifier",
    "value": "op",
    "start": 431,
    "end": 433
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 433,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 435,
    "end": 436
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 442,
    "end": 443
  },
  {
    "type": "Identifier",
    "value": "D",
    "start": 444,
    "end": 445
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 450,
    "end": 451
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 451,
    "end": 452
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 452,
    "end": 453
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 454,
    "end": 455
  },
  {
    "type": "Identifier",
    "value": "s",
    "start": 460,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 462,
    "end": 463
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 471,
    "end": 472
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 474,
    "end": 480
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 481,
    "end": 485
  },
  {
    "type": "Identifier",
    "value": "GatewayPayload",
    "start": 486,
    "end": 500
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 501,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 503,
    "end": 504
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 509,
    "end": 510
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 510,
    "end": 511
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 512,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 515,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 528,
    "end": 529
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 531,
    "end": 532
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 533,
    "end": 540
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 541,
    "end": 554
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 554,
    "end": 555
  },
  {
    "type": "Identifier",
    "value": "DISPATCH",
    "start": 555,
    "end": 563
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 568,
    "end": 569
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 570,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 580,
    "end": 581
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 581,
    "end": 582
  },
  {
    "type": "Keyword",
    "value": "in",
    "start": 583,
    "end": 585
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 586,
    "end": 591
  },
  {
    "type": "Identifier",
    "value": "GatewayEvents",
    "start": 592,
    "end": 605
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "type": "Identifier",
    "value": "GatewayPayloadStructure",
    "start": 608,
    "end": 631
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 631,
    "end": 632
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 632,
    "end": 645
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 645,
    "end": 646
  },
  {
    "type": "Identifier",
    "value": "DISPATCH",
    "start": 646,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 654,
    "end": 655
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "GatewayEvents",
    "start": 659,
    "end": 672
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 672,
    "end": 673
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 673,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 674,
    "end": 675
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 675,
    "end": 676
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 681,
    "end": 682
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 682,
    "end": 683
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 683,
    "end": 688
  },
  {
    "type": "Identifier",
    "value": "GatewayEvents",
    "start": 689,
    "end": 702
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 702,
    "end": 703
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 708,
    "end": 709
  },
  {
    "type": "Identifier",
    "value": "GatewayPayloadStructure",
    "start": 710,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 733,
    "end": 734
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 734,
    "end": 735
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 735,
    "end": 736
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 737,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 746,
    "end": 753
  },
  {
    "type": "Identifier",
    "value": "keyof",
    "start": 754,
    "end": 759
  },
  {
    "type": "Identifier",
    "value": "GatewayParams",
    "start": 760,
    "end": 773
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 774,
    "end": 775
  },
  {
    "type": "Identifier",
    "value": "GatewayParams",
    "start": 776,
    "end": 789
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 789,
    "end": 790
  },
  {
    "type": "Identifier",
    "value": "O",
    "start": 790,
    "end": 791
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 791,
    "end": 792
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 793,
    "end": 794
  },
  {
    "type": "Identifier",
    "value": "never",
    "start": 795,
    "end": 800
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "type": "Punctuator",
    "value": "[",
    "start": 803,
    "end": 804
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 804,
    "end": 817
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 817,
    "end": 818
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 820,
    "end": 826
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 827,
    "end": 836
  },
  {
    "type": "Identifier",
    "value": "GatewayParams",
    "start": 837,
    "end": 850
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 851,
    "end": 852
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 857,
    "end": 858
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 858,
    "end": 871
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 871,
    "end": 872
  },
  {
    "type": "Identifier",
    "value": "HELLO",
    "start": 872,
    "end": 877
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 877,
    "end": 878
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 878,
    "end": 879
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 880,
    "end": 881
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 882,
    "end": 883
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 883,
    "end": 884
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 885,
    "end": 886
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 887,
    "end": 888
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 889,
    "end": 890
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 892,
    "end": 898
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 899,
    "end": 903
  },
  {
    "type": "Identifier",
    "value": "GatewayOpcode",
    "start": 904,
    "end": 917
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 918,
    "end": 919
  },
  {
    "type": "Identifier",
    "value": "DISPATCH",
    "start": 924,
    "end": 932
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 933,
    "end": 934
  },
  {
    "type": "Numeric",
    "value": "0",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 936,
    "end": 937
  },
  {
    "type": "Identifier",
    "value": "HEARTBEAT",
    "start": 942,
    "end": 951
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 952,
    "end": 953
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 954,
    "end": 955
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 955,
    "end": 956
  },
  {
    "type": "Identifier",
    "value": "IDENTIFY",
    "start": 961,
    "end": 969
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 970,
    "end": 971
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 973,
    "end": 974
  },
  {
    "type": "Identifier",
    "value": "PRESENCE_UPDATE",
    "start": 979,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 995,
    "end": 996
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 997,
    "end": 998
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 998,
    "end": 999
  },
  {
    "type": "Identifier",
    "value": "VOICE_STATE_UPDATE",
    "start": 1004,
    "end": 1022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Numeric",
    "value": "4",
    "start": 1025,
    "end": 1026
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Identifier",
    "value": "RESUME",
    "start": 1032,
    "end": 1038
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1039,
    "end": 1040
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1041,
    "end": 1042
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1042,
    "end": 1043
  },
  {
    "type": "Identifier",
    "value": "RECONNECT",
    "start": 1048,
    "end": 1057
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1058,
    "end": 1059
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "REQUEST_GUILD_MEMBERS",
    "start": 1067,
    "end": 1088
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1089,
    "end": 1090
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1092,
    "end": 1093
  },
  {
    "type": "Identifier",
    "value": "INVALID_SESSION",
    "start": 1098,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1114,
    "end": 1115
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1116,
    "end": 1117
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1117,
    "end": 1118
  },
  {
    "type": "Identifier",
    "value": "HELLO",
    "start": 1123,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 1131,
    "end": 1133
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1133,
    "end": 1134
  },
  {
    "type": "Identifier",
    "value": "HEARTBEAT_ACK",
    "start": 1139,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1153,
    "end": 1154
  },
  {
    "type": "Numeric",
    "value": "11",
    "start": 1155,
    "end": 1157
  },
  {
    "type": "Punctuator",
    "value": ",",
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
    "type": "Keyword",
    "value": "export",
    "start": 1162,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1169,
    "end": 1178
  },
  {
    "type": "Identifier",
    "value": "GatewayEvents",
    "start": 1179,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1193,
    "end": 1194
  },
  {
    "type": "Identifier",
    "value": "MESSAGE_CREATE",
    "start": 1199,
    "end": 1213
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1215,
    "end": 1216
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1217,
    "end": 1218
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1218,
    "end": 1219
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1220,
    "end": 1221
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1222,
    "end": 1223
  },
  {
    "type": "Identifier",
    "value": "MESSAGE_UPDATE",
    "start": 1228,
    "end": 1242
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1244,
    "end": 1245
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1246,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 1249,
    "end": 1250
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1251,
    "end": 1252
  },
  {
    "type": "Identifier",
    "value": "MESSAGE_DELETE",
    "start": 1257,
    "end": 1271
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1271,
    "end": 1272
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1273,
    "end": 1274
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1276,
    "end": 1277
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 1278,
    "end": 1279
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1280,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1282,
    "end": 1283
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1285,
    "end": 1293
  },
  {
    "type": "Identifier",
    "value": "assertMessage",
    "start": 1294,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "Identifier",
    "value": "event",
    "start": 1308,
    "end": 1313
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1313,
    "end": 1314
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1315,
    "end": 1316
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 1317,
    "end": 1318
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1318,
    "end": 1319
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 1320,
    "end": 1321
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1323,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1327,
    "end": 1328
  },
  {
    "type": "Keyword",
    "value": "export",
    "start": 1330,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "async",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1343,
    "end": 1351
  },
  {
    "type": "Identifier",
    "value": "adaptSession",
    "start": 1352,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Identifier",
    "value": "GatewayPayload",
    "start": 1372,
    "end": 1386
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1386,
    "end": 1387
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1388,
    "end": 1389
  },
  {
    "type": "Keyword",
    "value": "if",
    "start": 1394,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1397,
    "end": 1398
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1398,
    "end": 1403
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": "===",
    "start": 1406,
    "end": 1409
  },
  {
    "type": "String",
    "value": "'MESSAGE_CREATE'",
    "start": 1410,
    "end": 1426
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1426,
    "end": 1427
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1428,
    "end": 1429
  },
  {
    "type": "Identifier",
    "value": "assertMessage",
    "start": 1438,
    "end": 1451
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "input",
    "start": 1452,
    "end": 1457
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1457,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "d",
    "start": 1458,
    "end": 1459
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1459,
    "end": 1460
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1465,
    "end": 1466
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1467,
    "end": 1468
  }
]
```
