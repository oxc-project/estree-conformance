__ESTREE_TEST__:AST:
```json
{
  "type": "Program",
  "body": [
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 7
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
              "name": "a",
              "optional": false,
              "typeAnnotation": null,
              "start": 14,
              "end": 15
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 18,
                "end": 24
              },
              "start": 16,
              "end": 24
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 14,
            "end": 25
          }
        ],
        "start": 8,
        "end": 27
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 27
    },
    {
      "type": "ClassDeclaration",
      "decorators": [],
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "B",
        "optional": false,
        "typeAnnotation": null,
        "start": 34,
        "end": 35
      },
      "typeParameters": null,
      "superClass": {
        "type": "Identifier",
        "decorators": [],
        "name": "A",
        "optional": false,
        "typeAnnotation": null,
        "start": 44,
        "end": 45
      },
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
              "name": "b",
              "optional": false,
              "typeAnnotation": null,
              "start": 52,
              "end": 53
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 56,
                "end": 62
              },
              "start": 54,
              "end": 62
            },
            "value": null,
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": true,
            "readonly": false,
            "accessibility": null,
            "start": 52,
            "end": 63
          }
        ],
        "start": 46,
        "end": 65
      },
      "abstract": false,
      "declare": false,
      "start": 28,
      "end": 65
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Compass",
        "optional": false,
        "typeAnnotation": null,
        "start": 71,
        "end": 78
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "North",
              "optional": false,
              "typeAnnotation": null,
              "start": 85,
              "end": 90
            },
            "initializer": null,
            "computed": false,
            "start": 85,
            "end": 90
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "South",
              "optional": false,
              "typeAnnotation": null,
              "start": 92,
              "end": 97
            },
            "initializer": null,
            "computed": false,
            "start": 92,
            "end": 97
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "East",
              "optional": false,
              "typeAnnotation": null,
              "start": 99,
              "end": 103
            },
            "initializer": null,
            "computed": false,
            "start": 99,
            "end": 103
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "West",
              "optional": false,
              "typeAnnotation": null,
              "start": 105,
              "end": 109
            },
            "initializer": null,
            "computed": false,
            "start": 105,
            "end": 109
          }
        ],
        "start": 79,
        "end": 111
      },
      "const": false,
      "declare": false,
      "start": 66,
      "end": 111
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
            "name": "numIndex",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 133,
                            "end": 139
                          },
                          "start": 131,
                          "end": 139
                        },
                        "start": 130,
                        "end": 139
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 142,
                        "end": 148
                      },
                      "start": 140,
                      "end": 148
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 129,
                    "end": 148
                  }
                ],
                "start": 127,
                "end": 150
              },
              "start": 125,
              "end": 150
            },
            "start": 117,
            "end": 150
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 3,
                  "raw": "3",
                  "start": 155,
                  "end": 156
                },
                "value": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 158,
                  "end": 165
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 155,
                "end": 165
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 167,
                  "end": 174
                },
                "value": {
                  "type": "Literal",
                  "value": "three",
                  "raw": "'three'",
                  "start": 176,
                  "end": 183
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 167,
                "end": 183
              }
            ],
            "start": 153,
            "end": 185
          },
          "definite": false,
          "start": 117,
          "end": 185
        }
      ],
      "declare": false,
      "start": 113,
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
            "name": "strIndex",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 207,
                            "end": 213
                          },
                          "start": 205,
                          "end": 213
                        },
                        "start": 204,
                        "end": 213
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "Compass",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 216,
                          "end": 223
                        },
                        "typeArguments": null,
                        "start": 216,
                        "end": 223
                      },
                      "start": 214,
                      "end": 223
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 203,
                    "end": 223
                  }
                ],
                "start": 201,
                "end": 225
              },
              "start": 199,
              "end": 225
            },
            "start": 191,
            "end": 225
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "N",
                  "raw": "'N'",
                  "start": 230,
                  "end": 233
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Compass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 235,
                    "end": 242
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "North",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 243,
                    "end": 248
                  },
                  "optional": false,
                  "computed": false,
                  "start": 235,
                  "end": 248
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 230,
                "end": 248
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "E",
                  "raw": "'E'",
                  "start": 250,
                  "end": 253
                },
                "value": {
                  "type": "MemberExpression",
                  "object": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Compass",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 255,
                    "end": 262
                  },
                  "property": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "East",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 263,
                    "end": 267
                  },
                  "optional": false,
                  "computed": false,
                  "start": 255,
                  "end": 267
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 250,
                "end": 267
              }
            ],
            "start": 228,
            "end": 269
          },
          "definite": false,
          "start": 191,
          "end": 269
        }
      ],
      "declare": false,
      "start": 187,
      "end": 270
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
            "name": "bothIndex",
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSStringKeyword",
                            "start": 312,
                            "end": 318
                          },
                          "start": 310,
                          "end": 318
                        },
                        "start": 309,
                        "end": 318
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "A",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 321,
                          "end": 322
                        },
                        "typeArguments": null,
                        "start": 321,
                        "end": 322
                      },
                      "start": 319,
                      "end": 322
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 308,
                    "end": 323
                  },
                  {
                    "type": "TSIndexSignature",
                    "parameters": [
                      {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": {
                          "type": "TSTypeAnnotation",
                          "typeAnnotation": {
                            "type": "TSNumberKeyword",
                            "start": 336,
                            "end": 342
                          },
                          "start": 334,
                          "end": 342
                        },
                        "start": 333,
                        "end": 342
                      }
                    ],
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSTypeReference",
                        "typeName": {
                          "type": "Identifier",
                          "decorators": [],
                          "name": "B",
                          "optional": false,
                          "typeAnnotation": null,
                          "start": 345,
                          "end": 346
                        },
                        "typeArguments": null,
                        "start": 345,
                        "end": 346
                      },
                      "start": 343,
                      "end": 346
                    },
                    "readonly": false,
                    "static": false,
                    "accessibility": null,
                    "start": 332,
                    "end": 347
                  }
                ],
                "start": 298,
                "end": 353
              },
              "start": 292,
              "end": 353
            },
            "start": 283,
            "end": 353
          },
          "init": null,
          "definite": false,
          "start": 283,
          "end": 353
        }
      ],
      "declare": true,
      "start": 271,
      "end": 354
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "noIndex",
        "optional": false,
        "typeAnnotation": null,
        "start": 365,
        "end": 372
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [],
        "start": 375,
        "end": 378
      },
      "expression": false,
      "start": 356,
      "end": 378
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
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 384,
            "end": 387
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": 10,
                  "raw": "10",
                  "start": 396,
                  "end": 398
                },
                "value": {
                  "type": "Literal",
                  "value": "ten",
                  "raw": "'ten'",
                  "start": 400,
                  "end": 405
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 396,
                "end": 405
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "x",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 411,
                  "end": 412
                },
                "value": {
                  "type": "Literal",
                  "value": "hello",
                  "raw": "'hello'",
                  "start": 414,
                  "end": 421
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 411,
                "end": 421
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
                  "start": 427,
                  "end": 428
                },
                "value": {
                  "type": "Literal",
                  "value": 32,
                  "raw": "32",
                  "start": 430,
                  "end": 432
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 427,
                "end": 432
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "z",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 438,
                  "end": 439
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
                        "name": "n",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 443,
                        "end": 444
                      },
                      "value": {
                        "type": "Literal",
                        "value": "world",
                        "raw": "'world'",
                        "start": 446,
                        "end": 453
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 443,
                      "end": 453
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "m",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 455,
                        "end": 456
                      },
                      "value": {
                        "type": "Literal",
                        "value": 15,
                        "raw": "15",
                        "start": 458,
                        "end": 460
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 455,
                      "end": 460
                    },
                    {
                      "type": "Property",
                      "kind": "init",
                      "key": {
                        "type": "Identifier",
                        "decorators": [],
                        "name": "o",
                        "optional": false,
                        "typeAnnotation": null,
                        "start": 462,
                        "end": 463
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
                          "value": false,
                          "raw": "false",
                          "start": 471,
                          "end": 476
                        },
                        "id": null,
                        "generator": false,
                        "start": 465,
                        "end": 476
                      },
                      "method": false,
                      "shorthand": false,
                      "computed": false,
                      "optional": false,
                      "start": 462,
                      "end": 476
                    }
                  ],
                  "start": 441,
                  "end": 478
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 438,
                "end": 478
              },
              {
                "type": "Property",
                "kind": "init",
                "key": {
                  "type": "Literal",
                  "value": "literal property",
                  "raw": "'literal property'",
                  "start": 484,
                  "end": 502
                },
                "value": {
                  "type": "Literal",
                  "value": 100,
                  "raw": "100",
                  "start": 504,
                  "end": 507
                },
                "method": false,
                "shorthand": false,
                "computed": false,
                "optional": false,
                "start": 484,
                "end": 507
              }
            ],
            "start": 390,
            "end": 509
          },
          "definite": false,
          "start": 384,
          "end": 509
        }
      ],
      "declare": false,
      "start": 380,
      "end": 510
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
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 523,
                "end": 526
              },
              "start": 521,
              "end": 526
            },
            "start": 515,
            "end": 526
          },
          "init": {
            "type": "ObjectExpression",
            "properties": [],
            "start": 529,
            "end": 531
          },
          "definite": false,
          "start": 515,
          "end": 531
        }
      ],
      "declare": false,
      "start": 511,
      "end": 532
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
            "name": "stringOrNumber",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSUnionType",
                "types": [
                  {
                    "type": "TSStringKeyword",
                    "start": 561,
                    "end": 567
                  },
                  {
                    "type": "TSNumberKeyword",
                    "start": 570,
                    "end": 576
                  }
                ],
                "start": 561,
                "end": 576
              },
              "start": 559,
              "end": 576
            },
            "start": 545,
            "end": 576
          },
          "init": null,
          "definite": false,
          "start": 545,
          "end": 576
        }
      ],
      "declare": true,
      "start": 533,
      "end": 577
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
            "name": "someObject",
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
                      "name": "name",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 604,
                      "end": 608
                    },
                    "typeAnnotation": {
                      "type": "TSTypeAnnotation",
                      "typeAnnotation": {
                        "type": "TSStringKeyword",
                        "start": 610,
                        "end": 616
                      },
                      "start": 608,
                      "end": 616
                    },
                    "accessibility": null,
                    "static": false,
                    "start": 604,
                    "end": 616
                  }
                ],
                "start": 602,
                "end": 618
              },
              "start": 600,
              "end": 618
            },
            "start": 590,
            "end": 618
          },
          "init": null,
          "definite": false,
          "start": 590,
          "end": 618
        }
      ],
      "declare": true,
      "start": 578,
      "end": 619
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "obj",
            "optional": false,
            "typeAnnotation": null,
            "start": 652,
            "end": 655
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "y",
            "optional": false,
            "typeAnnotation": null,
            "start": 656,
            "end": 657
          },
          "optional": false,
          "computed": false,
          "start": 652,
          "end": 657
        },
        "right": {
          "type": "Literal",
          "value": 4,
          "raw": "4",
          "start": 660,
          "end": 661
        },
        "start": 652,
        "end": 661
      },
      "directive": null,
      "start": 652,
      "end": 662
    },
    {
      "type": "ExpressionStatement",
      "expression": {
        "type": "AssignmentExpression",
        "operator": "=",
        "left": {
          "type": "MemberExpression",
          "object": {
            "type": "Identifier",
            "decorators": [],
            "name": "anyVar",
            "optional": false,
            "typeAnnotation": null,
            "start": 706,
            "end": 712
          },
          "property": {
            "type": "Identifier",
            "decorators": [],
            "name": "x",
            "optional": false,
            "typeAnnotation": null,
            "start": 713,
            "end": 714
          },
          "optional": false,
          "computed": false,
          "start": 706,
          "end": 714
        },
        "right": {
          "type": "AssignmentExpression",
          "operator": "=",
          "left": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 717,
              "end": 723
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "y",
              "optional": false,
              "typeAnnotation": null,
              "start": 724,
              "end": 725
            },
            "optional": false,
            "computed": false,
            "start": 717,
            "end": 725
          },
          "right": {
            "type": "AssignmentExpression",
            "operator": "=",
            "left": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "obj",
                "optional": false,
                "typeAnnotation": null,
                "start": 728,
                "end": 731
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "x",
                "optional": false,
                "typeAnnotation": null,
                "start": 732,
                "end": 733
              },
              "optional": false,
              "computed": false,
              "start": 728,
              "end": 733
            },
            "right": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "anyVar",
                "optional": false,
                "typeAnnotation": null,
                "start": 736,
                "end": 742
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "z",
                "optional": false,
                "typeAnnotation": null,
                "start": 743,
                "end": 744
              },
              "optional": false,
              "computed": false,
              "start": 736,
              "end": 744
            },
            "start": 728,
            "end": 744
          },
          "start": 717,
          "end": 744
        },
        "start": 706,
        "end": 744
      },
      "directive": null,
      "start": 706,
      "end": 745
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
            "name": "aa",
            "optional": false,
            "typeAnnotation": null,
            "start": 801,
            "end": 803
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 806,
              "end": 809
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "x",
              "optional": false,
              "typeAnnotation": null,
              "start": 810,
              "end": 811
            },
            "optional": false,
            "computed": false,
            "start": 806,
            "end": 811
          },
          "definite": false,
          "start": 801,
          "end": 811
        }
      ],
      "declare": false,
      "start": 797,
      "end": 812
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
            "name": "bb",
            "optional": false,
            "typeAnnotation": null,
            "start": 893,
            "end": 895
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 898,
              "end": 901
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "hasOwnProperty",
              "optional": false,
              "typeAnnotation": null,
              "start": 902,
              "end": 916
            },
            "optional": false,
            "computed": false,
            "start": 898,
            "end": 916
          },
          "definite": false,
          "start": 893,
          "end": 916
        }
      ],
      "declare": false,
      "start": 889,
      "end": 917
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
            "name": "cc",
            "optional": false,
            "typeAnnotation": null,
            "start": 1005,
            "end": 1007
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1010,
              "end": 1013
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "qqq",
              "optional": false,
              "typeAnnotation": null,
              "start": 1014,
              "end": 1017
            },
            "optional": false,
            "computed": false,
            "start": 1010,
            "end": 1017
          },
          "definite": false,
          "start": 1005,
          "end": 1017
        }
      ],
      "declare": false,
      "start": 1001,
      "end": 1018
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
            "name": "dd",
            "optional": false,
            "typeAnnotation": null,
            "start": 1139,
            "end": 1141
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1144,
              "end": 1147
            },
            "property": {
              "type": "Literal",
              "value": "literal property",
              "raw": "'literal property'",
              "start": 1148,
              "end": 1166
            },
            "optional": false,
            "computed": true,
            "start": 1144,
            "end": 1167
          },
          "definite": false,
          "start": 1139,
          "end": 1167
        }
      ],
      "declare": false,
      "start": 1135,
      "end": 1168
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
            "name": "dd",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 1177,
                "end": 1183
              },
              "start": 1175,
              "end": 1183
            },
            "start": 1173,
            "end": 1183
          },
          "init": null,
          "definite": false,
          "start": 1173,
          "end": 1183
        }
      ],
      "declare": false,
      "start": 1169,
      "end": 1184
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
            "name": "ee",
            "optional": false,
            "typeAnnotation": null,
            "start": 1299,
            "end": 1301
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1304,
              "end": 1307
            },
            "property": {
              "type": "Literal",
              "value": "wa wa wa wa wa",
              "raw": "'wa wa wa wa wa'",
              "start": 1308,
              "end": 1324
            },
            "optional": false,
            "computed": true,
            "start": 1304,
            "end": 1325
          },
          "definite": false,
          "start": 1299,
          "end": 1325
        }
      ],
      "declare": false,
      "start": 1295,
      "end": 1326
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
            "name": "ee",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1335,
                "end": 1338
              },
              "start": 1333,
              "end": 1338
            },
            "start": 1331,
            "end": 1338
          },
          "init": null,
          "definite": false,
          "start": 1331,
          "end": 1338
        }
      ],
      "declare": false,
      "start": 1327,
      "end": 1339
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
            "name": "ff",
            "optional": false,
            "typeAnnotation": null,
            "start": 1459,
            "end": 1461
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1464,
              "end": 1467
            },
            "property": {
              "type": "Literal",
              "value": "10",
              "raw": "'10'",
              "start": 1468,
              "end": 1472
            },
            "optional": false,
            "computed": true,
            "start": 1464,
            "end": 1473
          },
          "definite": false,
          "start": 1459,
          "end": 1473
        }
      ],
      "declare": false,
      "start": 1455,
      "end": 1474
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
            "name": "ff",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1483,
                "end": 1489
              },
              "start": 1481,
              "end": 1489
            },
            "start": 1479,
            "end": 1489
          },
          "init": null,
          "definite": false,
          "start": 1479,
          "end": 1489
        }
      ],
      "declare": false,
      "start": 1475,
      "end": 1490
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
            "name": "gg",
            "optional": false,
            "typeAnnotation": null,
            "start": 1613,
            "end": 1615
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "obj",
              "optional": false,
              "typeAnnotation": null,
              "start": 1618,
              "end": 1621
            },
            "property": {
              "type": "Literal",
              "value": "1",
              "raw": "'1'",
              "start": 1622,
              "end": 1625
            },
            "optional": false,
            "computed": true,
            "start": 1618,
            "end": 1626
          },
          "definite": false,
          "start": 1613,
          "end": 1626
        }
      ],
      "declare": false,
      "start": 1609,
      "end": 1627
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
            "name": "gg",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 1636,
                "end": 1639
              },
              "start": 1634,
              "end": 1639
            },
            "start": 1632,
            "end": 1639
          },
          "init": null,
          "definite": false,
          "start": 1632,
          "end": 1639
        }
      ],
      "declare": false,
      "start": 1628,
      "end": 1640
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
            "name": "hh",
            "optional": false,
            "typeAnnotation": null,
            "start": 1739,
            "end": 1741
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1744,
              "end": 1752
            },
            "property": {
              "type": "Literal",
              "value": 3,
              "raw": "3.0",
              "start": 1753,
              "end": 1756
            },
            "optional": false,
            "computed": true,
            "start": 1744,
            "end": 1757
          },
          "definite": false,
          "start": 1739,
          "end": 1757
        }
      ],
      "declare": false,
      "start": 1735,
      "end": 1758
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
            "name": "hh",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1767,
                "end": 1773
              },
              "start": 1765,
              "end": 1773
            },
            "start": 1763,
            "end": 1773
          },
          "init": null,
          "definite": false,
          "start": 1763,
          "end": 1773
        }
      ],
      "declare": false,
      "start": 1759,
      "end": 1774
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
            "name": "ii",
            "optional": false,
            "typeAnnotation": null,
            "start": 1870,
            "end": 1872
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 1875,
              "end": 1883
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 1884,
                "end": 1891
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "South",
                "optional": false,
                "typeAnnotation": null,
                "start": 1892,
                "end": 1897
              },
              "optional": false,
              "computed": false,
              "start": 1884,
              "end": 1897
            },
            "optional": false,
            "computed": true,
            "start": 1875,
            "end": 1898
          },
          "definite": false,
          "start": 1870,
          "end": 1898
        }
      ],
      "declare": false,
      "start": 1866,
      "end": 1899
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
            "name": "ii",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 1908,
                "end": 1914
              },
              "start": 1906,
              "end": 1914
            },
            "start": 1904,
            "end": 1914
          },
          "init": null,
          "definite": false,
          "start": 1904,
          "end": 1914
        }
      ],
      "declare": false,
      "start": 1900,
      "end": 1915
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
            "name": "jj",
            "optional": false,
            "typeAnnotation": null,
            "start": 2020,
            "end": 2022
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2025,
              "end": 2033
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "anyVar",
              "optional": false,
              "typeAnnotation": null,
              "start": 2034,
              "end": 2040
            },
            "optional": false,
            "computed": true,
            "start": 2025,
            "end": 2041
          },
          "definite": false,
          "start": 2020,
          "end": 2041
        }
      ],
      "declare": false,
      "start": 2016,
      "end": 2042
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
            "name": "jj",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 2051,
                "end": 2057
              },
              "start": 2049,
              "end": 2057
            },
            "start": 2047,
            "end": 2057
          },
          "init": null,
          "definite": false,
          "start": 2047,
          "end": 2057
        }
      ],
      "declare": false,
      "start": 2043,
      "end": 2058
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
            "name": "kk",
            "optional": false,
            "typeAnnotation": null,
            "start": 2156,
            "end": 2158
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2161,
              "end": 2169
            },
            "property": {
              "type": "Literal",
              "value": "what",
              "raw": "'what'",
              "start": 2170,
              "end": 2176
            },
            "optional": false,
            "computed": true,
            "start": 2161,
            "end": 2177
          },
          "definite": false,
          "start": 2156,
          "end": 2177
        }
      ],
      "declare": false,
      "start": 2152,
      "end": 2178
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
            "name": "kk",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 2187,
                "end": 2190
              },
              "start": 2185,
              "end": 2190
            },
            "start": 2183,
            "end": 2190
          },
          "init": null,
          "definite": false,
          "start": 2183,
          "end": 2190
        }
      ],
      "declare": false,
      "start": 2179,
      "end": 2191
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
            "name": "ll",
            "optional": false,
            "typeAnnotation": null,
            "start": 2326,
            "end": 2328
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2331,
              "end": 2339
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 2340,
              "end": 2350
            },
            "optional": false,
            "computed": true,
            "start": 2331,
            "end": 2351
          },
          "definite": false,
          "start": 2326,
          "end": 2351
        }
      ],
      "declare": false,
      "start": 2322,
      "end": 2352
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
            "name": "mm",
            "optional": false,
            "typeAnnotation": null,
            "start": 2489,
            "end": 2491
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2494,
              "end": 2502
            },
            "property": {
              "type": "Literal",
              "value": "N",
              "raw": "'N'",
              "start": 2503,
              "end": 2506
            },
            "optional": false,
            "computed": true,
            "start": 2494,
            "end": 2507
          },
          "definite": false,
          "start": 2489,
          "end": 2507
        }
      ],
      "declare": false,
      "start": 2485,
      "end": 2508
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
            "name": "mm",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2517,
                  "end": 2524
                },
                "typeArguments": null,
                "start": 2517,
                "end": 2524
              },
              "start": 2515,
              "end": 2524
            },
            "start": 2513,
            "end": 2524
          },
          "init": null,
          "definite": false,
          "start": 2513,
          "end": 2524
        }
      ],
      "declare": false,
      "start": 2509,
      "end": 2525
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
            "name": "mm2",
            "optional": false,
            "typeAnnotation": null,
            "start": 2530,
            "end": 2533
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2536,
              "end": 2544
            },
            "property": {
              "type": "Literal",
              "value": "zzz",
              "raw": "'zzz'",
              "start": 2545,
              "end": 2550
            },
            "optional": false,
            "computed": true,
            "start": 2536,
            "end": 2551
          },
          "definite": false,
          "start": 2530,
          "end": 2551
        }
      ],
      "declare": false,
      "start": 2526,
      "end": 2552
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
            "name": "mm2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2562,
                  "end": 2569
                },
                "typeArguments": null,
                "start": 2562,
                "end": 2569
              },
              "start": 2560,
              "end": 2569
            },
            "start": 2557,
            "end": 2569
          },
          "init": null,
          "definite": false,
          "start": 2557,
          "end": 2569
        }
      ],
      "declare": false,
      "start": 2553,
      "end": 2570
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
            "name": "nn",
            "optional": false,
            "typeAnnotation": null,
            "start": 2699,
            "end": 2701
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2704,
              "end": 2712
            },
            "property": {
              "type": "Literal",
              "value": 10,
              "raw": "10",
              "start": 2713,
              "end": 2715
            },
            "optional": false,
            "computed": true,
            "start": 2704,
            "end": 2716
          },
          "definite": false,
          "start": 2699,
          "end": 2716
        }
      ],
      "declare": false,
      "start": 2695,
      "end": 2717
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
            "name": "nn",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2726,
                  "end": 2733
                },
                "typeArguments": null,
                "start": 2726,
                "end": 2733
              },
              "start": 2724,
              "end": 2733
            },
            "start": 2722,
            "end": 2733
          },
          "init": null,
          "definite": false,
          "start": 2722,
          "end": 2733
        }
      ],
      "declare": false,
      "start": 2718,
      "end": 2734
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
            "name": "oo",
            "optional": false,
            "typeAnnotation": null,
            "start": 2860,
            "end": 2862
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 2865,
              "end": 2873
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 2874,
                "end": 2881
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "East",
                "optional": false,
                "typeAnnotation": null,
                "start": 2882,
                "end": 2886
              },
              "optional": false,
              "computed": false,
              "start": 2874,
              "end": 2886
            },
            "optional": false,
            "computed": true,
            "start": 2865,
            "end": 2887
          },
          "definite": false,
          "start": 2860,
          "end": 2887
        }
      ],
      "declare": false,
      "start": 2856,
      "end": 2888
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
            "name": "oo",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 2897,
                  "end": 2904
                },
                "typeArguments": null,
                "start": 2897,
                "end": 2904
              },
              "start": 2895,
              "end": 2904
            },
            "start": 2893,
            "end": 2904
          },
          "init": null,
          "definite": false,
          "start": 2893,
          "end": 2904
        }
      ],
      "declare": false,
      "start": 2889,
      "end": 2905
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
            "name": "pp",
            "optional": false,
            "typeAnnotation": null,
            "start": 3040,
            "end": 3042
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3045,
              "end": 3053
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3055,
                "end": 3058
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3059,
                "end": 3063
              },
              "start": 3054,
              "end": 3063
            },
            "optional": false,
            "computed": true,
            "start": 3045,
            "end": 3064
          },
          "definite": false,
          "start": 3040,
          "end": 3064
        }
      ],
      "declare": false,
      "start": 3036,
      "end": 3065
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
            "name": "pp",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 3074,
                  "end": 3081
                },
                "typeArguments": null,
                "start": 3074,
                "end": 3081
              },
              "start": 3072,
              "end": 3081
            },
            "start": 3070,
            "end": 3081
          },
          "init": null,
          "definite": false,
          "start": 3070,
          "end": 3081
        }
      ],
      "declare": false,
      "start": 3066,
      "end": 3082
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": null,
            "start": 3177,
            "end": 3179
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3182,
              "end": 3189
            },
            "property": {
              "type": "Literal",
              "value": 123,
              "raw": "123",
              "start": 3190,
              "end": 3193
            },
            "optional": false,
            "computed": true,
            "start": 3182,
            "end": 3194
          },
          "definite": false,
          "start": 3177,
          "end": 3194
        }
      ],
      "declare": false,
      "start": 3173,
      "end": 3195
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
            "name": "qq",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3204,
                "end": 3207
              },
              "start": 3202,
              "end": 3207
            },
            "start": 3200,
            "end": 3207
          },
          "init": null,
          "definite": false,
          "start": 3200,
          "end": 3207
        }
      ],
      "declare": false,
      "start": 3196,
      "end": 3208
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
            "name": "rr",
            "optional": false,
            "typeAnnotation": null,
            "start": 3302,
            "end": 3304
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3307,
              "end": 3314
            },
            "property": {
              "type": "Literal",
              "value": "zzzz",
              "raw": "'zzzz'",
              "start": 3315,
              "end": 3321
            },
            "optional": false,
            "computed": true,
            "start": 3307,
            "end": 3322
          },
          "definite": false,
          "start": 3302,
          "end": 3322
        }
      ],
      "declare": false,
      "start": 3298,
      "end": 3323
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
            "name": "rr",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3332,
                "end": 3335
              },
              "start": 3330,
              "end": 3335
            },
            "start": 3328,
            "end": 3335
          },
          "init": null,
          "definite": false,
          "start": 3328,
          "end": 3335
        }
      ],
      "declare": false,
      "start": 3324,
      "end": 3336
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
            "name": "ss",
            "optional": false,
            "typeAnnotation": null,
            "start": 3428,
            "end": 3430
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3433,
              "end": 3440
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 3441,
                "end": 3448
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "South",
                "optional": false,
                "typeAnnotation": null,
                "start": 3449,
                "end": 3454
              },
              "optional": false,
              "computed": false,
              "start": 3441,
              "end": 3454
            },
            "optional": false,
            "computed": true,
            "start": 3433,
            "end": 3455
          },
          "definite": false,
          "start": 3428,
          "end": 3455
        }
      ],
      "declare": false,
      "start": 3424,
      "end": 3456
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
            "name": "ss",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3465,
                "end": 3468
              },
              "start": 3463,
              "end": 3468
            },
            "start": 3461,
            "end": 3468
          },
          "init": null,
          "definite": false,
          "start": 3461,
          "end": 3468
        }
      ],
      "declare": false,
      "start": 3457,
      "end": 3469
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
            "name": "tt",
            "optional": false,
            "typeAnnotation": null,
            "start": 3570,
            "end": 3572
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3575,
              "end": 3582
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3584,
                "end": 3587
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 3588,
                "end": 3592
              },
              "start": 3583,
              "end": 3592
            },
            "optional": false,
            "computed": true,
            "start": 3575,
            "end": 3593
          },
          "definite": false,
          "start": 3570,
          "end": 3593
        }
      ],
      "declare": false,
      "start": 3566,
      "end": 3594
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
            "name": "tt",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3603,
                "end": 3606
              },
              "start": 3601,
              "end": 3606
            },
            "start": 3599,
            "end": 3606
          },
          "init": null,
          "definite": false,
          "start": 3599,
          "end": 3606
        }
      ],
      "declare": false,
      "start": 3595,
      "end": 3607
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
            "name": "uu",
            "optional": false,
            "typeAnnotation": null,
            "start": 3710,
            "end": 3712
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3715,
              "end": 3722
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 3723,
              "end": 3733
            },
            "optional": false,
            "computed": true,
            "start": 3715,
            "end": 3734
          },
          "definite": false,
          "start": 3710,
          "end": 3734
        }
      ],
      "declare": false,
      "start": 3706,
      "end": 3735
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
            "name": "vv",
            "optional": false,
            "typeAnnotation": null,
            "start": 3870,
            "end": 3872
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "noIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 3875,
              "end": 3882
            },
            "property": {
              "type": "Literal",
              "value": 32,
              "raw": "32",
              "start": 3883,
              "end": 3885
            },
            "optional": false,
            "computed": true,
            "start": 3875,
            "end": 3886
          },
          "definite": false,
          "start": 3870,
          "end": 3886
        }
      ],
      "declare": false,
      "start": 3866,
      "end": 3887
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
            "name": "vv",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 3896,
                "end": 3899
              },
              "start": 3894,
              "end": 3899
            },
            "start": 3892,
            "end": 3899
          },
          "init": null,
          "definite": false,
          "start": 3892,
          "end": 3899
        }
      ],
      "declare": false,
      "start": 3888,
      "end": 3900
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
            "name": "ww",
            "optional": false,
            "typeAnnotation": null,
            "start": 4023,
            "end": 4025
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4028,
              "end": 4037
            },
            "property": {
              "type": "MemberExpression",
              "object": {
                "type": "Identifier",
                "decorators": [],
                "name": "Compass",
                "optional": false,
                "typeAnnotation": null,
                "start": 4038,
                "end": 4045
              },
              "property": {
                "type": "Identifier",
                "decorators": [],
                "name": "East",
                "optional": false,
                "typeAnnotation": null,
                "start": 4046,
                "end": 4050
              },
              "optional": false,
              "computed": false,
              "start": 4038,
              "end": 4050
            },
            "optional": false,
            "computed": true,
            "start": 4028,
            "end": 4051
          },
          "definite": false,
          "start": 4023,
          "end": 4051
        }
      ],
      "declare": false,
      "start": 4019,
      "end": 4052
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
            "name": "ww",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4061,
                  "end": 4062
                },
                "typeArguments": null,
                "start": 4061,
                "end": 4062
              },
              "start": 4059,
              "end": 4062
            },
            "start": 4057,
            "end": 4062
          },
          "init": null,
          "definite": false,
          "start": 4057,
          "end": 4062
        }
      ],
      "declare": false,
      "start": 4053,
      "end": 4063
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": null,
            "start": 4195,
            "end": 4197
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4200,
              "end": 4209
            },
            "property": {
              "type": "TSTypeAssertion",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4211,
                "end": 4214
              },
              "expression": {
                "type": "Literal",
                "value": null,
                "raw": "null",
                "start": 4215,
                "end": 4219
              },
              "start": 4210,
              "end": 4219
            },
            "optional": false,
            "computed": true,
            "start": 4200,
            "end": 4220
          },
          "definite": false,
          "start": 4195,
          "end": 4220
        }
      ],
      "declare": false,
      "start": 4191,
      "end": 4221
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
            "name": "xx",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "B",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4230,
                  "end": 4231
                },
                "typeArguments": null,
                "start": 4230,
                "end": 4231
              },
              "start": 4228,
              "end": 4231
            },
            "start": 4226,
            "end": 4231
          },
          "init": null,
          "definite": false,
          "start": 4226,
          "end": 4231
        }
      ],
      "declare": false,
      "start": 4222,
      "end": 4232
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": null,
            "start": 4357,
            "end": 4359
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4362,
              "end": 4371
            },
            "property": {
              "type": "Literal",
              "value": "foo",
              "raw": "'foo'",
              "start": 4372,
              "end": 4377
            },
            "optional": false,
            "computed": true,
            "start": 4362,
            "end": 4378
          },
          "definite": false,
          "start": 4357,
          "end": 4378
        }
      ],
      "declare": false,
      "start": 4353,
      "end": 4379
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
            "name": "yy",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4388,
                  "end": 4389
                },
                "typeArguments": null,
                "start": 4388,
                "end": 4389
              },
              "start": 4386,
              "end": 4389
            },
            "start": 4384,
            "end": 4389
          },
          "init": null,
          "definite": false,
          "start": 4384,
          "end": 4389
        }
      ],
      "declare": false,
      "start": 4380,
      "end": 4390
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": null,
            "start": 4523,
            "end": 4525
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4528,
              "end": 4537
            },
            "property": {
              "type": "Literal",
              "value": "1.0",
              "raw": "'1.0'",
              "start": 4538,
              "end": 4543
            },
            "optional": false,
            "computed": true,
            "start": 4528,
            "end": 4544
          },
          "definite": false,
          "start": 4523,
          "end": 4544
        }
      ],
      "declare": false,
      "start": 4519,
      "end": 4545
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
            "name": "zz",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4554,
                  "end": 4555
                },
                "typeArguments": null,
                "start": 4554,
                "end": 4555
              },
              "start": 4552,
              "end": 4555
            },
            "start": 4550,
            "end": 4555
          },
          "init": null,
          "definite": false,
          "start": 4550,
          "end": 4555
        }
      ],
      "declare": false,
      "start": 4546,
      "end": 4556
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
            "name": "zzzz",
            "optional": false,
            "typeAnnotation": null,
            "start": 4718,
            "end": 4722
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4725,
              "end": 4734
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "someObject",
              "optional": false,
              "typeAnnotation": null,
              "start": 4735,
              "end": 4745
            },
            "optional": false,
            "computed": true,
            "start": 4725,
            "end": 4746
          },
          "definite": false,
          "start": 4718,
          "end": 4746
        }
      ],
      "declare": false,
      "start": 4714,
      "end": 4747
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": null,
            "start": 4762,
            "end": 4764
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "numIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4767,
              "end": 4775
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4776,
              "end": 4790
            },
            "optional": false,
            "computed": true,
            "start": 4767,
            "end": 4791
          },
          "definite": false,
          "start": 4762,
          "end": 4791
        }
      ],
      "declare": false,
      "start": 4758,
      "end": 4792
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
            "name": "x1",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSAnyKeyword",
                "start": 4801,
                "end": 4804
              },
              "start": 4799,
              "end": 4804
            },
            "start": 4797,
            "end": 4804
          },
          "init": null,
          "definite": false,
          "start": 4797,
          "end": 4804
        }
      ],
      "declare": false,
      "start": 4793,
      "end": 4805
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": null,
            "start": 4811,
            "end": 4813
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "strIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4816,
              "end": 4824
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4825,
              "end": 4839
            },
            "optional": false,
            "computed": true,
            "start": 4816,
            "end": 4840
          },
          "definite": false,
          "start": 4811,
          "end": 4840
        }
      ],
      "declare": false,
      "start": 4807,
      "end": 4841
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
            "name": "x2",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "Compass",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4850,
                  "end": 4857
                },
                "typeArguments": null,
                "start": 4850,
                "end": 4857
              },
              "start": 4848,
              "end": 4857
            },
            "start": 4846,
            "end": 4857
          },
          "init": null,
          "definite": false,
          "start": 4846,
          "end": 4857
        }
      ],
      "declare": false,
      "start": 4842,
      "end": 4858
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": null,
            "start": 4864,
            "end": 4866
          },
          "init": {
            "type": "MemberExpression",
            "object": {
              "type": "Identifier",
              "decorators": [],
              "name": "bothIndex",
              "optional": false,
              "typeAnnotation": null,
              "start": 4869,
              "end": 4878
            },
            "property": {
              "type": "Identifier",
              "decorators": [],
              "name": "stringOrNumber",
              "optional": false,
              "typeAnnotation": null,
              "start": 4879,
              "end": 4893
            },
            "optional": false,
            "computed": true,
            "start": 4869,
            "end": 4894
          },
          "definite": false,
          "start": 4864,
          "end": 4894
        }
      ],
      "declare": false,
      "start": 4860,
      "end": 4895
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
            "name": "x3",
            "optional": false,
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSTypeReference",
                "typeName": {
                  "type": "Identifier",
                  "decorators": [],
                  "name": "A",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 4904,
                  "end": 4905
                },
                "typeArguments": null,
                "start": 4904,
                "end": 4905
              },
              "start": 4902,
              "end": 4905
            },
            "start": 4900,
            "end": 4905
          },
          "init": null,
          "definite": false,
          "start": 4900,
          "end": 4905
        }
      ],
      "declare": false,
      "start": 4896,
      "end": 4906
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 4906
}
```
__ESTREE_TEST__:TOKENS:
```json
[
  {
    "type": "Keyword",
    "value": "class",
    "start": 0,
    "end": 5
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 6,
    "end": 7
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 8,
    "end": 9
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 14,
    "end": 15
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 15,
    "end": 16
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 16,
    "end": 17
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 18,
    "end": 24
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 24,
    "end": 25
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 26,
    "end": 27
  },
  {
    "type": "Keyword",
    "value": "class",
    "start": 28,
    "end": 33
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 34,
    "end": 35
  },
  {
    "type": "Keyword",
    "value": "extends",
    "start": 36,
    "end": 43
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 44,
    "end": 45
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 46,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "b",
    "start": 52,
    "end": 53
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 53,
    "end": 54
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 54,
    "end": 55
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 56,
    "end": 62
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 62,
    "end": 63
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 64,
    "end": 65
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 66,
    "end": 70
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 71,
    "end": 78
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 79,
    "end": 80
  },
  {
    "type": "Identifier",
    "value": "North",
    "start": 85,
    "end": 90
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 90,
    "end": 91
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 92,
    "end": 97
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 97,
    "end": 98
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 99,
    "end": 103
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 103,
    "end": 104
  },
  {
    "type": "Identifier",
    "value": "West",
    "start": 105,
    "end": 109
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 110,
    "end": 111
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 113,
    "end": 116
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 117,
    "end": 125
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 125,
    "end": 126
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 127,
    "end": 128
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 129,
    "end": 130
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 130,
    "end": 131
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 133,
    "end": 139
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 139,
    "end": 140
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 140,
    "end": 141
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 142,
    "end": 148
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 149,
    "end": 150
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 151,
    "end": 152
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 153,
    "end": 154
  },
  {
    "type": "Numeric",
    "value": "3",
    "start": 155,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 156,
    "end": 157
  },
  {
    "type": "String",
    "value": "'three'",
    "start": 158,
    "end": 165
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 165,
    "end": 166
  },
  {
    "type": "String",
    "value": "'three'",
    "start": 167,
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
    "value": "'three'",
    "start": 176,
    "end": 183
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "value": "strIndex",
    "start": 191,
    "end": 199
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 199,
    "end": 200
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 201,
    "end": 202
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 203,
    "end": 204
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 204,
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
    "value": "string",
    "start": 207,
    "end": 213
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "value": "Compass",
    "start": 216,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 224,
    "end": 225
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "String",
    "value": "'N'",
    "start": 230,
    "end": 233
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 233,
    "end": 234
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 235,
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
    "value": "North",
    "start": 243,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 248,
    "end": 249
  },
  {
    "type": "String",
    "value": "'E'",
    "start": 250,
    "end": 253
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 253,
    "end": 254
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 255,
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
    "value": "East",
    "start": 263,
    "end": 267
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 268,
    "end": 269
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 269,
    "end": 270
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 271,
    "end": 278
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 279,
    "end": 282
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 283,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 308,
    "end": 309
  },
  {
    "type": "Identifier",
    "value": "n",
    "start": 309,
    "end": 310
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 310,
    "end": 311
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 312,
    "end": 318
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 318,
    "end": 319
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 319,
    "end": 320
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 321,
    "end": 322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 322,
    "end": 323
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 332,
    "end": 333
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 333,
    "end": 334
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 334,
    "end": 335
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 336,
    "end": 342
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 342,
    "end": 343
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 343,
    "end": 344
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 345,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 346,
    "end": 347
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 352,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 353,
    "end": 354
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 356,
    "end": 364
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 365,
    "end": 372
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 372,
    "end": 373
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 373,
    "end": 374
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 375,
    "end": 376
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 377,
    "end": 378
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 380,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 384,
    "end": 387
  },
  {
    "type": "Punctuator",
    "value": "=",
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
    "type": "Numeric",
    "value": "10",
    "start": 396,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 398,
    "end": 399
  },
  {
    "type": "String",
    "value": "'ten'",
    "start": 400,
    "end": 405
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 405,
    "end": 406
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 411,
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
    "value": "'hello'",
    "start": 414,
    "end": 421
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 421,
    "end": 422
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 427,
    "end": 428
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 428,
    "end": 429
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 430,
    "end": 432
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 432,
    "end": 433
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 438,
    "end": 439
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 439,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 441,
    "end": 442
  },
  {
    "type": "Identifier",
    "value": "n",
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
    "type": "String",
    "value": "'world'",
    "start": 446,
    "end": 453
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 453,
    "end": 454
  },
  {
    "type": "Identifier",
    "value": "m",
    "start": 455,
    "end": 456
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 456,
    "end": 457
  },
  {
    "type": "Numeric",
    "value": "15",
    "start": 458,
    "end": 460
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 460,
    "end": 461
  },
  {
    "type": "Identifier",
    "value": "o",
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
    "type": "Punctuator",
    "value": "(",
    "start": 465,
    "end": 466
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 466,
    "end": 467
  },
  {
    "type": "Punctuator",
    "value": "=>",
    "start": 468,
    "end": 470
  },
  {
    "type": "Boolean",
    "value": "false",
    "start": 471,
    "end": 476
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 477,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 478,
    "end": 479
  },
  {
    "type": "String",
    "value": "'literal property'",
    "start": 484,
    "end": 502
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 502,
    "end": 503
  },
  {
    "type": "Numeric",
    "value": "100",
    "start": 504,
    "end": 507
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 508,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 509,
    "end": 510
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 511,
    "end": 514
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 515,
    "end": 521
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 521,
    "end": 522
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 523,
    "end": 526
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 527,
    "end": 528
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 529,
    "end": 530
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 530,
    "end": 531
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 531,
    "end": 532
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 533,
    "end": 540
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 541,
    "end": 544
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 545,
    "end": 559
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 559,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 561,
    "end": 567
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 568,
    "end": 569
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 570,
    "end": 576
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 576,
    "end": 577
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 578,
    "end": 585
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 586,
    "end": 589
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 590,
    "end": 600
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 600,
    "end": 601
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 602,
    "end": 603
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 604,
    "end": 608
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 608,
    "end": 609
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 610,
    "end": 616
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 617,
    "end": 618
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 618,
    "end": 619
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 652,
    "end": 655
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 655,
    "end": 656
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 656,
    "end": 657
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 658,
    "end": 659
  },
  {
    "type": "Numeric",
    "value": "4",
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
    "value": "anyVar",
    "start": 706,
    "end": 712
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 712,
    "end": 713
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 713,
    "end": 714
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 715,
    "end": 716
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 717,
    "end": 723
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 723,
    "end": 724
  },
  {
    "type": "Identifier",
    "value": "y",
    "start": 724,
    "end": 725
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 726,
    "end": 727
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 728,
    "end": 731
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 731,
    "end": 732
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 732,
    "end": 733
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 734,
    "end": 735
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 736,
    "end": 742
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 742,
    "end": 743
  },
  {
    "type": "Identifier",
    "value": "z",
    "start": 743,
    "end": 744
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 744,
    "end": 745
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 797,
    "end": 800
  },
  {
    "type": "Identifier",
    "value": "aa",
    "start": 801,
    "end": 803
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 804,
    "end": 805
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 806,
    "end": 809
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 809,
    "end": 810
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 810,
    "end": 811
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 811,
    "end": 812
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 889,
    "end": 892
  },
  {
    "type": "Identifier",
    "value": "bb",
    "start": 893,
    "end": 895
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 896,
    "end": 897
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 898,
    "end": 901
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 901,
    "end": 902
  },
  {
    "type": "Identifier",
    "value": "hasOwnProperty",
    "start": 902,
    "end": 916
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 916,
    "end": 917
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1001,
    "end": 1004
  },
  {
    "type": "Identifier",
    "value": "cc",
    "start": 1005,
    "end": 1007
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1008,
    "end": 1009
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1010,
    "end": 1013
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1013,
    "end": 1014
  },
  {
    "type": "Identifier",
    "value": "qqq",
    "start": 1014,
    "end": 1017
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1017,
    "end": 1018
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1135,
    "end": 1138
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 1139,
    "end": 1141
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1142,
    "end": 1143
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1144,
    "end": 1147
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1147,
    "end": 1148
  },
  {
    "type": "String",
    "value": "'literal property'",
    "start": 1148,
    "end": 1166
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1166,
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
    "value": "var",
    "start": 1169,
    "end": 1172
  },
  {
    "type": "Identifier",
    "value": "dd",
    "start": 1173,
    "end": 1175
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1175,
    "end": 1176
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 1177,
    "end": 1183
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1183,
    "end": 1184
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1295,
    "end": 1298
  },
  {
    "type": "Identifier",
    "value": "ee",
    "start": 1299,
    "end": 1301
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1302,
    "end": 1303
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1304,
    "end": 1307
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1307,
    "end": 1308
  },
  {
    "type": "String",
    "value": "'wa wa wa wa wa'",
    "start": 1308,
    "end": 1324
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1324,
    "end": 1325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1325,
    "end": 1326
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1327,
    "end": 1330
  },
  {
    "type": "Identifier",
    "value": "ee",
    "start": 1331,
    "end": 1333
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1333,
    "end": 1334
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1335,
    "end": 1338
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1338,
    "end": 1339
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1455,
    "end": 1458
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 1459,
    "end": 1461
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1462,
    "end": 1463
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1464,
    "end": 1467
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1467,
    "end": 1468
  },
  {
    "type": "String",
    "value": "'10'",
    "start": 1468,
    "end": 1472
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1472,
    "end": 1473
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1473,
    "end": 1474
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1475,
    "end": 1478
  },
  {
    "type": "Identifier",
    "value": "ff",
    "start": 1479,
    "end": 1481
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1481,
    "end": 1482
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1483,
    "end": 1489
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1489,
    "end": 1490
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1609,
    "end": 1612
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 1613,
    "end": 1615
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1616,
    "end": 1617
  },
  {
    "type": "Identifier",
    "value": "obj",
    "start": 1618,
    "end": 1621
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1621,
    "end": 1622
  },
  {
    "type": "String",
    "value": "'1'",
    "start": 1622,
    "end": 1625
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1625,
    "end": 1626
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1626,
    "end": 1627
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1628,
    "end": 1631
  },
  {
    "type": "Identifier",
    "value": "gg",
    "start": 1632,
    "end": 1634
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1634,
    "end": 1635
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 1636,
    "end": 1639
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1639,
    "end": 1640
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1735,
    "end": 1738
  },
  {
    "type": "Identifier",
    "value": "hh",
    "start": 1739,
    "end": 1741
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1742,
    "end": 1743
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 1744,
    "end": 1752
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1752,
    "end": 1753
  },
  {
    "type": "Numeric",
    "value": "3.0",
    "start": 1753,
    "end": 1756
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1756,
    "end": 1757
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1757,
    "end": 1758
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1759,
    "end": 1762
  },
  {
    "type": "Identifier",
    "value": "hh",
    "start": 1763,
    "end": 1765
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1765,
    "end": 1766
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1767,
    "end": 1773
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1773,
    "end": 1774
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1866,
    "end": 1869
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1870,
    "end": 1872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 1873,
    "end": 1874
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 1875,
    "end": 1883
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 1883,
    "end": 1884
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 1884,
    "end": 1891
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 1891,
    "end": 1892
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 1892,
    "end": 1897
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 1897,
    "end": 1898
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1898,
    "end": 1899
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 1900,
    "end": 1903
  },
  {
    "type": "Identifier",
    "value": "ii",
    "start": 1904,
    "end": 1906
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 1906,
    "end": 1907
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 1908,
    "end": 1914
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 1914,
    "end": 1915
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2016,
    "end": 2019
  },
  {
    "type": "Identifier",
    "value": "jj",
    "start": 2020,
    "end": 2022
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2023,
    "end": 2024
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 2025,
    "end": 2033
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2033,
    "end": 2034
  },
  {
    "type": "Identifier",
    "value": "anyVar",
    "start": 2034,
    "end": 2040
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2040,
    "end": 2041
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2041,
    "end": 2042
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2043,
    "end": 2046
  },
  {
    "type": "Identifier",
    "value": "jj",
    "start": 2047,
    "end": 2049
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2049,
    "end": 2050
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 2051,
    "end": 2057
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2057,
    "end": 2058
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2152,
    "end": 2155
  },
  {
    "type": "Identifier",
    "value": "kk",
    "start": 2156,
    "end": 2158
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2159,
    "end": 2160
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 2161,
    "end": 2169
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2169,
    "end": 2170
  },
  {
    "type": "String",
    "value": "'what'",
    "start": 2170,
    "end": 2176
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2176,
    "end": 2177
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2177,
    "end": 2178
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2179,
    "end": 2182
  },
  {
    "type": "Identifier",
    "value": "kk",
    "start": 2183,
    "end": 2185
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2185,
    "end": 2186
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 2187,
    "end": 2190
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2190,
    "end": 2191
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2322,
    "end": 2325
  },
  {
    "type": "Identifier",
    "value": "ll",
    "start": 2326,
    "end": 2328
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2329,
    "end": 2330
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 2331,
    "end": 2339
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2339,
    "end": 2340
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 2340,
    "end": 2350
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2350,
    "end": 2351
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2351,
    "end": 2352
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2485,
    "end": 2488
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 2489,
    "end": 2491
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2492,
    "end": 2493
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2494,
    "end": 2502
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2502,
    "end": 2503
  },
  {
    "type": "String",
    "value": "'N'",
    "start": 2503,
    "end": 2506
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2506,
    "end": 2507
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2507,
    "end": 2508
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2509,
    "end": 2512
  },
  {
    "type": "Identifier",
    "value": "mm",
    "start": 2513,
    "end": 2515
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2515,
    "end": 2516
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2517,
    "end": 2524
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2524,
    "end": 2525
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2526,
    "end": 2529
  },
  {
    "type": "Identifier",
    "value": "mm2",
    "start": 2530,
    "end": 2533
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2534,
    "end": 2535
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2536,
    "end": 2544
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2544,
    "end": 2545
  },
  {
    "type": "String",
    "value": "'zzz'",
    "start": 2545,
    "end": 2550
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2550,
    "end": 2551
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2551,
    "end": 2552
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2553,
    "end": 2556
  },
  {
    "type": "Identifier",
    "value": "mm2",
    "start": 2557,
    "end": 2560
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2560,
    "end": 2561
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2562,
    "end": 2569
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2569,
    "end": 2570
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2695,
    "end": 2698
  },
  {
    "type": "Identifier",
    "value": "nn",
    "start": 2699,
    "end": 2701
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2702,
    "end": 2703
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2704,
    "end": 2712
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2712,
    "end": 2713
  },
  {
    "type": "Numeric",
    "value": "10",
    "start": 2713,
    "end": 2715
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2715,
    "end": 2716
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2716,
    "end": 2717
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2718,
    "end": 2721
  },
  {
    "type": "Identifier",
    "value": "nn",
    "start": 2722,
    "end": 2724
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2724,
    "end": 2725
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2726,
    "end": 2733
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2733,
    "end": 2734
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2856,
    "end": 2859
  },
  {
    "type": "Identifier",
    "value": "oo",
    "start": 2860,
    "end": 2862
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 2863,
    "end": 2864
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 2865,
    "end": 2873
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 2873,
    "end": 2874
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2874,
    "end": 2881
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 2881,
    "end": 2882
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 2882,
    "end": 2886
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 2886,
    "end": 2887
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2887,
    "end": 2888
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 2889,
    "end": 2892
  },
  {
    "type": "Identifier",
    "value": "oo",
    "start": 2893,
    "end": 2895
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 2895,
    "end": 2896
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 2897,
    "end": 2904
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 2904,
    "end": 2905
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3036,
    "end": 3039
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 3040,
    "end": 3042
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3043,
    "end": 3044
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 3045,
    "end": 3053
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3053,
    "end": 3054
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3054,
    "end": 3055
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3055,
    "end": 3058
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3058,
    "end": 3059
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3059,
    "end": 3063
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3063,
    "end": 3064
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3064,
    "end": 3065
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3066,
    "end": 3069
  },
  {
    "type": "Identifier",
    "value": "pp",
    "start": 3070,
    "end": 3072
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3072,
    "end": 3073
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 3074,
    "end": 3081
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3081,
    "end": 3082
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3173,
    "end": 3176
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 3177,
    "end": 3179
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3180,
    "end": 3181
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3182,
    "end": 3189
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3189,
    "end": 3190
  },
  {
    "type": "Numeric",
    "value": "123",
    "start": 3190,
    "end": 3193
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3193,
    "end": 3194
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3194,
    "end": 3195
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3196,
    "end": 3199
  },
  {
    "type": "Identifier",
    "value": "qq",
    "start": 3200,
    "end": 3202
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3202,
    "end": 3203
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3204,
    "end": 3207
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3207,
    "end": 3208
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3298,
    "end": 3301
  },
  {
    "type": "Identifier",
    "value": "rr",
    "start": 3302,
    "end": 3304
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3305,
    "end": 3306
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3307,
    "end": 3314
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3314,
    "end": 3315
  },
  {
    "type": "String",
    "value": "'zzzz'",
    "start": 3315,
    "end": 3321
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3321,
    "end": 3322
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3322,
    "end": 3323
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3324,
    "end": 3327
  },
  {
    "type": "Identifier",
    "value": "rr",
    "start": 3328,
    "end": 3330
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3330,
    "end": 3331
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3332,
    "end": 3335
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3335,
    "end": 3336
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3424,
    "end": 3427
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 3428,
    "end": 3430
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3431,
    "end": 3432
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3433,
    "end": 3440
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3440,
    "end": 3441
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 3441,
    "end": 3448
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 3448,
    "end": 3449
  },
  {
    "type": "Identifier",
    "value": "South",
    "start": 3449,
    "end": 3454
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3454,
    "end": 3455
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3455,
    "end": 3456
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3457,
    "end": 3460
  },
  {
    "type": "Identifier",
    "value": "ss",
    "start": 3461,
    "end": 3463
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3463,
    "end": 3464
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3465,
    "end": 3468
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3468,
    "end": 3469
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3566,
    "end": 3569
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 3570,
    "end": 3572
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3573,
    "end": 3574
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3575,
    "end": 3582
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3582,
    "end": 3583
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 3583,
    "end": 3584
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3584,
    "end": 3587
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 3587,
    "end": 3588
  },
  {
    "type": "Null",
    "value": "null",
    "start": 3588,
    "end": 3592
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3592,
    "end": 3593
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3593,
    "end": 3594
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3595,
    "end": 3598
  },
  {
    "type": "Identifier",
    "value": "tt",
    "start": 3599,
    "end": 3601
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3601,
    "end": 3602
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3603,
    "end": 3606
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3606,
    "end": 3607
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3706,
    "end": 3709
  },
  {
    "type": "Identifier",
    "value": "uu",
    "start": 3710,
    "end": 3712
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3713,
    "end": 3714
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3715,
    "end": 3722
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3722,
    "end": 3723
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 3723,
    "end": 3733
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3733,
    "end": 3734
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3734,
    "end": 3735
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3866,
    "end": 3869
  },
  {
    "type": "Identifier",
    "value": "vv",
    "start": 3870,
    "end": 3872
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 3873,
    "end": 3874
  },
  {
    "type": "Identifier",
    "value": "noIndex",
    "start": 3875,
    "end": 3882
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 3882,
    "end": 3883
  },
  {
    "type": "Numeric",
    "value": "32",
    "start": 3883,
    "end": 3885
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 3885,
    "end": 3886
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3886,
    "end": 3887
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 3888,
    "end": 3891
  },
  {
    "type": "Identifier",
    "value": "vv",
    "start": 3892,
    "end": 3894
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 3894,
    "end": 3895
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 3896,
    "end": 3899
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 3899,
    "end": 3900
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4019,
    "end": 4022
  },
  {
    "type": "Identifier",
    "value": "ww",
    "start": 4023,
    "end": 4025
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4026,
    "end": 4027
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4028,
    "end": 4037
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4037,
    "end": 4038
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 4038,
    "end": 4045
  },
  {
    "type": "Punctuator",
    "value": ".",
    "start": 4045,
    "end": 4046
  },
  {
    "type": "Identifier",
    "value": "East",
    "start": 4046,
    "end": 4050
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4050,
    "end": 4051
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4051,
    "end": 4052
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4053,
    "end": 4056
  },
  {
    "type": "Identifier",
    "value": "ww",
    "start": 4057,
    "end": 4059
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4059,
    "end": 4060
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4061,
    "end": 4062
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4062,
    "end": 4063
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4191,
    "end": 4194
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 4195,
    "end": 4197
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4198,
    "end": 4199
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4200,
    "end": 4209
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4209,
    "end": 4210
  },
  {
    "type": "Punctuator",
    "value": "<",
    "start": 4210,
    "end": 4211
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4211,
    "end": 4214
  },
  {
    "type": "Punctuator",
    "value": ">",
    "start": 4214,
    "end": 4215
  },
  {
    "type": "Null",
    "value": "null",
    "start": 4215,
    "end": 4219
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4219,
    "end": 4220
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4220,
    "end": 4221
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4222,
    "end": 4225
  },
  {
    "type": "Identifier",
    "value": "xx",
    "start": 4226,
    "end": 4228
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4228,
    "end": 4229
  },
  {
    "type": "Identifier",
    "value": "B",
    "start": 4230,
    "end": 4231
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4231,
    "end": 4232
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4353,
    "end": 4356
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 4357,
    "end": 4359
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4360,
    "end": 4361
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4362,
    "end": 4371
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4371,
    "end": 4372
  },
  {
    "type": "String",
    "value": "'foo'",
    "start": 4372,
    "end": 4377
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4377,
    "end": 4378
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4378,
    "end": 4379
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4380,
    "end": 4383
  },
  {
    "type": "Identifier",
    "value": "yy",
    "start": 4384,
    "end": 4386
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4386,
    "end": 4387
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4388,
    "end": 4389
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4389,
    "end": 4390
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4519,
    "end": 4522
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 4523,
    "end": 4525
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4526,
    "end": 4527
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4528,
    "end": 4537
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4537,
    "end": 4538
  },
  {
    "type": "String",
    "value": "'1.0'",
    "start": 4538,
    "end": 4543
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4543,
    "end": 4544
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4544,
    "end": 4545
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4546,
    "end": 4549
  },
  {
    "type": "Identifier",
    "value": "zz",
    "start": 4550,
    "end": 4552
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4552,
    "end": 4553
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4554,
    "end": 4555
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4555,
    "end": 4556
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4714,
    "end": 4717
  },
  {
    "type": "Identifier",
    "value": "zzzz",
    "start": 4718,
    "end": 4722
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4723,
    "end": 4724
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4725,
    "end": 4734
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4734,
    "end": 4735
  },
  {
    "type": "Identifier",
    "value": "someObject",
    "start": 4735,
    "end": 4745
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4745,
    "end": 4746
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4746,
    "end": 4747
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4758,
    "end": 4761
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 4762,
    "end": 4764
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4765,
    "end": 4766
  },
  {
    "type": "Identifier",
    "value": "numIndex",
    "start": 4767,
    "end": 4775
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4775,
    "end": 4776
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4776,
    "end": 4790
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4790,
    "end": 4791
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4791,
    "end": 4792
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4793,
    "end": 4796
  },
  {
    "type": "Identifier",
    "value": "x1",
    "start": 4797,
    "end": 4799
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4799,
    "end": 4800
  },
  {
    "type": "Identifier",
    "value": "any",
    "start": 4801,
    "end": 4804
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4804,
    "end": 4805
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4807,
    "end": 4810
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 4811,
    "end": 4813
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4814,
    "end": 4815
  },
  {
    "type": "Identifier",
    "value": "strIndex",
    "start": 4816,
    "end": 4824
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4824,
    "end": 4825
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4825,
    "end": 4839
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4839,
    "end": 4840
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4840,
    "end": 4841
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4842,
    "end": 4845
  },
  {
    "type": "Identifier",
    "value": "x2",
    "start": 4846,
    "end": 4848
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4848,
    "end": 4849
  },
  {
    "type": "Identifier",
    "value": "Compass",
    "start": 4850,
    "end": 4857
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4857,
    "end": 4858
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4860,
    "end": 4863
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 4864,
    "end": 4866
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 4867,
    "end": 4868
  },
  {
    "type": "Identifier",
    "value": "bothIndex",
    "start": 4869,
    "end": 4878
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 4878,
    "end": 4879
  },
  {
    "type": "Identifier",
    "value": "stringOrNumber",
    "start": 4879,
    "end": 4893
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 4893,
    "end": 4894
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4894,
    "end": 4895
  },
  {
    "type": "Keyword",
    "value": "var",
    "start": 4896,
    "end": 4899
  },
  {
    "type": "Identifier",
    "value": "x3",
    "start": 4900,
    "end": 4902
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 4902,
    "end": 4903
  },
  {
    "type": "Identifier",
    "value": "A",
    "start": 4904,
    "end": 4905
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 4905,
    "end": 4906
  }
]
```
