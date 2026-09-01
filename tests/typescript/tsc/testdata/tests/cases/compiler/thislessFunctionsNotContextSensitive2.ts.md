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
        "name": "Options",
        "optional": false,
        "typeAnnotation": null,
        "start": 10,
        "end": 17
      },
      "typeParameters": {
        "type": "TSTypeParameterDeclaration",
        "params": [
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 18,
              "end": 25
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 18,
            "end": 25
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 27,
              "end": 31
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 27,
            "end": 31
          }
        ],
        "start": 17,
        "end": 32
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
              "name": "context",
              "optional": false,
              "typeAnnotation": null,
              "start": 37,
              "end": 44
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Context",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 46,
                  "end": 53
                },
                "typeArguments": null,
                "start": 46,
                "end": 53
              },
              "start": 44,
              "end": 53
            },
            "accessibility": null,
            "static": false,
            "start": 37,
            "end": 54
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "produce",
              "optional": false,
              "typeAnnotation": null,
              "start": 57,
              "end": 64
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 71,
                      "end": 78
                    },
                    "typeArguments": null,
                    "start": 71,
                    "end": 78
                  },
                  "start": 69,
                  "end": 78
                },
                "start": 65,
                "end": 78
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Data",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 81,
                  "end": 85
                },
                "typeArguments": null,
                "start": 81,
                "end": 85
              },
              "start": 79,
              "end": 85
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 57,
            "end": 86
          },
          {
            "type": "TSMethodSignature",
            "key": {
              "type": "Identifier",
              "decorators": [],
              "name": "consume",
              "optional": false,
              "typeAnnotation": null,
              "start": 89,
              "end": 96
            },
            "computed": false,
            "optional": false,
            "kind": "method",
            "typeParameters": null,
            "params": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "this",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 103,
                      "end": 110
                    },
                    "typeArguments": null,
                    "start": 103,
                    "end": 110
                  },
                  "start": 101,
                  "end": 110
                },
                "start": 97,
                "end": 110
              },
              {
                "type": "Identifier",
                "decorators": [],
                "name": "data",
                "optional": false,
                "typeAnnotation": {
                  "type": "TSTypeAnnotation",
                  "typeAnnotation": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 118,
                      "end": 122
                    },
                    "typeArguments": null,
                    "start": 118,
                    "end": 122
                  },
                  "start": 116,
                  "end": 122
                },
                "start": 112,
                "end": 122
              }
            ],
            "returnType": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSVoidKeyword",
                "start": 125,
                "end": 129
              },
              "start": 123,
              "end": 129
            },
            "accessibility": null,
            "readonly": false,
            "static": false,
            "start": 89,
            "end": 130
          }
        ],
        "start": 33,
        "end": 132
      },
      "declare": false,
      "start": 0,
      "end": 132
    },
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "defineOptions",
        "optional": false,
        "typeAnnotation": null,
        "start": 151,
        "end": 164
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
              "name": "Context",
              "optional": false,
              "typeAnnotation": null,
              "start": 165,
              "end": 172
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 165,
            "end": 172
          },
          {
            "type": "TSTypeParameter",
            "name": {
              "type": "Identifier",
              "decorators": [],
              "name": "Data",
              "optional": false,
              "typeAnnotation": null,
              "start": 174,
              "end": 178
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 174,
            "end": 178
          }
        ],
        "start": 164,
        "end": 179
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "options",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Options",
                "optional": false,
                "typeAnnotation": null,
                "start": 192,
                "end": 199
              },
              "typeArguments": {
                "type": "TSTypeParameterInstantiation",
                "params": [
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 200,
                      "end": 207
                    },
                    "typeArguments": null,
                    "start": 200,
                    "end": 207
                  },
                  {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Data",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 209,
                      "end": 213
                    },
                    "typeArguments": null,
                    "start": 209,
                    "end": 213
                  }
                ],
                "start": 199,
                "end": 214
              },
              "start": 192,
              "end": 214
            },
            "start": 190,
            "end": 214
          },
          "start": 183,
          "end": 214
        }
      ],
      "returnType": {
        "type": "TSTypeAnnotation",
        "typeAnnotation": {
          "type": "TSTupleType",
          "elementTypes": [
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Context",
                "optional": false,
                "typeAnnotation": null,
                "start": 220,
                "end": 227
              },
              "typeArguments": null,
              "start": 220,
              "end": 227
            },
            {
              "type": "TSTypeReference",
              "typeName": {
                "type": "Identifier",
                "decorators": [],
                "name": "Data",
                "optional": false,
                "typeAnnotation": null,
                "start": 229,
                "end": 233
              },
              "typeArguments": null,
              "start": 229,
              "end": 233
            }
          ],
          "start": 219,
          "end": 234
        },
        "start": 217,
        "end": 234
      },
      "body": null,
      "expression": false,
      "start": 134,
      "end": 235
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
            "name": "result1",
            "optional": false,
            "typeAnnotation": null,
            "start": 243,
            "end": 250
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 253,
              "end": 266
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 271,
                      "end": 278
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 282,
                            "end": 285
                          },
                          "value": {
                            "type": "Literal",
                            "value": "A",
                            "raw": "\"A\"",
                            "start": 287,
                            "end": 290
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 282,
                          "end": 290
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
                            "start": 292,
                            "end": 297
                          },
                          "value": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1",
                            "start": 299,
                            "end": 300
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 292,
                          "end": 300
                        }
                      ],
                      "start": 280,
                      "end": 302
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 271,
                    "end": 302
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 306,
                      "end": 313
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 314,
                          "end": 319
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 321,
                        "end": 323
                      },
                      "expression": false,
                      "start": 313,
                      "end": 323
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 306,
                    "end": 323
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 327,
                      "end": 334
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
                              "value": 42,
                              "raw": "42",
                              "start": 350,
                              "end": 352
                            },
                            "start": 343,
                            "end": 353
                          }
                        ],
                        "start": 337,
                        "end": 357
                      },
                      "expression": false,
                      "start": 334,
                      "end": 357
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 327,
                    "end": 357
                  }
                ],
                "start": 267,
                "end": 360
              }
            ],
            "optional": false,
            "start": 253,
            "end": 361
          },
          "definite": false,
          "start": 243,
          "end": 361
        }
      ],
      "declare": false,
      "start": 237,
      "end": 362
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
            "name": "result2",
            "optional": false,
            "typeAnnotation": null,
            "start": 370,
            "end": 377
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 380,
              "end": 393
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 398,
                      "end": 405
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 409,
                            "end": 412
                          },
                          "value": {
                            "type": "Literal",
                            "value": "B",
                            "raw": "\"B\"",
                            "start": 414,
                            "end": 417
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 409,
                          "end": 417
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
                            "start": 419,
                            "end": 424
                          },
                          "value": {
                            "type": "Literal",
                            "value": 2,
                            "raw": "2",
                            "start": 426,
                            "end": 427
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 419,
                          "end": 427
                        }
                      ],
                      "start": 407,
                      "end": 429
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 398,
                    "end": 429
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 433,
                      "end": 440
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 441,
                          "end": 446
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 448,
                        "end": 450
                      },
                      "expression": false,
                      "start": 440,
                      "end": 450
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 433,
                    "end": 450
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 454,
                      "end": 461
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
                                "start": 477,
                                "end": 481
                              },
                              "property": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "value",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 482,
                                "end": 487
                              },
                              "optional": false,
                              "computed": false,
                              "start": 477,
                              "end": 487
                            },
                            "start": 470,
                            "end": 488
                          }
                        ],
                        "start": 464,
                        "end": 492
                      },
                      "expression": false,
                      "start": 461,
                      "end": 492
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 454,
                    "end": 492
                  }
                ],
                "start": 394,
                "end": 495
              }
            ],
            "optional": false,
            "start": 380,
            "end": 496
          },
          "definite": false,
          "start": 370,
          "end": 496
        }
      ],
      "declare": false,
      "start": 364,
      "end": 497
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
            "name": "result3",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 512
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 515,
              "end": 528
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 533,
                      "end": 540
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 544,
                            "end": 547
                          },
                          "value": {
                            "type": "Literal",
                            "value": "C",
                            "raw": "\"C\"",
                            "start": 549,
                            "end": 552
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 544,
                          "end": 552
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
                            "start": 554,
                            "end": 559
                          },
                          "value": {
                            "type": "Literal",
                            "value": 3,
                            "raw": "3",
                            "start": 561,
                            "end": 562
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 554,
                          "end": 562
                        }
                      ],
                      "start": 542,
                      "end": 564
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 533,
                    "end": 564
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 568,
                      "end": 575
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 576,
                          "end": 581
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 583,
                        "end": 585
                      },
                      "expression": false,
                      "start": 575,
                      "end": 585
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 568,
                    "end": 585
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 589,
                      "end": 596
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
                        "value": 123,
                        "raw": "123",
                        "start": 604,
                        "end": 607
                      },
                      "id": null,
                      "generator": false,
                      "start": 598,
                      "end": 607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 589,
                    "end": 607
                  }
                ],
                "start": 529,
                "end": 610
              }
            ],
            "optional": false,
            "start": 515,
            "end": 611
          },
          "definite": false,
          "start": 505,
          "end": 611
        }
      ],
      "declare": false,
      "start": 499,
      "end": 612
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
            "name": "result4",
            "optional": false,
            "typeAnnotation": null,
            "start": 620,
            "end": 627
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 630,
              "end": 643
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 648,
                      "end": 655
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 659,
                            "end": 662
                          },
                          "value": {
                            "type": "Literal",
                            "value": "D",
                            "raw": "\"D\"",
                            "start": 664,
                            "end": 667
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 659,
                          "end": 667
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
                            "start": 669,
                            "end": 674
                          },
                          "value": {
                            "type": "Literal",
                            "value": 4,
                            "raw": "4",
                            "start": 676,
                            "end": 677
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 669,
                          "end": 677
                        }
                      ],
                      "start": 657,
                      "end": 679
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 648,
                    "end": 679
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 683,
                      "end": 690
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 691,
                          "end": 696
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 698,
                        "end": 700
                      },
                      "expression": false,
                      "start": 690,
                      "end": 700
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 683,
                    "end": 700
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 704,
                      "end": 711
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
                            "type": "ClassDeclaration",
                            "decorators": [],
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Local",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 726,
                              "end": 731
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
                                    "name": "value",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 740,
                                    "end": 745
                                  },
                                  "typeAnnotation": null,
                                  "value": {
                                    "type": "Literal",
                                    "value": "foo",
                                    "raw": "'foo'",
                                    "start": 748,
                                    "end": 753
                                  },
                                  "computed": false,
                                  "static": false,
                                  "declare": false,
                                  "override": false,
                                  "optional": false,
                                  "definite": false,
                                  "readonly": false,
                                  "accessibility": null,
                                  "start": 740,
                                  "end": 754
                                },
                                {
                                  "type": "MethodDefinition",
                                  "decorators": [],
                                  "key": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "get",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 761,
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
                                              "type": "ThisExpression",
                                              "start": 784,
                                              "end": 788
                                            },
                                            "property": {
                                              "type": "Identifier",
                                              "decorators": [],
                                              "name": "value",
                                              "optional": false,
                                              "typeAnnotation": null,
                                              "start": 789,
                                              "end": 794
                                            },
                                            "optional": false,
                                            "computed": false,
                                            "start": 784,
                                            "end": 794
                                          },
                                          "start": 777,
                                          "end": 795
                                        }
                                      ],
                                      "start": 767,
                                      "end": 803
                                    },
                                    "expression": false,
                                    "start": 764,
                                    "end": 803
                                  },
                                  "kind": "method",
                                  "computed": false,
                                  "static": false,
                                  "override": false,
                                  "optional": false,
                                  "accessibility": null,
                                  "start": 761,
                                  "end": 803
                                }
                              ],
                              "start": 732,
                              "end": 809
                            },
                            "abstract": false,
                            "declare": false,
                            "start": 720,
                            "end": 809
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "NewExpression",
                                  "callee": {
                                    "type": "Identifier",
                                    "decorators": [],
                                    "name": "Local",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 825,
                                    "end": 830
                                  },
                                  "typeArguments": null,
                                  "arguments": [],
                                  "start": 821,
                                  "end": 832
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 833,
                                  "end": 836
                                },
                                "optional": false,
                                "computed": false,
                                "start": 821,
                                "end": 836
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 821,
                              "end": 838
                            },
                            "start": 814,
                            "end": 839
                          },
                          {
                            "type": "EmptyStatement",
                            "start": 839,
                            "end": 840
                          }
                        ],
                        "start": 714,
                        "end": 844
                      },
                      "expression": false,
                      "start": 711,
                      "end": 844
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 704,
                    "end": 844
                  }
                ],
                "start": 644,
                "end": 847
              }
            ],
            "optional": false,
            "start": 630,
            "end": 848
          },
          "definite": false,
          "start": 620,
          "end": 848
        }
      ],
      "declare": false,
      "start": 614,
      "end": 849
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
            "name": "result5",
            "optional": false,
            "typeAnnotation": null,
            "start": 857,
            "end": 864
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 867,
              "end": 880
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 885,
                      "end": 892
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 896,
                            "end": 899
                          },
                          "value": {
                            "type": "Literal",
                            "value": "E",
                            "raw": "\"E\"",
                            "start": 901,
                            "end": 904
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 896,
                          "end": 904
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
                            "start": 906,
                            "end": 911
                          },
                          "value": {
                            "type": "Literal",
                            "value": 5,
                            "raw": "5",
                            "start": 913,
                            "end": 914
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 906,
                          "end": 914
                        }
                      ],
                      "start": 894,
                      "end": 916
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 885,
                    "end": 916
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 920,
                      "end": 927
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 928,
                          "end": 933
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 935,
                        "end": 937
                      },
                      "expression": false,
                      "start": 927,
                      "end": 937
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 920,
                    "end": 937
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 941,
                      "end": 948
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
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 966,
                              "end": 971
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
                                    "type": "ThisExpression",
                                    "start": 989,
                                    "end": 993
                                  },
                                  "start": 982,
                                  "end": 994
                                }
                              ],
                              "start": 974,
                              "end": 1000
                            },
                            "expression": false,
                            "start": 957,
                            "end": 1000
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1012,
                                "end": 1017
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1012,
                              "end": 1019
                            },
                            "start": 1005,
                            "end": 1020
                          }
                        ],
                        "start": 951,
                        "end": 1024
                      },
                      "expression": false,
                      "start": 948,
                      "end": 1024
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 941,
                    "end": 1024
                  }
                ],
                "start": 881,
                "end": 1027
              }
            ],
            "optional": false,
            "start": 867,
            "end": 1028
          },
          "definite": false,
          "start": 857,
          "end": 1028
        }
      ],
      "declare": false,
      "start": 851,
      "end": 1029
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
            "name": "result6",
            "optional": false,
            "typeAnnotation": null,
            "start": 1037,
            "end": 1044
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1047,
              "end": 1060
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1065,
                      "end": 1072
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1076,
                            "end": 1079
                          },
                          "value": {
                            "type": "Literal",
                            "value": "F",
                            "raw": "\"F\"",
                            "start": 1081,
                            "end": 1084
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1076,
                          "end": 1084
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
                            "start": 1086,
                            "end": 1091
                          },
                          "value": {
                            "type": "Literal",
                            "value": 6,
                            "raw": "6",
                            "start": 1093,
                            "end": 1094
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1086,
                          "end": 1094
                        }
                      ],
                      "start": 1074,
                      "end": 1096
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1065,
                    "end": 1096
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1100,
                      "end": 1107
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1108,
                          "end": 1113
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1115,
                        "end": 1117
                      },
                      "expression": false,
                      "start": 1107,
                      "end": 1117
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1100,
                    "end": 1117
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1121,
                      "end": 1128
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
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "arrow",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1143,
                                  "end": 1148
                                },
                                "init": {
                                  "type": "ArrowFunctionExpression",
                                  "expression": true,
                                  "async": false,
                                  "typeParameters": null,
                                  "params": [],
                                  "returnType": null,
                                  "body": {
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "ThisExpression",
                                      "start": 1157,
                                      "end": 1161
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1162,
                                      "end": 1167
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1157,
                                    "end": 1167
                                  },
                                  "id": null,
                                  "generator": false,
                                  "start": 1151,
                                  "end": 1167
                                },
                                "definite": false,
                                "start": 1143,
                                "end": 1167
                              }
                            ],
                            "declare": false,
                            "start": 1137,
                            "end": 1168
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "arrow",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1180,
                                "end": 1185
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1180,
                              "end": 1187
                            },
                            "start": 1173,
                            "end": 1188
                          }
                        ],
                        "start": 1131,
                        "end": 1192
                      },
                      "expression": false,
                      "start": 1128,
                      "end": 1192
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1121,
                    "end": 1192
                  }
                ],
                "start": 1061,
                "end": 1195
              }
            ],
            "optional": false,
            "start": 1047,
            "end": 1196
          },
          "definite": false,
          "start": 1037,
          "end": 1196
        }
      ],
      "declare": false,
      "start": 1031,
      "end": 1197
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
            "name": "result7",
            "optional": false,
            "typeAnnotation": null,
            "start": 1205,
            "end": 1212
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1215,
              "end": 1228
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1233,
                      "end": 1240
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1244,
                            "end": 1247
                          },
                          "value": {
                            "type": "Literal",
                            "value": "G",
                            "raw": "\"G\"",
                            "start": 1249,
                            "end": 1252
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1244,
                          "end": 1252
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
                            "start": 1254,
                            "end": 1259
                          },
                          "value": {
                            "type": "Literal",
                            "value": 7,
                            "raw": "7",
                            "start": 1261,
                            "end": 1262
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1254,
                          "end": 1262
                        }
                      ],
                      "start": 1242,
                      "end": 1264
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1233,
                    "end": 1264
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1268,
                      "end": 1275
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1276,
                          "end": 1281
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1283,
                        "end": 1285
                      },
                      "expression": false,
                      "start": 1275,
                      "end": 1285
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1268,
                    "end": 1285
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1289,
                      "end": 1296
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
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "self",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1311,
                                  "end": 1315
                                },
                                "init": {
                                  "type": "ThisExpression",
                                  "start": 1318,
                                  "end": 1322
                                },
                                "definite": false,
                                "start": 1311,
                                "end": 1322
                              }
                            ],
                            "declare": false,
                            "start": 1305,
                            "end": 1323
                          },
                          {
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "inner",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1337,
                              "end": 1342
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
                                    "type": "MemberExpression",
                                    "object": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "self",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1360,
                                      "end": 1364
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "value",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 1365,
                                      "end": 1370
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 1360,
                                    "end": 1370
                                  },
                                  "start": 1353,
                                  "end": 1371
                                }
                              ],
                              "start": 1345,
                              "end": 1377
                            },
                            "expression": false,
                            "start": 1328,
                            "end": 1377
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "inner",
                                "optional": false,
                                "typeAnnotation": null,
                                "start": 1389,
                                "end": 1394
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1389,
                              "end": 1396
                            },
                            "start": 1382,
                            "end": 1397
                          }
                        ],
                        "start": 1299,
                        "end": 1401
                      },
                      "expression": false,
                      "start": 1296,
                      "end": 1401
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1289,
                    "end": 1401
                  }
                ],
                "start": 1229,
                "end": 1404
              }
            ],
            "optional": false,
            "start": 1215,
            "end": 1405
          },
          "definite": false,
          "start": 1205,
          "end": 1405
        }
      ],
      "declare": false,
      "start": 1199,
      "end": 1406
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
            "name": "result8",
            "optional": false,
            "typeAnnotation": null,
            "start": 1414,
            "end": 1421
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1424,
              "end": 1437
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1442,
                      "end": 1449
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1453,
                            "end": 1456
                          },
                          "value": {
                            "type": "Literal",
                            "value": "H",
                            "raw": "\"H\"",
                            "start": 1458,
                            "end": 1461
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1453,
                          "end": 1461
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
                            "start": 1463,
                            "end": 1468
                          },
                          "value": {
                            "type": "Literal",
                            "value": 8,
                            "raw": "8",
                            "start": 1470,
                            "end": 1471
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1463,
                          "end": 1471
                        }
                      ],
                      "start": 1451,
                      "end": 1473
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1442,
                    "end": 1473
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1477,
                      "end": 1484
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1485,
                          "end": 1490
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1492,
                        "end": 1494
                      },
                      "expression": false,
                      "start": 1484,
                      "end": 1494
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1477,
                    "end": 1494
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1498,
                      "end": 1505
                    },
                    "value": {
                      "type": "ArrowFunctionExpression",
                      "expression": false,
                      "async": false,
                      "typeParameters": null,
                      "params": [],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "ThisExpression",
                              "start": 1526,
                              "end": 1530
                            },
                            "start": 1519,
                            "end": 1531
                          }
                        ],
                        "start": 1513,
                        "end": 1535
                      },
                      "id": null,
                      "generator": false,
                      "start": 1507,
                      "end": 1535
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1498,
                    "end": 1535
                  }
                ],
                "start": 1438,
                "end": 1538
              }
            ],
            "optional": false,
            "start": 1424,
            "end": 1539
          },
          "definite": false,
          "start": 1414,
          "end": 1539
        }
      ],
      "declare": false,
      "start": 1408,
      "end": 1540
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
            "name": "result9",
            "optional": false,
            "typeAnnotation": null,
            "start": 1548,
            "end": 1555
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1558,
              "end": 1571
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1576,
                      "end": 1583
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1587,
                            "end": 1590
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 1592,
                            "end": 1595
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1587,
                          "end": 1595
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
                            "start": 1597,
                            "end": 1602
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1604,
                            "end": 1605
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1597,
                          "end": 1605
                        }
                      ],
                      "start": 1585,
                      "end": 1607
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1576,
                    "end": 1607
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1611,
                      "end": 1618
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1619,
                          "end": 1624
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1626,
                        "end": 1628
                      },
                      "expression": false,
                      "start": 1618,
                      "end": 1628
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1611,
                    "end": 1628
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1632,
                      "end": 1639
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
                            "type": "VariableDeclaration",
                            "kind": "const",
                            "declarations": [
                              {
                                "type": "VariableDeclarator",
                                "id": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1654,
                                  "end": 1657
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
                                        "name": "value",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1668,
                                        "end": 1673
                                      },
                                      "value": {
                                        "type": "Literal",
                                        "value": "foo",
                                        "raw": "'foo'",
                                        "start": 1675,
                                        "end": 1680
                                      },
                                      "method": false,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1668,
                                      "end": 1680
                                    },
                                    {
                                      "type": "Property",
                                      "kind": "init",
                                      "key": {
                                        "type": "Identifier",
                                        "decorators": [],
                                        "name": "get",
                                        "optional": false,
                                        "typeAnnotation": null,
                                        "start": 1688,
                                        "end": 1691
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
                                                  "start": 1711,
                                                  "end": 1715
                                                },
                                                "property": {
                                                  "type": "Identifier",
                                                  "decorators": [],
                                                  "name": "value",
                                                  "optional": false,
                                                  "typeAnnotation": null,
                                                  "start": 1716,
                                                  "end": 1721
                                                },
                                                "optional": false,
                                                "computed": false,
                                                "start": 1711,
                                                "end": 1721
                                              },
                                              "start": 1704,
                                              "end": 1722
                                            }
                                          ],
                                          "start": 1694,
                                          "end": 1730
                                        },
                                        "expression": false,
                                        "start": 1691,
                                        "end": 1730
                                      },
                                      "method": true,
                                      "shorthand": false,
                                      "computed": false,
                                      "optional": false,
                                      "start": 1688,
                                      "end": 1730
                                    }
                                  ],
                                  "start": 1660,
                                  "end": 1737
                                },
                                "definite": false,
                                "start": 1654,
                                "end": 1737
                              }
                            ],
                            "declare": false,
                            "start": 1648,
                            "end": 1738
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "CallExpression",
                              "callee": {
                                "type": "MemberExpression",
                                "object": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "obj",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1750,
                                  "end": 1753
                                },
                                "property": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "get",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1754,
                                  "end": 1757
                                },
                                "optional": false,
                                "computed": false,
                                "start": 1750,
                                "end": 1757
                              },
                              "typeArguments": null,
                              "arguments": [],
                              "optional": false,
                              "start": 1750,
                              "end": 1759
                            },
                            "start": 1743,
                            "end": 1760
                          }
                        ],
                        "start": 1642,
                        "end": 1764
                      },
                      "expression": false,
                      "start": 1639,
                      "end": 1764
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1632,
                    "end": 1764
                  }
                ],
                "start": 1572,
                "end": 1767
              }
            ],
            "optional": false,
            "start": 1558,
            "end": 1768
          },
          "definite": false,
          "start": 1548,
          "end": 1768
        }
      ],
      "declare": false,
      "start": 1542,
      "end": 1769
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
            "name": "result10",
            "optional": false,
            "typeAnnotation": null,
            "start": 1777,
            "end": 1785
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1788,
              "end": 1801
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1806,
                      "end": 1813
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1817,
                            "end": 1820
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 1822,
                            "end": 1825
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1817,
                          "end": 1825
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
                            "start": 1827,
                            "end": 1832
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 1834,
                            "end": 1835
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1827,
                          "end": 1835
                        }
                      ],
                      "start": 1815,
                      "end": 1837
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1806,
                    "end": 1837
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1841,
                      "end": 1848
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 1849,
                          "end": 1854
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 1856,
                        "end": 1858
                      },
                      "expression": false,
                      "start": 1848,
                      "end": 1858
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1841,
                    "end": 1858
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1862,
                      "end": 1869
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
                            "type": "TSInterfaceDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "Foo",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 1888,
                              "end": 1891
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
                                    "name": "prop",
                                    "optional": false,
                                    "typeAnnotation": null,
                                    "start": 1902,
                                    "end": 1906
                                  },
                                  "typeAnnotation": {
                                    "type": "TSTypeAnnotation",
                                    "typeAnnotation": {
                                      "type": "TSThisType",
                                      "start": 1908,
                                      "end": 1912
                                    },
                                    "start": 1906,
                                    "end": 1912
                                  },
                                  "accessibility": null,
                                  "static": false,
                                  "start": 1902,
                                  "end": 1913
                                }
                              ],
                              "start": 1892,
                              "end": 1919
                            },
                            "declare": false,
                            "start": 1878,
                            "end": 1919
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "TSAsExpression",
                              "expression": {
                                "type": "ObjectExpression",
                                "properties": [],
                                "start": 1931,
                                "end": 1933
                              },
                              "typeAnnotation": {
                                "type": "TSTypeReference",
                                "typeName": {
                                  "type": "Identifier",
                                  "decorators": [],
                                  "name": "Foo",
                                  "optional": false,
                                  "typeAnnotation": null,
                                  "start": 1937,
                                  "end": 1940
                                },
                                "typeArguments": null,
                                "start": 1937,
                                "end": 1940
                              },
                              "start": 1931,
                              "end": 1940
                            },
                            "start": 1924,
                            "end": 1941
                          }
                        ],
                        "start": 1872,
                        "end": 1945
                      },
                      "expression": false,
                      "start": 1869,
                      "end": 1945
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1862,
                    "end": 1945
                  }
                ],
                "start": 1802,
                "end": 1948
              }
            ],
            "optional": false,
            "start": 1788,
            "end": 1949
          },
          "definite": false,
          "start": 1777,
          "end": 1949
        }
      ],
      "declare": false,
      "start": 1771,
      "end": 1950
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
            "name": "result11",
            "optional": false,
            "typeAnnotation": null,
            "start": 1958,
            "end": 1966
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "defineOptions",
              "optional": false,
              "typeAnnotation": null,
              "start": 1969,
              "end": 1982
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
                      "name": "context",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 1987,
                      "end": 1994
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
                            "name": "tag",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 1998,
                            "end": 2001
                          },
                          "value": {
                            "type": "Literal",
                            "value": "I",
                            "raw": "\"I\"",
                            "start": 2003,
                            "end": 2006
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 1998,
                          "end": 2006
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
                            "start": 2008,
                            "end": 2013
                          },
                          "value": {
                            "type": "Literal",
                            "value": 9,
                            "raw": "9",
                            "start": 2015,
                            "end": 2016
                          },
                          "method": false,
                          "shorthand": false,
                          "computed": false,
                          "optional": false,
                          "start": 2008,
                          "end": 2016
                        }
                      ],
                      "start": 1996,
                      "end": 2018
                    },
                    "method": false,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 1987,
                    "end": 2018
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "consume",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2022,
                      "end": 2029
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
                          "name": "_data",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 2030,
                          "end": 2035
                        }
                      ],
                      "returnType": null,
                      "body": {
                        "type": "BlockStatement",
                        "body": [],
                        "start": 2037,
                        "end": 2039
                      },
                      "expression": false,
                      "start": 2029,
                      "end": 2039
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2022,
                    "end": 2039
                  },
                  {
                    "type": "Property",
                    "kind": "init",
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "produce",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 2043,
                      "end": 2050
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
                            "type": "FunctionDeclaration",
                            "id": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2068,
                              "end": 2070
                            },
                            "generator": false,
                            "async": false,
                            "declare": false,
                            "typeParameters": null,
                            "params": [
                              {
                                "type": "Identifier",
                                "decorators": [],
                                "name": "this",
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
                                          "start": 2079,
                                          "end": 2083
                                        },
                                        "typeAnnotation": {
                                          "type": "TSTypeAnnotation",
                                          "typeAnnotation": {
                                            "type": "TSStringKeyword",
                                            "start": 2085,
                                            "end": 2091
                                          },
                                          "start": 2083,
                                          "end": 2091
                                        },
                                        "accessibility": null,
                                        "static": false,
                                        "start": 2079,
                                        "end": 2091
                                      }
                                    ],
                                    "start": 2077,
                                    "end": 2093
                                  },
                                  "start": 2075,
                                  "end": 2093
                                },
                                "start": 2071,
                                "end": 2093
                              }
                            ],
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
                                      "start": 2110,
                                      "end": 2114
                                    },
                                    "property": {
                                      "type": "Identifier",
                                      "decorators": [],
                                      "name": "prop",
                                      "optional": false,
                                      "typeAnnotation": null,
                                      "start": 2115,
                                      "end": 2119
                                    },
                                    "optional": false,
                                    "computed": false,
                                    "start": 2110,
                                    "end": 2119
                                  },
                                  "start": 2103,
                                  "end": 2120
                                }
                              ],
                              "start": 2095,
                              "end": 2126
                            },
                            "expression": false,
                            "start": 2059,
                            "end": 2126
                          },
                          {
                            "type": "ReturnStatement",
                            "argument": {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "fn",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 2138,
                              "end": 2140
                            },
                            "start": 2131,
                            "end": 2141
                          }
                        ],
                        "start": 2053,
                        "end": 2145
                      },
                      "expression": false,
                      "start": 2050,
                      "end": 2145
                    },
                    "method": true,
                    "shorthand": false,
                    "computed": false,
                    "optional": false,
                    "start": 2043,
                    "end": 2145
                  }
                ],
                "start": 1983,
                "end": 2148
              }
            ],
            "optional": false,
            "start": 1969,
            "end": 2149
          },
          "definite": false,
          "start": 1958,
          "end": 2149
        }
      ],
      "declare": false,
      "start": 1952,
      "end": 2150
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 2150
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
    "value": "Options",
    "start": 10,
    "end": 17
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 17,
    "end": 18
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 18,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 25,
    "end": 26
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 27,
    "end": 31
  },
  {
    "type": "Punctuator",
    "value": ">",
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
    "value": "context",
    "start": 37,
    "end": 44
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 44,
    "end": 45
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 46,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 53,
    "end": 54
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 57,
    "end": 64
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 64,
    "end": 65
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 65,
    "end": 69
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 69,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 78,
    "end": 79
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 81,
    "end": 85
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 85,
    "end": 86
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 89,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 97,
    "end": 101
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 101,
    "end": 102
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 103,
    "end": 110
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 110,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "data",
    "start": 112,
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
    "value": "Data",
    "start": 118,
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
    "value": ":",
    "start": 123,
    "end": 124
  },
  {
    "type": "Keyword",
    "value": "void",
    "start": 125,
    "end": 129
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 134,
    "end": 141
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 142,
    "end": 150
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 151,
    "end": 164
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 164,
    "end": 165
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 165,
    "end": 172
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 174,
    "end": 178
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 178,
    "end": 179
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 179,
    "end": 180
  },
  {
    "type": "Identifier",
    "value": "options",
    "start": 183,
    "end": 190
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "Options",
    "start": 192,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 200,
    "end": 207
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 207,
    "end": 208
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 209,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 213,
    "end": 214
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 214,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 216,
    "end": 217
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 217,
    "end": 218
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 219,
    "end": 220
  },
  {
    "type": "Identifier",
    "value": "Context",
    "start": 220,
    "end": 227
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 227,
    "end": 228
  },
  {
    "type": "Identifier",
    "value": "Data",
    "start": 229,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 233,
    "end": 234
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 234,
    "end": 235
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 237,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 243,
    "end": 250
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 251,
    "end": 252
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 253,
    "end": 266
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 266,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 267,
    "end": 268
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 271,
    "end": 278
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 278,
    "end": 279
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 280,
    "end": 281
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 282,
    "end": 285
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 285,
    "end": 286
  },
  {
    "type": "String",
    "value": "\"A\"",
    "start": 287,
    "end": 290
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 290,
    "end": 291
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 292,
    "end": 297
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 297,
    "end": 298
  },
  {
    "type": "Numeric",
    "value": "1",
    "start": 299,
    "end": 300
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 301,
    "end": 302
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 306,
    "end": 313
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 313,
    "end": 314
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 314,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 319,
    "end": 320
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "produce",
    "start": 327,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 334,
    "end": 335
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 335,
    "end": 336
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 337,
    "end": 338
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 343,
    "end": 349
  },
  {
    "type": "Numeric",
    "value": "42",
    "start": 350,
    "end": 352
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 356,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 357,
    "end": 358
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 359,
    "end": 360
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 360,
    "end": 361
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 361,
    "end": 362
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 364,
    "end": 369
  },
  {
    "type": "Identifier",
    "value": "result2",
    "start": 370,
    "end": 377
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 378,
    "end": 379
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 380,
    "end": 393
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 393,
    "end": 394
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 394,
    "end": 395
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 398,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 405,
    "end": 406
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 407,
    "end": 408
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 409,
    "end": 412
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 412,
    "end": 413
  },
  {
    "type": "String",
    "value": "\"B\"",
    "start": 414,
    "end": 417
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 417,
    "end": 418
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 419,
    "end": 424
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 424,
    "end": 425
  },
  {
    "type": "Numeric",
    "value": "2",
    "start": 426,
    "end": 427
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 428,
    "end": 429
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 429,
    "end": 430
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 433,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 440,
    "end": 441
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 441,
    "end": 446
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 446,
    "end": 447
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 448,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 449,
    "end": 450
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 450,
    "end": 451
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 454,
    "end": 461
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 461,
    "end": 462
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 462,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 464,
    "end": 465
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 470,
    "end": 476
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 477,
    "end": 481
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 481,
    "end": 482
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 482,
    "end": 487
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 491,
    "end": 492
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 492,
    "end": 493
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": ";",
    "start": 496,
    "end": 497
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 499,
    "end": 504
  },
  {
    "type": "Identifier",
    "value": "result3",
    "start": 505,
    "end": 512
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 513,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 515,
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
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 533,
    "end": 540
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 540,
    "end": 541
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 544,
    "end": 547
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 547,
    "end": 548
  },
  {
    "type": "String",
    "value": "\"C\"",
    "start": 549,
    "end": 552
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 554,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Numeric",
    "value": "3",
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
    "type": "Punctuator",
    "value": ",",
    "start": 564,
    "end": 565
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 568,
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
    "value": "_data",
    "start": 576,
    "end": 581
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 581,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 583,
    "end": 584
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 584,
    "end": 585
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 585,
    "end": 586
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 589,
    "end": 596
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 596,
    "end": 597
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 598,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 599,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 601,
    "end": 603
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 604,
    "end": 607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 607,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 609,
    "end": 610
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 610,
    "end": 611
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 611,
    "end": 612
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 614,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "result4",
    "start": 620,
    "end": 627
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 628,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 630,
    "end": 643
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 643,
    "end": 644
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 644,
    "end": 645
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 648,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 655,
    "end": 656
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 657,
    "end": 658
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 659,
    "end": 662
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 662,
    "end": 663
  },
  {
    "type": "String",
    "value": "\"D\"",
    "start": 664,
    "end": 667
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 667,
    "end": 668
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 669,
    "end": 674
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 674,
    "end": 675
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "type": "Punctuator",
    "value": ",",
    "start": 679,
    "end": 680
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 683,
    "end": 690
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 690,
    "end": 691
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 691,
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
    "value": "{",
    "start": 698,
    "end": 699
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 699,
    "end": 700
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 700,
    "end": 701
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 704,
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
    "value": "{",
    "start": 714,
    "end": 715
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 720,
    "end": 725
  },
  {
    "type": "Identifier",
    "value": "Local",
    "start": 726,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 732,
    "end": 733
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 740,
    "end": 745
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 746,
    "end": 747
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 748,
    "end": 753
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 753,
    "end": 754
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 761,
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
    "type": "Keyword",
    "value": "this",
    "start": 784,
    "end": 788
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 788,
    "end": 789
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 789,
    "end": 794
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 794,
    "end": 795
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 802,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 808,
    "end": 809
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 814,
    "end": 820
  },
  {
    "type": "Keyword",
    "value": "new",
    "start": 821,
    "end": 824
  },
  {
    "type": "Identifier",
    "value": "Local",
    "start": 825,
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
    "value": ".",
    "start": 832,
    "end": 833
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 833,
    "end": 836
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 836,
    "end": 837
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 837,
    "end": 838
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 838,
    "end": 839
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 839,
    "end": 840
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 843,
    "end": 844
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 844,
    "end": 845
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 846,
    "end": 847
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 847,
    "end": 848
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 848,
    "end": 849
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 851,
    "end": 856
  },
  {
    "type": "Identifier",
    "value": "result5",
    "start": 857,
    "end": 864
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 865,
    "end": 866
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 867,
    "end": 880
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 880,
    "end": 881
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 881,
    "end": 882
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 885,
    "end": 892
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 892,
    "end": 893
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 894,
    "end": 895
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 896,
    "end": 899
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 899,
    "end": 900
  },
  {
    "type": "String",
    "value": "\"E\"",
    "start": 901,
    "end": 904
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 904,
    "end": 905
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 906,
    "end": 911
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 911,
    "end": 912
  },
  {
    "type": "Numeric",
    "value": "5",
    "start": 913,
    "end": 914
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 915,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 916,
    "end": 917
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 920,
    "end": 927
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 927,
    "end": 928
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 928,
    "end": 933
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 933,
    "end": 934
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 935,
    "end": 936
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 936,
    "end": 937
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 937,
    "end": 938
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 941,
    "end": 948
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 948,
    "end": 949
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 949,
    "end": 950
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 951,
    "end": 952
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 957,
    "end": 965
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 966,
    "end": 971
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 971,
    "end": 972
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 972,
    "end": 973
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 974,
    "end": 975
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 982,
    "end": 988
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 989,
    "end": 993
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 993,
    "end": 994
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 999,
    "end": 1000
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1005,
    "end": 1011
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1012,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1018,
    "end": 1019
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1019,
    "end": 1020
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1023,
    "end": 1024
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1024,
    "end": 1025
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1026,
    "end": 1027
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1027,
    "end": 1028
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1028,
    "end": 1029
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1031,
    "end": 1036
  },
  {
    "type": "Identifier",
    "value": "result6",
    "start": 1037,
    "end": 1044
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1045,
    "end": 1046
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1047,
    "end": 1060
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1060,
    "end": 1061
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1061,
    "end": 1062
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1065,
    "end": 1072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1072,
    "end": 1073
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1074,
    "end": 1075
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1076,
    "end": 1079
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1079,
    "end": 1080
  },
  {
    "type": "String",
    "value": "\"F\"",
    "start": 1081,
    "end": 1084
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1084,
    "end": 1085
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1086,
    "end": 1091
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1091,
    "end": 1092
  },
  {
    "type": "Numeric",
    "value": "6",
    "start": 1093,
    "end": 1094
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1095,
    "end": 1096
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1096,
    "end": 1097
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 1100,
    "end": 1107
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1107,
    "end": 1108
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 1108,
    "end": 1113
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1113,
    "end": 1114
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1115,
    "end": 1116
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "produce",
    "start": 1121,
    "end": 1128
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1128,
    "end": 1129
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1129,
    "end": 1130
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1131,
    "end": 1132
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1137,
    "end": 1142
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 1143,
    "end": 1148
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1149,
    "end": 1150
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1151,
    "end": 1152
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1152,
    "end": 1153
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1154,
    "end": 1156
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1157,
    "end": 1161
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1161,
    "end": 1162
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1162,
    "end": 1167
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1167,
    "end": 1168
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1173,
    "end": 1179
  },
  {
    "type": "Identifier",
    "value": "arrow",
    "start": 1180,
    "end": 1185
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1185,
    "end": 1186
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1186,
    "end": 1187
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1187,
    "end": 1188
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1191,
    "end": 1192
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1192,
    "end": 1193
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1194,
    "end": 1195
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1195,
    "end": 1196
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1196,
    "end": 1197
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1199,
    "end": 1204
  },
  {
    "type": "Identifier",
    "value": "result7",
    "start": 1205,
    "end": 1212
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1213,
    "end": 1214
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1215,
    "end": 1228
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1228,
    "end": 1229
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1229,
    "end": 1230
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1233,
    "end": 1240
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1240,
    "end": 1241
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1242,
    "end": 1243
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1244,
    "end": 1247
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1247,
    "end": 1248
  },
  {
    "type": "String",
    "value": "\"G\"",
    "start": 1249,
    "end": 1252
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1252,
    "end": 1253
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1254,
    "end": 1259
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1259,
    "end": 1260
  },
  {
    "type": "Numeric",
    "value": "7",
    "start": 1261,
    "end": 1262
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1263,
    "end": 1264
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1264,
    "end": 1265
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 1268,
    "end": 1275
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1275,
    "end": 1276
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 1276,
    "end": 1281
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1281,
    "end": 1282
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1283,
    "end": 1284
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1284,
    "end": 1285
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1285,
    "end": 1286
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 1289,
    "end": 1296
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1296,
    "end": 1297
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1297,
    "end": 1298
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1299,
    "end": 1300
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1305,
    "end": 1310
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1311,
    "end": 1315
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1316,
    "end": 1317
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1318,
    "end": 1322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1322,
    "end": 1323
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 1328,
    "end": 1336
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1337,
    "end": 1342
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1342,
    "end": 1343
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1343,
    "end": 1344
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1345,
    "end": 1346
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1353,
    "end": 1359
  },
  {
    "type": "Identifier",
    "value": "self",
    "start": 1360,
    "end": 1364
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1364,
    "end": 1365
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1365,
    "end": 1370
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1370,
    "end": 1371
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1376,
    "end": 1377
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1382,
    "end": 1388
  },
  {
    "type": "Identifier",
    "value": "inner",
    "start": 1389,
    "end": 1394
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1394,
    "end": 1395
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1395,
    "end": 1396
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1396,
    "end": 1397
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1400,
    "end": 1401
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1401,
    "end": 1402
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1403,
    "end": 1404
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1404,
    "end": 1405
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1405,
    "end": 1406
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1408,
    "end": 1413
  },
  {
    "type": "Identifier",
    "value": "result8",
    "start": 1414,
    "end": 1421
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1422,
    "end": 1423
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1424,
    "end": 1437
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1437,
    "end": 1438
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1438,
    "end": 1439
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1442,
    "end": 1449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1449,
    "end": 1450
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1451,
    "end": 1452
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1453,
    "end": 1456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1456,
    "end": 1457
  },
  {
    "type": "String",
    "value": "\"H\"",
    "start": 1458,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1461,
    "end": 1462
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1463,
    "end": 1468
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1468,
    "end": 1469
  },
  {
    "type": "Numeric",
    "value": "8",
    "start": 1470,
    "end": 1471
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 1477,
    "end": 1484
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1484,
    "end": 1485
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 1485,
    "end": 1490
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1490,
    "end": 1491
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1492,
    "end": 1493
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1493,
    "end": 1494
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1494,
    "end": 1495
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 1498,
    "end": 1505
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1505,
    "end": 1506
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1507,
    "end": 1508
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1508,
    "end": 1509
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 1510,
    "end": 1512
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1513,
    "end": 1514
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1519,
    "end": 1525
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1526,
    "end": 1530
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1530,
    "end": 1531
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1534,
    "end": 1535
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1535,
    "end": 1536
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1537,
    "end": 1538
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1538,
    "end": 1539
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1539,
    "end": 1540
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1542,
    "end": 1547
  },
  {
    "type": "Identifier",
    "value": "result9",
    "start": 1548,
    "end": 1555
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1556,
    "end": 1557
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1558,
    "end": 1571
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1571,
    "end": 1572
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1572,
    "end": 1573
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1576,
    "end": 1583
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1583,
    "end": 1584
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1585,
    "end": 1586
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1587,
    "end": 1590
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1590,
    "end": 1591
  },
  {
    "type": "String",
    "value": "\"I\"",
    "start": 1592,
    "end": 1595
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1595,
    "end": 1596
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1597,
    "end": 1602
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1602,
    "end": 1603
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1604,
    "end": 1605
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1606,
    "end": 1607
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1607,
    "end": 1608
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 1611,
    "end": 1618
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1618,
    "end": 1619
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 1619,
    "end": 1624
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1624,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1627,
    "end": 1628
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1628,
    "end": 1629
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 1632,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1640,
    "end": 1641
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1642,
    "end": 1643
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1648,
    "end": 1653
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1654,
    "end": 1657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1658,
    "end": 1659
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1660,
    "end": 1661
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1668,
    "end": 1673
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1673,
    "end": 1674
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 1675,
    "end": 1680
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1680,
    "end": 1681
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1688,
    "end": 1691
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1691,
    "end": 1692
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1692,
    "end": 1693
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1694,
    "end": 1695
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1704,
    "end": 1710
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1711,
    "end": 1715
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1715,
    "end": 1716
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1716,
    "end": 1721
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1721,
    "end": 1722
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1729,
    "end": 1730
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1730,
    "end": 1731
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1736,
    "end": 1737
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1737,
    "end": 1738
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1743,
    "end": 1749
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1750,
    "end": 1753
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1753,
    "end": 1754
  },
  {
    "type": "Identifier",
    "value": "get",
    "start": 1754,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1758,
    "end": 1759
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1759,
    "end": 1760
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1763,
    "end": 1764
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1764,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1766,
    "end": 1767
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1767,
    "end": 1768
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1768,
    "end": 1769
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1771,
    "end": 1776
  },
  {
    "type": "Identifier",
    "value": "result10",
    "start": 1777,
    "end": 1785
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1786,
    "end": 1787
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1788,
    "end": 1801
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1801,
    "end": 1802
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1802,
    "end": 1803
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1806,
    "end": 1813
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1813,
    "end": 1814
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1815,
    "end": 1816
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1817,
    "end": 1820
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1820,
    "end": 1821
  },
  {
    "type": "String",
    "value": "\"I\"",
    "start": 1822,
    "end": 1825
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1825,
    "end": 1826
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 1827,
    "end": 1832
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1832,
    "end": 1833
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 1834,
    "end": 1835
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1836,
    "end": 1837
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1837,
    "end": 1838
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 1841,
    "end": 1848
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1848,
    "end": 1849
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 1849,
    "end": 1854
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1854,
    "end": 1855
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1856,
    "end": 1857
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1857,
    "end": 1858
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1858,
    "end": 1859
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 1862,
    "end": 1869
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1869,
    "end": 1870
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1870,
    "end": 1871
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1872,
    "end": 1873
  },
  {
    "type": "Keyword",
    "value": "interface",
    "start": 1878,
    "end": 1887
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1888,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1892,
    "end": 1893
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 1902,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 1908,
    "end": 1912
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1912,
    "end": 1913
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1918,
    "end": 1919
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 1924,
    "end": 1930
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1931,
    "end": 1932
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1932,
    "end": 1933
  },
  {
    "type": "Identifier",
    "value": "as",
    "start": 1934,
    "end": 1936
  },
  {
    "type": "Identifier",
    "value": "Foo",
    "start": 1937,
    "end": 1940
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1940,
    "end": 1941
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1944,
    "end": 1945
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 1945,
    "end": 1946
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 1947,
    "end": 1948
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 1948,
    "end": 1949
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1949,
    "end": 1950
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 1952,
    "end": 1957
  },
  {
    "type": "Identifier",
    "value": "result11",
    "start": 1958,
    "end": 1966
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1967,
    "end": 1968
  },
  {
    "type": "Identifier",
    "value": "defineOptions",
    "start": 1969,
    "end": 1982
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 1982,
    "end": 1983
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1983,
    "end": 1984
  },
  {
    "type": "Identifier",
    "value": "context",
    "start": 1987,
    "end": 1994
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1994,
    "end": 1995
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 1996,
    "end": 1997
  },
  {
    "type": "Identifier",
    "value": "tag",
    "start": 1998,
    "end": 2001
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2001,
    "end": 2002
  },
  {
    "type": "String",
    "value": "\"I\"",
    "start": 2003,
    "end": 2006
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2006,
    "end": 2007
  },
  {
    "type": "Identifier",
    "value": "value",
    "start": 2008,
    "end": 2013
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2013,
    "end": 2014
  },
  {
    "type": "Numeric",
    "value": "9",
    "start": 2015,
    "end": 2016
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2017,
    "end": 2018
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2018,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "consume",
    "start": 2022,
    "end": 2029
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2029,
    "end": 2030
  },
  {
    "type": "Identifier",
    "value": "_data",
    "start": 2030,
    "end": 2035
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2035,
    "end": 2036
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2037,
    "end": 2038
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2038,
    "end": 2039
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2039,
    "end": 2040
  },
  {
    "type": "Identifier",
    "value": "produce",
    "start": 2043,
    "end": 2050
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2050,
    "end": 2051
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2051,
    "end": 2052
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2053,
    "end": 2054
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 2059,
    "end": 2067
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2068,
    "end": 2070
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 2070,
    "end": 2071
  },
  {
    "type": "Identifier",
    "value": "this",
    "start": 2071,
    "end": 2075
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2075,
    "end": 2076
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2077,
    "end": 2078
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2079,
    "end": 2083
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2083,
    "end": 2084
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2085,
    "end": 2091
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2092,
    "end": 2093
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2093,
    "end": 2094
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 2095,
    "end": 2096
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2103,
    "end": 2109
  },
  {
    "type": "Keyword",
    "value": "this",
    "start": 2110,
    "end": 2114
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2114,
    "end": 2115
  },
  {
    "type": "Identifier",
    "value": "prop",
    "start": 2115,
    "end": 2119
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2119,
    "end": 2120
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2125,
    "end": 2126
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 2131,
    "end": 2137
  },
  {
    "type": "Identifier",
    "value": "fn",
    "start": 2138,
    "end": 2140
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2140,
    "end": 2141
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2144,
    "end": 2145
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 2145,
    "end": 2146
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 2147,
    "end": 2148
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 2148,
    "end": 2149
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2149,
    "end": 2150
  }
]
```
