__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "TSDeclareFunction",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "foo",
        "optional": false,
        "typeAnnotation": null,
        "start": 17,
        "end": 20
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
              "start": 21,
              "end": 22
            },
            "constraint": null,
            "default": null,
            "in": false,
            "out": false,
            "const": false,
            "start": 21,
            "end": 22
          }
        ],
        "start": 20,
        "end": 23
      },
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "obj",
          "optional": false,
          "typeAnnotation": {
            "type": "TSTypeAnnotation",
            "typeAnnotation": {
              "type": "TSTypeLiteral",
              "members": [
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
                          "start": 35,
                          "end": 41
                        },
                        "start": 33,
                        "end": 41
                      },
                      "start": 32,
                      "end": 41
                    }
                  ],
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
                        "start": 44,
                        "end": 45
                      },
                      "typeArguments": null,
                      "start": 44,
                      "end": 45
                    },
                    "start": 42,
                    "end": 45
                  },
                  "readonly": false,
                  "static": false,
                  "accessibility": null,
                  "start": 31,
                  "end": 45
                }
              ],
              "start": 29,
              "end": 47
            },
            "start": 27,
            "end": 47
          },
          "start": 24,
          "end": 47
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
            "start": 50,
            "end": 51
          },
          "typeArguments": null,
          "start": 50,
          "end": 51
        },
        "start": 48,
        "end": 51
      },
      "body": null,
      "expression": false,
      "start": 0,
      "end": 52
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
            "name": "x1",
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
                      "start": 74,
                      "end": 75
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 77,
                        "end": 83
                      },
                      "start": 75,
                      "end": 83
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 74,
                    "end": 84
                  },
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
                      "start": 85,
                      "end": 86
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 88,
                        "end": 94
                      },
                      "start": 86,
                      "end": 94
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 85,
                    "end": 94
                  }
                ],
                "start": 72,
                "end": 96
              },
              "start": 70,
              "end": 96
            },
            "start": 68,
            "end": 96
          },
          "init": null,
          "definite": false,
          "start": 68,
          "end": 96
        }
      ],
      "declare": true,
      "start": 54,
      "end": 97
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
            "name": "x2",
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
                      "start": 118,
                      "end": 119
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 121,
                        "end": 127
                      },
                      "start": 119,
                      "end": 127
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 118,
                    "end": 128
                  },
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
                      "start": 129,
                      "end": 130
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 132,
                            "end": 138
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 141,
                            "end": 150
                          }
                        ],
                        "start": 132,
                        "end": 150
                      },
                      "start": 130,
                      "end": 150
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 129,
                    "end": 150
                  }
                ],
                "start": 116,
                "end": 152
              },
              "start": 114,
              "end": 152
            },
            "start": 112,
            "end": 152
          },
          "init": null,
          "definite": false,
          "start": 112,
          "end": 152
        }
      ],
      "declare": true,
      "start": 98,
      "end": 153
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
            "name": "x3",
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
                      "start": 174,
                      "end": 175
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 177,
                        "end": 183
                      },
                      "start": 175,
                      "end": 183
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 174,
                    "end": 184
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 185,
                      "end": 186
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSNumberKeyword",
                        "start": 189,
                        "end": 195
                      },
                      "start": 187,
                      "end": 195
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 185,
                    "end": 195
                  }
                ],
                "start": 172,
                "end": 197
              },
              "start": 170,
              "end": 197
            },
            "start": 168,
            "end": 197
          },
          "init": null,
          "definite": false,
          "start": 168,
          "end": 197
        }
      ],
      "declare": true,
      "start": 154,
      "end": 198
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
            "name": "x4",
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
                      "start": 219,
                      "end": 220
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 222,
                        "end": 228
                      },
                      "start": 220,
                      "end": 228
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 219,
                    "end": 229
                  },
                  {
                    "type": "TSPropertySignature",
                    "computed": false,
                    "optional": true,
                    "readonly": false,
                    "key": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "b",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 230,
                      "end": 231
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSUnionType",
                        "types": [
                          {
                            "type": "TSNumberKeyword",
                            "start": 234,
                            "end": 240
                          },
                          {
                            "type": "TSUndefinedKeyword",
                            "start": 243,
                            "end": 252
                          }
                        ],
                        "start": 234,
                        "end": 252
                      },
                      "start": 232,
                      "end": 252
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 230,
                    "end": 252
                  }
                ],
                "start": 217,
                "end": 254
              },
              "start": 215,
              "end": 254
            },
            "start": 213,
            "end": 254
          },
          "init": null,
          "definite": false,
          "start": 213,
          "end": 254
        }
      ],
      "declare": true,
      "start": 199,
      "end": 255
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
            "start": 261,
            "end": 263
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 266,
              "end": 269
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x1",
                "optional": false,
                "typeAnnotation": null,
                "start": 270,
                "end": 272
              }
            ],
            "optional": false,
            "start": 266,
            "end": 273
          },
          "definite": false,
          "start": 261,
          "end": 273
        }
      ],
      "declare": false,
      "start": 257,
      "end": 274
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
            "name": "a2",
            "optional": false,
            "typeAnnotation": null,
            "start": 299,
            "end": 301
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 304,
              "end": 307
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x2",
                "optional": false,
                "typeAnnotation": null,
                "start": 308,
                "end": 310
              }
            ],
            "optional": false,
            "start": 304,
            "end": 311
          },
          "definite": false,
          "start": 299,
          "end": 311
        }
      ],
      "declare": false,
      "start": 295,
      "end": 312
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
            "name": "a3",
            "optional": false,
            "typeAnnotation": null,
            "start": 349,
            "end": 351
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 354,
              "end": 357
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x3",
                "optional": false,
                "typeAnnotation": null,
                "start": 358,
                "end": 360
              }
            ],
            "optional": false,
            "start": 354,
            "end": 361
          },
          "definite": false,
          "start": 349,
          "end": 361
        }
      ],
      "declare": false,
      "start": 345,
      "end": 362
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
            "name": "a4",
            "optional": false,
            "typeAnnotation": null,
            "start": 387,
            "end": 389
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "foo",
              "optional": false,
              "typeAnnotation": null,
              "start": 392,
              "end": 395
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Identifier",
                "decorators": [],
                "name": "x4",
                "optional": false,
                "typeAnnotation": null,
                "start": 396,
                "end": 398
              }
            ],
            "optional": false,
            "start": 392,
            "end": 399
          },
          "definite": false,
          "start": 387,
          "end": 399
        }
      ],
      "declare": false,
      "start": 383,
      "end": 400
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
            "name": "param2",
            "optional": false,
            "typeAnnotation": null,
            "start": 450,
            "end": 456
          },
          "init": {
            "type": "ConditionalExpression",
            "test": {
              "type": "BinaryExpression",
              "left": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Math",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 459,
                    "end": 463
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "random",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 464,
                    "end": 470
                  },
                  "optional": false,
                  "computed": false,
                  "start": 459,
                  "end": 470
                },
                "typeArguments": null,
                "arguments": [],
                "optional": false,
                "start": 459,
                "end": 472
              },
              "operator": "<",
              "right": {
                "type": "Literal",
                "value": 0.5,
                "raw": "0.5",
                "start": 475,
                "end": 478
              },
              "start": 459,
              "end": 478
            },
            "consequent": {
              "type": "Literal",
              "value": "value2",
              "raw": "'value2'",
              "start": 481,
              "end": 489
            },
            "alternate": {
              "type": "Literal",
              "value": null,
              "raw": "null",
              "start": 492,
              "end": 496
            },
            "start": 459,
            "end": 496
          },
          "definite": false,
          "start": 450,
          "end": 496
        }
      ],
      "declare": false,
      "start": 444,
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 505,
            "end": 508
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
                  "name": "param1",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 517,
                  "end": 523
                },
                "value": {
                  "type": "Literal",
                  "value": "value1",
                  "raw": "'value1'",
                  "start": 525,
                  "end": 533
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 517,
                "end": 533
              },
              {
                "type": "SpreadElement",
                "argument": {
                  "type": "ConditionalExpression",
                  "test": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "param2",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 543,
                    "end": 549
                  },
                  "consequent": {
                    "type": "ObjectExpression",
                    "properties": [
                      {
                        "type": "Property",
                        "kind": "init",
                        "key": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 559
                        },
                        "value": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "param2",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 553,
                          "end": 559
                        },
                        "method": false,
                        "shorthand": true,
                        "computed": false,
                        "optional": false,
                        "start": 553,
                        "end": 559
                      }
                    ],
                    "start": 552,
                    "end": 560
                  },
                  "alternate": {
                    "type": "ObjectExpression",
                    "properties": [],
                    "start": 563,
                    "end": 565
                  },
                  "start": 543,
                  "end": 565
                },
                "start": 539,
                "end": 566
              }
            ],
            "start": 511,
            "end": 568
          },
          "definite": false,
          "start": 505,
          "end": 568
        }
      ],
      "declare": false,
      "start": 499,
      "end": 569
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
            "name": "query",
            "optional": false,
            "typeAnnotation": null,
            "start": 577,
            "end": 582
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "MemberExpression",
              "object": {
                "type": "CallExpression",
                "callee": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "CallExpression",
                    "callee": {
                      "type": "MemberExpression",
                      "object": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "Object",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 585,
                        "end": 591
                      },
                      "property": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "entries",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 592,
                        "end": 599
                      },
                      "optional": false,
                      "computed": false,
                      "start": 585,
                      "end": 599
                    },
                    "typeArguments": null,
                    "arguments": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "obj",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 600,
                        "end": 603
                      }
                    ],
                    "optional": false,
                    "start": 585,
                    "end": 604
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "map",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 605,
                    "end": 608
                  },
                  "optional": false,
                  "computed": false,
                  "start": 585,
                  "end": 608
                },
                "typeArguments": null,
                "arguments": [
                  {
                    "type": "ArrowFunctionExpression",
                    "expression": true,
                    "async": false,
                    "typeParameters": null,
                    "params": [
                      {
                        "type": "ArrayPattern",
                        "decorators": [],
                        "elements": [
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "k",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 616,
                            "end": 617
                          },
                          {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "v",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 619,
                            "end": 620
                          }
                        ],
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 615,
                        "end": 621
                      }
                    ],
                    "returnType": null,
                    "body": {
                      "type": "TemplateLiteral",
                      "quasis": [
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": false,
                          "start": 626,
                          "end": 629
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "=",
                            "cooked": "="
                          },
                          "tail": false,
                          "start": 630,
                          "end": 634
                        },
                        {
                          "type": "TemplateElement",
                          "value": {
                            "raw": "",
                            "cooked": ""
                          },
                          "tail": true,
                          "start": 655,
                          "end": 657
                        }
                      ],
                      "expressions": [
                        {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "k",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 629,
                          "end": 630
                        },
                        {
                          "type": "CallExpression",
                          "callee": {
                            "type": "Identifier",
                            "decorators": [],
                            "name": "encodeURIComponent",
                            "optional": false,
                            "typeAnnotation": null,
                            "start": 634,
                            "end": 652
                          },
                          "typeArguments": null,
                          "arguments": [
                            {
                              "type": "Identifier",
                              "decorators": [],
                              "name": "v",
                              "optional": false,
                              "typeAnnotation": null,
                              "start": 653,
                              "end": 654
                            }
                          ],
                          "optional": false,
                          "start": 634,
                          "end": 655
                        }
                      ],
                      "start": 626,
                      "end": 657
                    },
                    "id": null,
                    "generator": false,
                    "start": 614,
                    "end": 657
                  }
                ],
                "optional": false,
                "start": 585,
                "end": 659
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "join",
                "optional": false,
                "typeAnnotation": null,
                "start": 660,
                "end": 664
              },
              "optional": false,
              "computed": false,
              "start": 585,
              "end": 664
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "Literal",
                "value": "&",
                "raw": "'&'",
                "start": 665,
                "end": 668
              }
            ],
            "optional": false,
            "start": 585,
            "end": 669
          },
          "definite": false,
          "start": 577,
          "end": 669
        }
      ],
      "declare": false,
      "start": 571,
      "end": 670
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 670
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
    "value": "function",
    "start": 8,
    "end": 16
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 17,
    "end": 20
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 20,
    "end": 21
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 21,
    "end": 22
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 22,
    "end": 23
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 23,
    "end": 24
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 24,
    "end": 27
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 27,
    "end": 28
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 29,
    "end": 30
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 31,
    "end": 32
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 32,
    "end": 33
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 33,
    "end": 34
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 35,
    "end": 41
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 41,
    "end": 42
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 42,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 46,
    "end": 47
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 47,
    "end": 48
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 48,
    "end": 49
  },
  {
    "type": "Identifier",
    "value": "T",
    "start": 50,
    "end": 51
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 51,
    "end": 52
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 54,
    "end": 61
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 62,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 68,
    "end": 70
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 70,
    "end": 71
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 72,
    "end": 73
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 74,
    "end": 75
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 75,
    "end": 76
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 77,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 83,
    "end": 84
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 85,
    "end": 86
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 86,
    "end": 87
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 88,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 96,
    "end": 97
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 98,
    "end": 105
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 106,
    "end": 111
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 112,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 114,
    "end": 115
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 116,
    "end": 117
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 118,
    "end": 119
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 119,
    "end": 120
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 121,
    "end": 127
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 127,
    "end": 128
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 129,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 130,
    "end": 131
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 132,
    "end": 138
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 139,
    "end": 140
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 141,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 152,
    "end": 153
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 154,
    "end": 161
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 162,
    "end": 167
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 168,
    "end": 170
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 170,
    "end": 171
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 172,
    "end": 173
  },
  {
    "type": "Identifier",
    "value": "a",
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
    "type": "Identifier",
    "value": "string",
    "start": 177,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 183,
    "end": 184
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 185,
    "end": 186
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 186,
    "end": 187
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 187,
    "end": 188
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 189,
    "end": 195
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "type": "Identifier",
    "value": "declare",
    "start": 199,
    "end": 206
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 207,
    "end": 212
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 213,
    "end": 215
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 215,
    "end": 216
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 217,
    "end": 218
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 219,
    "end": 220
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 220,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 222,
    "end": 228
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 228,
    "end": 229
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 230,
    "end": 231
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 231,
    "end": 232
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 232,
    "end": 233
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 234,
    "end": 240
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 241,
    "end": 242
  },
  {
    "type": "Identifier",
    "value": "undefined",
    "start": 243,
    "end": 252
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 253,
    "end": 254
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 254,
    "end": 255
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 257,
    "end": 260
  },
  {
    "type": "Identifier",
    "value": "a1",
    "start": 261,
    "end": 263
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 264,
    "end": 265
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 266,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 270,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 272,
    "end": 273
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 273,
    "end": 274
  },
  {
    "type": "Keyword",
    "value": "let",
    "start": 295,
    "end": 298
  },
  {
    "type": "Identifier",
    "value": "a2",
    "start": 299,
    "end": 301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 302,
    "end": 303
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 304,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 307,
    "end": 308
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 308,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ")",
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
    "value": "let",
    "start": 345,
    "end": 348
  },
  {
    "type": "Identifier",
    "value": "a3",
    "start": 349,
    "end": 351
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 352,
    "end": 353
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 354,
    "end": 357
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 357,
    "end": 358
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 358,
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
    "value": "let",
    "start": 383,
    "end": 386
  },
  {
    "type": "Identifier",
    "value": "a4",
    "start": 387,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "foo",
    "start": 392,
    "end": 395
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 395,
    "end": 396
  },
  {
    "type": "Identifier",
    "value": "x4",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 398,
    "end": 399
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 399,
    "end": 400
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 444,
    "end": 449
  },
  {
    "type": "Identifier",
    "value": "param2",
    "start": 450,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 457,
    "end": 458
  },
  {
    "type": "Identifier",
    "value": "Math",
    "start": 459,
    "end": 463
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 463,
    "end": 464
  },
  {
    "type": "Identifier",
    "value": "random",
    "start": 464,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 470,
    "end": 471
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 473,
    "end": 474
  },
  {
    "type": "Numeric",
    "value": "0.5",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 479,
    "end": 480
  },
  {
    "type": "String",
    "value": "'value2'",
    "start": 481,
    "end": 489
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 490,
    "end": 491
  },
  {
    "type": "Null",
    "value": "null",
    "start": 492,
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
    "value": "obj",
    "start": 505,
    "end": 508
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 509,
    "end": 510
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 511,
    "end": 512
  },
  {
    "type": "Identifier",
    "value": "param1",
    "start": 517,
    "end": 523
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 523,
    "end": 524
  },
  {
    "type": "String",
    "value": "'value1'",
    "start": 525,
    "end": 533
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 533,
    "end": 534
  },
  {
    "type": "Punctuator",
    "value": "...",
    "start": 539,
    "end": 542
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 542,
    "end": 543
  },
  {
    "type": "Identifier",
    "value": "param2",
    "start": 543,
    "end": 549
  },
  {
    "type": "Punctuator",
    "value": "?",
    "start": 550,
    "end": 551
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 552,
    "end": 553
  },
  {
    "type": "Identifier",
    "value": "param2",
    "start": 553,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 559,
    "end": 560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 563,
    "end": 564
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 564,
    "end": 565
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 565,
    "end": 566
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 567,
    "end": 568
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 568,
    "end": 569
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 571,
    "end": 576
  },
  {
    "type": "Identifier",
    "value": "query",
    "start": 577,
    "end": 582
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 583,
    "end": 584
  },
  {
    "type": "Identifier",
    "value": "Object",
    "start": 585,
    "end": 591
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 591,
    "end": 592
  },
  {
    "type": "Identifier",
    "value": "entries",
    "start": 592,
    "end": 599
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 599,
    "end": 600
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 600,
    "end": 603
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 603,
    "end": 604
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 604,
    "end": 605
  },
  {
    "type": "Identifier",
    "value": "map",
    "start": 605,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 608,
    "end": 609
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 614,
    "end": 615
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 615,
    "end": 616
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 616,
    "end": 617
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 617,
    "end": 618
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 619,
    "end": 620
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "=>",
    "start": 623,
    "end": 625
  },
  {
    "type": "Template",
    "value": "`${",
    "start": 626,
    "end": 629
  },
  {
    "type": "Identifier",
    "value": "k",
    "start": 629,
    "end": 630
  },
  {
    "type": "Template",
    "value": "}=${",
    "start": 630,
    "end": 634
  },
  {
    "type": "Identifier",
    "value": "encodeURIComponent",
    "start": 634,
    "end": 652
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 652,
    "end": 653
  },
  {
    "type": "Identifier",
    "value": "v",
    "start": 653,
    "end": 654
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 654,
    "end": 655
  },
  {
    "type": "Template",
    "value": "}`",
    "start": 655,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 658,
    "end": 659
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 659,
    "end": 660
  },
  {
    "type": "Identifier",
    "value": "join",
    "start": 660,
    "end": 664
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 664,
    "end": 665
  },
  {
    "type": "String",
    "value": "'&'",
    "start": 665,
    "end": 668
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 668,
    "end": 669
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 669,
    "end": 670
  }
]
```
