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
        "name": "Message",
        "optional": false,
        "typeAnnotation": null,
        "start": 6,
        "end": 13
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
              "start": 16,
              "end": 21
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 23,
                "end": 29
              },
              "start": 21,
              "end": 29
            },
            "value": {
              "type": "Literal",
              "value": "",
              "raw": "\"\"",
              "start": 32,
              "end": 34
            },
            "computed": false,
            "static": false,
            "declare": false,
            "override": false,
            "optional": false,
            "definite": false,
            "readonly": false,
            "accessibility": null,
            "start": 16,
            "end": 35
          }
        ],
        "start": 14,
        "end": 37
      },
      "abstract": false,
      "declare": false,
      "start": 0,
      "end": 37
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "takeMessageOrArray",
        "optional": false,
        "typeAnnotation": null,
        "start": 48,
        "end": 66
      },
      "generator": false,
      "async": false,
      "declare": false,
      "typeParameters": null,
      "params": [
        {
          "type": "Identifier",
          "decorators": [],
          "name": "message",
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
                    "name": "Message",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 76,
                    "end": 83
                  },
                  "typeArguments": null,
                  "start": 76,
                  "end": 83
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSTypeReference",
                    "typeName": {
                      "type": "Identifier",
                      "decorators": [],
                      "name": "Message",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 86,
                      "end": 93
                    },
                    "typeArguments": null,
                    "start": 86,
                    "end": 93
                  },
                  "start": 86,
                  "end": 95
                }
              ],
              "start": 76,
              "end": 95
            },
            "start": 74,
            "end": 95
          },
          "start": 67,
          "end": 95
        }
      ],
      "returnType": null,
      "body": {
        "type": "BlockStatement",
        "body": [
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "message",
              "optional": false,
              "typeAnnotation": null,
              "start": 106,
              "end": 113
            },
            "start": 99,
            "end": 114
          }
        ],
        "start": 97,
        "end": 116
      },
      "expression": false,
      "start": 39,
      "end": 116
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
            "start": 123,
            "end": 130
          },
          "init": {
            "type": "CallExpression",
            "callee": {
              "type": "Identifier",
              "decorators": [],
              "name": "takeMessageOrArray",
              "optional": false,
              "typeAnnotation": null,
              "start": 133,
              "end": 151
            },
            "typeArguments": null,
            "arguments": [
              {
                "type": "TSNonNullExpression",
                "expression": {
                  "type": "Literal",
                  "value": null,
                  "raw": "null",
                  "start": 152,
                  "end": 156
                },
                "start": 152,
                "end": 157
              }
            ],
            "optional": false,
            "start": 133,
            "end": 158
          },
          "definite": false,
          "start": 123,
          "end": 158
        }
      ],
      "declare": false,
      "start": 117,
      "end": 159
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "checkType",
        "optional": false,
        "typeAnnotation": null,
        "start": 170,
        "end": 179
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 183,
                  "end": 189
                },
                {
                  "type": "TSNumberKeyword",
                  "start": 192,
                  "end": 198
                },
                {
                  "type": "TSBooleanKeyword",
                  "start": 201,
                  "end": 208
                }
              ],
              "start": 183,
              "end": 208
            },
            "start": 181,
            "end": 208
          },
          "start": 180,
          "end": 208
        }
      ],
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
                  "name": "t",
                  "optional": false,
                  "typeAnnotation": null,
                  "start": 222,
                  "end": 223
                },
                "init": {
                  "type": "UnaryExpression",
                  "operator": "typeof",
                  "argument": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "x",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 233,
                    "end": 234
                  },
                  "prefix": true,
                  "start": 226,
                  "end": 234
                },
                "definite": false,
                "start": 222,
                "end": 234
              }
            ],
            "declare": false,
            "start": 216,
            "end": 235
          },
          {
            "type": "ReturnStatement",
            "argument": {
              "type": "Identifier",
              "decorators": [],
              "name": "t",
              "optional": false,
              "typeAnnotation": null,
              "start": 247,
              "end": 248
            },
            "start": 240,
            "end": 249
          }
        ],
        "start": 210,
        "end": 251
      },
      "expression": false,
      "start": 161,
      "end": 251
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "mixedUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 262,
        "end": 272
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSStringKeyword",
                  "start": 276,
                  "end": 282
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSNumberKeyword",
                    "start": 285,
                    "end": 291
                  },
                  "start": 285,
                  "end": 293
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
                        "start": 298,
                        "end": 299
                      },
                      "typeAnnotation": {
                        "type": "TSTypeAnnotation",
                        "typeAnnotation": {
                          "type": "TSNumberKeyword",
                          "start": 301,
                          "end": 307
                        },
                        "start": 299,
                        "end": 307
                      },
                      "accessibility": null,
                      "static": false,
                      "start": 298,
                      "end": 307
                    }
                  ],
                  "start": 296,
                  "end": 309
                }
              ],
              "start": 276,
              "end": 309
            },
            "start": 274,
            "end": 309
          },
          "start": 273,
          "end": 309
        }
      ],
      "returnType": null,
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
              "start": 324,
              "end": 325
            },
            "start": 317,
            "end": 326
          }
        ],
        "start": 311,
        "end": 328
      },
      "expression": false,
      "start": 253,
      "end": 328
    },
    {
      "type": "TSEnumDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Color",
        "optional": false,
        "typeAnnotation": null,
        "start": 335,
        "end": 340
      },
      "body": {
        "type": "TSEnumBody",
        "members": [
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Red",
              "optional": false,
              "typeAnnotation": null,
              "start": 343,
              "end": 346
            },
            "initializer": null,
            "computed": false,
            "start": 343,
            "end": 346
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Green",
              "optional": false,
              "typeAnnotation": null,
              "start": 348,
              "end": 353
            },
            "initializer": null,
            "computed": false,
            "start": 348,
            "end": 353
          },
          {
            "type": "TSEnumMember",
            "id": {
              "type": "Identifier",
              "decorators": [],
              "name": "Blue",
              "optional": false,
              "typeAnnotation": null,
              "start": 355,
              "end": 359
            },
            "initializer": null,
            "computed": false,
            "start": 355,
            "end": 359
          }
        ],
        "start": 341,
        "end": 361
      },
      "const": false,
      "declare": false,
      "start": 330,
      "end": 361
    },
    {
      "type": "FunctionDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "enumUnion",
        "optional": false,
        "typeAnnotation": null,
        "start": 371,
        "end": 380
      },
      "generator": false,
      "async": false,
      "declare": false,
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
              "type": "TSUnionType",
              "types": [
                {
                  "type": "TSTypeReference",
                  "typeName": {
                    "type": "Identifier",
                    "decorators": [],
                    "name": "Color",
                    "optional": false,
                    "typeAnnotation": null,
                    "start": 384,
                    "end": 389
                  },
                  "typeArguments": null,
                  "start": 384,
                  "end": 389
                },
                {
                  "type": "TSStringKeyword",
                  "start": 392,
                  "end": 398
                },
                {
                  "type": "TSArrayType",
                  "elementType": {
                    "type": "TSStringKeyword",
                    "start": 401,
                    "end": 407
                  },
                  "start": 401,
                  "end": 409
                }
              ],
              "start": 384,
              "end": 409
            },
            "start": 382,
            "end": 409
          },
          "start": 381,
          "end": 409
        }
      ],
      "returnType": null,
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
              "start": 424,
              "end": 425
            },
            "start": 417,
            "end": 426
          }
        ],
        "start": 411,
        "end": 428
      },
      "expression": false,
      "start": 362,
      "end": 428
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Named",
        "optional": false,
        "typeAnnotation": null,
        "start": 435,
        "end": 440
      },
      "typeParameters": null,
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
              "start": 445,
              "end": 449
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSStringKeyword",
                "start": 451,
                "end": 457
              },
              "start": 449,
              "end": 457
            },
            "accessibility": null,
            "static": false,
            "start": 445,
            "end": 457
          }
        ],
        "start": 443,
        "end": 459
      },
      "declare": false,
      "start": 430,
      "end": 460
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Aged",
        "optional": false,
        "typeAnnotation": null,
        "start": 466,
        "end": 470
      },
      "typeParameters": null,
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
              "name": "age",
              "optional": false,
              "typeAnnotation": null,
              "start": 475,
              "end": 478
            },
            "typeAnnotation": {
              "type": "TSTypeAnnotation",
              "typeAnnotation": {
                "type": "TSNumberKeyword",
                "start": 480,
                "end": 486
              },
              "start": 478,
              "end": 486
            },
            "accessibility": null,
            "static": false,
            "start": 475,
            "end": 486
          }
        ],
        "start": 473,
        "end": 488
      },
      "declare": false,
      "start": 461,
      "end": 489
    },
    {
      "type": "TSTypeAliasDeclaration",
      "id": {
        "type": "Identifier",
        "decorators": [],
        "name": "Person",
        "optional": false,
        "typeAnnotation": null,
        "start": 495,
        "end": 501
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
              "name": "Named",
              "optional": false,
              "typeAnnotation": null,
              "start": 504,
              "end": 509
            },
            "typeArguments": null,
            "start": 504,
            "end": 509
          },
          {
            "type": "TSTypeReference",
            "typeName": {
              "type": "Identifier",
              "decorators": [],
              "name": "Aged",
              "optional": false,
              "typeAnnotation": null,
              "start": 512,
              "end": 516
            },
            "typeArguments": null,
            "start": 512,
            "end": 516
          }
        ],
        "start": 504,
        "end": 516
      },
      "declare": false,
      "start": 490,
      "end": 517
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
            "name": "person",
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
                      "name": "Person",
                      "optional": false,
                      "typeAnnotation": null,
                      "start": 540,
                      "end": 546
                    },
                    "typeArguments": null,
                    "start": 540,
                    "end": 546
                  },
                  {
                    "type": "TSNullKeyword",
                    "start": 549,
                    "end": 553
                  }
                ],
                "start": 540,
                "end": 553
              },
              "start": 538,
              "end": 553
            },
            "start": 532,
            "end": 553
          },
          "init": null,
          "definite": false,
          "start": 532,
          "end": 553
        }
      ],
      "declare": true,
      "start": 518,
      "end": 554
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
            "name": "p",
            "optional": false,
            "typeAnnotation": null,
            "start": 561,
            "end": 562
          },
          "init": {
            "type": "Identifier",
            "decorators": [],
            "name": "person",
            "optional": false,
            "typeAnnotation": null,
            "start": 565,
            "end": 571
          },
          "definite": false,
          "start": 561,
          "end": 571
        }
      ],
      "declare": false,
      "start": 555,
      "end": 572
    }
  ],
  "sourceType": "script",
  "hashbang": null,
  "start": 0,
  "end": 572
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
    "value": "Message",
    "start": 6,
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
    "value": "value",
    "start": 16,
    "end": 21
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 21,
    "end": 22
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 23,
    "end": 29
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 30,
    "end": 31
  },
  {
    "type": "String",
    "value": "\"\"",
    "start": 32,
    "end": 34
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 34,
    "end": 35
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 36,
    "end": 37
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 39,
    "end": 47
  },
  {
    "type": "Identifier",
    "value": "takeMessageOrArray",
    "start": 48,
    "end": 66
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 66,
    "end": 67
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 67,
    "end": 74
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 74,
    "end": 75
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 76,
    "end": 83
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 84,
    "end": 85
  },
  {
    "type": "Identifier",
    "value": "Message",
    "start": 86,
    "end": 93
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 93,
    "end": 94
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 94,
    "end": 95
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 95,
    "end": 96
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 97,
    "end": 98
  },
  {
    "type": "Keyword",
    "value": "return",
    "start": 99,
    "end": 105
  },
  {
    "type": "Identifier",
    "value": "message",
    "start": 106,
    "end": 113
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 113,
    "end": 114
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 115,
    "end": 116
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 117,
    "end": 122
  },
  {
    "type": "Identifier",
    "value": "result1",
    "start": 123,
    "end": 130
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 131,
    "end": 132
  },
  {
    "type": "Identifier",
    "value": "takeMessageOrArray",
    "start": 133,
    "end": 151
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 151,
    "end": 152
  },
  {
    "type": "Null",
    "value": "null",
    "start": 152,
    "end": 156
  },
  {
    "type": "Punctuator",
    "value": "!",
    "start": 156,
    "end": 157
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 157,
    "end": 158
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 158,
    "end": 159
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 161,
    "end": 169
  },
  {
    "type": "Identifier",
    "value": "checkType",
    "start": 170,
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
    "value": "x",
    "start": 180,
    "end": 181
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 181,
    "end": 182
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 183,
    "end": 189
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 190,
    "end": 191
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 192,
    "end": 198
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 199,
    "end": 200
  },
  {
    "type": "Identifier",
    "value": "boolean",
    "start": 201,
    "end": 208
  },
  {
    "type": "Punctuator",
    "value": ")",
    "start": 208,
    "end": 209
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 210,
    "end": 211
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 216,
    "end": 221
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 222,
    "end": 223
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 224,
    "end": 225
  },
  {
    "type": "Keyword",
    "value": "typeof",
    "start": 226,
    "end": 232
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "return",
    "start": 240,
    "end": 246
  },
  {
    "type": "Identifier",
    "value": "t",
    "start": 247,
    "end": 248
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 248,
    "end": 249
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 250,
    "end": 251
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 253,
    "end": 261
  },
  {
    "type": "Identifier",
    "value": "mixedUnion",
    "start": 262,
    "end": 272
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 272,
    "end": 273
  },
  {
    "type": "Identifier",
    "value": "x",
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
    "value": "string",
    "start": 276,
    "end": 282
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 283,
    "end": 284
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 285,
    "end": 291
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 291,
    "end": 292
  },
  {
    "type": "Punctuator",
    "value": "]",
    "start": 292,
    "end": 293
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 294,
    "end": 295
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 296,
    "end": 297
  },
  {
    "type": "Identifier",
    "value": "a",
    "start": 298,
    "end": 299
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 299,
    "end": 300
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 301,
    "end": 307
  },
  {
    "type": "Punctuator",
    "value": "}",
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
    "start": 317,
    "end": 323
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 324,
    "end": 325
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 325,
    "end": 326
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 327,
    "end": 328
  },
  {
    "type": "Keyword",
    "value": "enum",
    "start": 330,
    "end": 334
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 335,
    "end": 340
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 341,
    "end": 342
  },
  {
    "type": "Identifier",
    "value": "Red",
    "start": 343,
    "end": 346
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 346,
    "end": 347
  },
  {
    "type": "Identifier",
    "value": "Green",
    "start": 348,
    "end": 353
  },
  {
    "type": "Punctuator",
    "value": ",",
    "start": 353,
    "end": 354
  },
  {
    "type": "Identifier",
    "value": "Blue",
    "start": 355,
    "end": 359
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 360,
    "end": 361
  },
  {
    "type": "Keyword",
    "value": "function",
    "start": 362,
    "end": 370
  },
  {
    "type": "Identifier",
    "value": "enumUnion",
    "start": 371,
    "end": 380
  },
  {
    "type": "Punctuator",
    "value": "(",
    "start": 380,
    "end": 381
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 381,
    "end": 382
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 382,
    "end": 383
  },
  {
    "type": "Identifier",
    "value": "Color",
    "start": 384,
    "end": 389
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 390,
    "end": 391
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 392,
    "end": 398
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 399,
    "end": 400
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 401,
    "end": 407
  },
  {
    "type": "Punctuator",
    "value": "[",
    "start": 407,
    "end": 408
  },
  {
    "type": "Punctuator",
    "value": "]",
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
    "start": 417,
    "end": 423
  },
  {
    "type": "Identifier",
    "value": "x",
    "start": 424,
    "end": 425
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 425,
    "end": 426
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 427,
    "end": 428
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 430,
    "end": 434
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 435,
    "end": 440
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 441,
    "end": 442
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 443,
    "end": 444
  },
  {
    "type": "Identifier",
    "value": "name",
    "start": 445,
    "end": 449
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 449,
    "end": 450
  },
  {
    "type": "Identifier",
    "value": "string",
    "start": 451,
    "end": 457
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 458,
    "end": 459
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 459,
    "end": 460
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 461,
    "end": 465
  },
  {
    "type": "Identifier",
    "value": "Aged",
    "start": 466,
    "end": 470
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 471,
    "end": 472
  },
  {
    "type": "Punctuator",
    "value": "{",
    "start": 473,
    "end": 474
  },
  {
    "type": "Identifier",
    "value": "age",
    "start": 475,
    "end": 478
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 478,
    "end": 479
  },
  {
    "type": "Identifier",
    "value": "number",
    "start": 480,
    "end": 486
  },
  {
    "type": "Punctuator",
    "value": "}",
    "start": 487,
    "end": 488
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 488,
    "end": 489
  },
  {
    "type": "Identifier",
    "value": "type",
    "start": 490,
    "end": 494
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 495,
    "end": 501
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 502,
    "end": 503
  },
  {
    "type": "Identifier",
    "value": "Named",
    "start": 504,
    "end": 509
  },
  {
    "type": "Punctuator",
    "value": "&",
    "start": 510,
    "end": 511
  },
  {
    "type": "Identifier",
    "value": "Aged",
    "start": 512,
    "end": 516
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 516,
    "end": 517
  },
  {
    "type": "Identifier",
    "value": "declare",
    "start": 518,
    "end": 525
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 526,
    "end": 531
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 532,
    "end": 538
  },
  {
    "type": "Punctuator",
    "value": ":",
    "start": 538,
    "end": 539
  },
  {
    "type": "Identifier",
    "value": "Person",
    "start": 540,
    "end": 546
  },
  {
    "type": "Punctuator",
    "value": "|",
    "start": 547,
    "end": 548
  },
  {
    "type": "Null",
    "value": "null",
    "start": 549,
    "end": 553
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 553,
    "end": 554
  },
  {
    "type": "Keyword",
    "value": "const",
    "start": 555,
    "end": 560
  },
  {
    "type": "Identifier",
    "value": "p",
    "start": 561,
    "end": 562
  },
  {
    "type": "Punctuator",
    "value": "=",
    "start": 563,
    "end": 564
  },
  {
    "type": "Identifier",
    "value": "person",
    "start": 565,
    "end": 571
  },
  {
    "type": "Punctuator",
    "value": ";",
    "start": 571,
    "end": 572
  }
]
```
